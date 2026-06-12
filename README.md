# Code Dojo 🥋

> **Learn to code by doing** — an interactive, browser-based coding platform with live execution, AI-powered hints, and 75 progressive exercises across three languages.

![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)
![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-VS_Code_powered-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## What is Code Dojo?

Code Dojo is a self-hosted learning environment where you write real code and see it run instantly — no accounts, no setup, no friction. Just open it in a browser and start coding.

It's built for beginners who want to actually *do* things rather than just watch tutorials.

![Code Dojo Screenshot](https://i.imgur.com/placeholder.png)

---

## Features

- **Live code execution** — Node.js, SQL, and PHP run in a real sandbox on the server
- **75 progressive exercises** — from Hello World to mini projects
- **VS Code–quality editor** — powered by Monaco with syntax highlighting and line numbers
- **AI hints** — stuck? Get a nudge (not the answer) via Groq's Llama 3.3
- **Progress tracking** — completed exercises are saved between sessions
- **Beautiful dark theme** — Catppuccin Mocha throughout
- **Zero dependencies for the learner** — just open a browser

---

## Exercise Tracks

### 🟨 JavaScript / Node.js — 30 exercises
Fundamentals through modern JS patterns.

| # | Topic | # | Topic |
|---|-------|---|-------|
| 1 | Hello, World! | 16 | Array `.reduce()` |
| 2 | Variables | 17 | Classes |
| 3 | Numbers & Math | 18 | Async / Await |
| 4 | Strings | 19 | Destructuring |
| 5 | Template Literals | 20 | Mini Project: Number Analyzer |
| 6 | Arrays | 21 | Closures |
| 7 | Array Methods | 22 | Spread & Rest Operators |
| 8 | Objects | 23 | Higher-Order Functions |
| 9 | Functions | 24 | Recursion |
| 10 | Loops | 25 | Regular Expressions |
| 11 | If / Else | 26 | Set — Unique Values |
| 12 | Mini Project: FizzBuzz | 27 | Map — Key/Value Store |
| 13 | Error Handling | 28 | Promises |
| 14 | Array `.map()` | 29 | Optional Chaining & `??` |
| 15 | Array `.filter()` | 30 | Mini Project: Shopping Cart |

### 🗄️ SQL — 23 exercises
From basic queries to real analytics.

| # | Topic | # | Topic |
|---|-------|---|-------|
| 1 | SELECT Everything | 13 | LIKE Pattern Matching |
| 2 | SELECT Specific Columns | 14 | AND / OR Conditions |
| 3 | WHERE Clause | 15 | HAVING |
| 4 | WHERE with Text | 16 | DISTINCT |
| 5 | ORDER BY | 17 | IN Operator |
| 6 | LIMIT | 18 | BETWEEN |
| 7 | COUNT & GROUP BY | 19 | Subquery |
| 8 | AVG & SUM | 20 | CASE WHEN |
| 9 | INSERT Data | 21 | LEFT JOIN |
| 10 | JOIN Tables | 22 | COALESCE |
| 11 | UPDATE Data | 23 | Mini Project: Sales Dashboard |
| 12 | DELETE Data | | |

### 🐘 PHP — 22 exercises
Server-side scripting from scratch.

| # | Topic | # | Topic |
|---|-------|---|-------|
| 1 | Hello, World! | 12 | Array Functions |
| 2 | Variables | 13 | Classes |
| 3 | String Concatenation | 14 | Error Handling |
| 4 | Numbers & Math | 15 | Mini Project: Password Validator |
| 5 | String Interpolation | 16 | foreach on Assoc. Arrays |
| 6 | Arrays | 17 | `array_map` & `array_filter` |
| 7 | Associative Arrays | 18 | Anonymous Functions |
| 8 | Functions | 19 | Type Casting |
| 9 | Loops | 20 | `match` Expression |
| 10 | Mini Project: FizzBuzz | 21 | Number Formatting |
| 11 | String Functions | 22 | Mini Project: Invoice Generator |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js 22 + Express |
| Editor | Monaco Editor (same as VS Code) |
| SQL engine | `node:sqlite` (built-in, no install needed) |
| PHP runner | `php-cli` via child process |
| AI hints | Groq API — Llama 3.3 70B |
| Theme | Catppuccin Mocha |

---

## Running Locally

**Prerequisites:** Node.js 22+ and (optionally) PHP CLI for PHP exercises.

```bash
# Clone
git clone https://github.com/ShaptakNaskar/CodeDojo.git
cd CodeDojo

# Install dependencies
npm install

# Add your Groq API key (optional — AI hints won't work without it)
cp .env.example .env
# Edit .env and add your GROQ_API_KEY

# Start
npm start
```

Open [http://localhost:3000](http://localhost:3000).

> **PHP exercises** work automatically if `php` is on your PATH. Run `php --version` to check. If not installed, Node.js and SQL exercises still work fine.

---

## Deployment

### Vercel (Node.js + SQL only)

PHP exercises show a friendly "not available" message on Vercel since there's no PHP binary — everything else works perfectly.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ShaptakNaskar/CodeDojo)

1. Click the button above
2. Add environment variable `GROQ_API_KEY` in the Vercel dashboard
3. Deploy

### Render (Node.js + SQL + PHP ✅)

For full PHP support, use Render with the included `Dockerfile` that installs both Node.js and `php-cli`.

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect `ShaptakNaskar/CodeDojo` from GitHub
3. Render auto-detects `render.yaml` — select **Docker** runtime
4. Add environment variable `GROQ_API_KEY`
5. Deploy

> **Keeping it awake:** Render's free tier sleeps after 15 minutes of inactivity. Use [cron-job.org](https://cron-job.org) to ping `https://your-app.onrender.com/health` every minute for free.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | Optional | Enables AI hints. Get one free at [console.groq.com](https://console.groq.com) |
| `PORT` | Optional | Server port (default: `3000`) |

---

## Project Structure

```
CodeDojo/
├── server.js          # Express server, code runners, exercise verification
├── exercises/
│   ├── nodejs.js      # 30 Node.js exercises
│   ├── sql.js         # 23 SQL exercises
│   └── php.js         # 22 PHP exercises
├── public/
│   ├── index.html     # App shell
│   ├── app.js         # Frontend logic & Monaco setup
│   └── style.css      # Catppuccin Mocha theme
├── Dockerfile         # Node.js 22 + php-cli for Render
├── render.yaml        # Render deployment config
└── vercel.json        # Vercel deployment config
```

---

## Adding Your Own Exercises

Each exercise is a plain JavaScript object. Add one to the relevant file in `exercises/`:

```js
{
  id: 'node_31',
  language: 'nodejs',
  title: 'My Exercise',
  order: 31,
  description: `Explain the task here. Use <code>inline code</code> and <b>bold</b>.

<b>Your task:</b> Do something cool.`,
  example: `// Show an example here`,
  starterCode: `// Starter code the user sees\n`,
  testWrapper: null,           // optional: code appended after user's code for testing
  test: { type: 'stdout', expected: 'expected output' }
}
```

**Test types:**
- `stdout` — exact match against expected string
- `stdout_contains` — checks for multiple substrings
- `sql_rows` — validates row count and/or values
- `sql_dml` — runs a verify query after INSERT/UPDATE/DELETE
- `sql_columns` — checks required/forbidden columns
- `sql_ordered` — validates order of results

---

## License

MIT — do whatever you want with it. If you build something cool on top of this, a star would be appreciated ⭐
