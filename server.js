require('dotenv').config();
const express = require('express');
const { execSync, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { DatabaseSync } = require('node:sqlite');

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

const exercises = {
  nodejs: require('./exercises/nodejs'),
  sql:    require('./exercises/sql'),
  php:    require('./exercises/php'),
};

// ── PHP availability check ────────────────────────────────────────────────────
let PHP_BIN = null;
try {
  PHP_BIN = execSync('which php', { encoding: 'utf8' }).trim();
} catch {}

// ── Progress ──────────────────────────────────────────────────────────────────
const PROGRESS_FILE = path.join(__dirname, 'progress.json');

function loadProgress() {
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
  } catch {
    return { completed: [] };
  }
}

function saveProgress(data) {
  try { fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2)); } catch {}
}

// ── SQL Database ──────────────────────────────────────────────────────────────

function buildSqlDb() {
  const db = new DatabaseSync(':memory:');
  db.exec(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY, name TEXT, age INTEGER, email TEXT, city TEXT
    );
    INSERT INTO users VALUES
      (1,'Alice',30,'alice@example.com','New York'),
      (2,'Bob',25,'bob@example.com','London'),
      (3,'Carol',35,'carol@example.com','Tokyo'),
      (4,'David',28,'david@example.com','New York'),
      (5,'Eve',22,'eve@example.com','Paris'),
      (6,'Frank',45,'frank@example.com','London'),
      (7,'Grace',31,'grace@example.com','Tokyo');

    CREATE TABLE products (
      id INTEGER PRIMARY KEY, name TEXT, price REAL, category TEXT
    );
    INSERT INTO products VALUES
      (1,'Laptop',999.99,'Electronics'),
      (2,'Headphones',79.99,'Electronics'),
      (3,'Coffee Maker',49.99,'Kitchen'),
      (4,'Notebook',9.99,'Stationery'),
      (5,'Pen Set',14.99,'Stationery'),
      (6,'Monitor',299.99,'Electronics'),
      (7,'Blender',39.99,'Kitchen');

    CREATE TABLE orders (
      id INTEGER PRIMARY KEY, user_id INTEGER, product_id INTEGER,
      quantity INTEGER, order_date TEXT
    );
    INSERT INTO orders VALUES
      (1,1,1,1,'2024-01-15'),(2,1,2,2,'2024-01-20'),
      (3,2,3,1,'2024-02-01'),(4,3,4,5,'2024-02-10'),
      (5,4,5,3,'2024-02-15'),(6,2,6,1,'2024-03-01'),
      (7,5,7,2,'2024-03-05'),(8,1,6,1,'2024-03-10');
  `);
  return db;
}

// Rebuild DB fresh for each SQL run so DML exercises are isolated
function runSql(code) {
  const db = buildSqlDb();
  try {
    const trimmed = code.trim().replace(/;+$/, '');
    const upper = trimmed.toUpperCase();

    if (upper.startsWith('INSERT') || upper.startsWith('UPDATE') || upper.startsWith('DELETE')) {
      db.exec(trimmed);
      return { success: true, rows: [], affected: true, db };
    }

    const rows = db.prepare(trimmed).all();
    return { success: true, rows: rows.map(r => ({ ...r })), db };
  } catch (err) {
    return { success: false, rows: [], error: err.message, db };
  }
}

// ── Code Runners ──────────────────────────────────────────────────────────────

function runNode(code, testWrapper) {
  const full = testWrapper ? `${code}\n${testWrapper}` : code;
  const tmp = path.join(os.tmpdir(), `dojo_${Date.now()}_${Math.random().toString(36).slice(2)}.js`);
  try {
    fs.writeFileSync(tmp, full);
    // Use process.execPath so this works on Vercel and anywhere Node is running
    const out = execFileSync(process.execPath, [tmp], {
      timeout: 6000,
      encoding: 'utf8',
      env: { ...process.env, NODE_PATH: path.join(__dirname, 'node_modules') }
    });
    return { success: true, output: out.trimEnd() };
  } catch (e) {
    const msg = (e.stderr || e.stdout || e.message || '').trimEnd();
    return { success: false, output: msg };
  } finally {
    try { fs.unlinkSync(tmp); } catch {}
  }
}

function runPhp(code, testWrapper) {
  if (!PHP_BIN) {
    return {
      success: false,
      output: 'PHP is not available in this environment.\nRun Code Dojo locally to use PHP exercises.'
    };
  }
  const full = `<?php\n${code}\n${testWrapper || ''}`;
  const tmp = path.join(os.tmpdir(), `dojo_${Date.now()}_${Math.random().toString(36).slice(2)}.php`);
  try {
    fs.writeFileSync(tmp, full);
    const out = execFileSync(PHP_BIN, [tmp], { timeout: 6000, encoding: 'utf8' });
    return { success: true, output: out.trimEnd() };
  } catch (e) {
    const msg = (e.stderr || e.stdout || e.message || '').trimEnd();
    return { success: false, output: msg };
  } finally {
    try { fs.unlinkSync(tmp); } catch {}
  }
}

// ── Verification ──────────────────────────────────────────────────────────────

function verify(exercise, userCode) {
  const { language, test } = exercise;

  // ── Node.js / PHP ──
  if (language === 'nodejs' || language === 'php') {
    const result = language === 'nodejs'
      ? runNode(userCode, exercise.testWrapper)
      : runPhp(userCode, exercise.testWrapper);

    if (!result.success) {
      return { passed: false, output: result.output, error: true };
    }

    if (test.type === 'stdout') {
      const passed = result.output.trim() === test.expected.trim();
      return { passed, output: result.output, expected: passed ? null : test.expected };
    }

    if (test.type === 'stdout_contains') {
      const missing = test.expected.filter(s => !result.output.includes(s));
      return {
        passed: missing.length === 0,
        output: result.output,
        message: missing.length ? `Missing: ${missing.join(', ')}` : null
      };
    }
  }

  // ── SQL ──
  if (language === 'sql') {
    const { success, rows, error, db } = runSql(userCode);

    if (!success) {
      return { passed: false, output: error, error: true };
    }

    // DML: run a verify query on the same DB instance
    if (test.type === 'sql_dml') {
      try {
        const check = db.prepare(test.verifyQuery).all().map(r => ({ ...r }));

        // Check by row count
        if (test.expectedCount !== undefined) {
          const count = check[0]?.count ?? check[0]?.['COUNT(*)'] ?? 0;
          const passed = Number(count) === test.expectedCount;
          return {
            passed,
            output: `Query executed. Verification: ${JSON.stringify(check)}`,
            message: passed ? null : `Expected count ${test.expectedCount}, got ${count}`
          };
        }

        // Check by specific row value
        if (test.checkFirstRow) {
          const passed = check.length > 0 && Object.entries(test.checkFirstRow).every(([k, v]) =>
            String(check[0][k] ?? '').toLowerCase() === String(v).toLowerCase()
          );
          return {
            passed,
            output: `Query executed. Verification: ${JSON.stringify(check)}`,
            message: passed ? null : `Expected ${JSON.stringify(test.checkFirstRow)}, got ${JSON.stringify(check[0])}`
          };
        }

        return { passed: true, output: `Query executed. Verification: ${JSON.stringify(check)}` };
      } catch (e) {
        return { passed: false, output: e.message, error: true };
      }
    }

    const output = rows.length > 0 ? JSON.stringify(rows, null, 2) : '(no rows returned)';

    if (test.type === 'sql_rows') {
      if (test.rowCount !== undefined && rows.length !== test.rowCount) {
        return { passed: false, output, message: `Expected ${test.rowCount} rows, got ${rows.length}` };
      }
      if (test.containsValues) {
        for (const check of test.containsValues) {
          const found = rows.some(row =>
            Object.entries(check).every(([k, v]) =>
              String(row[k] ?? '').toLowerCase() === String(v).toLowerCase()
            )
          );
          if (!found) {
            return { passed: false, output, message: `Could not find row matching ${JSON.stringify(check)}` };
          }
        }
      }
      return { passed: true, output };
    }

    if (test.type === 'sql_columns') {
      if (test.rowCount !== undefined && rows.length !== test.rowCount) {
        return { passed: false, output, message: `Expected ${test.rowCount} rows, got ${rows.length}` };
      }
      if (rows.length > 0) {
        const cols = Object.keys(rows[0]).map(c => c.toLowerCase());
        for (const req of (test.requiredColumns || [])) {
          if (!cols.includes(req.toLowerCase())) {
            return { passed: false, output, message: `Missing column: ${req}` };
          }
        }
        for (const forbidden of (test.forbiddenColumns || [])) {
          if (cols.includes(forbidden.toLowerCase())) {
            return { passed: false, output, message: `Remove column: ${forbidden}` };
          }
        }
      }
      return { passed: true, output };
    }

    if (test.type === 'sql_ordered') {
      if (test.rowCount !== undefined && rows.length !== test.rowCount) {
        return { passed: false, output, message: `Expected ${test.rowCount} rows, got ${rows.length}` };
      }
      if (test.firstRow && rows.length > 0) {
        const match = Object.entries(test.firstRow).every(([k, v]) =>
          String(rows[0][k] ?? '').toLowerCase() === String(v).toLowerCase()
        );
        if (!match) {
          return {
            passed: false, output,
            message: `First row should be ${JSON.stringify(test.firstRow)}, got ${JSON.stringify(rows[0])}`
          };
        }
      }
      return { passed: true, output };
    }
  }

  return { passed: false, output: 'Unknown test type', error: true };
}

// ── API Routes ────────────────────────────────────────────────────────────────

app.get('/api/config', (_req, res) => {
  res.json({
    languages: {
      nodejs: true,
      sql: true,
      php: !!PHP_BIN,
    }
  });
});

app.get('/api/exercises/:language', (req, res) => {
  const lang = req.params.language;
  if (!exercises[lang]) return res.status(404).json({ error: 'Unknown language' });
  res.json(exercises[lang]);
});

app.post('/api/run', (req, res) => {
  const { language, exerciseId, code } = req.body;
  if (!exercises[language]) return res.status(400).json({ error: 'Unknown language' });
  const exercise = exercises[language].find(e => e.id === exerciseId);
  if (!exercise) return res.status(404).json({ error: 'Exercise not found' });
  res.json(verify(exercise, code));
});

app.post('/api/hint', async (req, res) => {
  const { exercise, code, apiKey } = req.body;
  const key = apiKey || process.env.GROQ_API_KEY;

  if (!key) {
    return res.json({ hint: 'No Groq API key found. Click ⚙ in the top right to add yours.' });
  }

  try {
    const Groq = require('groq-sdk');
    const groq = new Groq({ apiKey: key });
    const resp = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 180,
      messages: [
        {
          role: 'system',
          content: `You are a patient coding tutor. Give a short, encouraging hint that nudges the student toward the solution WITHOUT revealing the answer. Max 3 sentences. Be specific to their code.`
        },
        {
          role: 'user',
          content: `Exercise: ${exercise.title}\n\nTask: ${exercise.description.replace(/<[^>]+>/g, '')}\n\nStudent's current code:\n\`\`\`\n${code}\n\`\`\`\n\nGive a hint.`
        }
      ]
    });
    res.json({ hint: resp.choices[0].message.content });
  } catch (e) {
    res.json({ hint: `Hint error: ${e.message}` });
  }
});

app.get('/api/progress', (req, res) => res.json(loadProgress()));
app.post('/api/progress', (req, res) => {
  saveProgress(req.body);
  res.json({ ok: true });
});

app.get('/api/schema', (_req, res) => {
  res.json({
    users:    ['id', 'name', 'age', 'email', 'city'],
    products: ['id', 'name', 'price', 'category'],
    orders:   ['id', 'user_id', 'product_id', 'quantity', 'order_date']
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n  Code Dojo is running!`);
  console.log(`  Open http://localhost:${PORT} in your browser`);
  console.log(`  PHP available: ${PHP_BIN ? 'yes' : 'no (PHP exercises disabled)'}\n`);
});
