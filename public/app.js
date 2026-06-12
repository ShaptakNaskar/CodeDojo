/* ── State ── */
let state = {
  lang: 'nodejs',
  exercises: [],
  index: 0,
  progress: { completed: [] },
  editor: null,
  schema: null,
};

const LANG_EXT = { nodejs: 'js', sql: 'sql', php: 'php' };
const LANG_MODE = { nodejs: 'javascript', sql: 'sql', php: 'php' };

/* ── Boot ── */
require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } });
require(['vs/editor/editor.main'], async () => {
  monaco.editor.defineTheme('dojo', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '585b70', fontStyle: 'italic' },
      { token: 'keyword', foreground: 'cba6f7' },
      { token: 'string', foreground: 'a6e3a1' },
      { token: 'number', foreground: 'fab387' },
    ],
    colors: {
      'editor.background': '#1e1e2e',
      'editor.foreground': '#cdd6f4',
      'editor.lineHighlightBackground': '#181825',
      'editorCursor.foreground': '#89b4fa',
      'editor.selectionBackground': '#45475a',
      'editorLineNumber.foreground': '#45475a',
      'editorLineNumber.activeForeground': '#89b4fa',
    }
  });

  state.editor = monaco.editor.create(document.getElementById('editor-container'), {
    theme: 'dojo',
    language: 'javascript',
    fontSize: 14,
    fontFamily: "'Cascadia Code', 'Fira Code', 'Consolas', monospace",
    fontLigatures: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    lineNumbers: 'on',
    renderLineHighlight: 'line',
    padding: { top: 12, bottom: 12 },
    automaticLayout: true,
    tabSize: 2,
    insertSpaces: true,
    wordWrap: 'on',
  });

  const [progressRes, schemaRes, configRes] = await Promise.all([
    fetch('/api/progress').then(r => r.json()),
    fetch('/api/schema').then(r => r.json()),
    fetch('/api/config').then(r => r.json()),
  ]);
  state.progress = progressRes;
  state.schema = schemaRes;
  state.config = configRes;

  // Disable PHP button if PHP not available on server
  if (!configRes.languages?.php) {
    const phpBtn = document.querySelector('[data-lang="php"]');
    if (phpBtn) {
      phpBtn.title = 'PHP not available in this environment — run locally';
      phpBtn.style.opacity = '0.45';
    }
  }

  bindEvents();
  await switchLang('nodejs');
});

/* ── Language switch ── */
async function switchLang(lang) {
  state.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  const exercises = await fetch(`/api/exercises/${lang}`).then(r => r.json());
  state.exercises = exercises;

  // Restore last position for this lang
  const savedIndex = parseInt(localStorage.getItem(`dojo_index_${lang}`) || '0', 10);
  state.index = Math.min(savedIndex, exercises.length - 1);

  renderExercise();
}

/* ── Render exercise ── */
function renderExercise() {
  const ex = state.exercises[state.index];
  if (!ex) return;

  localStorage.setItem(`dojo_index_${state.lang}`, state.index);

  // Meta
  document.getElementById('exercise-counter').textContent =
    `Exercise ${state.index + 1} of ${state.exercises.length}`;
  document.getElementById('exercise-title').textContent = ex.title;
  document.getElementById('editor-filename').textContent =
    `exercise_${state.index + 1}.${LANG_EXT[state.lang]}`;

  // Description
  document.getElementById('exercise-description').innerHTML = ex.description;

  // Example
  document.getElementById('example-code').textContent = ex.example;

  // SQL schema
  const schemaEl = document.getElementById('sql-schema');
  if (state.lang === 'sql' && state.schema) {
    schemaEl.style.display = '';
    document.getElementById('schema-content').innerHTML =
      Object.entries(state.schema).map(([tbl, cols]) =>
        `<div class="schema-table">
          <div class="schema-table-name">${tbl}</div>
          <div class="schema-cols">${cols.join(', ')}</div>
        </div>`
      ).join('');
  } else {
    schemaEl.style.display = 'none';
  }

  // Monaco language
  const model = state.editor.getModel();
  monaco.editor.setModelLanguage(model, LANG_MODE[state.lang]);

  // Load saved code or starter code
  const saved = localStorage.getItem(`dojo_code_${ex.id}`);
  state.editor.setValue(saved ?? ex.starterCode);
  state.editor.setPosition({ lineNumber: 999, column: 1 });

  // Step dots
  renderDots();

  // Progress bar
  updateProgress();

  // Nav buttons
  document.getElementById('prev-btn').disabled = state.index === 0;
  document.getElementById('next-btn').disabled = state.index === state.exercises.length - 1;

  // Clear output
  clearOutput();
}

function renderDots() {
  const container = document.getElementById('step-dots');
  container.innerHTML = '';
  state.exercises.forEach((ex, i) => {
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    if (state.progress.completed.includes(ex.id)) dot.classList.add('completed');
    if (i === state.index) dot.classList.add('current');
    dot.title = ex.title;
    dot.addEventListener('click', () => { state.index = i; renderExercise(); });
    container.appendChild(dot);
  });
}

function updateProgress() {
  const total = state.exercises.length;
  const done = state.exercises.filter(ex => state.progress.completed.includes(ex.id)).length;
  document.getElementById('progress-text').textContent = `${done} / ${total}`;
  document.getElementById('progress-fill').style.width = total ? `${(done / total) * 100}%` : '0%';
}

/* ── Run code ── */
async function runCode() {
  const ex = state.exercises[state.index];
  const code = state.editor.getValue();

  // Save draft
  localStorage.setItem(`dojo_code_${ex.id}`, code);

  // Disable run while running
  const runBtn = document.getElementById('run-btn');
  runBtn.disabled = true;
  runBtn.textContent = '⏳ Running...';

  clearOutput();
  document.getElementById('output-content').textContent = 'Running...';

  try {
    const res = await fetch('/api/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: state.lang, exerciseId: ex.id, code }),
    });
    const result = await res.json();
    showResult(result, ex);
  } catch (e) {
    showOutput('Network error: ' + e.message, 'error');
  } finally {
    runBtn.disabled = false;
    runBtn.textContent = '▶ Run';
  }
}

function showResult(result, ex) {
  const outputEl = document.getElementById('output-content');
  const badge = document.getElementById('result-badge');
  const msgEl = document.getElementById('result-message');

  // Format SQL output as a table if possible
  let outputText = result.output || '';
  if (state.lang === 'sql' && outputText.startsWith('[')) {
    try {
      const rows = JSON.parse(outputText);
      if (rows.length > 0) {
        outputText = formatSqlTable(rows);
      }
    } catch {}
  }

  outputEl.textContent = outputText;
  outputEl.className = result.error ? 'has-error' : '';

  badge.style.display = '';

  if (result.passed) {
    badge.textContent = '✓ Passed';
    badge.className = 'pass';
    msgEl.style.display = 'none';

    // Mark complete and show congrats
    if (!state.progress.completed.includes(ex.id)) {
      state.progress.completed.push(ex.id);
      saveProgress();
    }
    renderDots();
    updateProgress();

    const isLast = state.index === state.exercises.length - 1;
    showCongrats(isLast);

  } else if (result.error) {
    badge.textContent = '✗ Error';
    badge.className = 'error';
    msgEl.style.display = '';
    msgEl.textContent = 'Fix the error above and try again.';

  } else {
    badge.textContent = '✗ Not quite';
    badge.className = 'fail';
    if (result.message) {
      msgEl.style.display = '';
      msgEl.textContent = result.message;
    } else if (result.expected) {
      msgEl.style.display = '';
      msgEl.textContent = `Expected output:\n${result.expected}`;
    } else {
      msgEl.style.display = 'none';
    }
  }
}

function formatSqlTable(rows) {
  const cols = Object.keys(rows[0]);
  const widths = cols.map(c => Math.max(c.length, ...rows.map(r => String(r[c] ?? '').length)));
  const pad = (s, w) => String(s ?? '').padEnd(w);
  const sep = widths.map(w => '-'.repeat(w + 2)).join('+');
  const header = cols.map((c, i) => ` ${pad(c, widths[i])} `).join('|');
  const rowLines = rows.map(r => cols.map((c, i) => ` ${pad(r[c], widths[i])} `).join('|'));
  return [header, sep, ...rowLines].join('\n') + `\n\n(${rows.length} row${rows.length !== 1 ? 's' : ''})`;
}

function showCongrats(isLast) {
  const overlay = document.getElementById('congrats-overlay');
  const sub = document.getElementById('congrats-sub');
  const btn = document.getElementById('congrats-next');
  sub.textContent = isLast
    ? 'You completed this track!'
    : 'Moving to the next exercise...';
  btn.textContent = isLast ? 'Back to start' : 'Next Exercise →';
  btn.onclick = () => {
    overlay.style.display = 'none';
    if (isLast) { state.index = 0; } else { state.index++; }
    renderExercise();
  };
  overlay.style.display = 'flex';
}

function clearOutput() {
  document.getElementById('output-content').textContent = '';
  document.getElementById('output-content').className = '';
  document.getElementById('result-badge').style.display = 'none';
  document.getElementById('result-message').style.display = 'none';
  document.getElementById('congrats-overlay').style.display = 'none';
}

function showOutput(text, type) {
  const el = document.getElementById('output-content');
  el.textContent = text;
  el.className = type === 'error' ? 'has-error' : '';
}

/* ── Hint ── */
async function getHint() {
  const ex = state.exercises[state.index];
  const code = state.editor.getValue();
  const hintBox = document.getElementById('hint-box');
  const btn = document.getElementById('hint-btn');

  btn.disabled = true;
  hintBox.style.display = '';
  hintBox.textContent = 'Thinking...';

  const apiKey = localStorage.getItem('dojo_groq_key') || '';

  try {
    const res = await fetch('/api/hint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ exercise: ex, code, apiKey }),
    });
    const data = await res.json();
    hintBox.textContent = data.hint;
  } catch (e) {
    hintBox.textContent = 'Could not get hint.';
  } finally {
    btn.disabled = false;
  }
}

/* ── Progress persistence ── */
async function saveProgress() {
  await fetch('/api/progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state.progress),
  });
}

/* ── Settings ── */
function openSettings() {
  const key = localStorage.getItem('dojo_groq_key') || '';
  document.getElementById('api-key-input').value = key;
  document.getElementById('settings-modal').style.display = 'flex';
}
function closeSettings() {
  document.getElementById('settings-modal').style.display = 'none';
}

/* ── Event bindings ── */
function bindEvents() {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
  });

  // Run
  document.getElementById('run-btn').addEventListener('click', runCode);

  // Keyboard shortcut: Ctrl+Enter or Cmd+Enter
  state.editor.addAction({
    id: 'run-code',
    label: 'Run Code',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
    run: runCode,
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', () => {
    const ex = state.exercises[state.index];
    if (confirm('Reset to starter code? Your edits will be lost.')) {
      localStorage.removeItem(`dojo_code_${ex.id}`);
      state.editor.setValue(ex.starterCode);
    }
  });

  // Hint
  document.getElementById('hint-btn').addEventListener('click', getHint);

  // Nav
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (state.index > 0) { state.index--; renderExercise(); }
  });
  document.getElementById('next-btn').addEventListener('click', () => {
    if (state.index < state.exercises.length - 1) { state.index++; renderExercise(); }
  });

  // Congrats dismiss on backdrop
  document.getElementById('congrats-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('congrats-overlay')) {
      document.getElementById('congrats-overlay').style.display = 'none';
    }
  });

  // Settings
  document.getElementById('settings-btn').addEventListener('click', openSettings);
  document.getElementById('settings-close').addEventListener('click', closeSettings);
  document.getElementById('settings-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('settings-modal')) closeSettings();
  });
  document.getElementById('save-settings-btn').addEventListener('click', () => {
    localStorage.setItem('dojo_groq_key', document.getElementById('api-key-input').value.trim());
    closeSettings();
  });
}
