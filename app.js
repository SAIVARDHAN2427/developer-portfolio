/**
 * Thota Sai Vardhan - Developer Portfolio Ecosystem
 * Interactive Terminal & Telemetry Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
  initModals();
  initTelemetry();
  initCopyEmail();
});

// ==========================================
// 1. Interactive Terminal Emulator
// ==========================================
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const quickBtns = document.querySelectorAll('.quick-cmd-btn');
  const termBody = document.getElementById('terminal-body');

  const history = [];
  let historyIdx = -1;

  const commands = {
    help: () => `
<div class="term-block">
  <span class="term-cyan font-bold">AVAILABLE COMMANDS:</span>
  <div>  <span class="term-green font-bold">cat resume</span>   - View printable resume summary & download link</div>
  <div>  <span class="term-green font-bold">projects</span>     - Explore 3-Tier engineering projects & repositories</div>
  <div>  <span class="term-green font-bold">skills</span>       - List full-stack languages, frameworks & DevOps</div>
  <div>  <span class="term-green font-bold">stats</span>        - Inspect live engineering metrics & repository count</div>
  <div>  <span class="term-green font-bold">hire</span>         - Recruiter information, role preferences & availability</div>
  <div>  <span class="term-green font-bold">contact</span>      - Direct communication channels (Email, LinkedIn, Phone)</div>
  <div>  <span class="term-green font-bold">whoami</span>       - Display visitor identity</div>
  <div>  <span class="term-green font-bold">date</span>         - Display system timestamp</div>
  <div>  <span class="term-green font-bold">clear</span>        - Clear terminal console</div>
</div>`,

    'cat resume': () => `
<div class="term-block">
  <span class="term-cyan font-bold">══════════════════════════════════════════════════════════════</span>
  <div class="font-bold">THOTA SAI VARDHAN — FULL STACK SOFTWARE DEVELOPER</div>
  <div>Email: thotasaivardhan2427@gmail.com | Phone: +91 93926 73843</div>
  <div>GitHub: github.com/SAIVARDHAN2427 | LinkedIn: linkedin.com/in/saivardhan2427</div>
  <div>B.Tech Computer Science & Engineering (2021-2025) • KL University</div>
  <span class="term-cyan font-bold">══════════════════════════════════════════════════════════════</span>
  <div class="term-yellow font-bold mt-1">CORE TECHNICAL SKILLS:</div>
  <div>• Languages: JavaScript (ES6+), TypeScript, Java, Python, SQL, HTML5/CSS3</div>
  <div>• Frontend: React.js, Next.js, Redux Toolkit, Tailwind CSS, SSE Streaming</div>
  <div>• Backend: Node.js, Express, Java Spring Boot, REST APIs, Microservices</div>
  <div>• Databases & DevOps: PostgreSQL, MySQL, Redis, Docker, Git/GitHub, CI/CD</div>
  <div class="term-yellow font-bold mt-1">PRODUCTION-GRADE REPOSITORIES:</div>
  <div>1. Nexus AI Orchestrator: Multi-Agent DAG Workflow Execution Engine (Docker, CI)</div>
  <div>2. InvestaNest Core: High-Throughput Double-Entry Ledger & Portfolio Analytics</div>
  <div>3. Developer Portfolio: Real-Time Interactive Shell & Telemetry Portal</div>
  <div class="mt-2">
    <a href="assets/Thota_Sai_Vardhan_Resume.pdf" download="Thota_Sai_Vardhan_Resume.pdf" class="term-cyan underline">➔ Click here to download official ATS Resume PDF</a>
  </div>
</div>`,

    projects: () => `
<div class="term-block">
  <span class="term-cyan font-bold">3-TIER PRODUCTION ECOSYSTEM:</span>
  <div class="mt-1">
    <span class="term-yellow font-bold">[TIER 3] NEXUS AI ORCHESTRATOR</span> (Autonomous Multi-Agent DAG Engine)
    <div>  • Tech: TypeScript, React, Node.js, SSE, Docker Compose, CI Matrix</div>
    <div>  • Repo: <a href="https://github.com/SAIVARDHAN2427/nexus-ai-orchestrator" target="_blank" class="term-cyan">github.com/SAIVARDHAN2427/nexus-ai-orchestrator</a></div>
  </div>
  <div class="mt-1">
    <span class="term-yellow font-bold">[TIER 2] INVESTANEST CORE</span> (Multi-Asset Financial Ledger)
    <div>  • Tech: Node.js, TypeScript, PostgreSQL, React, Docker, Recharts</div>
    <div>  • Repo: <a href="https://github.com/SAIVARDHAN2427/investanest-core" target="_blank" class="term-cyan">github.com/SAIVARDHAN2427/investanest-core</a></div>
  </div>
  <div class="mt-1">
    <span class="term-yellow font-bold">[TIER 1] DEVELOPER PORTFOLIO</span> (Interactive Showcase & Shell)
    <div>  • Tech: HTML5, CSS3, ES6+ JavaScript, Terminal CLI, GitHub API</div>
    <div>  • Repo: <a href="https://github.com/SAIVARDHAN2427/developer-portfolio" target="_blank" class="term-cyan">github.com/SAIVARDHAN2427/developer-portfolio</a></div>
  </div>
</div>`,

    skills: () => `
<div class="term-block">
  <span class="term-cyan font-bold">TECHNICAL SKILLS RADAR:</span>
  <div>• <span class="term-yellow font-bold">Frontend:</span> React.js (92%), Next.js (85%), TypeScript (88%), Tailwind CSS (90%)</div>
  <div>• <span class="term-yellow font-bold">Backend:</span> Node.js/Express (90%), Java Spring Boot (84%), REST APIs (95%)</div>
  <div>• <span class="term-yellow font-bold">Databases:</span> PostgreSQL (88%), MySQL (85%), Redis (80%)</div>
  <div>• <span class="term-yellow font-bold">DevOps & Cloud:</span> Docker (85%), Git/GitHub (92%), GitHub Actions (85%), AWS (80%)</div>
</div>`,

    stats: () => `
<div class="term-block">
  <span class="term-cyan font-bold">LIVE TELEMETRY STATS:</span>
  <div>• Public Repositories: 3 Production Systems (Nexus AI, InvestaNest, Portfolio)</div>
  <div>• Ledger Throughput: 5,000+ Transactions/second tested</div>
  <div>• Agent Concurrency: 4 Autonomous Agents (Research, Code, Arch, QA)</div>
  <div>• ACID Compliance: 100% Invariant Verification (Debit == Credit)</div>
  <div>• GitHub Handle: <span class="term-green font-bold">@SAIVARDHAN2427</span></div>
</div>`,

    hire: () => `
<div class="term-block">
  <span class="term-green font-bold">RECRUITER QUICK BRIEF:</span>
  <div>• Target Roles: Full Stack Developer / Software Engineer / Backend Developer</div>
  <div>• Education: B.Tech CSE (2021-2025), KL University</div>
  <div>• Availability: <span class="term-green font-bold">IMMEDIATE JOINER (0 Days Notice)</span></div>
  <div>• Locations: Hyderabad, Bengaluru, Pune, Chennai, Remote, Hybrid</div>
  <div>• Email: <a href="mailto:thotasaivardhan2427@gmail.com" class="term-cyan">thotasaivardhan2427@gmail.com</a></div>
  <div>• Phone: +91 93926 73843</div>
</div>`,

    contact: () => `
<div class="term-block">
  <span class="term-cyan font-bold">DIRECT CONTACT CHANNELS:</span>
  <div>• Email:    <a href="mailto:thotasaivardhan2427@gmail.com" class="term-cyan">thotasaivardhan2427@gmail.com</a></div>
  <div>• LinkedIn: <a href="https://www.linkedin.com/in/saivardhan2427/" target="_blank" class="term-cyan">linkedin.com/in/saivardhan2427</a></div>
  <div>• GitHub:   <a href="https://github.com/SAIVARDHAN2427" target="_blank" class="term-cyan">github.com/SAIVARDHAN2427</a></div>
  <div>• Phone:    +91 93926 73843</div>
</div>`,

    whoami: () => `<div>guest@recruiter-session-terminal (authorized to hire)</div>`,

    date: () => `<div>${new Date().toUTCString()}</div>`,

    sudo: () => `<div class="term-red">Permission denied: You do not need sudo to hire Thota Sai Vardhan! Try 'hire' instead.</div>`
  };

  function execute(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    
    // Add command echo
    const echoRow = document.createElement('div');
    echoRow.className = 'terminal-line';
    echoRow.innerHTML = `<span class="prompt-user">visitor@saivardhan</span><span class="prompt-sep">:</span><span class="prompt-path">~</span><span class="prompt-char">$</span> <span class="term-main">${escapeHtml(rawCmd)}</span>`;
    output.appendChild(echoRow);

    if (cmd === '') {
      // blank line
    } else if (cmd === 'clear') {
      output.innerHTML = '';
    } else if (commands[cmd]) {
      const res = document.createElement('div');
      res.className = 'terminal-line';
      res.innerHTML = commands[cmd]();
      output.appendChild(res);
    } else if (cmd.startsWith('echo ')) {
      const res = document.createElement('div');
      res.className = 'terminal-line';
      res.textContent = rawCmd.slice(5);
      output.appendChild(res);
    } else {
      const res = document.createElement('div');
      res.className = 'terminal-line term-red';
      res.innerHTML = `command not found: ${escapeHtml(cmd)}. Type <span class="term-green font-bold">'help'</span> for a list of available commands.`;
      output.appendChild(res);
    }

    termBody.scrollTop = termBody.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      if (val.trim()) {
        history.push(val);
        historyIdx = history.length;
      }
      execute(val);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIdx > 0) {
        historyIdx--;
        input.value = history[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[historyIdx];
      } else {
        historyIdx = history.length;
        input.value = '';
      }
    }
  });

  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      execute(cmd);
      input.focus();
    });
  });

  // Clicking anywhere in terminal body focuses input
  termBody.addEventListener('click', () => {
    input.focus();
  });
}

// ==========================================
// 2. Architecture Modals
// ==========================================
function initModals() {
  const overlay = document.getElementById('modal-overlay');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');
  const triggers = document.querySelectorAll('.trigger-demo');

  const architectures = {
    'nexus-demo': {
      title: 'Nexus AI Orchestrator — Architecture Topology',
      content: `
        <p class="mb-3 text-muted">A topological DAG execution pipeline where developer prompts are decomposed into tasks and scheduled across 4 specialized autonomous agents:</p>
        <pre class="arch-diagram">
+-------------------------------------------------------------------------+
|                        NEXUS AI ORCHESTRATOR                            |
+-------------------------------------------------------------------------+
                                    |
                                    v
                     +----------------------------+
                     |  DAG WORKFLOW COMPILER     |
                     |  (Topological Wave Sched)  |
                     +----------------------------+
                                    |
            +-----------------------+-----------------------+
            |                                               |
            v                                               v
+-------------------------+                     +-------------------------+
|   AGENT 1: RESEARCH     |                     |   AGENT 2: CODE GEN     |
|   Docs, APIs & Context  |                     |   TypeScript / React    |
+-------------------------+                     +-------------------------+
            |                                               |
            +-----------------------+-----------------------+
                                    |
                                    v
                     +----------------------------+
                     |  AGENT 3: ARCH REVIEWER    |
                     |  Anti-patterns & Coupling  |
                     +----------------------------+
                                    |
                                    v
                     +----------------------------+
                     |  AGENT 4: QA & TESTING     |
                     |  Invariant & Edge-Cases    |
                     +----------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
|     REAL-TIME SSE TELEMETRY STREAM & REACT DAG STUDIO DASHBOARD         |
+-------------------------------------------------------------------------+
        </pre>
        <div class="mt-3">
          <a href="https://github.com/SAIVARDHAN2427/nexus-ai-orchestrator" target="_blank" class="btn btn-primary">Visit Nexus GitHub Repository</a>
        </div>
      `
    },
    'investa-demo': {
      title: 'InvestaNest Core — Double-Entry Ledger Verification',
      content: `
        <p class="mb-3 text-muted">Mathematical balance invariants and atomic multi-legged transactions guarantee absolute ledger consistency:</p>
        <pre class="arch-diagram">
+-------------------------------------------------------------------------+
|                         INVESTANEST CORE ENGINE                         |
+-------------------------------------------------------------------------+
                                    |
                                    v
                     +----------------------------+
                     |  REST API POST /journal    |
                     |  JWT Auth & Schema Valid.  |
                     +----------------------------+
                                    |
                                    v
                     +----------------------------+
                     |  ATOMIC TRANSACTION BLOCK  |
                     |  (BEGIN TRANSACTION)       |
                     +----------------------------+
                                    |
            +-----------------------+-----------------------+
            |                                               |
            v                                               v
+-------------------------+                     +-------------------------+
|  DEBIT LEGS RECORDING   |                     |  CREDIT LEGS RECORDING  |
|  Asset / Expense Accts  |                     |  Liability / Equity     |
+-------------------------+                     +-------------------------+
            |                                               |
            +-----------------------+-----------------------+
                                    |
                                    v
                     +----------------------------+
                     |  MATHEMATICAL INVARIANT    |
                     |  SUM(Debits) == SUM(Cred)  |
                     +----------------------------+
                        /                       \\
                 [FAIL] v                       v [PASS]
            +-------------------+       +-------------------+
            |  ROLLBACK TRANS   |       |  COMMIT & UPDATE  |
            |  Status: 400 Bad  |       |  Real-Time NAV    |
            +-------------------+       +-------------------+
        </pre>
        <div class="mt-3">
          <a href="https://github.com/SAIVARDHAN2427/investanest-core" target="_blank" class="btn btn-primary">Visit InvestaNest GitHub Repository</a>
        </div>
      `
    }
  };

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (architectures[target]) {
        title.textContent = architectures[target].title;
        body.innerHTML = architectures[target].content;
        overlay.classList.add('active');
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
}

// ==========================================
// 3. Dynamic GitHub Telemetry Sync
// ==========================================
function initTelemetry() {
  const repoCountEl = document.getElementById('stat-repos');
  if (!repoCountEl) return;

  fetch('https://api.github.com/users/SAIVARDHAN2427')
    .then(res => res.json())
    .then(data => {
      if (data && data.public_repos) {
        repoCountEl.textContent = data.public_repos;
      }
    })
    .catch(() => {
      // Fallback stays at 3
    });
}

// ==========================================
// 4. Copy Email Action
// ==========================================
function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText('thotasaivardhan2427@gmail.com').then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span class="term-green font-bold">✓ Copied to Clipboard!</span>`;
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2500);
    }).catch(() => {
      alert('Email: thotasaivardhan2427@gmail.com');
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}
