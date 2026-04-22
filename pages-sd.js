// ═══════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════
pages['home'] = () => `
<div class="page-header">
  <div class="breadcrumb">InterviewGuide</div>
  <h1 class="page-title">Senior SWE Interview Prep</h1>
  <p class="page-subtitle">A structured, streamlined guide covering System Design, DS/Algorithms, Java, Spring, Kubernetes, Go, and Distributed Systems. No fluff — just what matters for senior roles.</p>
</div>

<div class="callout callout-blue">
  <strong>🗓️ 3-Week Sprint Plan</strong> &nbsp;|&nbsp;
  Week 1: System Design + DS Patterns &nbsp;|&nbsp;
  Week 2: Java/Spring + K8s &nbsp;|&nbsp;
  Week 3: Mock interviews + Revision tracker
</div>

<h2 class="section-title">Topics</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin:16px 0">
  <div class="home-card" onclick="showPage('sd-intro')">
    <div class="hc-icon">🏗️</div>
    <div class="hc-title">System Design</div>
    <div class="hc-desc">Framework, 11 patterns, case studies, building blocks</div>
  </div>
  <div class="home-card" onclick="showPage('ds-overview')">
    <div class="hc-icon">📐</div>
    <div class="hc-title">DS &amp; Algorithms</div>
    <div class="hc-desc">Arrays → Graphs, 7 algorithm patterns, revision tracker</div>
  </div>
  <div class="home-card" onclick="showPage('java-core')">
    <div class="hc-icon">☕</div>
    <div class="hc-title">Java</div>
    <div class="hc-desc">Core OOP, Collections, Concurrency, Streams, Memory</div>
  </div>
  <div class="home-card" onclick="showPage('spring-core')">
    <div class="hc-icon">🍃</div>
    <div class="hc-title">Spring Boot</div>
    <div class="hc-desc">IoC, DI, AOP, Transactions, JPA, Circuit Breaker</div>
  </div>
  <div class="home-card" onclick="showPage('k8s-core')">
    <div class="hc-icon">☸️</div>
    <div class="hc-title">Kubernetes</div>
    <div class="hc-desc">Architecture, troubleshooting, CRDs, Observability</div>
  </div>
  <div class="home-card" onclick="showPage('go-core')">
    <div class="hc-icon">🐹</div>
    <div class="hc-title">Go</div>
    <div class="hc-desc">Goroutines, channels, concurrency patterns vs Java</div>
  </div>
  <div class="home-card" onclick="showPage('distributed')">
    <div class="hc-icon">🌐</div>
    <div class="hc-title">Distributed Systems</div>
    <div class="hc-desc">CAP, Raft, Kafka, Saga, CQRS, Eventual Consistency</div>
  </div>
  <div class="home-card" onclick="showPage('ds-revision')">
    <div class="hc-icon">📌</div>
    <div class="hc-title">Revision Tracker</div>
    <div class="hc-desc">Track mastered topics and items needing review</div>
  </div>
</div>

<h2 class="section-title">Interview Cheatsheet</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
  <div class="callout callout-green" style="margin:0">
    <strong>✅ Do</strong>
    <ul style="margin:8px 0 0 16px;line-height:2;font-size:13px">
      <li>Clarify requirements for 5 min before drawing</li>
      <li>State trade-offs out loud (CP vs AP, SQL vs NoSQL)</li>
      <li>Estimate scale: QPS, storage, bandwidth</li>
      <li>Start simple, then add complexity</li>
      <li>Check in with interviewer every 5–7 min</li>
    </ul>
  </div>
  <div class="callout callout-red" style="margin:0;background:#fef2f2;border-left-color:#dc2626">
    <strong>❌ Don't</strong>
    <ul style="margin:8px 0 0 16px;line-height:2;font-size:13px">
      <li>Jump straight to "I'll use Kafka"</li>
      <li>Skip non-functional requirements</li>
      <li>Monologue for 20 minutes</li>
      <li>Memorise solutions — learn patterns</li>
      <li>Forget to handle failure cases</li>
    </ul>
  </div>
</div>
`;

pages['sd-intro'] = () => `
<div class="breadcrumb">System Design → <span>Framework</span></div>
<div class="page-header">
  <div class="page-title">System Design Framework</div>
  <div class="page-subtitle">A repeatable 5-step process for every system design question. Interviewers grade you on structure, not just solutions.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">⚡ The Mantra</div>
  <div class="mt-content"><strong>"Requirements → API → High-Level → Deep Dive → Bottlenecks"</strong>. Say this in your head before you start every SD interview. Interviewers reward candidates who follow a clear process over those who jump straight to technology.</div>
</div>

<div class="steps">
  <div class="step">
    <div class="step-num">1</div>
    <div class="step-content">
      <div class="step-title">Define the Problem Space</div>
      <div class="step-desc">Spend 5 minutes here. Ask clarifying questions — interviewers often leave requirements vague to test this.</div>
    </div>
  </div>
</div>

<div class="two-col">
  <div class="info-box">
    <div class="info-title">Functional Requirements</div>
    <ul class="content-list" style="margin-top:6px">
      <li><em>What</em> the system does</li>
      <li>Core user flows &amp; actions</li>
      <li>Example: "Users can post tweets, follow others, view timeline"</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-title">Non-Functional Requirements</div>
    <ul class="content-list" style="margin-top:6px">
      <li><em>How well</em> it performs</li>
      <li>Scalability, availability, latency, consistency</li>
      <li>Example: "99.99% uptime, &lt;200ms P99, 10M DAU"</li>
    </ul>
  </div>
</div>

<div class="callout amber">
  <strong>Questions to always ask:</strong> Read/write ratio? Scale (DAU, QPS)? Consistency vs availability tradeoff? Global or single region? Any existing systems to integrate with?
</div>

<div class="steps">
  <div class="step">
    <div class="step-num">2</div>
    <div class="step-content">
      <div class="step-title">Design the API</div>
      <div class="step-desc">Define the contract. What do clients call? What's returned? This locks in requirements before you draw boxes.</div>
    </div>
  </div>
</div>

<div class="code-block"><pre>// Twitter example — REST API definition
POST   /tweets              { content, media_ids[] } → tweet_id
GET    /timeline/:user_id   { cursor, limit } → tweets[]
POST   /follows             { follower_id, followee_id }
GET    /search?q=...        { query, cursor } → tweets[]</pre></div>

<div class="steps">
  <div class="step">
    <div class="step-num">3</div>
    <div class="step-content">
      <div class="step-title">High-Level Design</div>
      <div class="step-desc">Draw 5–6 boxes. Client → LB → Service(s) → DB/Cache. No detail yet — just the architecture skeleton.</div>
    </div>
  </div>
</div>

<div class="diagram">
  <svg viewBox="0 0 700 140" xmlns="http://www.w3.org/2000/svg" style="font-family:'DM Mono',monospace;font-size:12px">
    <!-- Boxes -->
    <rect x="10" y="50" width="80" height="40" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="50" y="72" text-anchor="middle" fill="#1e40af" font-weight="600">Client</text>
    
    <rect x="130" y="50" width="80" height="40" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="170" y="66" text-anchor="middle" fill="#1e40af" font-weight="600">Load</text>
    <text x="170" y="80" text-anchor="middle" fill="#1e40af" font-weight="600">Balancer</text>
    
    <rect x="260" y="20" width="90" height="40" rx="6" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    <text x="305" y="36" text-anchor="middle" fill="#065f46" font-weight="600">API</text>
    <text x="305" y="50" text-anchor="middle" fill="#065f46" font-weight="600">Servers</text>
    
    <rect x="260" y="80" width="90" height="40" rx="6" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    <text x="305" y="96" text-anchor="middle" fill="#065f46" font-weight="600">Cache</text>
    <text x="305" y="110" text-anchor="middle" fill="#065f46" font-weight="600">(Redis)</text>
    
    <rect x="400" y="20" width="90" height="40" rx="6" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="445" y="36" text-anchor="middle" fill="#5b21b6" font-weight="600">Primary</text>
    <text x="445" y="50" text-anchor="middle" fill="#5b21b6" font-weight="600">DB</text>
    
    <rect x="400" y="80" width="90" height="40" rx="6" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="445" y="96" text-anchor="middle" fill="#5b21b6" font-weight="600">Read</text>
    <text x="445" y="110" text-anchor="middle" fill="#5b21b6" font-weight="600">Replicas</text>
    
    <rect x="540" y="50" width="90" height="40" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="585" y="66" text-anchor="middle" fill="#92400e" font-weight="600">Object</text>
    <text x="585" y="80" text-anchor="middle" fill="#92400e" font-weight="600">Storage</text>
    
    <!-- Arrows -->
    <line x1="90" y1="70" x2="130" y2="70" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="210" y1="60" x2="260" y2="40" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="210" y1="80" x2="260" y2="100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="350" y1="40" x2="400" y2="40" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="350" y1="100" x2="400" y2="100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)"/>
    <line x1="490" y1="40" x2="540" y2="65" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr)"/>
    
    <defs>
      <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/>
      </marker>
    </defs>
  </svg>
</div>

<div class="steps">
  <div class="step">
    <div class="step-num">4</div>
    <div class="step-content">
      <div class="step-title">Deep Dive</div>
      <div class="step-desc">Pick 2–3 components the interviewer cares about. Present options with trade-offs. Show you know the "why" not just the "what".</div>
    </div>
  </div>
  <div class="step">
    <div class="step-num">5</div>
    <div class="step-content">
      <div class="step-title">Identify Bottlenecks &amp; Scale</div>
      <div class="step-desc">Single points of failure? What breaks at 10x load? Consider: CDN, horizontal sharding, caching layers, rate limiting, async processing.</div>
    </div>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">
    ❌ Common Mistakes to Avoid <span class="accordion-arrow">▼</span>
  </div>
  <div class="accordion-body">
    <ul class="content-list">
      <li><strong>Jumping to technology</strong> — "I'll use Kafka" before clarifying requirements</li>
      <li><strong>Skipping non-functional requirements</strong> — consistency vs availability is often the core of the interview</li>
      <li><strong>Monologuing</strong> — check in with the interviewer every 5 mins</li>
      <li><strong>One solution, no trade-offs</strong> — always present 2 options and compare</li>
      <li><strong>Ignoring data modeling</strong> — "where does the data live" matters as much as services</li>
    </ul>
  </div>
</div>

${quizHTML('sd-framework', [
  { q: "What's the first thing to do in a system design interview?", opts: ["Draw the architecture", "Clarify functional and non-functional requirements for 5 minutes", "Choose the database", "Estimate QPS"], ans: 1, exp: "Jumping straight to drawing is the #1 mistake. Spend 5 minutes asking: What does the system do? Who uses it? What scale? Read/write ratio? Consistency vs availability? Interviewers reward structured thinking." },
  { q: "What should a high-level design contain?", opts: ["Full DB schema and indexes", "5–6 boxes: Client → LB → Service → DB/Cache — the architecture skeleton", "Complete API specification", "Detailed caching strategy"], ans: 1, exp: "High-level design is deliberately coarse. Show the main components and data flow. Client → Load Balancer → Services → Databases/Cache. No implementation details yet — those come in the deep dive." },
  { q: "When should you pick NoSQL over SQL?", opts: ["Always — NoSQL is faster", "When you need massive horizontal scale, flexible schema, or very high write throughput", "For financial transactions", "When you need complex JOINs"], ans: 1, exp: "Use SQL for: transactions, complex queries, relationships. Use NoSQL for: high write throughput (Cassandra), flexible/nested documents (MongoDB), key-value caching (Redis), time-series (InfluxDB). Most systems use both." },
  { q: "What does 'deep dive' mean in the SD interview framework?", opts: ["Rewrite the high-level design", "Pick 2–3 critical components and explain design decisions, bottlenecks, and trade-offs in detail", "Draw all DB tables", "Discuss team structure"], ans: 1, exp: "Deep dive = show expertise on specific components. Pick the hardest parts: How does the fan-out work? How do you handle hotspot users? How does the cache invalidation work? Walk through failure scenarios." },
  { q: "How do you estimate if a system needs sharding?", opts: ["Always shard from day 1", "When single DB can't handle the QPS or storage after read replicas and caching are exhausted", "Shard when you have 1M users", "When latency exceeds 1 second"], ans: 1, exp: "Scaling order: 1) Vertical scale-up, 2) Read replicas + caching (handles 90% of read-heavy problems), 3) Shard only if write QPS or storage exceeds single node. Sharding adds huge complexity — don't do it early." },
  { q: "What is the CAP theorem trade-off in practice?", opts: ["Choose between CPU and memory", "During a network partition: serve stale data (AP) or refuse requests (CP)", "Between latency and throughput", "Between SQL and NoSQL"], ans: 1, exp: "Since network partitions ALWAYS happen eventually, CAP means: CP systems (Zookeeper, etcd) stop accepting writes to maintain consistency. AP systems (Cassandra, DynamoDB) serve potentially stale data to stay available." },
  { q: "A system needs 99.99% availability. How many minutes of downtime/year is that?", opts: ["52 minutes", "8.7 hours", "~52 minutes", "~5 minutes"], ans: 2, exp: "99.99% ('four nines') = 0.01% downtime = 365.25 × 24 × 60 × 0.0001 = 52.6 minutes/year. 99.9% = 8.7 hours/year. 99.999% = 5.25 minutes/year. Know these by heart for the requirements discussion." },
  { q: "What's the difference between stateless and stateful services?", opts: ["No difference in practice", "Stateless: any server handles any request (horizontally scalable). Stateful: server holds session state (sticky sessions or external state store needed)", "Stateful is always faster", "Stateless requires a database"], ans: 1, exp: "Stateless services store all state externally (DB, Redis, JWT token). Any server can handle any request → simple horizontal scaling. Stateful services need sticky sessions or shared state (Redis, DB). Design microservices to be stateless." },
  { q: "What is a message queue used for in system design?", opts: ["Speeding up synchronous API calls", "Decoupling services, absorbing traffic spikes, enabling async processing of slow operations", "Replacing the database", "Load balancing"], ans: 1, exp: "Message queues (Kafka, SQS, RabbitMQ) decouple producers from consumers. Benefits: absorb traffic bursts (queue builds up instead of dropping requests), retry on failure, async processing (email, notifications, video transcoding), fan-out to multiple consumers." }
])}

`;

// ═══════════════════════════════════════════════
// SYSTEM DESIGN — ESTIMATION
// ═══════════════════════════════════════════════
pages['sd-estimation'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design</div>
  <h1 class="page-title">Back-of-Envelope Estimation</h1>
  <p class="page-subtitle">Quick math that shows you can reason about scale. Interviewers want your thought process, not a precise answer.</p>
  ${revisionControls('sd-estimation')}
</div>

<h2 class="section-title">📏 Cheat Sheet — Numbers to Memorise</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
  <div class="callout callout-blue" style="margin:0">
    <strong>Storage Units</strong>
    <table style="width:100%;margin-top:8px;font-size:12px;border-collapse:collapse">
      <tr><td style="padding:3px 6px">1 char (ASCII)</td><td style="padding:3px 6px"><strong>1 byte</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">1 char (Unicode/UTF-8)</td><td style="padding:3px 6px"><strong>2–4 bytes</strong></td></tr>
      <tr><td style="padding:3px 6px">Tweet / short text</td><td style="padding:3px 6px"><strong>~300 bytes</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">Metadata row (DB)</td><td style="padding:3px 6px"><strong>~1 KB</strong></td></tr>
      <tr><td style="padding:3px 6px">Web page (HTML)</td><td style="padding:3px 6px"><strong>~100 KB</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">JPEG photo (mobile)</td><td style="padding:3px 6px"><strong>~300 KB</strong></td></tr>
      <tr><td style="padding:3px 6px">Profile image (thumb)</td><td style="padding:3px 6px"><strong>~50 KB</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">1 min MP3 audio</td><td style="padding:3px 6px"><strong>~1 MB</strong></td></tr>
      <tr><td style="padding:3px 6px">1 min HD video</td><td style="padding:3px 6px"><strong>~50–100 MB</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">1 min 4K video</td><td style="padding:3px 6px"><strong>~375 MB</strong></td></tr>
    </table>
  </div>
  <div class="callout callout-amber" style="margin:0">
    <strong>Time Units</strong>
    <table style="width:100%;margin-top:8px;font-size:12px;border-collapse:collapse">
      <tr><td style="padding:3px 6px">1 day</td><td style="padding:3px 6px"><strong>86,400 sec ≈ 10⁵</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">1 month</td><td style="padding:3px 6px"><strong>2.6 × 10⁶ sec</strong></td></tr>
      <tr><td style="padding:3px 6px">1 year</td><td style="padding:3px 6px"><strong>3.15 × 10⁷ sec</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">1M req/day → QPS</td><td style="padding:3px 6px"><strong>≈ 12 req/s</strong></td></tr>
      <tr><td style="padding:3px 6px">10M req/day → QPS</td><td style="padding:3px 6px"><strong>≈ 116 req/s</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">100M req/day → QPS</td><td style="padding:3px 6px"><strong>≈ 1,160 req/s</strong></td></tr>
      <tr><td style="padding:3px 6px">1B req/day → QPS</td><td style="padding:3px 6px"><strong>≈ 11,600 req/s</strong></td></tr>
      <tr style="background:rgba(0,0,0,0.04)"><td style="padding:3px 6px">Peak traffic</td><td style="padding:3px 6px"><strong>avg × 5–10×</strong></td></tr>
    </table>
  </div>
</div>

<h2 class="section-title">⚡ Latency Numbers Every Engineer Must Know</h2>
<table class="data-table">
  <thead><tr><th>Operation</th><th>Latency</th><th>Relative</th></tr></thead>
  <tr><td>L1 cache hit</td><td><strong>0.5 ns</strong></td><td>1×</td></tr>
  <tr><td>L2 cache hit</td><td><strong>7 ns</strong></td><td>14×</td></tr>
  <tr><td>RAM access</td><td><strong>100 ns</strong></td><td>200×</td></tr>
  <tr><td>SSD sequential read (1 MB)</td><td><strong>1 ms</strong></td><td>2,000,000×</td></tr>
  <tr><td>HDD seek</td><td><strong>10 ms</strong></td><td>20,000,000×</td></tr>
  <tr><td>Same datacenter round trip</td><td><strong>0.5 ms</strong></td><td>—</td></tr>
  <tr><td>Redis GET</td><td><strong>~0.5 ms</strong></td><td>—</td></tr>
  <tr><td>DB query (indexed, cached)</td><td><strong>1–5 ms</strong></td><td>—</td></tr>
  <tr><td>DB query (cold, no index)</td><td><strong>50–200 ms</strong></td><td>—</td></tr>
  <tr><td>Cross-region (US→EU)</td><td><strong>~150 ms</strong></td><td>—</td></tr>
  <tr><td>DNS lookup</td><td><strong>20–120 ms</strong></td><td>—</td></tr>
  <tr><td>TLS handshake</td><td><strong>100–300 ms</strong></td><td>—</td></tr>
</table>

<h2 class="section-title">📊 Estimation Framework — 5 Categories</h2>

<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">1. Load Estimation (QPS / TPS) <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <p><strong>Formula:</strong> QPS = Daily Active Users × Actions per day ÷ 86,400</p>
      <div class="code-block"><pre>Twitter example:
  DAU             = 300M users
  Tweets/user/day = 1 (avg, mostly read-heavy)
  Write QPS       = 300M × 1 ÷ 86,400 ≈ 3,500 writes/sec
  Read/write ratio = 100:1 (timeline reads)
  Read QPS        = 3,500 × 100 = 350,000 reads/sec
  Peak (5× avg)   = ~1.75M reads/sec at peak

Instagram example:
  DAU             = 500M
  Photo uploads   = 0.1/user/day  → 580 uploads/sec
  Photo views     = 50/user/day   → 290,000 views/sec</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">2. Storage Estimation <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <p><strong>Formula:</strong> Storage/year = writes/sec × avg object size × 86,400 × 365</p>
      <div class="code-block"><pre>Twitter storage:
  Tweets/sec      = 3,500
  Tweet size      = 300 bytes text + 500 bytes metadata = ~800 bytes
  Daily storage   = 3,500 × 800B × 86,400 = ~242 GB/day
  Yearly storage  = 242 GB × 365 = ~88 TB/year (text only)
  With media (30% tweets have images):
    Image size    = 300 KB avg
    Image storage = 3,500 × 0.3 × 300KB × 86,400 = ~27 TB/day 🔥

YouTube storage:
  Uploads/min     = 500 hours of video
  1 hr HD video   = ~1.5 GB (stored + transcoded in 5 resolutions × 3× = ~5 GB)
  Storage/min     = 500 × 5 GB = 2.5 TB/min = 3.6 PB/day</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">3. Bandwidth Estimation <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <p><strong>Formula:</strong> Bandwidth = QPS × avg response size</p>
      <div class="code-block"><pre>Netflix example:
  Concurrent streams  = 15M (peak evening)
  HD stream bitrate   = 5 Mbps
  4K stream bitrate   = 25 Mbps
  Mix (80% HD, 20% 4K):
    Bandwidth = 15M × (0.8 × 5 + 0.2 × 25) Mbps
              = 15M × 9 Mbps = 135 Tbps total egress 😲

Twitter API response:
  Read QPS = 350,000
  Timeline response = 20 tweets × 800 bytes = 16 KB
  Bandwidth = 350,000 × 16 KB = 5.6 GB/s = ~45 Gbps</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">4. Memory / Cache Estimation <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <p><strong>Pareto principle:</strong> 20% of content = 80% of traffic. Cache the hot 20%.</p>
      <div class="code-block"><pre>Twitter cache sizing:
  Daily reads   = 350,000 QPS × 86,400 = 30.2 billion reads/day
  Unique tweets served = ~500M/day (many duplicates)
  Cache hot 20%       = 100M tweets × 800 bytes = 80 GB
  → 1–2 Redis nodes (64 GB RAM each) handles this easily ✅

Cache hit rate target: 80–95% for read-heavy systems
Redis throughput:     ~100,000 ops/sec per node
Memcached:            ~1M ops/sec (simpler, no persistence)</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">5. Server / Resource Estimation <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>Rule of thumb per server:
  1 server handles:     ~10,000 req/sec (simple read API)
  1 DB server handles:  ~1,000–5,000 queries/sec
  1 Redis node handles: ~100,000 ops/sec

Twitter web tier:
  Read QPS = 350,000
  Servers needed = 350,000 ÷ 10,000 = 35 servers (+ 50% buffer = 53)

Twitter DB tier:
  Write QPS = 3,500
  Read  QPS = 350,000 (served 90% from cache)
  Remaining DB reads = 35,000
  Total DB QPS = 38,500 ÷ 2,000 avg = ~20 DB shards

Cloud cost rough guide (2024):
  t3.medium (2 vCPU, 4 GB)  = ~$30/mo
  c5.xlarge (4 vCPU, 8 GB)  = ~$124/mo
  r5.xlarge (4 vCPU, 32 GB) = ~$182/mo (memory-optimised, Redis)
  RDS db.r5.xlarge           = ~$260/mo</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">🐦 Full Twitter-Scale Worked Example</h2>
<div class="code-block"><pre>Given: 300M DAU, 1 tweet/user/day, 100:1 read/write, 5 years retention

LOAD:
  Write QPS  = 300M ÷ 86,400   ≈  3,500/s   (peak: 17,500/s)
  Read QPS   = 3,500 × 100     = 350,000/s  (peak: 1.75M/s)

STORAGE (5 years):
  Text  = 3,500 × 800B × 86,400 × 365 × 5  ≈ 440 TB
  Media = 3,500 × 0.3 × 300KB × 86,400 × 365 × 5 ≈ 135 PB
  Total ≈ 135 PB  →  object storage (S3 / GCS)

BANDWIDTH:
  Ingest  = 3,500 × 800B   ≈ 2.8 MB/s
  Egress  = 350,000 × 16KB ≈ 5.6 GB/s = 45 Gbps

CACHE:
  Hot 20% tweets = 80 GB  →  2 × Redis nodes (64 GB RAM)

SERVERS:
  API tier = ~35 servers  +  CDN for media
  DB tier  = ~20 shards   +  read replicas</pre></div>

${quizHTML('sd-estimation', [
  { q: "1 million requests/day is approximately how many QPS?", opts: ["~100 QPS", "~12 QPS", "~1,000 QPS", "~50 QPS"], ans: 1, exp: "1M ÷ 86,400 ≈ 11.6, round to ~12 QPS. Key formula: divide daily requests by 100,000 (10^5) for a quick mental estimate. So 100M/day ≈ 1,160 QPS." },
  { q: "Which operation is approximately 200,000× slower than an L1 cache hit?", opts: ["L2 cache", "RAM", "SSD read", "Cross-region call"], ans: 1, exp: "RAM access (~100ns) vs L1 cache (~0.5ns) = 200× slower. SSD is ~2,000,000× slower. Understanding this hierarchy explains why we cache aggressively." },
  { q: "For a read-heavy system (100:1 ratio), what's the most effective scaling strategy?", opts: ["Add more write shards", "Add Redis cache + read replicas, cache the hot 20%", "Increase server RAM only", "Use stronger consistency"], ans: 1, exp: "Pareto: 20% of content = 80% of reads. Cache hot 20% in Redis (80GB fits comfortably). Add read replicas to distribute DB reads. This handles 10-100× more load with minimal cost." },
  { q: "A tweet is ~300 bytes. 300M tweets/day = how much storage?", opts: ["~90 MB", "~90 GB", "~9 TB", "~90 TB"], ans: 1, exp: "300M × 300 bytes = 90 GB/day for text only. Add metadata (~500B/tweet) = 300M × 800B = ~240 GB/day. Over 5 years text alone = ~440 TB. Always estimate text and media separately." },
  { q: "Peak traffic is typically how many times average?", opts: ["Same as average", "2× average", "5–10× average", "50× average"], ans: 2, exp: "System design rule: always plan for 5–10× peak vs average. Twitter at noon vs 3am is ~5× difference. Black Friday for e-commerce is 10×+. Always multiply your QPS estimate by 5 for capacity planning." }
,
  { q: "How many bytes is a typical user profile row in a database?", opts: ["~10 bytes", "~1 KB (name, email, bio, timestamps, preferences)", "~1 MB", "~100 bytes"], ans: 1, exp: "User profile: name(50B) + email(100B) + bio(500B) + created_at(8B) + settings JSON(200B) ≈ 1 KB. Always break down row sizes field by field in interviews — it shows you understand data modelling." },
  { q: "Netflix serves 15M concurrent streams at 5 Mbps each. Total bandwidth?", opts: ["75 Gbps", "75 Tbps", "750 Gbps", "7.5 Tbps"], ans: 1, exp: "15M × 5 Mbps = 75M Mbps = 75 Tbps. This is why Netflix uses CDN edge nodes — no single datacenter handles this. Real Netflix: ~135 Tbps peak (mix of HD and 4K). Always convert to Tbps for big-scale media services." },
  { q: "How many servers handle 350,000 reads/sec for a Twitter-like system?", opts: ["1 server", "~35 servers (10K req/s per server, +50% buffer = 53 total)", "350 servers", "3,500 servers"], ans: 1, exp: "Rule of thumb: 1 commodity server handles ~10K req/s for simple read APIs (stateless, cached responses). 350K ÷ 10K = 35 servers. Always add 50% capacity buffer for peak: 35 × 1.5 ≈ 53 servers. More for write-heavy or compute-heavy workloads." },
  { q: "Storage for 1 billion users with profile photos (100KB avg): how much?", opts: ["~100 GB", "~100 TB", "~100 PB", "~1 TB"], ans: 1, exp: "1B users × 100KB = 100 TB just for profile photos. With thumbnails at 3 sizes: 100TB × 3 = 300 TB. Over 5 years if 20% new users/year: ~500 TB total. This fits on S3/GCS with tiered storage. Always separate media storage from DB storage in estimates." }
])}
`;


pages['sd-patterns'] = () => `
<div class="breadcrumb">System Design → <span>11 Architecture Patterns</span></div>
<div class="page-header">
  <div class="page-title">11 System Design Patterns</div>
  <div class="page-subtitle">Learn the pattern, not the problem. When you see the trigger words, you know the playbook. Based on common patterns in production systems.</div>
</div>

<div class="callout blue">
  <strong>How to use:</strong> Each pattern has a <strong>trigger phrase</strong> (what the interviewer says), a <strong>mantra</strong> (your guiding principle), and an <strong>architecture flow</strong>. Memorize the mantras first.
</div>

<div class="pill-tabs">
  <div class="pill-tab active" onclick="filterPatterns('all', this)">All</div>
  <div class="pill-tab" onclick="filterPatterns('traffic', this)">Traffic</div>
  <div class="pill-tab" onclick="filterPatterns('processing', this)">Processing</div>
  <div class="pill-tab" onclick="filterPatterns('data', this)">Data</div>
  <div class="pill-tab" onclick="filterPatterns('ux', this)">UX</div>
</div>

<div id="pattern-list">

<div class="pattern-card" data-type="traffic">
  <div class="pnumber">PATTERN 01 · TRAFFIC</div>
  <div class="ptitle">Read-Heavy <span class="ptype-badge tag">Traffic</span></div>
  <div class="pcue">"feed, timeline, search, catalog" → "Don't make the DB do work"</div>
  <div class="pdesc">When reads vastly outnumber writes, the database becomes a bottleneck. Push work left — cache results, pre-compute, use read replicas. The DB should only be the source of truth, not the workhorse.</div>
  <div class="pflow">
CLIENT → CDN → Cache (Redis) → Read Replica ← Primary DB
                                                 ↑ indexes on query columns
                                                 ↑ denormalized (pre-joined) data
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> Redis cache with TTL, read replicas (MySQL/Postgres), CDN for static assets, database indexes on hot columns, denormalization to avoid joins at read time.</div>
</div>

<div class="pattern-card" data-type="traffic">
  <div class="pnumber">PATTERN 02 · TRAFFIC</div>
  <div class="ptitle">Write-Heavy <span class="ptype-badge tag">Traffic</span></div>
  <div class="pcue">"logging, metrics, events, IoT" → "Accept fast, process later"</div>
  <div class="pdesc">Writes overwhelm synchronous DB operations. Decouple ingestion from processing. Write to a durable queue or log, acknowledge fast, process asynchronously. Never block the producer.</div>
  <div class="pflow">
CLIENT → Write API → Message Queue (Kafka) → Consumer → DB
              ↓ immediate 200 OK          ↓ batch writes
         (async ack)               TimescaleDB / Cassandra
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> Kafka for durable write buffer, batching, Cassandra for time-series, LSM-tree stores (RocksDB), write-ahead log, async processing pipelines.</div>
</div>

<div class="pattern-card" data-type="processing">
  <div class="pnumber">PATTERN 03 · PROCESSING</div>
  <div class="ptitle">Async Pipeline <span class="ptype-badge tag green">Processing</span></div>
  <div class="pcue">"ETL, batch, workflow, data transformation" → "Stages, retries, idempotency"</div>
  <div class="pdesc">Long-running operations should never block the user. Break work into stages, each stage is idempotent (safe to retry), with progress tracked and failures retried automatically.</div>
  <div class="pflow">
Upload → Queue → [Stage 1: Validate] → [Stage 2: Transform] → [Stage 3: Store]
                      ↓ retry on fail       ↓ idempotent          ↓ notify user
                  Dead Letter Queue    State stored per step    Webhook / SSE
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> Kafka or SQS, dead-letter queues, idempotency keys, distributed workflow engines (Temporal, Step Functions), progress stored in Redis.</div>
</div>

<div class="pattern-card" data-type="traffic">
  <div class="pnumber">PATTERN 04 · TRAFFIC</div>
  <div class="ptitle">Real-Time <span class="ptype-badge tag">Traffic</span></div>
  <div class="pcue">"chat, live updates, multiplayer, collaborative editing" → "In-memory, fail fast"</div>
  <div class="pdesc">Low-latency bidirectional communication. Persistent connections (WebSocket) to avoid HTTP overhead. Route users to the same server (sticky sessions) or use pub/sub to fan out messages.</div>
  <div class="pflow">
Client A ←WebSocket→ Chat Server → Pub/Sub (Redis) → Chat Server → Client B
                          ↓ message persisted async
                     Cassandra (chat history, sorted by time)
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> WebSocket / SSE, Redis pub/sub for message fan-out, presence service (heartbeat), Cassandra with time-bucket partitioning for history.</div>
</div>

<div class="pattern-card" data-type="processing">
  <div class="pnumber">PATTERN 05 · PROCESSING</div>
  <div class="ptitle">Compute-Heavy <span class="ptype-badge tag green">Processing</span></div>
  <div class="pcue">"ML inference, video transcoding, map-reduce" → "Split work, minimize coordination"</div>
  <div class="pdesc">CPU-intensive tasks should be split into independent chunks processed in parallel. Workers are stateless — divide work by chunk, not by user. Results are merged after parallel processing.</div>
  <div class="pflow">
Job Request → Job Queue → Worker Pool (scale out)
                               ↓ each worker takes a chunk
                          Object Storage (S3) → Merge → Result
                              ↑ stateless, GPU-enabled nodes
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> Worker pool with job queue, stateless workers (scale horizontally), chunk-based parallelism, MapReduce / Spark, GPU instances for ML.</div>
</div>

<div class="pattern-card" data-type="data">
  <div class="pnumber">PATTERN 06 · DATA</div>
  <div class="ptitle">Transactional <span class="ptype-badge tag purple">Data</span></div>
  <div class="pcue">"payment, booking, ledger, inventory" → "Safety first, speed second"</div>
  <div class="pdesc">Money and reservations require ACID guarantees. Use 2-phase commit or saga pattern for distributed transactions. Pessimistic locking for conflicts, idempotency keys to prevent duplicate charges.</div>
  <div class="pflow">
Payment Request → Idempotency Check → Reserve Funds (2PC) → Confirm
                       ↓ duplicate?         ↓ ACID SQL DB        ↓ release lock
                  Return existing result  Row-level lock      Audit log + notify
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> PostgreSQL / MySQL for ACID, idempotency keys (UUID per request), Saga pattern for cross-service transactions, outbox pattern for reliable event publishing.</div>
</div>

<div class="pattern-card" data-type="data">
  <div class="pnumber">PATTERN 07 · DATA</div>
  <div class="ptitle">Multi-Region <span class="ptype-badge tag purple">Data</span></div>
  <div class="pcue">"global, CDN, DR, low-latency worldwide" → "Eventual consistency + conflict resolution"</div>
  <div class="pdesc">Data must be close to users globally. Accept eventual consistency for most data. For strong consistency, route writes to a home region. Conflicts resolved with CRDTs or last-write-wins.</div>
  <div class="pflow">
User (EU) → EU Region → Async replicate → US Region
                ↓ local reads (fast)          ↓ conflict resolution
           EU replica DB             CRDTs or last-write-wins
                ↓ writes go home region (or local with vector clocks)
  </div>
</div>

<div class="pattern-card" data-type="data">
  <div class="pnumber">PATTERN 08 · DATA</div>
  <div class="ptitle">Search &amp; Filtering <span class="ptype-badge tag purple">Data</span></div>
  <div class="pcue">"search bar, autocomplete, faceted filters" → "Index for search, not storage"</div>
  <div class="pdesc">Relational DBs are poor at full-text search. Use Elasticsearch/OpenSearch as a dedicated search index. Primary DB stays the source of truth; ES is a derived, eventually consistent read model.</div>
  <div class="pflow">
Write → Primary DB → CDC / Kafka → Elasticsearch index
  Read → Elasticsearch (search) or Primary DB (by ID)
         ↓ inverted index, BM25 scoring, faceted aggregations
  </div>
  <div style="margin-top:12px;font-size:13px;color:var(--muted)"><strong>Key tactics:</strong> Elasticsearch / Solr, inverted index, CDC (Debezium) to sync DB → ES, Trie for autocomplete, pre-built indexes for common filters.</div>
</div>

<div class="pattern-card" data-type="data">
  <div class="pnumber">PATTERN 09 · DATA</div>
  <div class="ptitle">File &amp; Media <span class="ptype-badge tag purple">Data</span></div>
  <div class="pcue">"upload, streaming, sharing, video" → "Separate metadata from blobs"</div>
  <div class="pdesc">Never store binary blobs in your database. Use object storage (S3) for files, relational DB for metadata (filename, size, owner, CDN URL). Serve via CDN, upload directly from client with pre-signed URLs.</div>
  <div class="pflow">
Client → presigned S3 URL → S3 (direct upload)
                                  ↓ event (S3 trigger)
                            Lambda → save metadata to DB
Client reads → CDN (cached) ← S3 origin
  </div>
</div>

<div class="pattern-card" data-type="ux">
  <div class="pnumber">PATTERN 10 · UX</div>
  <div class="ptitle">Recommendation <span class="ptype-badge tag amber">UX</span></div>
  <div class="pcue">"personalize, watch next, you may also like" → "Offline heavy, online fast"</div>
  <div class="pdesc">Real-time ML inference at scale is expensive. Pre-compute recommendations offline (batch jobs). Serve from a fast key-value store at request time. Use a small online model for re-ranking.</div>
  <div class="pflow">
Offline (batch, hours): user_events → Spark ML → recommendations table
                                                         ↓ store in Redis
Online (ms):  GET /recs/:user_id → Redis lookup → return pre-computed list
              optional: lightweight re-ranking model (context, recency)
  </div>
</div>

<div class="pattern-card" data-type="ux">
  <div class="pnumber">PATTERN 11 · UX</div>
  <div class="ptitle">Events &amp; Notifications <span class="ptype-badge tag amber">UX</span></div>
  <div class="pcue">"push, email, SMS, in-app alert" → "Events in, notifications out"</div>
  <div class="pdesc">Decouple event producers from notification senders. Different channels (push, email, SMS) have different delivery semantics. Rate limit to avoid spam. Track delivery status per notification.</div>
  <div class="pflow">
Event (order placed) → Event Bus (Kafka) → Notification Service
                                                   ↓ fan out
                                    Push (FCM/APNs) | Email (SES) | SMS (Twilio)
                                                   ↓ track delivery
                                         notification_log table + retry queue
  </div>
</div>

</div><!-- end pattern-list -->


${quizHTML('sd-patterns', [
  { q: "A social media feed has 100:1 read/write ratio. Which pattern?", opts: ["Write-Heavy", "Read-Heavy", "Transactional", "Real-Time"], ans: 1, exp: "Read-Heavy pattern. Solution: Redis cache in front of DB, read replicas, CDN for media. The mantra is 'don't make the DB do work reads can avoid'." },
  { q: "Payment system — most critical requirement?", opts: ["High throughput", "ACID transactions + idempotency keys", "Eventual consistency", "Low latency CDN"], ans: 1, exp: "Transactional pattern. Payments need ACID guarantees (SQL), idempotency keys to prevent duplicate charges, and row-level locking to prevent double-spend." },
  { q: "Video transcoding of uploaded files. Which pattern?", opts: ["Real-Time Processing", "Async/Event-Driven Processing", "Read-Heavy", "Write-Heavy"], ans: 1, exp: "Async/Event-Driven. Video transcoding is slow (minutes). Pattern: upload → S3 → event triggers → Kafka/SQS → worker pool → transcode to multiple resolutions → store back in S3." },
  { q: "'Accept fast, process later' describes which pattern?", opts: ["Synchronous Request-Reply", "Write-Behind / Async Queue", "Cache-Aside", "Read-Through"], ans: 1, exp: "Write-Behind / Async Queue. Write to a fast queue (Kafka/SQS), return 202 Accepted immediately, process asynchronously. Used for: email sending, analytics ingestion, order processing." },
  { q: "IoT sensors sending 1M events/sec. What pattern handles ingestion?", opts: ["REST API with synchronous DB writes", "Write-Heavy streaming ingestion with time-series DB", "Read-Heavy with heavy caching", "Transactional with 2PC"], ans: 1, exp: "Write-Heavy streaming. Ingest via Kafka (buffer spikes), write to time-series DB (InfluxDB/TimescaleDB optimised for sequential writes). Never write 1M/sec directly to a relational DB." },
  { q: "Global CDN is an example of which pattern?", opts: ["Geo-Distributed / Edge pattern", "Read-Heavy Cache-Aside", "Write-Through", "Async Processing"], ans: 0, exp: "Geo-Distributed / Edge pattern. Cache static assets at edge nodes close to users. Reduces origin server load, lowers latency (100ms → 5ms). CloudFront, Fastly, Cloudflare all implement this." },
  { q: "Which pattern uses fan-out on write?", opts: ["Read-Heavy (fan-out on read)", "Social Graph / Feed (fan-out on write)", "Transactional", "Event Sourcing"], ans: 1, exp: "Fan-out on write: when a celebrity posts, pre-compute and push to all followers' feed caches immediately. Expensive on write (1 post → 10M writes) but blazing fast reads. Twitter uses a hybrid: fan-out for regular users, fan-in for celebrities." },
  { q: "Circuit breaker pattern prevents what?", opts: ["Data corruption", "Cascading failures — one slow service taking down all dependents", "Memory leaks", "SQL injection"], ans: 1, exp: "Circuit breaker: after N failures, open the circuit → fail fast (return cached/default response immediately instead of waiting). Prevents thread pool exhaustion spreading a failure to all upstream services. Resilience4j, Hystrix implement this." },
  { q: "Event sourcing stores what instead of current state?", opts: ["Snapshots every minute", "Every event/change that happened — current state derived by replaying events", "Only the latest 100 events", "Compressed binary state"], ans: 1, exp: "Event sourcing: append OrderCreated, ItemAdded, PaymentMade events. Current state = replay. Benefits: full audit log, time travel, event replay for new projections. Used by Kafka Streams, Axon Framework, banking systems." }
])}

`;

// ═══════════════════════════════════════════════
// SD — BUILDING BLOCKS
// ═══════════════════════════════════════════════
pages['sd-building'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design</div>
  <h1 class="page-title">Building Blocks</h1>
  <p class="page-subtitle">The core primitives of every distributed system. Know when to use each and the trade-offs.</p>
  ${revisionControls('sd-building')}
</div>

<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px">
  ${['load-balancing','caching','databases','cap','sharding','replication','acid','indexes','scaling','apis','auth'].map((s,i)=>`<button class="pill-tab${i===0?' active':''}" onclick="showBlock('${s}',this)">${['Load Balancing','Caching','SQL vs NoSQL','CAP & PACELC','Sharding','Replication','ACID','Indexes','Scaling','APIs','Auth'][i]}</button>`).join('')}
</div>

<div id="block-load-balancing" class="block-section">
  <h2 class="section-title">Load Balancing, Reverse Proxy & API Gateway</h2>
  <table class="data-table">
    <tr><th>Component</th><th>What it does</th><th>Layer</th><th>Key Features</th><th>Examples</th></tr>
    <tr><td><strong>Load Balancer</strong></td><td>Distributes traffic across multiple server instances</td><td>L4 or L7</td><td>Health checks, failover, sticky sessions, SSL termination</td><td>AWS ALB/NLB, nginx, HAProxy</td></tr>
    <tr><td><strong>Reverse Proxy</strong></td><td>Forwards client requests to backend servers, hides server identity</td><td>L7</td><td>Load balancing + SSL termination + caching + compression</td><td>nginx, Caddy, Envoy, Cloudflare</td></tr>
    <tr><td><strong>API Gateway</strong></td><td>Manages, secures, and routes API calls to microservices</td><td>L7 (application)</td><td>Auth, rate limiting, routing, transformation, analytics, protocol translation</td><td>Kong, AWS API GW, Apigee, Traefik</td></tr>
  </table>

  <div class="callout callout-blue">
    <strong>Forward Proxy vs Reverse Proxy:</strong> Forward proxy acts for the <em>client</em> — hides client IP, content filtering, corporate internet control. Reverse proxy acts for the <em>server</em> — hides servers, load balancing, SSL termination. nginx is almost always used as a reverse proxy.
  </div>

  <h2 class="section-title" style="margin-top:20px">Typical Architecture Flow</h2>
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2">
    Internet → <strong>Load Balancer</strong> (distribute across API GW instances)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <strong>API Gateway</strong> (auth, rate limit, route, transform)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <strong>Microservices</strong> → internal Load Balancer → service instances<br>
    Static/media → <strong>CDN</strong> edge nodes (bypass all the above)
  </div>

  <h2 class="section-title" style="margin-top:20px">Load Balancing Algorithms</h2>
  <table class="data-table">
    <tr><th>Algorithm</th><th>How it works</th><th>Best for</th><th>Downside</th></tr>
    <tr><td><strong>Round Robin</strong></td><td>Distribute requests in order</td><td>Stateless services, equal-capacity servers</td><td>Ignores server load</td></tr>
    <tr><td><strong>Least Connections</strong></td><td>Route to server with fewest active connections</td><td>Long-lived connections (WebSocket, DB)</td><td>Slight overhead</td></tr>
    <tr><td><strong>Weighted Round Robin</strong></td><td>More powerful servers get proportionally more requests</td><td>Heterogeneous servers</td><td>Manual weight tuning</td></tr>
    <tr><td><strong>IP Hash</strong></td><td>Hash of client IP → same server every time</td><td>Sticky sessions (stateful apps)</td><td>Uneven if IPs aren't distributed</td></tr>
    <tr><td><strong>Random</strong></td><td>Pick a server randomly</td><td>Homogeneous servers, low traffic</td><td>Statistical variance</td></tr>
  </table>

  <div class="callout callout-amber">
    <strong>L4 vs L7:</strong> L4 (Transport) routes by IP/port — fast, no content inspection, good for TCP/UDP. L7 (Application) routes by URL path, headers, cookies — enables path-based routing, A/B testing, SSL termination, request transformation. Use L7 (nginx, AWS ALB) for modern microservices.
  </div>

  <div class="callout callout-green">
    <strong>API Gateway vs Reverse Proxy:</strong> Reverse proxy is simpler — load balancing, SSL, caching. API Gateway adds application-level intelligence — auth, rate limiting per user/key, request/response transformation, versioning, analytics. Use API Gateway when you need cross-cutting API concerns. Use Reverse Proxy for general server efficiency.
  </div>
</div>

<div id="block-caching" class="block-section" style="display:none">
  <h2 class="section-title">Caching</h2>
  <table class="data-table">
    <tr><th>Strategy</th><th>Flow</th><th>Best for</th><th>Risk</th></tr>
    <tr><td><strong>Cache-Aside</strong></td><td>App checks cache → miss → load DB → write cache</td><td>General purpose, read-heavy</td><td>Cache stampede on miss</td></tr>
    <tr><td><strong>Write-Through</strong></td><td>Write to cache AND DB synchronously</td><td>Data that's read immediately after write</td><td>Write latency doubles</td></tr>
    <tr><td><strong>Write-Behind</strong></td><td>Write to cache, async flush to DB</td><td>Write-heavy, can tolerate data loss</td><td>Data loss on cache crash</td></tr>
    <tr><td><strong>Read-Through</strong></td><td>Cache sits in front, loads from DB on miss automatically</td><td>Transparent caching (CDN, Varnish)</td><td>First request always slow</td></tr>
  </table>
  <div class="callout callout-amber">
    <strong>Eviction policies:</strong> LRU (most common), LFU (frequency-based), TTL (time-based expiry), FIFO. <strong>Cache stampede</strong> fix: mutex lock on miss, probabilistic early expiry, or background refresh.
  </div>
</div>

<div id="block-databases" class="block-section" style="display:none">
  <h2 class="section-title">SQL vs NoSQL</h2>
  <table class="data-table">
    <tr><th></th><th>SQL (Relational)</th><th>NoSQL (Document/KV/Wide-col)</th></tr>
    <tr><td><strong>Structure</strong></td><td>Fixed schema, tables, rows</td><td>Flexible schema, JSON docs / KV</td></tr>
    <tr><td><strong>ACID</strong></td><td>Full ACID ✅</td><td>Eventual consistency (usually)</td></tr>
    <tr><td><strong>Scaling</strong></td><td>Scale up (vertical) or read replicas</td><td>Horizontal sharding built-in</td></tr>
    <tr><td><strong>Query</strong></td><td>Powerful JOINs, aggregations</td><td>Simple key lookups, limited joins</td></tr>
    <tr><td><strong>Use when</strong></td><td>Relationships, transactions, reporting</td><td>High write throughput, flexible schema</td></tr>
    <tr><td><strong>Examples</strong></td><td>PostgreSQL, MySQL, Aurora</td><td>MongoDB, Cassandra, DynamoDB, Redis</td></tr>
  </table>
  <div class="callout callout-blue"><strong>Rule of thumb:</strong> If you need transactions or complex queries → SQL. If you need massive horizontal scale or schema flexibility → NoSQL. Most systems use BOTH.</div>
</div>

<div id="block-cap" class="block-section" style="display:none">
  <h2 class="section-title">CAP Theorem &amp; PACELC</h2>

  <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin:16px 0;overflow-x:auto">
<svg viewBox="0 0 580 280" style="width:100%;max-width:580px;display:block;margin:0 auto">
  <defs>
    <marker id="pa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#b45309"/></marker>
  </defs>
  <!-- Partition diamond -->
  <polygon points="290,20 350,70 290,120 230,70" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text x="290" y="65" text-anchor="middle" font-size="14" font-weight="700" fill="#92400e">Partition?</text>
  <!-- Yes branch left -->
  <line x1="230" y1="70" x2="110" y2="160" stroke="#b45309" stroke-width="2" marker-end="url(#pa)"/>
  <text x="155" y="115" text-anchor="middle" font-size="12" fill="#92400e">Yes</text>
  <!-- No branch right -->
  <line x1="350" y1="70" x2="470" y2="160" stroke="#b45309" stroke-width="2" marker-end="url(#pa)"/>
  <text x="425" y="115" text-anchor="middle" font-size="12" fill="#92400e">No</text>
  <!-- CAP group -->
  <rect x="10" y="160" width="240" height="100" rx="10" fill="#eef2ff" stroke="#6366f1" stroke-width="1.5"/>
  <text x="130" y="185" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">CAP Theorem</text>
  <circle cx="70" cy="225" r="30" fill="#65a30d" opacity="0.9"/>
  <text x="70" y="221" text-anchor="middle" font-size="11" font-weight="700" fill="white">A</text>
  <text x="70" y="235" text-anchor="middle" font-size="10" fill="white">vailability</text>
  <circle cx="190" cy="225" r="30" fill="#7c3aed" opacity="0.9"/>
  <text x="190" y="221" text-anchor="middle" font-size="11" font-weight="700" fill="white">C</text>
  <text x="190" y="235" text-anchor="middle" font-size="10" fill="white">onsistency</text>
  <!-- PACELC group -->
  <rect x="330" y="160" width="240" height="100" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="450" y="185" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">PACELC (Else)</text>
  <circle cx="390" cy="225" r="30" fill="#db2777" opacity="0.9"/>
  <text x="390" y="221" text-anchor="middle" font-size="11" font-weight="700" fill="white">L</text>
  <text x="390" y="235" text-anchor="middle" font-size="10" fill="white">atency</text>
  <circle cx="510" cy="225" r="30" fill="#7c3aed" opacity="0.9"/>
  <text x="510" y="221" text-anchor="middle" font-size="11" font-weight="700" fill="white">C</text>
  <text x="510" y="235" text-anchor="middle" font-size="10" fill="white">onsistency</text>
  <!-- Labels -->
  <rect x="10" y="265" width="240" height="14" rx="3" fill="none"/>
  <text x="130" y="275" text-anchor="middle" font-size="10" fill="#6b7280">Partition → choose A or C</text>
  <rect x="330" y="265" width="240" height="14" rx="3" fill="none"/>
  <text x="450" y="275" text-anchor="middle" font-size="10" fill="#6b7280">No partition → choose L or C</text>
  <!-- PACELC brace -->
  <line x1="10" y1="280" x2="570" y2="280" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="290" y="295" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">PACELC Theorem</text>
</svg>
</div>

<h3 style="font-size:15px;font-weight:700;margin:16px 0 10px">Core Concepts</h3>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">
    <div style="background:#dbeafe;border:2px solid #2563eb;border-radius:10px;padding:14px;text-align:center">
      <div style="font-size:22px;font-weight:900;color:#1e40af;margin-bottom:6px">C</div>
      <div style="font-weight:700;color:#1e40af;margin-bottom:4px">Consistency</div>
      <div style="font-size:13px;color:#1d4ed8">Every user sees the same data at the same time</div>
    </div>
    <div style="background:#dcfce7;border:2px solid #16a34a;border-radius:10px;padding:14px;text-align:center">
      <div style="font-size:22px;font-weight:900;color:#065f46;margin-bottom:6px">A</div>
      <div style="font-weight:700;color:#065f46;margin-bottom:4px">Availability</div>
      <div style="font-size:13px;color:#166534">Every request receives a response (success or failure)</div>
    </div>
    <div style="background:#fae8ff;border:2px solid #a855f7;border-radius:10px;padding:14px;text-align:center">
      <div style="font-size:22px;font-weight:900;color:#6b21a8;margin-bottom:6px">P</div>
      <div style="font-weight:700;color:#6b21a8;margin-bottom:4px">Partition Tolerance</div>
      <div style="font-size:13px;color:#7e22ce">System remains functional despite network failures between nodes</div>
    </div>
  </div>

  <div class="callout callout-amber">
    <strong>The Design Trade-off:</strong> In distributed systems, <strong>partition tolerance is non-negotiable</strong> — networks always fail eventually. The real choice is between Consistency and Availability when a partition occurs.
  </div>

  <h3 style="font-size:15px;font-weight:700;margin:16px 0 10px">When to Choose CP vs AP</h3>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px">
    <div style="background:#fef2f2;border:2px solid #dc2626;border-radius:10px;padding:14px">
      <div style="font-weight:700;font-size:14px;color:#991b1b;margin-bottom:8px">Choose CP (Consistency)</div>
      <div style="font-size:13px;line-height:1.9;color:#374151">
        When stale data leads to catastrophic outcomes:<br>
        • Double-booking seats on a flight<br>
        • Inventory errors on Amazon (selling out-of-stock items)<br>
        • Financial transaction inaccuracies<br>
        • Healthcare records or prescriptions
      </div>
      <div style="margin-top:10px;font-size:12px;color:#6b7280">Use: PostgreSQL, MySQL, etcd, ZooKeeper</div>
    </div>
    <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:14px">
      <div style="font-weight:700;font-size:14px;color:#065f46;margin-bottom:8px">Choose AP (Availability)</div>
      <div style="font-size:13px;line-height:1.9;color:#374151">
        When eventual consistency is acceptable:<br>
        • Social media posts and user profiles<br>
        • Netflix content viewing<br>
        • Yelp restaurant search results<br>
        • Product recommendations
      </div>
      <div style="margin-top:10px;font-size:12px;color:#6b7280">Use: Cassandra, DynamoDB, CouchDB</div>
    </div>
  </div>

  <h3 style="font-size:15px;font-weight:700;margin:16px 0 10px">PACELC — The Extended Model</h3>
  <div class="callout callout-blue">
    <strong>PACELC:</strong> If Partition → choose Availability or Consistency. <strong>Else</strong> (no partition) → choose Latency or Consistency. Even without failures, there's a latency vs consistency trade-off.
  </div>
  <table class="data-table">
    <tr><th>System</th><th>CAP</th><th>PACELC</th><th>Why</th></tr>
    <tr><td>Cassandra</td><td>AP</td><td>PA/EL</td><td>Tunable: ONE, QUORUM, ALL consistency levels</td></tr>
    <tr><td>DynamoDB</td><td>AP</td><td>PA/EL</td><td>Eventual by default, strong reads opt-in (+latency)</td></tr>
    <tr><td>ZooKeeper/etcd</td><td>CP</td><td>PC/EC</td><td>Raft/ZAB consensus, stops serving on partition</td></tr>
    <tr><td>MongoDB (primary)</td><td>CP</td><td>PC/EC</td><td>Primary holds truth, secondaries may lag</td></tr>
    <tr><td>PostgreSQL</td><td>CP</td><td>PC/EC</td><td>WAL-based, strict durability</td></tr>
    <tr><td>Redis (async replication)</td><td>AP</td><td>PA/EL</td><td>Speed over durability, async replica sync</td></tr>
    <tr><td>HBase/BigTable</td><td>CP</td><td>PC/EC</td><td>Always consistent, higher latency</td></tr>
  </table>

  <div class="callout callout-purple">
    <strong>Senior-level nuance:</strong> A single system can have mixed requirements per feature. Ticketmaster needs CP for booking (can't double-book) but AP for search (stale seat counts are fine). Design at the feature level, not system level.
    <br><br>
    <strong>Consistency models spectrum:</strong> Strong consistency → Causal consistency → Read-your-own-writes → Monotonic reads → Eventual consistency. Each relaxation gains performance.
  </div>

<h2 class="section-title" style="margin-top:24px">SAGA Pattern — Distributed Transactions</h2>
<div class="callout callout-amber">
  <strong>Problem:</strong> 2-Phase Commit (2PC) holds locks across services — slow and a single point of failure. <strong>Saga</strong> breaks a distributed transaction into local steps with compensating transactions for rollback. No cross-service locks.
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0">
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#065f46;margin-bottom:8px">Choreography Saga (Event-Driven)</div>
    <div style="font-family:'DM Mono',monospace;font-size:12px;line-height:1.9;color:#374151">
      OrderService: OrderPlaced →<br>
      PaymentService: PaymentProcessed →<br>
      InventoryService: InventoryReserved →<br>
      ShippingService: ShipmentScheduled<br><br>
      On failure: compensating events run in reverse
    </div>
    <div style="font-size:12px;color:#6b7280;margin-top:8px">✅ Decoupled. ❌ Hard to trace the flow.</div>
  </div>
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#1e40af;margin-bottom:8px">Orchestration Saga (Central Coordinator)</div>
    <div style="font-family:'DM Mono',monospace;font-size:12px;line-height:1.9;color:#374151">
      SagaOrchestrator:<br>
      1. call PaymentService.charge() <br>
      2. call Inventory.reserve() <br>
         on fail → refund payment<br>
      3. call Shipping.schedule()<br>
         on fail → release inventory + refund
    </div>
    <div style="font-size:12px;color:#6b7280;margin-top:8px">✅ Clear flow. ❌ Orchestrator can be bottleneck.</div>
  </div>
</div>
<div class="callout callout-blue">
  <strong>SAGA vs 2PC:</strong> 2PC holds distributed locks during both phases — slow, blocking, single point of failure if coordinator crashes. SAGA: each step is a local transaction; rollback via compensating transactions. No locks. Much better availability.
</div>
</div>

<div id="block-sharding" class="block-section" style="display:none">
  <h2 class="section-title">Sharding (Horizontal Partitioning)</h2>
  <div class="callout callout-blue">
    Split data across multiple DB nodes. Each node holds a <strong>shard</strong> — a subset of the data. Enables linear scale-out.
  </div>
  <table class="data-table">
    <tr><th>Strategy</th><th>How</th><th>Pros</th><th>Cons</th></tr>
    <tr><td><strong>Range-based</strong></td><td>Shard by value range (A–M, N–Z)</td><td>Range queries efficient</td><td>Hot spots (e.g. all new users on latest shard)</td></tr>
    <tr><td><strong>Hash-based</strong></td><td>shard = hash(key) % N</td><td>Uniform distribution</td><td>Range queries require scatter-gather</td></tr>
    <tr><td><strong>Consistent Hashing</strong></td><td>Keys mapped on a ring; add/remove nodes shifts minimal keys</td><td>Minimal reshuffling on scale</td><td>More complex implementation</td></tr>
    <tr><td><strong>Directory-based</strong></td><td>Lookup service maps key → shard</td><td>Flexible remapping</td><td>Lookup service = bottleneck</td></tr>
    <tr><td><strong>Geo-based</strong></td><td>Shard by user location</td><td>Data locality, latency</td><td>Uneven if users not distributed</td></tr>
  </table>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">Hot Spot Problem &amp; Resharding <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="code-block"><pre>// Hot spot: celebrity user with millions of followers
// key = user_id → all requests hit same shard

// Fix 1: Add random suffix to spread writes
key = user_id + "_" + random(0, 100)  // 100 sub-shards

// Fix 2: Consistent hashing with virtual nodes
// Each physical node owns multiple virtual nodes (100-200)
// Adding a server: picks up some virtual nodes from each existing server

// Resharding (growing from N to 2N shards):
// Stop writes → dump each shard → rehash → restart
// OR: use consistent hashing (only N/2N of keys move)</pre></div>
      </div>
    </div>
  </div>

<h2 class="section-title" style="margin-top:24px">Consistent Hashing</h2>
<div class="callout callout-green">
  <strong>Problem with naive hash(key) % N:</strong> Adding/removing a node changes N, causing almost all keys to rehash — catastrophic cache miss storm. Consistent hashing: keys and nodes sit on a ring (0–2³²). Each key is served by the first node clockwise. Adding a node only affects ~1/N keys.
</div>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2">
  Hash ring (0 → 2³²):<br>
  &nbsp;&nbsp;Node A at position 100 → Node B at 250 → Node C at 400 → back to A<br>
  Key "user:123" hashes to 180 → served by Node B (next clockwise)<br><br>
  Add Node D at position 320:<br>
  &nbsp;&nbsp;Only keys between 250 and 320 move from B to D (~1/N of all keys)<br>
  &nbsp;&nbsp;All other keys unaffected ✅
</div>
<div class="callout callout-amber">
  <strong>Virtual nodes:</strong> Each physical node owns 100-200 positions on the ring. Prevents hot spots when servers have different capacities. Adding a server: picks up some virtual nodes from each existing server. Used by: Cassandra, DynamoDB, CDNs, Memcached.
</div>
</div>

<div id="block-replication" class="block-section" style="display:none">
  <h2 class="section-title">Replication</h2>
  <table class="data-table">
    <tr><th>Type</th><th>How</th><th>Pros</th><th>Cons</th><th>Use case</th></tr>
    <tr><td><strong>Single Leader</strong></td><td>Writes to leader, async replicated to followers</td><td>Simple, strong consistency on reads from leader</td><td>Leader bottleneck, failover lag</td><td>Most RDBs (MySQL, Postgres)</td></tr>
    <tr><td><strong>Multi-Leader</strong></td><td>Multiple nodes accept writes, sync with each other</td><td>Write availability, multi-region</td><td>Conflict resolution needed</td><td>Multi-region apps, CRDTs</td></tr>
    <tr><td><strong>Leaderless</strong></td><td>Clients write to multiple nodes (quorum W+R &gt; N)</td><td>High availability, no single point of failure</td><td>Conflict resolution, eventual consistency</td><td>Cassandra, DynamoDB</td></tr>
  </table>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">Quorum: W + R &gt; N explained <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="code-block"><pre>N = total replicas (e.g. 3)
W = nodes that must confirm a write
R = nodes that must respond to a read

If W + R > N → at least 1 node overlaps → always read latest write

Common configs for N=3:
  W=2, R=2 → strong consistency (balanced)
  W=1, R=3 → fast writes, slow reads
  W=3, R=1 → slow writes, fast reads
  W=1, R=1 → fastest, eventual consistency only

Cassandra: configurable per query
  CONSISTENCY ONE   → fastest, least durable
  CONSISTENCY QUORUM → balanced (default for prod)
  CONSISTENCY ALL   → slowest, strongest</pre></div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">Replication Lag &amp; Read-Your-Writes <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="code-block"><pre>// Problem: User posts a tweet, reads from replica, sees old data

// Fix 1: Route user's own reads to leader for 1 minute after write
// Fix 2: Track replication timestamp; only read replica if caught up
// Fix 3: Monotonic reads — always read from same replica per session

// Detecting replication lag (MySQL):
SHOW SLAVE STATUS\G  -- Seconds_Behind_Master
// Alert if lag > threshold (e.g. > 30 seconds)</pre></div>
      </div>
    </div>
  </div>


<h2 class="section-title" style="margin-top:24px">Sync vs Async Replication</h2>
<table class="data-table">
  <tr><th>Type</th><th>How</th><th>Durability</th><th>Write Latency</th><th>Availability</th></tr>
  <tr><td><strong>Synchronous</strong></td><td>Write confirmed only when ALL replicas ack</td><td>Strongest — no data loss</td><td>High — waits for all replicas</td><td>Lower — one slow replica blocks all</td></tr>
  <tr><td><strong>Asynchronous</strong></td><td>Write confirmed after primary writes; replicas catch up later</td><td>Risk of data loss if primary crashes before replication</td><td>Low — doesn't wait</td><td>High — primary can handle writes alone</td></tr>
  <tr><td><strong>Semi-synchronous</strong></td><td>Write confirmed when at least one replica acks</td><td>Good balance</td><td>Medium</td><td>Good balance</td></tr>
</table>
<div class="callout callout-blue">
  <strong>MySQL semi-sync:</strong> Default in production MySQL — at least one replica must confirm before commit. Prevents data loss on primary failure while maintaining reasonable write latency. PostgreSQL synchronous_commit=on forces full sync.
</div>

<h2 class="section-title" style="margin-top:20px">Replication Strategies Summary</h2>
<table class="data-table">
  <tr><th>Strategy</th><th>Writes</th><th>Reads</th><th>Conflict</th><th>Best for</th></tr>
  <tr><td><strong>Single Leader</strong></td><td>Leader only</td><td>Leader or replicas</td><td>None (single writer)</td><td>Most RDBMS, read-heavy apps</td></tr>
  <tr><td><strong>Multi-Leader</strong></td><td>Any leader (multiple DCs)</td><td>Local leader</td><td>Must resolve (last-write-wins, CRDT)</td><td>Multi-region, offline-capable apps</td></tr>
  <tr><td><strong>Leaderless</strong></td><td>Any node (quorum)</td><td>Any node (quorum)</td><td>Handled by versioning/CRDTs</td><td>Cassandra, DynamoDB — max availability</td></tr>
</table>

<h2 class="section-title" style="margin-top:20px">Replication Strategies Summary</h2>
<table class="data-table">
  <tr><th>Strategy</th><th>Writes</th><th>Reads</th><th>Conflict</th><th>Best for</th></tr>
  <tr><td><strong>Single Leader</strong></td><td>Leader only</td><td>Leader or replicas</td><td>None (single writer)</td><td>Most RDBMS, read-heavy apps</td></tr>
  <tr><td><strong>Multi-Leader</strong></td><td>Any leader (multiple DCs)</td><td>Local leader</td><td>Must resolve (last-write-wins, CRDT)</td><td>Multi-region, offline-capable apps</td></tr>
  <tr><td><strong>Leaderless</strong></td><td>Any node (quorum)</td><td>Any node (quorum)</td><td>Handled by versioning/CRDTs</td><td>Cassandra, DynamoDB — max availability</td></tr>
</table>
</div><div id="block-acid" class="block-section" style="display:none">
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:16px 0">
  <div style="background:#fffbeb;border:2px solid #d97706;border-radius:10px;padding:14px;display:flex;gap:10px;align-items:flex-start">
    <div style="background:#16a34a;color:white;border-radius:6px;padding:6px 12px;font-weight:900;font-size:16px;min-width:36px;text-align:center">A</div>
    <div><div style="font-weight:700;color:#065f46">Atomicity</div><div style="font-size:13px;color:#374151;margin-top:3px">Each transaction fully completes or not at all — no partial updates</div></div>
  </div>
  <div style="background:#fffbeb;border:2px solid #d97706;border-radius:10px;padding:14px;display:flex;gap:10px;align-items:flex-start">
    <div style="background:#7c3aed;color:white;border-radius:6px;padding:6px 12px;font-weight:900;font-size:16px;min-width:36px;text-align:center">C</div>
    <div><div style="font-weight:700;color:#5b21b6">Consistency</div><div style="font-size:13px;color:#374151;margin-top:3px">Transaction brings DB from one valid state to another — constraints never violated</div></div>
  </div>
  <div style="background:#fffbeb;border:2px solid #d97706;border-radius:10px;padding:14px;display:flex;gap:10px;align-items:flex-start">
    <div style="background:#0891b2;color:white;border-radius:6px;padding:6px 12px;font-weight:900;font-size:16px;min-width:36px;text-align:center">I</div>
    <div><div style="font-weight:700;color:#0e7490">Isolation</div><div style="font-size:13px;color:#374151;margin-top:3px">Concurrent transactions do not interfere with each other</div></div>
  </div>
  <div style="background:#fffbeb;border:2px solid #d97706;border-radius:10px;padding:14px;display:flex;gap:10px;align-items:flex-start">
    <div style="background:#be185d;color:white;border-radius:6px;padding:6px 12px;font-weight:900;font-size:16px;min-width:36px;text-align:center">D</div>
    <div><div style="font-weight:700;color:#9d174d">Durability</div><div style="font-size:13px;color:#374151;margin-top:3px">Committed data persists — survives crashes and power failures</div></div>
  </div>
</div>

<h2 class="section-title">ACID Properties</h2>
  <table class="data-table">
    <tr><th>Property</th><th>Meaning</th><th>Example</th><th>How DB enforces</th></tr>
    <tr><td><strong>Atomicity</strong></td><td>All or nothing — transaction fully succeeds or fully rolls back</td><td>Bank transfer: debit + credit both happen or neither does</td><td>Write-Ahead Log (WAL), undo log</td></tr>
    <tr><td><strong>Consistency</strong></td><td>Transaction brings DB from one valid state to another</td><td>Account balance can't go negative (constraint)</td><td>Constraints, triggers, foreign keys</td></tr>
    <tr><td><strong>Isolation</strong></td><td>Concurrent transactions don't interfere with each other</td><td>Two users booking the last seat see consistent state</td><td>Locks, MVCC (Multi-Version Concurrency Control)</td></tr>
    <tr><td><strong>Durability</strong></td><td>Committed transactions survive crashes</td><td>Payment confirmed = it's in DB even after power cut</td><td>WAL flush to disk before commit ACK</td></tr>
  </table>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">Isolation Levels — Read Phenomena <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <table class="data-table">
          <tr><th>Isolation Level</th><th>Dirty Read</th><th>Non-Repeatable Read</th><th>Phantom Read</th><th>Performance</th></tr>
          <tr><td>READ UNCOMMITTED</td><td>✅ possible</td><td>✅ possible</td><td>✅ possible</td><td>Fastest</td></tr>
          <tr><td>READ COMMITTED</td><td>❌ prevented</td><td>✅ possible</td><td>✅ possible</td><td>Fast (default Postgres)</td></tr>
          <tr><td>REPEATABLE READ</td><td>❌</td><td>❌ prevented</td><td>✅ possible</td><td>Medium (default MySQL)</td></tr>
          <tr><td>SERIALIZABLE</td><td>❌</td><td>❌</td><td>❌ prevented</td><td>Slowest</td></tr>
        </table>
        <div class="callout callout-amber">Most apps use READ COMMITTED. Use SERIALIZABLE for financial transactions. MVCC (Postgres, MySQL InnoDB) achieves high isolation without locking readers.</div>
      </div>
    </div>
  </div>


<h2 class="section-title" style="margin-top:24px">BASE — The Alternative to ACID</h2>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:14px 0">
  <div style="background:#fff7ed;border:2px solid #ea580c;border-radius:10px;padding:14px;text-align:center">
    <div style="font-size:20px;font-weight:900;color:#c2410c;margin-bottom:4px">BA</div>
    <div style="font-weight:700;color:#c2410c;margin-bottom:6px">Basically Available</div>
    <div style="font-size:13px;color:#374151">System always responds — even if data may be stale</div>
  </div>
  <div style="background:#eff6ff;border:2px solid #3b82f6;border-radius:10px;padding:14px;text-align:center">
    <div style="font-size:20px;font-weight:900;color:#1d4ed8;margin-bottom:4px">S</div>
    <div style="font-weight:700;color:#1d4ed8;margin-bottom:6px">Soft State</div>
    <div style="font-size:13px;color:#374151">State changes over time even without new input as replicas sync</div>
  </div>
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:14px;text-align:center">
    <div style="font-size:20px;font-weight:900;color:#065f46;margin-bottom:4px">E</div>
    <div style="font-weight:700;color:#065f46;margin-bottom:6px">Eventually Consistent</div>
    <div style="font-size:13px;color:#374151">All replicas converge to the same value — given no new writes</div>
  </div>
</div>
<table class="data-table">
  <tr><th>Aspect</th><th>ACID</th><th>BASE</th></tr>
  <tr><td>Consistency</td><td>Strong — immediately consistent</td><td>Eventual — temporarily diverged is OK</td></tr>
  <tr><td>Availability</td><td>May block to maintain consistency</td><td>Always available, serves possibly stale data</td></tr>
  <tr><td>Scalability</td><td>Harder — coordination overhead</td><td>Designed for linear horizontal scale</td></tr>
  <tr><td>Developer burden</td><td>Low — DB enforces all rules</td><td>High — app must handle conflicts</td></tr>
  <tr><td>Best for</td><td>Finance, bookings, inventory, healthcare</td><td>Social media, analytics, caching, IoT</td></tr>
  <tr><td>Examples</td><td>PostgreSQL, MySQL, Oracle, SQL Server</td><td>Cassandra, DynamoDB, MongoDB, Redis</td></tr>
</table>
<div class="callout callout-amber">
  <strong>Real systems blend both:</strong> Use ACID (PostgreSQL) for payments and inventory. Use BASE (Redis/Cassandra) for caching, session storage, and analytics. Don't choose globally — choose per feature.
</div>

</div><div id="block-indexes" class="block-section" style="display:none">
  <h2 class="section-title">Database Indexes</h2>
  <div class="callout callout-blue">
    An index is a separate data structure (B-Tree or Hash) that enables fast lookups without a full table scan. <strong>Trade-off:</strong> faster reads, slower writes (index must be updated on insert/update/delete).
  </div>
  <table class="data-table">
    <tr><th>Type</th><th>Structure</th><th>Best for</th><th>Supports range?</th></tr>
    <tr><td><strong>B-Tree</strong></td><td>Balanced tree</td><td>Range queries, ORDER BY, most queries</td><td>✅ Yes</td></tr>
    <tr><td><strong>Hash</strong></td><td>Hash map</td><td>Exact equality lookups only</td><td>❌ No</td></tr>
    <tr><td><strong>Composite</strong></td><td>B-Tree on multiple cols</td><td>Multi-column WHERE clauses</td><td>✅ Leftmost prefix</td></tr>
    <tr><td><strong>Covering</strong></td><td>Index includes all query columns</td><td>Index-only scans (no table access)</td><td>✅</td></tr>
    <tr><td><strong>Partial</strong></td><td>Index with WHERE clause</td><td>Sparse data (e.g. WHERE status='active')</td><td>✅</td></tr>
    <tr><td><strong>Full-text</strong></td><td>Inverted index</td><td>Text search (LIKE '%..%' → use this instead)</td><td>N/A</td></tr>
  </table>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">When to add an index &amp; how to use EXPLAIN <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="code-block"><pre>-- Add index: columns in WHERE, JOIN ON, ORDER BY, GROUP BY
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_order_user_date ON orders(user_id, created_at); -- composite

-- EXPLAIN to check if index is used
EXPLAIN SELECT * FROM orders WHERE user_id=5 AND created_at > '2024-01-01';
-- Look for: "type: ref" (good) vs "type: ALL" (full table scan = bad)
-- "Using index" in Extra = covering index (best!)

-- Index selectivity: high cardinality = better index candidate
-- Bad: index on boolean (only 2 values) 
-- Good: index on email (millions of unique values)

-- Composite index rule: leftmost prefix
-- Index (a, b, c) supports: WHERE a=1, WHERE a=1 AND b=2
-- Does NOT support: WHERE b=2 (skips leftmost column a)</pre></div>
      </div>
    </div>
  </div>
</div>

<div id="block-scaling" class="block-section" style="display:none">
  <h2 class="section-title">Scaling Strategies</h2>
  <div class="callout callout-blue">
    <strong>Rule: don't skip steps.</strong> Each step adds ~10× capacity. Sharding is last — it's the most operationally expensive. Most systems never need it.
  </div>
  <table class="data-table">
    <tr><th>#</th><th>Strategy</th><th>What it does</th><th>Use when</th><th>Limit</th></tr>
    <tr><td>1</td><td><strong>Vertical scale-up</strong></td><td>Bigger server (more CPU, RAM, NVMe)</td><td>Quick win, single bottleneck</td><td>Hardware ceiling, SPOF</td></tr>
    <tr><td>2</td><td><strong>Caching layer</strong></td><td>Redis/Memcached in front of DB</td><td>Repetitive reads, high QPS</td><td>Cache invalidation complexity</td></tr>
    <tr><td>3</td><td><strong>Read replicas</strong></td><td>Replica DBs handle reads, primary handles writes</td><td>Read:write &gt; 5:1</td><td>Replication lag, eventual consistency</td></tr>
    <tr><td>4</td><td><strong>CDN</strong></td><td>Edge servers cache static/media near users</td><td>Global users, media-heavy</td><td>Cache invalidation, egress cost</td></tr>
    <tr><td>5</td><td><strong>Horizontal scale-out</strong></td><td>More stateless app servers behind LB</td><td>CPU-bound, stateless services</td><td>Session state must be external (Redis)</td></tr>
    <tr><td>6</td><td><strong>Async queue</strong></td><td>Decouple slow ops via Kafka/SQS</td><td>Email, video, notifications, analytics</td><td>Eventual consistency, complex failures</td></tr>
    <tr><td>7</td><td><strong>DB sharding</strong></td><td>Split DB horizontally across nodes</td><td>DB write bottleneck despite replicas + cache</td><td>Cross-shard queries, resharding pain</td></tr>
    <tr><td>8</td><td><strong>Microservices</strong></td><td>Split monolith by domain</td><td>Team scaling, independent deploys</td><td>Network hops, distributed tracing</td></tr>
  </table>
  <h2 class="section-title" style="margin-top:20px">Scaling Decision Tree</h2>
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.4">
    Read bottleneck? → Add Redis cache → add read replicas → done for 99% of cases<br>
    Write bottleneck? → Async queue (decouple slow ops) → shard if still needed<br>
    Compute bottleneck? → Horizontal scale-out behind load balancer<br>
    Bandwidth/media? → CDN + object storage (S3/GCS)
  </div>
  <div class="callout callout-amber">
    <strong>Numbers to know:</strong> 1 Redis node ≈ 100K ops/sec. 1 Postgres primary ≈ 5K writes/sec. 1 web server ≈ 10K req/sec. 5 read replicas ≈ 5× read throughput. Each shard adds write capacity linearly.
  </div>
</div>

<div id="block-apis" class="block-section" style="display:none">
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin:16px 0">
<svg viewBox="0 0 500 320" style="width:100%;max-width:500px;display:block;margin:0 auto">
  <defs>
    <marker id="af" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
  </defs>
  <!-- Top diamond -->
  <polygon points="250,20 320,65 250,110 180,65" fill="white" stroke="#374151" stroke-width="2"/>
  <text x="250" y="58" text-anchor="middle" font-size="11" fill="#111827">Is the API</text>
  <text x="250" y="73" text-anchor="middle" font-size="11" fill="#111827">client-facing</text>
  <text x="250" y="88" text-anchor="middle" font-size="11" fill="#111827">or internal?</text>
  <!-- Client-facing left -->
  <line x1="180" y1="65" x2="100" y2="150" stroke="#374151" stroke-width="1.5" marker-end="url(#af)"/>
  <text x="128" y="108" font-size="11" fill="#374151">Client-facing</text>
  <!-- Internal right -->
  <line x1="320" y1="65" x2="420" y2="150" stroke="#374151" stroke-width="1.5" marker-end="url(#af)"/>
  <text x="355" y="108" font-size="11" fill="#374151">Internal</text>
  <!-- RPC box -->
  <rect x="360" y="150" width="110" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="415" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#065f46">gRPC</text>
  <!-- Second diamond -->
  <polygon points="100,150 170,200 100,250 30,200" fill="white" stroke="#374151" stroke-width="2"/>
  <text x="100" y="193" text-anchor="middle" font-size="10" fill="#111827">Over/under</text>
  <text x="100" y="208" text-anchor="middle" font-size="10" fill="#111827">fetching a</text>
  <text x="100" y="220" text-anchor="middle" font-size="10" fill="#111827">concern?</text>
  <!-- Yes left -->
  <line x1="30" y1="200" x2="30" y2="270" stroke="#374151" stroke-width="1.5" marker-end="url(#af)"/>
  <text x="8" y="240" font-size="10" fill="#374151">Yes</text>
  <!-- No right -->
  <line x1="170" y1="200" x2="200" y2="270" stroke="#374151" stroke-width="1.5" marker-end="url(#af)"/>
  <text x="178" y="240" font-size="10" fill="#374151">No</text>
  <!-- GraphQL box -->
  <rect x="-10" y="270" width="100" height="40" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="40" y="295" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">GraphQL</text>
  <!-- REST box -->
  <rect x="155" y="270" width="90" height="40" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="200" y="295" text-anchor="middle" font-size="14" font-weight="700" fill="#991b1b">REST</text>
</svg>
</div>

<h2 class="section-title">REST vs gRPC vs GraphQL</h2>
  <table class="data-table">
    <tr><th></th><th>REST</th><th>gRPC</th><th>GraphQL</th></tr>
    <tr><td><strong>Protocol</strong></td><td>HTTP/1.1 or HTTP/2, JSON</td><td>HTTP/2, Protocol Buffers (binary)</td><td>HTTP, JSON</td></tr>
    <tr><td><strong>Typing</strong></td><td>Loose — no enforced schema</td><td>Strongly typed .proto files</td><td>Strongly typed schema</td></tr>
    <tr><td><strong>Performance</strong></td><td>Good</td><td>Excellent — binary, multiplexed, streaming</td><td>Good (watch N+1 queries)</td></tr>
    <tr><td><strong>Over-fetching</strong></td><td>Yes — fixed response shape</td><td>No — defined in proto</td><td>No — client specifies exact fields</td></tr>
    <tr><td><strong>Streaming</strong></td><td>SSE or WebSocket workaround</td><td>Native bi-directional streaming</td><td>Subscriptions</td></tr>
    <tr><td><strong>Browser support</strong></td><td>Universal ✅</td><td>Limited (needs gRPC-Web)</td><td>Universal ✅</td></tr>
    <tr><td><strong>Best for</strong></td><td>Public APIs, simple CRUD, third-party</td><td>Internal microservices, low-latency, streaming</td><td>Complex client queries, mobile BFF</td></tr>
  </table>

  <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;margin:14px 0">
    <div style="font-weight:700;margin-bottom:12px;font-size:14px">Decision Flowchart</div>
    <div style="font-family:'DM Mono',monospace;font-size:13px;line-height:2.2">
      Is it internal service-to-service? → <strong style="color:#059669">gRPC</strong><br>
      Is it public/browser-facing with standard CRUD? → <strong style="color:#2563eb">REST</strong><br>
      Does the client need flexible field selection (mobile, BFF)? → <strong style="color:#7c3aed">GraphQL</strong><br>
      Need real-time bidirectional streaming? → <strong style="color:#059669">gRPC streaming</strong> or WebSockets
    </div>
  </div>

  <h2 class="section-title" style="margin-top:20px">HTTP Methods — PATCH vs PUT vs POST</h2>
  <table class="data-table">
    <tr><th>Method</th><th>Action</th><th>Idempotent?</th><th>Body</th><th>Example</th></tr>
    <tr><td><strong>POST</strong></td><td>Create new resource</td><td>No — each call creates new</td><td>Full payload</td><td>POST /users → creates user</td></tr>
    <tr><td><strong>PUT</strong></td><td>Replace entire resource</td><td>Yes — same result repeated</td><td>Full replacement</td><td>PUT /users/1 → replaces all fields</td></tr>
    <tr><td><strong>PATCH</strong></td><td>Partial update</td><td>Usually yes</td><td>Only changed fields</td><td>PATCH /users/1 → update name only</td></tr>
    <tr><td><strong>GET</strong></td><td>Read resource</td><td>Yes</td><td>None</td><td>GET /users/1</td></tr>
    <tr><td><strong>DELETE</strong></td><td>Delete resource</td><td>Yes</td><td>None</td><td>DELETE /users/1</td></tr>
  </table>
  <div class="callout callout-blue">
    <strong>PUT vs PATCH:</strong> PUT sends the complete object — missing fields get nulled/defaulted. PATCH sends only what changed — safer for partial updates. Use PATCH for most updates; PUT when replacing the entire resource intentionally.
  </div>

  <h2 class="section-title" style="margin-top:20px">API Design Principles</h2>
  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">RESTful design best practices <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="code-block"><pre><span class="cm">// Resource naming: nouns, plural, hierarchical</span>
GET    /users/{id}                    <span class="cm">// get user</span>
GET    /users/{id}/orders             <span class="cm">// user's orders</span>
POST   /users/{id}/orders             <span class="cm">// create order for user</span>
GET    /orders?status=pending&limit=20 <span class="cm">// filter + paginate</span>

<span class="cm">// Versioning strategies</span>
GET /v1/users       <span class="cm">// URL path (most common)</span>
Accept: application/vnd.api.v1+json  <span class="cm">// header</span>
GET /users?version=1                  <span class="cm">// query param (avoid)</span>

<span class="cm">// HTTP status codes — use them correctly</span>
200 OK          <span class="cm">// success with body</span>
201 Created     <span class="cm">// POST success, include Location header</span>
204 No Content  <span class="cm">// DELETE/PUT success, no body</span>
400 Bad Request <span class="cm">// client error (validation)</span>
401 Unauthorized<span class="cm">// not authenticated</span>
403 Forbidden   <span class="cm">// authenticated but no permission</span>
404 Not Found   <span class="cm">// resource doesn't exist</span>
429 Too Many    <span class="cm">// rate limited</span>
500 Server Error<span class="cm">// server bug</span></pre></div>
      </div>
    </div>
  </div>

  <h2 class="section-title" style="margin-top:20px">API Rate Limiting</h2>
  <div class="callout callout-amber">
    <strong>Why rate limit:</strong> Prevent abuse, ensure fair use, protect backend services from overload, enforce SLA tiers (free/pro/enterprise).
  </div>
  <table class="data-table">
    <tr><th>Algorithm</th><th>Memory</th><th>Burst?</th><th>Accuracy</th><th>Best for</th></tr>
    <tr><td><strong>Token Bucket</strong></td><td>O(1) — 2 Redis keys</td><td>✅ Yes — up to bucket size</td><td>Good</td><td>Most API rate limiting</td></tr>
    <tr><td><strong>Sliding Window Counter</strong></td><td>O(1) — 2 Redis keys</td><td>Partial</td><td>~98%</td><td>Best balance ✅</td></tr>
    <tr><td><strong>Fixed Window</strong></td><td>O(1) — 1 Redis key</td><td>2× at boundary</td><td>Fair</td><td>Simple limits</td></tr>
    <tr><td><strong>Sliding Window Log</strong></td><td>O(n) — 1 entry/request</td><td>No</td><td>Exact ✅</td><td>Strict per-user</td></tr>
  </table>
  <div class="code-block"><pre><span class="cm">// Response headers to always include</span>
X-RateLimit-Limit:     1000    <span class="cm">// total allowed per window</span>
X-RateLimit-Remaining: 842     <span class="cm">// left in current window</span>
X-RateLimit-Reset:     1704067 <span class="cm">// epoch when window resets</span>
Retry-After:           30      <span class="cm">// seconds (on 429 only)</span></pre></div>

<div class="section-title">HTTPS & TLS</div>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">How HTTPS/TLS works <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>TLS Handshake (simplified):
1. Client → Server: "Hello, I support TLS 1.3, here are my cipher suites"
2. Server → Client: Certificate (public key + CA signature)
3. Client verifies certificate against trusted CA store
4. Key exchange (ECDHE): establish shared secret without transmitting it
5. Both derive symmetric session key from shared secret
6. All further communication encrypted with symmetric key

Why asymmetric for handshake, symmetric for data?
Asymmetric (RSA/ECDSA): slow but key exchange over untrusted network
Symmetric (AES-256-GCM): fast, used for all application data</pre></div>
      <div class="callout callout-blue">
        <strong>Certificate pinning:</strong> Mobile apps can pin expected certificate/public key. Even if CA is compromised, pinned apps reject unexpected certs. Used by banking apps and high-security mobile clients.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">HTTP vs HTTPS vs HTTP/2 vs HTTP/3 <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Protocol</th><th>Transport</th><th>Key Feature</th><th>Use</th></tr>
        <tr><td>HTTP/1.1</td><td>TCP, plaintext</td><td>Request/response, one at a time per connection</td><td>Legacy</td></tr>
        <tr><td>HTTPS</td><td>TCP + TLS</td><td>Encrypted HTTP/1.1</td><td>Standard for all web</td></tr>
        <tr><td>HTTP/2</td><td>TCP + TLS</td><td>Multiplexing, header compression, server push</td><td>Modern APIs, browsers</td></tr>
        <tr><td>HTTP/3</td><td>QUIC (UDP)</td><td>No head-of-line blocking, faster mobile</td><td>CDNs, mobile-first</td></tr>
      </table>
    </div>
  </div>
</div>
${quizHTML('sd-auth', [
  { q: "JWT vs Session tokens — key difference?", opts: ["JWT is always encrypted", "JWT is stateless (server holds no state); sessions require server-side storage", "Sessions are more secure", "No difference"], ans: 1, exp: "Session: server stores session data (Redis/DB), client gets opaque ID. JWT: all data in the token, server only verifies signature — no storage. JWT enables stateless horizontal scaling but can't be revoked without a blocklist." },
  { q: "OAuth2 is for?", opts: ["Encrypting passwords", "Authorisation — granting third-party apps limited access to your resources", "Authenticating users (proving identity)", "Hashing tokens"], ans: 1, exp: "OAuth2 = Authorisation (what you can access). OpenID Connect (OIDC) = Authentication on top of OAuth2 (who you are). When you 'Login with Google', OAuth2 grants access, OIDC provides identity (id_token with user info)." },
  { q: "When should you use API Keys over JWT?", opts: ["Never — JWT is always better", "Server-to-server integrations, third-party developer access, rate-limiting by client", "Mobile apps", "Browser-based SPAs"], ans: 1, exp: "API Keys: simple, long-lived, good for server-to-server or third-party developers. JWT: better for user sessions (short-lived, carries claims). API Keys are easy to audit, rotate, and rate-limit per key." },
  { q: "What is the purpose of a refresh token?", opts: ["Refresh the UI", "Get new short-lived access tokens without re-authentication when access token expires", "Reset password", "Reload user profile"], ans: 1, exp: "Access tokens are short-lived (15min–1hr) to limit damage if stolen. Refresh tokens are long-lived (days/weeks), stored securely (httpOnly cookie), used ONLY to get new access tokens. If refresh token is stolen, revoke it in the DB." },
  { q: "PKCE (Proof Key for Code Exchange) prevents what attack?", opts: ["SQL injection", "Authorization code interception in mobile/SPA OAuth flows", "CSRF attacks", "JWT forgery"], ans: 1, exp: "In public clients (mobile apps, SPAs), the authorization code could be intercepted. PKCE: generate random code_verifier → hash it (code_challenge) → send hash with auth request. Only the original app that sent the hash can exchange the code." },
  { q: "Where should JWTs be stored in a browser?", opts: ["localStorage (most convenient)", "httpOnly cookies (prevents XSS access) — NOT localStorage", "sessionStorage", "window.token global variable"], ans: 1, exp: "localStorage is accessible via JavaScript — XSS attack can steal it. httpOnly cookies can't be accessed by JS. Pair with SameSite=Strict/Lax to prevent CSRF. This is the recommended approach for auth tokens." },
  { q: "What is mTLS and when is it used?", opts: ["Multi-factor TLS", "Mutual TLS — both client AND server present certificates, verifying each other's identity", "Mobile TLS protocol", "A compression algorithm"], ans: 1, exp: "Normal TLS: only server proves identity (certificate). mTLS: both sides present certificates. Used for service-to-service auth in microservices (Istio implements this). Prevents man-in-the-middle between internal services." },
  { q: "Rate limiting by user vs by IP — which is harder to bypass?", opts: ["By IP (harder)", "By authenticated user ID (harder to bypass than IP, which can be spoofed/rotated)", "Both equally hard", "Neither can be bypassed"], ans: 1, exp: "IP-based limiting: attackers can use proxies, rotating IPs, botnets. User-ID based: requires authentication, much harder to get millions of accounts. Best: both layers — IP rate limiting for unauthenticated endpoints, user-ID for authenticated." },
  { q: "SSO (Single Sign-On) uses which protocols?", opts: ["Only OAuth2", "SAML 2.0 (enterprise/XML) or OIDC (modern/JSON) — both enable one login for multiple apps", "Only JWT", "HTTP Basic Auth"], ans: 1, exp: "SAML 2.0: XML-based, enterprise-focused (Okta, Active Directory). OIDC: JSON/JWT-based, modern web/mobile (Google, GitHub). Both allow one authentication session to grant access to multiple applications without re-login." }
])}
</div>
<div id="block-auth" class="block-section" style="display:none">
<div class="section-title">Authentication Patterns (7)</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">1. Basic Authentication <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Username:password encoded as Base64 in HTTP header. <span class="tag red">Insecure</span> over HTTP, acceptable over HTTPS for internal APIs.</p>
    <div class="code-block"><pre>Authorization: Basic dXNlcjpwYXNz  // base64("user:pass")</pre></div>
    <p><strong>Never use</strong> for public APIs. OK for service-to-service in trusted networks.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">2. API Keys <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>A long random string tied to an application. Simple to implement. Used for machine-to-machine, rate limiting by key.</p>
    <div class="code-block"><pre>X-API-Key: sk_live_abc123xyz  // or query param ?api_key=...</pre></div>
    <p><strong>Pros:</strong> Simple. <strong>Cons:</strong> No expiry by default, must be rotated manually, hard to scope permissions.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">3. Session-Based Authentication <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Server creates a session on login, stores it (Redis/DB), returns session ID in cookie. Every request carries the cookie.</p>
    <p><strong>Pros:</strong> Easy to invalidate (delete session). <strong>Cons:</strong> Server must be stateful or share session store. Scales poorly without sticky sessions or shared Redis.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">4. JWT (Bearer Token) <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Stateless token containing claims, signed with server's private key. Server validates without DB lookup.</p>
    <div class="code-block"><pre>Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIn0.sig
// Structure: header.payload.signature (base64 encoded)</pre></div>
    <p><strong>Pros:</strong> Stateless, scales horizontally. <strong>Cons:</strong> Can't revoke before expiry. Use short TTL (15 min) + refresh tokens. Never put sensitive data in payload (it's base64, not encrypted).</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">5. OAuth 2.0 <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Authorization framework (not authentication). Allows a third-party app to access resources on behalf of a user without sharing credentials.</p>
    <div class="code-block"><pre>User → App → Auth Server (Google) → Authorization Code
App → Auth Server (exchange code) → Access Token + Refresh Token
App → Resource Server (with token) → User's data</pre></div>
    <p><strong>Flows:</strong> Authorization Code (web apps), PKCE (SPAs/mobile), Client Credentials (M2M), Device Flow (CLI/TV)</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">6. SSO — SAML &amp; OIDC <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p><strong>SAML 2.0:</strong> XML-based, enterprise SSO (Okta, ADFS). User logs in once, gets assertions to access multiple services. XML heavy, complex, but mature.</p>
    <p style="margin-top:8px"><strong>OIDC (OpenID Connect):</strong> Identity layer on top of OAuth 2.0. Returns an ID token (JWT) with user identity claims. Used by Google, GitHub login. More modern and developer-friendly than SAML.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">7. mTLS — Mutual TLS <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <p><strong>What:</strong> Both client AND server present certificates, verifying each other's identity. Normal TLS only verifies the server.</p>
      <p style="margin-top:8px"><strong>Use for:</strong> Service-to-service auth in microservices. Istio implements this automatically via sidecar proxies — zero app code changes.</p>
      <div class="code-block"><pre><span class="cm"># Normal TLS: only server proves identity</span>
Client → "Who are you?" → Server sends certificate → Client verifies ✅

<span class="cm"># mTLS: both sides prove identity</span>
Client sends cert → Server verifies ✅
Server sends cert → Client verifies ✅
<span class="cm"># Result: guaranteed identity in both directions</span>

<span class="cm"># Istio enables mTLS cluster-wide with one config:</span>
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata: {name: default}
spec:
  mtls:
    mode: STRICT  <span class="cm"># all pods must use mTLS</span></pre></div>
      <div class="callout callout-blue">mTLS prevents man-in-the-middle attacks between internal services. A rogue service can't impersonate another — it needs a valid certificate signed by your CA.</div>
    </div>
  </div>
</div>

<hr class="section-sep">

<div class="section-title">Hashing — MD5, SHA, Checksums</div>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">MD5 — Fast hash, NOT for passwords <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="callout callout-amber"><strong>MD5 is broken for security</strong> — collision attacks are feasible. Never use for passwords or digital signatures. Use only for non-security checksums (file integrity, data deduplication).</div>
      <div class="code-block"><pre><span class="cm">// Java MD5 checksum (file integrity only, not security)</span>
MessageDigest md = MessageDigest.getInstance(<span class="str">"MD5"</span>);
byte[] hash = md.digest(fileBytes);
String hex = DatatypeConverter.printHexBinary(hash).toLowerCase();
<span class="cm">// "5d41402abc4b2a76b9719d911017c592" — 32 hex chars = 128 bits</span>

<span class="cm">// Use cases: detect accidental corruption, deduplication, ETag headers</span>
<span class="cm">// NOT for: password storage, digital signatures, security tokens</span></pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">SHA-256 / SHA-3 — Cryptographic hashing <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm">// SHA-256: 256-bit output, collision-resistant, cryptographically secure</span>
MessageDigest sha = MessageDigest.getInstance(<span class="str">"SHA-256"</span>);
byte[] hash = sha.digest(data.getBytes(StandardCharsets.UTF_8));

<span class="cm">// Use cases: digital signatures, TLS certificates, Git commit IDs,
// JWT signing (HS256/RS256), file integrity verification</span>

<span class="cm">// For passwords: use bcrypt or Argon2 (slow by design, salted)</span>
<span class="cm">// NEVER hash passwords with MD5 or SHA alone (too fast = brute forceable)</span>
String hashed = BCrypt.hashpw(password, BCrypt.gensalt(12));</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Checksums in System Design <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Algorithm</th><th>Output Size</th><th>Speed</th><th>Use For</th></tr>
        <tr><td>CRC32</td><td>32 bits</td><td>Fastest</td><td>Network packet integrity, ZIP files</td></tr>
        <tr><td>MD5</td><td>128 bits</td><td>Fast</td><td>File checksums, ETags, deduplication</td></tr>
        <tr><td>SHA-1</td><td>160 bits</td><td>Fast</td><td>Git object IDs (legacy security)</td></tr>
        <tr><td>SHA-256</td><td>256 bits</td><td>Medium</td><td>TLS, JWT, digital signatures, blockchain</td></tr>
        <tr><td>bcrypt/Argon2</td><td>Varies</td><td>Intentionally slow</td><td>Password storage — slow = brute-force resistant</td></tr>
        <tr><td>HMAC-SHA256</td><td>256 bits</td><td>Medium</td><td>API request signing, JWT HS256</td></tr>
      </table>
      <div class="callout callout-green"><strong>Checksum in APIs:</strong> Add Content-MD5 or checksum header to uploads. S3 verifies checksum server-side. Detects corruption in transit. Also used for ETag (caching) and deduplication in object storage.</div>
    </div>
  </div>
</div>

<hr class="section-sep">
</div>

${quizHTML('sd-building', [
    { q: "L7 load balancer advantage over L4?", opts: ["Lower latency", "Routes by URL/headers enabling path-based routing, A/B testing, SSL termination", "Handles more connections", "Lower cost"], ans: 1, exp: "L4 routes by IP/port only — fast but dumb. L7 understands HTTP: can route /api → service A, /static → CDN, add headers, terminate SSL. AWS ALB is L7; NLB is L4." },
    { q: "W=2, R=2, N=3 quorum means?", opts: ["2 writes and 2 reads per second", "At least 1 node overlaps between write and read sets, guaranteeing consistency", "System has 2 leaders", "2 replicas are standby"], ans: 1, exp: "W+R=4 > N=3 means at least 1 node must have participated in both last write and current read. This node has the latest data, guaranteeing you always read what was last written." },
    { q: "ACID Isolation: what does MVCC solve?", opts: ["Disk space", "Allows high concurrency by giving each transaction a snapshot, avoiding read locks", "Network partitions", "Index fragmentation"], ans: 1, exp: "MVCC (Multi-Version Concurrency Control) maintains multiple versions of data. Readers get a consistent snapshot without blocking writers. Writers don't block readers. Used by PostgreSQL, MySQL InnoDB, Oracle." },
    { q: "Composite index (a, b, c) — which query does NOT use it?", opts: ["WHERE a=1", "WHERE a=1 AND b=2", "WHERE b=2 AND c=3", "WHERE a=1 AND b=2 AND c=3"], ans: 2, exp: "Composite indexes follow the leftmost prefix rule. To use the index, queries must include the leftmost column(s). WHERE b=2 skips 'a' — the index cannot be used. MySQL will do a full scan." },
    { q: "Consistent hashing main advantage?", opts: ["Guarantees equal load", "Adding/removing a node reshuffles only ~1/N keys instead of all keys", "Requires no hash function", "Prevents hot spots automatically"], ans: 1, exp: "With naive hash (key % N), adding a node changes N, reshuffling almost all keys — catastrophic cache miss storm. Consistent hashing: keys and servers on a ring. Adding 1 server affects only keys between it and its predecessor (~1/N of total)." }
  ,
  { q: "Vertical vs horizontal scaling — when does vertical scaling stop working?", opts: ["Never", "At hardware ceiling (~128 vCPUs, ~24TB RAM for largest instances) and becomes single point of failure", "After 100 users", "When cost exceeds budget"], ans: 1, exp: "Vertical (scale up): fast, no app changes, but expensive, hardware ceiling, single point of failure. Horizontal (scale out): infinite scale, fault tolerant, but requires stateless design, session management. In practice: scale vertically first (simpler), then horizontal when needed." },
  { q: "What is connection pooling and why is it critical for DB scaling?", opts: ["Grouping DB servers together", "Reusing existing DB connections instead of creating new ones — each connection costs ~100ms setup + memory", "Load balancing queries", "Caching query results"], ans: 1, exp: "New DB connection: TCP handshake + auth + session setup = ~100ms and ~5MB memory. 1000 req/s × 100ms = connection queue backup. Connection pool keeps 10-100 connections warm. HikariCP (Java default), PgBouncer (Postgres). Set pool size = (cores × 2) + effective_spindle_count." },
  { q: "Write-through cache vs write-behind — consistency trade-off?", opts: ["Write-through is always slower", "Write-through: strong consistency (DB+cache always in sync), higher write latency. Write-behind: lower latency, risk of data loss if cache crashes before flush", "No difference", "Write-behind is always preferred"], ans: 1, exp: "Write-through: write to cache AND DB synchronously. Safe but slower writes. Write-behind (write-back): write to cache, return to client, flush to DB async. Fast writes but if cache crashes before flush = data loss. Use write-through for financial data, write-behind for analytics." },
  { q: "CDN cache invalidation — what are the main strategies?", opts: ["CDN never invalidates", "TTL expiry, URL versioning (content hash in URL), API-based purge (CloudFront invalidation), Cache-Control headers", "Manual deletion only", "Restart CDN nodes"], ans: 1, exp: "Strategies: 1) TTL: cache for N seconds, auto-expires. Simple but stale during TTL. 2) URL versioning: /styles.a3f5b2.css — new deploy = new URL = no cache issue (most reliable). 3) API purge: CloudFront CreateInvalidation call — expensive ($0.005/path). 4) Cache-Control: max-age, no-cache, must-revalidate headers." }
])}
`;


pages['sd-auth'] = () => `
<div class="breadcrumb">System Design → <span>Auth &amp; APIs</span></div>
<div class="page-header">
  <div class="page-title">Authentication &amp; Security</div>
  <div class="page-subtitle">7 authentication patterns, hashing, MD5, checksums, and HTTPS for senior engineers.</div>
</div>

<div class="section-title">Authentication Patterns (7)</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">1. Basic Authentication <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Username:password encoded as Base64 in HTTP header. <span class="tag red">Insecure</span> over HTTP, acceptable over HTTPS for internal APIs.</p>
    <div class="code-block"><pre>Authorization: Basic dXNlcjpwYXNz  // base64("user:pass")</pre></div>
    <p><strong>Never use</strong> for public APIs. OK for service-to-service in trusted networks.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">2. API Keys <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>A long random string tied to an application. Simple to implement. Used for machine-to-machine, rate limiting by key.</p>
    <div class="code-block"><pre>X-API-Key: sk_live_abc123xyz  // or query param ?api_key=...</pre></div>
    <p><strong>Pros:</strong> Simple. <strong>Cons:</strong> No expiry by default, must be rotated manually, hard to scope permissions.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">3. Session-Based Authentication <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Server creates a session on login, stores it (Redis/DB), returns session ID in cookie. Every request carries the cookie.</p>
    <p><strong>Pros:</strong> Easy to invalidate (delete session). <strong>Cons:</strong> Server must be stateful or share session store. Scales poorly without sticky sessions or shared Redis.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">4. JWT (Bearer Token) <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Stateless token containing claims, signed with server's private key. Server validates without DB lookup.</p>
    <div class="code-block"><pre>Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIn0.sig
// Structure: header.payload.signature (base64 encoded)</pre></div>
    <p><strong>Pros:</strong> Stateless, scales horizontally. <strong>Cons:</strong> Can't revoke before expiry. Use short TTL (15 min) + refresh tokens. Never put sensitive data in payload (it's base64, not encrypted).</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">5. OAuth 2.0 <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p>Authorization framework (not authentication). Allows a third-party app to access resources on behalf of a user without sharing credentials.</p>
    <div class="code-block"><pre>User → App → Auth Server (Google) → Authorization Code
App → Auth Server (exchange code) → Access Token + Refresh Token
App → Resource Server (with token) → User's data</pre></div>
    <p><strong>Flows:</strong> Authorization Code (web apps), PKCE (SPAs/mobile), Client Credentials (M2M), Device Flow (CLI/TV)</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">6. SSO — SAML &amp; OIDC <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <p><strong>SAML 2.0:</strong> XML-based, enterprise SSO (Okta, ADFS). User logs in once, gets assertions to access multiple services. XML heavy, complex, but mature.</p>
    <p style="margin-top:8px"><strong>OIDC (OpenID Connect):</strong> Identity layer on top of OAuth 2.0. Returns an ID token (JWT) with user identity claims. Used by Google, GitHub login. More modern and developer-friendly than SAML.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">7. mTLS — Mutual TLS <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <p><strong>What:</strong> Both client AND server present certificates, verifying each other's identity. Normal TLS only verifies the server.</p>
      <p style="margin-top:8px"><strong>Use for:</strong> Service-to-service auth in microservices. Istio implements this automatically via sidecar proxies — zero app code changes.</p>
      <div class="code-block"><pre><span class="cm"># Normal TLS: only server proves identity</span>
Client → "Who are you?" → Server sends certificate → Client verifies ✅

<span class="cm"># mTLS: both sides prove identity</span>
Client sends cert → Server verifies ✅
Server sends cert → Client verifies ✅
<span class="cm"># Result: guaranteed identity in both directions</span>

<span class="cm"># Istio enables mTLS cluster-wide with one config:</span>
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata: {name: default}
spec:
  mtls:
    mode: STRICT  <span class="cm"># all pods must use mTLS</span></pre></div>
      <div class="callout callout-blue">mTLS prevents man-in-the-middle attacks between internal services. A rogue service can't impersonate another — it needs a valid certificate signed by your CA.</div>
    </div>
  </div>
</div>

<hr class="section-sep">

<div class="section-title">Hashing — MD5, SHA, Checksums</div>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">MD5 — Fast hash, NOT for passwords <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="callout callout-amber"><strong>MD5 is broken for security</strong> — collision attacks are feasible. Never use for passwords or digital signatures. Use only for non-security checksums (file integrity, data deduplication).</div>
      <div class="code-block"><pre><span class="cm">// Java MD5 checksum (file integrity only, not security)</span>
MessageDigest md = MessageDigest.getInstance(<span class="str">"MD5"</span>);
byte[] hash = md.digest(fileBytes);
String hex = DatatypeConverter.printHexBinary(hash).toLowerCase();
<span class="cm">// "5d41402abc4b2a76b9719d911017c592" — 32 hex chars = 128 bits</span>

<span class="cm">// Use cases: detect accidental corruption, deduplication, ETag headers</span>
<span class="cm">// NOT for: password storage, digital signatures, security tokens</span></pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">SHA-256 / SHA-3 — Cryptographic hashing <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm">// SHA-256: 256-bit output, collision-resistant, cryptographically secure</span>
MessageDigest sha = MessageDigest.getInstance(<span class="str">"SHA-256"</span>);
byte[] hash = sha.digest(data.getBytes(StandardCharsets.UTF_8));

<span class="cm">// Use cases: digital signatures, TLS certificates, Git commit IDs,
// JWT signing (HS256/RS256), file integrity verification</span>

<span class="cm">// For passwords: use bcrypt or Argon2 (slow by design, salted)</span>
<span class="cm">// NEVER hash passwords with MD5 or SHA alone (too fast = brute forceable)</span>
String hashed = BCrypt.hashpw(password, BCrypt.gensalt(12));</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Checksums in System Design <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Algorithm</th><th>Output Size</th><th>Speed</th><th>Use For</th></tr>
        <tr><td>CRC32</td><td>32 bits</td><td>Fastest</td><td>Network packet integrity, ZIP files</td></tr>
        <tr><td>MD5</td><td>128 bits</td><td>Fast</td><td>File checksums, ETags, deduplication</td></tr>
        <tr><td>SHA-1</td><td>160 bits</td><td>Fast</td><td>Git object IDs (legacy security)</td></tr>
        <tr><td>SHA-256</td><td>256 bits</td><td>Medium</td><td>TLS, JWT, digital signatures, blockchain</td></tr>
        <tr><td>bcrypt/Argon2</td><td>Varies</td><td>Intentionally slow</td><td>Password storage — slow = brute-force resistant</td></tr>
        <tr><td>HMAC-SHA256</td><td>256 bits</td><td>Medium</td><td>API request signing, JWT HS256</td></tr>
      </table>
      <div class="callout callout-green"><strong>Checksum in APIs:</strong> Add Content-MD5 or checksum header to uploads. S3 verifies checksum server-side. Detects corruption in transit. Also used for ETag (caching) and deduplication in object storage.</div>
    </div>
  </div>
</div>

<hr class="section-sep">

<div class="section-title">REST vs gRPC vs GraphQL</div>

<table class="data-table">
  <thead><tr><th>Factor</th><th>REST</th><th>gRPC</th><th>GraphQL</th></tr></thead>
  <tbody>
    <tr><td>Protocol</td><td>HTTP/1.1, JSON</td><td>HTTP/2, Protobuf (binary)</td><td>HTTP, JSON</td></tr>
    <tr><td>Performance</td><td>Moderate</td><td>⚡ Fastest (binary, multiplexing)</td><td>Moderate</td></tr>
    <tr><td>Typing</td><td>None (OpenAPI optional)</td><td>Strong (proto schema)</td><td>Strong (schema)</td></tr>
    <tr><td>Flexibility</td><td>Fixed endpoints</td><td>Fixed methods</td><td>Client defines shape</td></tr>
    <tr><td>Best for</td><td>Public APIs, CRUD</td><td>Microservices, streaming</td><td>Complex UIs, BFF</td></tr>
    <tr><td>Tooling</td><td>Excellent (universal)</td><td>Good (generated clients)</td><td>Good (Apollo)</td></tr>
  </tbody>
</table>

<div class="callout blue">
  <strong>When to use gRPC:</strong> Internal microservice communication where performance matters. The binary protobuf format is 3-10x smaller than JSON and HTTP/2 allows multiplexing multiple requests over one connection.
</div>

<div class="callout green">
  <strong>When to use GraphQL:</strong> Mobile apps or complex SPAs where different clients need different shapes of data. Eliminates over-fetching and under-fetching. Add a GraphQL BFF (Backend for Frontend) layer in front of REST/gRPC microservices.
</div>

<div class="section-title" style="margin-top:20px">PATCH vs PUT vs POST</div>

<table class="data-table">
  <thead><tr><th>Method</th><th>Idempotent</th><th>Use case</th></tr></thead>
  <tbody>
    <tr><td><strong>POST</strong></td><td>No</td><td>Create a new resource. Each call creates a new item.</td></tr>
    <tr><td><strong>PUT</strong></td><td>Yes</td><td>Replace the full resource. Must send complete representation.</td></tr>
    <tr><td><strong>PATCH</strong></td><td>Yes (if designed carefully)</td><td>Partial update. Send only fields being changed.</td></tr>
  </tbody>
</table>

${quizHTML('sd-auth', [
  { q: "JWT vs Session tokens — key difference?", opts: ["JWT is always encrypted", "JWT is stateless (server holds no state); sessions require server-side storage", "Sessions are more secure", "No difference"], ans: 1, exp: "Session: server stores session data (Redis/DB), client gets opaque ID. JWT: all data in the token, server only verifies signature — no storage. JWT enables stateless horizontal scaling but can't be revoked without a blocklist." },
  { q: "OAuth2 is for?", opts: ["Encrypting passwords", "Authorisation — granting third-party apps limited access to your resources", "Authenticating users (proving identity)", "Hashing tokens"], ans: 1, exp: "OAuth2 = Authorisation (what you can access). OpenID Connect (OIDC) = Authentication on top of OAuth2 (who you are). When you 'Login with Google', OAuth2 grants access, OIDC provides identity (id_token with user info)." },
  { q: "When should you use API Keys over JWT?", opts: ["Never — JWT is always better", "Server-to-server integrations, third-party developer access, rate-limiting by client", "Mobile apps", "Browser-based SPAs"], ans: 1, exp: "API Keys: simple, long-lived, good for server-to-server or third-party developers. JWT: better for user sessions (short-lived, carries claims). API Keys are easy to audit, rotate, and rate-limit per key." },
  { q: "What is the purpose of a refresh token?", opts: ["Refresh the UI", "Get new short-lived access tokens without re-authentication when access token expires", "Reset password", "Reload user profile"], ans: 1, exp: "Access tokens are short-lived (15min–1hr) to limit damage if stolen. Refresh tokens are long-lived (days/weeks), stored securely (httpOnly cookie), used ONLY to get new access tokens. If refresh token is stolen, revoke it in the DB." },
  { q: "PKCE (Proof Key for Code Exchange) prevents what attack?", opts: ["SQL injection", "Authorization code interception in mobile/SPA OAuth flows", "CSRF attacks", "JWT forgery"], ans: 1, exp: "In public clients (mobile apps, SPAs), the authorization code could be intercepted. PKCE: generate random code_verifier → hash it (code_challenge) → send hash with auth request. Only the original app that sent the hash can exchange the code." },
  { q: "Where should JWTs be stored in a browser?", opts: ["localStorage (most convenient)", "httpOnly cookies (prevents XSS access) — NOT localStorage", "sessionStorage", "window.token global variable"], ans: 1, exp: "localStorage is accessible via JavaScript — XSS attack can steal it. httpOnly cookies can't be accessed by JS. Pair with SameSite=Strict/Lax to prevent CSRF. This is the recommended approach for auth tokens." },
  { q: "What is mTLS and when is it used?", opts: ["Multi-factor TLS", "Mutual TLS — both client AND server present certificates, verifying each other's identity", "Mobile TLS protocol", "A compression algorithm"], ans: 1, exp: "Normal TLS: only server proves identity (certificate). mTLS: both sides present certificates. Used for service-to-service auth in microservices (Istio implements this). Prevents man-in-the-middle between internal services." },
  { q: "Rate limiting by user vs by IP — which is harder to bypass?", opts: ["By IP (harder)", "By authenticated user ID (harder to bypass than IP, which can be spoofed/rotated)", "Both equally hard", "Neither can be bypassed"], ans: 1, exp: "IP-based limiting: attackers can use proxies, rotating IPs, botnets. User-ID based: requires authentication, much harder to get millions of accounts. Best: both layers — IP rate limiting for unauthenticated endpoints, user-ID for authenticated." },
  { q: "SSO (Single Sign-On) uses which protocols?", opts: ["Only OAuth2", "SAML 2.0 (enterprise/XML) or OIDC (modern/JSON) — both enable one login for multiple apps", "Only JWT", "HTTP Basic Auth"], ans: 1, exp: "SAML 2.0: XML-based, enterprise-focused (Okta, Active Directory). OIDC: JSON/JWT-based, modern web/mobile (Google, GitHub). Both allow one authentication session to grant access to multiple applications without re-login." }
])}
`;

// ═══════════════════════════════════════════════
// SD — CASE STUDIES
// ═══════════════════════════════════════════════
pages['sd-cases'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design</div>
  <h1 class="page-title">Case Studies</h1>
  <p class="page-subtitle">Apply the 5-step framework to real systems. Each case uses the patterns you've learned.</p>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin:16px 0">
  <div class="home-card" onclick="showPage('sd-url')">
    <div class="hc-icon">🔗</div>
    <div class="hc-title">URL Shortener</div>
    <div class="hc-desc">TinyURL — hashing, Base62, redirects, analytics</div>
  </div>
  <div class="home-card" onclick="showPage('sd-feed')">
    <div class="hc-icon">📰</div>
    <div class="hc-title">News Feed</div>
    <div class="hc-desc">Twitter/Instagram — fan-out, ranking, pagination</div>
  </div>
  <div class="home-card" onclick="showPage('sd-chat')">
    <div class="hc-icon">💬</div>
    <div class="hc-title">Chat System</div>
    <div class="hc-desc">WhatsApp — WebSocket, message storage, presence</div>
  </div>
  <div class="home-card" onclick="showPage('sd-ratelimit')">
    <div class="hc-icon">🚦</div>
    <div class="hc-title">Rate Limiter</div>
    <div class="hc-desc">Token bucket, sliding window, distributed Redis</div>
  </div>
  <div class="home-card" onclick="showPage('sd-lru')">
    <div class="hc-icon">⚡</div>
    <div class="hc-title">LRU Cache</div>
    <div class="hc-desc">HashMap + DLL, O(1) ops, Redis eviction, Caffeine</div>
  </div>
</div>
<div class="callout callout-blue" style="margin-top:8px">
  <strong>Approach every case:</strong> Requirements → Estimation → API → High-Level → Deep Dive → Bottlenecks
</div>
`;

pages['sd-url'] = () => `
<div class="breadcrumb">Case Studies → <span>URL Shortener</span></div>
<div class="page-header">
  <div class="page-title">URL Shortening Service</div>
  <div class="page-subtitle">Classic system design — deceptively simple, rich in trade-offs. Covers hashing, redirection, caching, and scale.</div>
</div>

<div class="section-title">Step 1: Requirements</div>
<div class="two-col">
  <div class="info-box">
    <div class="info-title">Functional</div>
    <ul class="content-list" style="margin-top:6px;font-size:13px">
      <li>POST /shorten → returns short URL</li>
      <li>GET /{code} → 301/302 redirect to original</li>
      <li>Custom aliases (optional)</li>
      <li>URL expiration</li>
      <li>Click analytics</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-title">Non-Functional</div>
    <ul class="content-list" style="margin-top:6px;font-size:13px">
      <li>100M URLs shortened/day</li>
      <li>10:1 read/write ratio (redirect-heavy)</li>
      <li>Redirects in &lt; 10ms</li>
      <li>High availability (99.99%)</li>
      <li>Short codes: 7 chars → 62^7 = 3.5T combos</li>
    </ul>
  </div>
</div>

<div class="section-title">Step 2: Short Code Generation</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Option A: MD5 Hash (take first 7 chars) <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <div class="code-block"><pre>MD5("https://example.com/long-url") = "5d41402abc4b2a76b9719d911017c592"
shortCode = "5d41402"  // first 7 chars</pre></div>
    <p>✅ Deterministic — same URL always gets same code. ❌ Collision possible. ❌ Multiple URLs could collide on first 7 chars — need collision check.</p>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Option B: Base62 Counter (Recommended) <span class="accordion-arrow">▼</span></div>
  <div class="accordion-body">
    <div class="code-block"><pre>// Auto-increment ID → Base62 encode
id = 12345678
base62(12345678) = "5qXoG"  // use [0-9A-Za-z]</pre></div>
    <p>✅ No collisions. ✅ Predictable length. ❌ Exposes sequential IDs (use ID obfuscation). Use distributed ID generator (Snowflake) for multi-region.</p>
  </div>
</div>

<div class="section-title">Step 3: High-Level Design</div>
<div class="diagram">
  <svg viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg" style="font-size:11px;font-family:'DM Mono',monospace">
    <rect x="10" y="40" width="70" height="36" rx="5" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="45" y="62" text-anchor="middle" fill="#1e40af">Client</text>
    <rect x="120" y="40" width="90" height="36" rx="5" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    <text x="165" y="57" text-anchor="middle" fill="#065f46">Shortener</text>
    <text x="165" y="70" text-anchor="middle" fill="#065f46">Service</text>
    <rect x="260" y="10" width="90" height="36" rx="5" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="305" y="28" text-anchor="middle" fill="#92400e">Redis</text>
    <text x="305" y="41" text-anchor="middle" fill="#92400e">Cache</text>
    <rect x="260" y="74" width="90" height="36" rx="5" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="305" y="91" text-anchor="middle" fill="#5b21b6">MySQL</text>
    <text x="305" y="104" text-anchor="middle" fill="#5b21b6">+ Replicas</text>
    <rect x="430" y="40" width="90" height="36" rx="5" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    <text x="475" y="57" text-anchor="middle" fill="#065f46">Redirect</text>
    <text x="475" y="70" text-anchor="middle" fill="#065f46">Service</text>
    <rect x="570" y="40" width="100" height="36" rx="5" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="620" y="57" text-anchor="middle" fill="#92400e">Analytics</text>
    <text x="620" y="70" text-anchor="middle" fill="#92400e">(Kafka)</text>
    <!-- Arrows -->
    <line x1="80" y1="58" x2="120" y2="58" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
    <line x1="210" y1="50" x2="260" y2="28" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
    <line x1="210" y1="66" x2="260" y2="85" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
    <line x1="350" y1="58" x2="430" y2="58" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
    <line x1="520" y1="58" x2="570" y2="58" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr2)"/>
    <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
  </svg>
</div>

<div class="section-title">Key Design Decisions</div>
<table class="data-table">
  <thead><tr><th>Decision</th><th>Choice</th><th>Rationale</th></tr></thead>
  <tbody>
    <tr><td>Redirect type</td><td>301 vs 302</td><td>301 (permanent) — cached by browser, fewer server hits. 302 (temporary) — every redirect hits server, better for analytics</td></tr>
    <tr><td>Storage</td><td>MySQL + Redis</td><td>Simple key-value reads → Redis cache for hot URLs. MySQL as source of truth</td></tr>
    <tr><td>Scale reads</td><td>Read replicas + CDN</td><td>10:1 read ratio. Cache at CDN edge for globally popular URLs</td></tr>
    <tr><td>ID generation</td><td>Snowflake ID</td><td>Distributed, unique, sortable. Avoids single-point ID generator</td></tr>
  </tbody>
</table>

${revisionControls('sd-url')}
`;

pages['sd-feed'] = () => `
<div class="breadcrumb">Case Studies → <span>News Feed</span></div>
<div class="page-header">
  <div class="page-title">News Feed System</div>
  <div class="page-subtitle">The hardest part is fan-out. How do you deliver a tweet to 100M followers efficiently?</div>
</div>

<div class="section-title">The Core Problem: Fan-Out</div>
<p>When a celebrity with 50M followers tweets, do you write to 50M rows immediately (fan-out on write) or compute the feed on read (fan-out on read)?</p>

<div class="two-col">
  <div class="info-box">
    <div class="info-title">Fan-Out on Write (Push)</div>
    <ul class="content-list" style="margin-top:6px;font-size:13px">
      <li>Pre-compute feed for each follower on tweet creation</li>
      <li>Reads are O(1) — just fetch pre-built feed</li>
      <li>Write amplification: 1 tweet → 50M writes</li>
      <li><strong>Problem:</strong> celebrities (hotspot)</li>
      <li><strong>Use for:</strong> regular users (&lt;10K followers)</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-title">Fan-Out on Read (Pull)</div>
    <ul class="content-list" style="margin-top:6px;font-size:13px">
      <li>Build feed at read time: merge followees' tweets</li>
      <li>Writes are O(1), reads are expensive</li>
      <li>Simple, no write amplification</li>
      <li><strong>Problem:</strong> slow reads, hard to cache</li>
      <li><strong>Use for:</strong> celebrities (&gt;1M followers)</li>
    </ul>
  </div>
</div>

<div class="callout amber">
  <strong>Twitter's actual approach (hybrid):</strong> Fan-out on write for regular users. Fan-out on read (with cache) for celebrities. When you load your feed, it's pre-built for your regular followees + merged with recent posts from the few celebrities you follow.
</div>

<div class="code-block"><pre>// Feed table structure (denormalized, Redis sorted set)
feed:{user_id} → sorted set of tweet_ids by timestamp
                → expire after 7 days (lazy eviction)

// On tweet creation
if poster.followers < 10000:
    fanout_to_all_followers(tweet_id)  // fan-out on write
else:
    store_tweet_in_timeline_only(tweet_id)  // pull on read</pre></div>

${revisionControls('sd-feed')}
`;

pages['sd-chat'] = () => `
<div class="breadcrumb">Case Studies → <span>Chat System</span></div>
<div class="page-header">
  <div class="page-title">Real-Time Chat System</div>
  <div class="page-subtitle">WhatsApp-scale messaging — WebSocket connections, message delivery, storage.</div>
</div>

<div class="section-title">Connection Protocol Choice</div>
<table class="data-table">
  <thead><tr><th>Protocol</th><th>Direction</th><th>Verdict</th></tr></thead>
  <tbody>
    <tr><td>Polling (HTTP)</td><td>Client → Server repeatedly</td><td>❌ Too many empty responses, high latency</td></tr>
    <tr><td>Long Polling</td><td>Client hangs until message arrives</td><td>⚠️ Works but connection overhead</td></tr>
    <tr><td>WebSocket</td><td>Bidirectional, persistent</td><td>✅ Best for chat — persistent 2-way connection</td></tr>
    <tr><td>SSE</td><td>Server → Client only</td><td>✅ OK if client sends via separate HTTP POST</td></tr>
  </tbody>
</table>

<div class="section-title">High-Level Design</div>
<div class="diagram">
  <svg viewBox="0 0 680 140" xmlns="http://www.w3.org/2000/svg" style="font-size:11px;font-family:'DM Mono',monospace">
    <rect x="10" y="52" width="70" height="36" rx="5" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="45" y="74" text-anchor="middle" fill="#1e40af">Alice</text>
    <rect x="600" y="52" width="70" height="36" rx="5" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
    <text x="635" y="74" text-anchor="middle" fill="#1e40af">Bob</text>
    <rect x="130" y="52" width="90" height="36" rx="5" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    <text x="175" y="64" text-anchor="middle" fill="#065f46">Chat Server</text>
    <text x="175" y="78" text-anchor="middle" fill="#065f46">A (WS)</text>
    <rect x="460" y="52" width="90" height="36" rx="5" fill="#f0fdf4" stroke="#059669" stroke-width="1.5"/>
    <text x="505" y="64" text-anchor="middle" fill="#065f46">Chat Server</text>
    <text x="505" y="78" text-anchor="middle" fill="#065f46">B (WS)</text>
    <rect x="290" y="10" width="100" height="36" rx="5" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="340" y="28" text-anchor="middle" fill="#92400e">Redis</text>
    <text x="340" y="41" text-anchor="middle" fill="#92400e">Pub/Sub</text>
    <rect x="290" y="94" width="100" height="36" rx="5" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="340" y="106" text-anchor="middle" fill="#5b21b6">Cassandra</text>
    <text x="340" y="119" text-anchor="middle" fill="#5b21b6">(messages)</text>
    <line x1="80" y1="70" x2="130" y2="70" stroke="#2563eb" stroke-width="2" stroke-dasharray="4"/>
    <line x1="550" y1="70" x2="600" y2="70" stroke="#2563eb" stroke-width="2" stroke-dasharray="4"/>
    <line x1="220" y1="60" x2="290" y2="28" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr3)"/>
    <line x1="390" y1="28" x2="460" y2="60" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr3)"/>
    <line x1="220" y1="80" x2="290" y2="105" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr3)"/>
    <text x="45" y="40" text-anchor="middle" fill="#2563eb" font-size="9">WebSocket</text>
    <defs><marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
  </svg>
</div>

<div class="section-title">Message Storage (Cassandra Schema)</div>
<div class="code-block"><pre>-- Cassandra table for chat messages
CREATE TABLE messages (
  channel_id  UUID,
  message_id  TIMEUUID,   -- time-ordered, unique
  sender_id   UUID,
  content     TEXT,
  PRIMARY KEY (channel_id, message_id)
) WITH CLUSTERING ORDER BY (message_id DESC);

-- Query: last 50 messages in a channel
SELECT * FROM messages
WHERE channel_id = ? LIMIT 50;</pre></div>

<div class="callout blue">
  <strong>Why Cassandra?</strong> Partition key = channel_id → all messages in a channel on same node. TIMEUUID gives time-ordered, collision-free IDs. Excellent write throughput. Perfect for append-only chat history.
</div>

${revisionControls('sd-chat')}
`;

pages['sd-ratelimit'] = () => `
<div class="page-header">
  <div class="breadcrumb">Case Studies</div>
  <h1 class="page-title">API Rate Limiter</h1>
  <p class="page-subtitle">Protect your API from abuse and ensure fair use across distributed servers.</p>
  ${revisionControls('sd-ratelimit')}
</div>

<div class="elon-box">
  <strong>⚡ Core insight:</strong> Rate limiting is a <strong>distributed counter problem</strong>. The hard part isn't the algorithm — it's ensuring counts are accurate across 10 app servers hitting the same Redis.
</div>

<h2 class="section-title">Algorithm Comparison</h2>
<table class="data-table">
  <tr><th>Algorithm</th><th>Memory</th><th>Burst?</th><th>Accuracy</th><th>Best For</th></tr>
  <tr><td>Token Bucket</td><td>Low</td><td>Yes ✅</td><td>Good</td><td>APIs with bursty traffic</td></tr>
  <tr><td>Leaky Bucket</td><td>Low</td><td>No ❌</td><td>Good</td><td>Smooth output rate</td></tr>
  <tr><td>Fixed Window</td><td>Very low</td><td>2x at boundary</td><td>Fair</td><td>Simple per-minute limits</td></tr>
  <tr><td>Sliding Window Log</td><td>High</td><td>No</td><td>Exact ✅</td><td>Strict per-user limits</td></tr>
  <tr><td>Sliding Window Counter</td><td>Low</td><td>Partial</td><td>~98%</td><td>Best balance ✅</td></tr>
</table>

<h2 class="section-title">Algorithm Deep Dives</h2>
<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">Token Bucket — Most Common</div>
  <div class="accordion-body">
    <p>A bucket holds <strong>N tokens</strong>. Each request consumes 1 token. Tokens refill at a constant rate. Allows bursts up to bucket capacity. Used by AWS API Gateway, Stripe.</p>
    <div class="code-block"><pre><span class="cm">// Redis Lua script — atomic check-and-decrement</span>
<span class="cm">-- KEYS[1] = bucket key, ARGV[1] = capacity, ARGV[2] = refill_rate, ARGV[3] = now</span>
local tokens = tonumber(redis.call('GET', KEYS[1])) or tonumber(ARGV[1])
local last    = tonumber(redis.call('GET', KEYS[1]..':ts')) or tonumber(ARGV[3])
local elapsed = tonumber(ARGV[3]) - last
local refill  = math.floor(elapsed * tonumber(ARGV[2]))
tokens = math.min(tonumber(ARGV[1]), tokens + refill)

if tokens >= 1 then
  redis.call('SET', KEYS[1], tokens - 1)
  redis.call('SET', KEYS[1]..':ts', ARGV[3])
  return 1  <span class="cm">-- allowed</span>
else
  return 0  <span class="cm">-- 429 Too Many Requests</span>
end</pre></div>
    <div class="callout callout-green">
      <strong>Why Lua?</strong> Redis executes Lua atomically — no race condition between GET and SET across multiple app servers.
    </div>
  </div>
  <div class="accordion-header" onclick="toggleAccordion(this)">Sliding Window Counter — Best Balance</div>
  <div class="accordion-body">
    <p>Approximates sliding window using two fixed windows. Formula: <code>current_count + prev_count × overlap_ratio</code>. ~98% accurate with minimal memory.</p>
    <div class="code-block"><pre><span class="kw">def</span> is_allowed(user_id, limit, window_sec):
    now      = time.time()
    curr_key = f"rl:{user_id}:{int(now // window_sec)}"
    prev_key = f"rl:{user_id}:{int(now // window_sec) - 1}"

    curr_count = int(redis.get(curr_key) or 0)
    prev_count = int(redis.get(prev_key) or 0)

    <span class="cm"># How far into the current window are we? (0.0 → 1.0)</span>
    overlap = 1.0 - (now % window_sec) / window_sec

    weighted = prev_count * overlap + curr_count

    if weighted >= limit:
        return False  <span class="cm"># 429</span>

    pipe = redis.pipeline()
    pipe.incr(curr_key)
    pipe.expire(curr_key, window_sec * 2)
    pipe.execute()
    return True</pre></div>
  </div>
  <div class="accordion-header" onclick="toggleAccordion(this)">Sliding Window Log — Exact but Memory Heavy</div>
  <div class="accordion-body">
    <p>Store timestamp of every request in a sorted set. Remove entries older than the window. Count = remaining entries.</p>
    <div class="code-block"><pre><span class="kw">def</span> is_allowed(user_id, limit, window_ms):
    now = int(time.time() * 1000)  <span class="cm"># milliseconds</span>
    key = f"rl_log:{user_id}"

    pipe = redis.pipeline()
    pipe.zremrangebyscore(key, 0, now - window_ms)   <span class="cm"># remove old</span>
    pipe.zadd(key, {str(uuid4()): now})              <span class="cm"># add current</span>
    pipe.zcard(key)                                   <span class="cm"># count in window</span>
    pipe.expire(key, window_ms // 1000 + 1)
    results = pipe.execute()

    count = results[2]
    return count <= limit  <span class="cm"># True = allowed</span></pre></div>
    <div class="callout callout-amber"><strong>Memory cost:</strong> 1M users × 100 req/min = 100M entries in Redis. Use sliding window counter instead for high-traffic APIs.</div>
  </div>
  <div class="accordion-header" onclick="toggleAccordion(this)">Fixed Window Counter — Simplest</div>
  <div class="accordion-body">
    <div class="code-block"><pre><span class="kw">def</span> is_allowed(user_id, limit, window_sec):
    key   = f"rl:{user_id}:{int(time.time() // window_sec)}"
    count = redis.incr(key)
    if count == 1:
        redis.expire(key, window_sec)  <span class="cm"># set TTL on first request</span>
    return count <= limit</pre></div>
    <div class="callout callout-amber"><strong>Boundary problem:</strong> User can send 2× limit across a window boundary — 100 req at 11:59 + 100 req at 12:00 = 200 in 1 second.</div>
  </div>
</div>

<h2 class="section-title">Distributed Architecture</h2>
<div class="code-block"><pre><span class="cm">// System design: Rate limiter as middleware across N app servers</span>

Client → Load Balancer → [App1, App2, App3, ... AppN]
                                    ↓ (all share)
                              Redis Cluster
                              (rate limit state)

<span class="cm">// Header responses</span>
X-RateLimit-Limit:     1000   <span class="cm">// total allowed</span>
X-RateLimit-Remaining: 842    <span class="cm">// left in window</span>
X-RateLimit-Reset:     1704067200  <span class="cm">// epoch when window resets</span>
Retry-After:           30     <span class="cm">// seconds (on 429)</span>

<span class="cm">// Tiered limits (per plan)</span>
free    → 100  req/day
pro     → 10k  req/day  
enterprise → unlimited (fair use policy)</pre></div>

<div class="callout callout-blue">
  <strong>Where to implement:</strong>
  <ul style="margin:8px 0 0 16px;line-height:2">
    <li><strong>API Gateway</strong> (Kong, AWS API GW, Nginx) — global limits, no app code changes</li>
    <li><strong>Application middleware</strong> — per-user / per-feature granularity</li>
    <li><strong>Service mesh</strong> (Istio) — service-to-service rate limiting</li>
  </ul>
</div>

${quizHTML('sd-ratelimit', [
  { q: "Why use a Lua script in Redis for rate limiting?", opts: ["Lua is faster than Python", "Lua executes atomically — prevents race conditions between GET and SET across multiple servers", "Redis only supports Lua", "To reduce network calls"], ans: 1, exp: "Without atomic execution, two servers could both read count=99 and both allow requests, setting count to 100+101. Lua in Redis is atomic — the entire check-and-increment is one operation, eliminating race conditions." },
  { q: "Token bucket vs sliding window log — main difference?", opts: ["Token bucket stores more data", "Token bucket: O(1) memory, allows bursts. Sliding window log: exact, O(n) memory (stores every timestamp)", "Window log is simpler", "No real difference"], ans: 1, exp: "Token bucket: 2 Redis keys, constant memory, allows burst up to bucket size. Sliding window log: one sorted set entry per request — O(n) memory. At 10K req/user/hour, log uses 10K entries vs bucket's 2 counters." },
  { q: "The 'boundary problem' affects which algorithm?", opts: ["Token bucket", "Fixed window counter — allows 2× the limit at window boundaries", "Sliding window counter", "Leaky bucket"], ans: 1, exp: "Fixed window: 100 req limit. User sends 100 at 11:59:59, then 100 more at 12:00:01. Both windows see 100 (within limit), but 200 requests happened in 2 seconds. Sliding window algorithms eliminate this." },
  { q: "Where should you implement rate limiting for a microservices system?", opts: ["Only in the application code", "API Gateway for global limits + per-service middleware for fine-grained limits + Redis for distributed state", "In the database", "At the DNS level"], ans: 1, exp: "Multi-layer approach: 1) API Gateway (Kong/AWS API GW) — first line of defense, per-API-key limits. 2) Service middleware — per-user, per-feature limits. 3) Redis — shared distributed counter. Defense in depth." },
  { q: "What HTTP status code should rate-limited requests return?", opts: ["400 Bad Request", "401 Unauthorized", "429 Too Many Requests", "503 Service Unavailable"], ans: 2, exp: "429 Too Many Requests is the correct status. Include Retry-After header to tell the client when to try again. Also include X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset headers for transparency." },
  { q: "Sliding window counter is ~98% accurate. What causes the 2% error?", opts: ["Hash collisions in Redis", "It approximates the previous window's contribution using a weighted ratio, not exact timestamps", "Network latency", "Integer overflow"], ans: 1, exp: "Formula: count = prev_window_count × (1 - elapsed_in_current_window / window_size) + current_count. The approximation assumes requests were uniformly distributed in the previous window — which introduces a small error." },
  { q: "How do you handle rate limit for a celebrity user with millions of API calls?", opts: ["Block them entirely", "Give them a higher tier limit or whitelist, implement per-endpoint limits separately", "Use the same limit as everyone else", "Move them to a dedicated server"], ans: 1, exp: "Tiered limits: free=100/day, pro=10K/day, enterprise=unlimited (fair use). Whitelist internal services and trusted partners. For celebrity users in social apps, fan-out is the bigger problem — use async queues, not stricter rate limits." },
  { q: "What is the leaky bucket algorithm good for?", opts: ["Allowing burst traffic", "Smoothing output rate — requests are processed at a constant rate regardless of burst input", "Highest accuracy", "Lowest memory usage"], ans: 1, exp: "Leaky bucket: input flows in at variable rate, output leaks at fixed rate. Useful when you want smooth, predictable output (e.g., sending SMS/emails at a fixed rate to avoid overwhelming downstream). Unlike token bucket, NO bursting allowed." },
  { q: "How do you prevent rate limit bypass via multiple accounts?", opts: ["You can't prevent it", "Device fingerprinting, IP-based secondary limits, anomaly detection, CAPTCHA on account creation", "Use stronger encryption", "Only allow one account per email"], ans: 1, exp: "Defense layers: 1) IP rate limiting as secondary control, 2) Device fingerprinting, 3) ML-based anomaly detection (100 new accounts from same subnet), 4) Phone verification on signup, 5) Behavioral analysis (too-regular request patterns)." }
])}
`;

pages['sd-lru'] = () => `
<div class="page-header">
  <div class="breadcrumb">Case Studies</div>
  <h1 class="page-title">LRU Cache</h1>
  <p class="page-subtitle">Design a cache that evicts the Least Recently Used entry when full. Classic interview question testing DS knowledge + system thinking.</p>
  ${revisionControls('sd-lru')}
</div>

<div class="elon-box">
  <strong>⚡ Key insight:</strong> LRU = HashMap (O(1) lookup) + Doubly Linked List (O(1) move-to-front). The list tracks recency order; the map provides instant access. This combo appears in nearly every senior DS interview.
</div>

<h2 class="section-title">Data Structure Design</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin:16px 0;overflow-x:auto">
<svg viewBox="0 0 620 130" style="width:100%;max-width:620px;display:block;margin:0 auto">
  <defs>
    <marker id="la" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#2563eb"/></marker>
    <marker id="lb" markerWidth="7" markerHeight="7" refX="2" refY="3" orient="auto"><path d="M7,0 L7,6 L0,3 z" fill="#2563eb"/></marker>
  </defs>
  <rect x="5" y="30" width="70" height="46" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="40" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="#1e40af">HEAD</text>
  <text x="40" y="65" text-anchor="middle" font-size="9" fill="#3b82f6">Most</text>
  <text x="40" y="77" text-anchor="middle" font-size="9" fill="#3b82f6">Recent</text>
  <rect x="105" y="25" width="90" height="56" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="150" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">key=3</text>
  <text x="150" y="63" text-anchor="middle" font-size="11" fill="#065f46">val="C"</text>
  <text x="150" y="113" text-anchor="middle" font-size="9" fill="#7a7065">2nd recent</text>
  <rect x="225" y="25" width="90" height="56" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="270" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">key=1</text>
  <text x="270" y="63" text-anchor="middle" font-size="11" fill="#065f46">val="A"</text>
  <text x="270" y="113" text-anchor="middle" font-size="9" fill="#7a7065">3rd recent</text>
  <rect x="345" y="25" width="90" height="56" rx="8" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
  <text x="390" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#c2410c">key=7</text>
  <text x="390" y="63" text-anchor="middle" font-size="11" fill="#ea580c">val="G"</text>
  <text x="390" y="113" text-anchor="middle" font-size="9" fill="#ea580c">EVICT NEXT ⚠</text>
  <rect x="465" y="30" width="70" height="46" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <text x="500" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b">TAIL</text>
  <text x="500" y="65" text-anchor="middle" font-size="9" fill="#dc2626">Least</text>
  <text x="500" y="77" text-anchor="middle" font-size="9" fill="#dc2626">Recent</text>
  <line x1="77" y1="51" x2="103" y2="51" stroke="#2563eb" stroke-width="1.5" marker-end="url(#la)"/>
  <line x1="103" y1="58" x2="77" y2="58" stroke="#2563eb" stroke-width="1.5" marker-end="url(#lb)"/>
  <line x1="197" y1="51" x2="223" y2="51" stroke="#2563eb" stroke-width="1.5" marker-end="url(#la)"/>
  <line x1="223" y1="58" x2="197" y2="58" stroke="#2563eb" stroke-width="1.5" marker-end="url(#lb)"/>
  <line x1="317" y1="51" x2="343" y2="51" stroke="#2563eb" stroke-width="1.5" marker-end="url(#la)"/>
  <line x1="343" y1="58" x2="317" y2="58" stroke="#2563eb" stroke-width="1.5" marker-end="url(#lb)"/>
  <line x1="437" y1="51" x2="463" y2="51" stroke="#2563eb" stroke-width="1.5" marker-end="url(#la)"/>
  <line x1="463" y1="58" x2="437" y2="58" stroke="#2563eb" stroke-width="1.5" marker-end="url(#lb)"/>
</svg>
<p style="text-align:center;font-size:12px;color:var(--muted);margin-top:6px">HashMap: { 3→Node, 1→Node, 7→Node } — O(1) lookup by key</p>
</div>

<h2 class="section-title">Implementation</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Java — HashMap + Doubly Linked List <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>class LRUCache {
    private final int capacity;
    private final Map&lt;Integer, Node&gt; map = new HashMap&lt;&gt;();
    // Dummy head (most recent) and tail (least recent)
    private final Node head = new Node(0, 0);
    private final Node tail = new Node(0, 0);

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        moveToFront(map.get(key));   // mark as recently used
        return map.get(key).val;
    }

    public void put(int key, int val) {
        if (map.containsKey(key)) {
            map.get(key).val = val;
            moveToFront(map.get(key));
        } else {
            if (map.size() == capacity) {
                Node lru = tail.prev;  // least recently used
                remove(lru);
                map.remove(lru.key);
            }
            Node node = new Node(key, val);
            insertFront(node);
            map.put(key, node);
        }
    }

    private void moveToFront(Node n) { remove(n); insertFront(n); }

    private void remove(Node n) {
        n.prev.next = n.next;
        n.next.prev = n.prev;
    }

    private void insertFront(Node n) {
        n.next = head.next; n.prev = head;
        head.next.prev = n; head.next = n;
    }

    static class Node { int key, val; Node prev, next;
        Node(int k, int v) { key=k; val=v; } }
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Java Shortcut — LinkedHashMap <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre>class LRUCache extends LinkedHashMap&lt;Integer, Integer&gt; {
    private final int capacity;

    LRUCache(int cap) {
        super(cap, 0.75f, true); // accessOrder=true = LRU order
        this.capacity = cap;
    }

    public int get(int key)              { return super.getOrDefault(key, -1); }
    public void put(int key, int val)    { super.put(key, val); }

    @Override
    protected boolean removeEldestEntry(Map.Entry&lt;Integer,Integer&gt; e) {
        return size() &gt; capacity;  // auto-evict LRU when full
    }
}</pre></div>
      <div class="callout callout-amber">Use HashMap+DLL in interviews — it shows deeper understanding. LinkedHashMap shortcut is fine for production.</div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Production: Redis + Caffeine Multi-Tier <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre># Redis built-in LRU eviction
maxmemory 4gb
maxmemory-policy allkeys-lru   # evict least recently used key when full
# volatile-lru = only evict keys that have a TTL set

// Java: Caffeine — best local cache (L1)
LoadingCache&lt;String, User&gt; cache = Caffeine.newBuilder()
    .maximumSize(10_000)                     // LRU eviction at 10K entries
    .expireAfterAccess(10, TimeUnit.MINUTES) // TTL reset on each access
    .recordStats()                           // tracks hit rate
    .build(key -> userRepository.findById(key));

// Multi-tier: L1 Caffeine (microseconds) → L2 Redis (ms) → L3 DB (10-100ms)
public User getUser(String id) {
    return cache.get(id); // Caffeine calls Redis, Redis calls DB if miss
}</pre></div>
    </div>
  </div>
</div>

${quizHTML('sd-lru', [
  { q: "Why use a Doubly Linked List (not singly) for LRU?", opts: ["Doubly linked is simpler", "O(1) removal requires both prev and next pointers — singly linked needs O(n) traversal to find prev", "Singly linked doesn't support null", "Memory efficiency"], ans: 1, exp: "To remove a node: update prev.next and next.prev. With singly linked, you don't know prev without traversing from head — O(n). Doubly linked gives O(1) removal anywhere in the list." },
  { q: "LRU cache get() and put() should be?", opts: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], ans: 2, exp: "HashMap: O(1) key lookup. Doubly linked list: O(1) insert/remove with node reference from map. Combined: both O(1). This is exactly why we combine these two data structures." },
  { q: "What does maxmemory-policy allkeys-lru do in Redis?", opts: ["Deletes all keys when full", "Evicts the least recently accessed key when maxmemory is reached", "Only evicts keys with TTL", "Prevents new keys when full"], ans: 1, exp: "Redis tracks last-access time per key. When maxmemory limit is hit, allkeys-lru finds and evicts the key not accessed longest. volatile-lru does the same but only for keys that have a TTL set." },
  { q: "LinkedHashMap in Java with accessOrder=true does what?", opts: ["Sorts by key alphabetically", "Maintains LRU order automatically — most recently accessed entry moves to tail", "Sorts by insertion time", "Compresses old entries"], ans: 1, exp: "new LinkedHashMap<>(cap, 0.75f, true) — the third param 'accessOrder=true' reorders entries on every get()/put(). Combined with overriding removeEldestEntry(), you get a working LRU cache in 10 lines." },
  { q: "LRU cache with capacity 3. Operations: put(1), put(2), put(3), get(1), put(4). What's evicted?", opts: ["Key 1 (oldest)", "Key 2 (LRU after get(1) made 1 recent)", "Key 3", "Key 4"], ans: 1, exp: "After put(1,2,3): order = [3,2,1] (3 most recent). get(1) makes 1 most recent: [1,3,2]. put(4) evicts LRU = key 2. Final cache: {1,3,4}. Always trace through the doubly linked list to verify." },
  { q: "What is a cache stampede and how to fix it for LRU?", opts: ["When cache gets too full", "When cache miss triggers many simultaneous DB calls for same key — fix: mutex lock or probabilistic early expiry", "When LRU evicts too aggressively", "When two keys hash to same bucket"], ans: 1, exp: "Stampede: popular key expires, 1000 requests simultaneously miss cache → 1000 DB queries. Fix: 1) Mutex: first thread queries DB, others wait, 2) Probabilistic early expiry (expire before TTL with some probability), 3) Background refresh before expiry." },
  { q: "Caffeine vs Guava cache for Java local caching?", opts: ["Guava is always better", "Caffeine is superior: W-TinyLFU eviction (better hit rate than LRU), near-optimal, faster, active development", "They are identical", "Guava has more features"], ans: 1, exp: "Caffeine uses W-TinyLFU (Window Tiny LFU) — a hybrid algorithm that tracks both frequency AND recency, outperforming pure LRU on most real workloads. It's the recommended replacement for Guava cache and is used by Spring Boot's default cache." },
  { q: "For a distributed cache, what's the consistency trade-off?", opts: ["No trade-off exists", "Cache may serve stale data (AP) — choose TTL to balance freshness vs DB load", "Must use strong consistency always", "Cache is always consistent"], ans: 1, exp: "Distributed cache is eventually consistent by design. TTL controls staleness: short TTL = fresher data, more DB hits; long TTL = stale data risk, fewer DB hits. For user profiles: 5 min TTL is fine. For inventory/prices: shorter TTL or event-based invalidation." },
  { q: "LRU cache size: 1M entries with 1KB average value. How much RAM?", opts: ["~1 MB", "~1 GB + overhead", "~1 TB", "~100 MB"], ans: 1, exp: "1M × 1KB = 1GB for values + HashMap overhead (~50 bytes/entry × 1M = 50MB) + DLL node overhead (~32 bytes × 1M = 32MB) ≈ 1.1GB total. Redis adds ~65 bytes per key overhead. Always estimate cache RAM requirements during system design." }
])}
`;

pages['sd-msgqueue'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design → Distributed Systems</div>
  <h1 class="page-title">Message Queues</h1>
  <p class="page-subtitle">RabbitMQ vs Kafka — when to use each, how they work, and real-world patterns.</p>
  ${revisionControls('sd-msgqueue')}
</div>

<div class="elon-box">
  <strong>⚡ Core distinction:</strong> RabbitMQ is a <em>smart broker</em> — routes and forgets. Kafka is a <em>distributed log</em> — stores and replays. Choose based on whether consumers need replay or just delivery.
</div>

<h2 class="section-title">RabbitMQ vs Kafka — Side by Side</h2>
<table class="data-table">
  <tr><th></th><th>RabbitMQ</th><th>Kafka</th></tr>
  <tr><td><strong>Model</strong></td><td>Message broker — routes to queues, deletes on ACK</td><td>Distributed append-only log — messages persist and replay</td></tr>
  <tr><td><strong>Consumers</strong></td><td>Competing consumers — one message → one consumer</td><td>Consumer groups — each group reads independently at its own offset</td></tr>
  <tr><td><strong>Ordering</strong></td><td>Per-queue FIFO (global with single consumer)</td><td>Per-partition only — allows parallel throughput</td></tr>
  <tr><td><strong>Throughput</strong></td><td>4K–10K msg/sec (low latency 1–5ms)</td><td>Millions of events/sec (batch processing, consistent latency)</td></tr>
  <tr><td><strong>Retention</strong></td><td>Until consumed (or TTL)</td><td>Configurable — hours, days, forever</td></tr>
  <tr><td><strong>Replay</strong></td><td>❌ Not supported</td><td>✅ Seek to any offset and replay</td></tr>
  <tr><td><strong>Routing</strong></td><td>✅ Smart — exchanges, bindings, topics, fanout</td><td>Basic — topics and partitions</td></tr>
  <tr><td><strong>Complexity</strong></td><td>Low (single binary)</td><td>Higher (ZooKeeper/KRaft, partitions, consumer groups)</td></tr>
  <tr><td><strong>Best for</strong></td><td>Task queues, background jobs, RPC</td><td>Event streaming, audit logs, CDC, analytics</td></tr>
</table>

<h2 class="section-title">RabbitMQ Deep Dive</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">How RabbitMQ works — Exchanges, Queues, Bindings <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;margin-bottom:12px">
        <div style="font-family:'DM Mono',monospace;font-size:13px;line-height:2">
          Producer → <strong>Exchange</strong> (routing logic) → <strong>Queue(s)</strong> → Consumer(s)<br>
          Exchange types: <strong>Direct</strong> (exact key match), <strong>Fanout</strong> (broadcast all), <strong>Topic</strong> (wildcard), <strong>Headers</strong> (attribute match)
        </div>
      </div>
      <div class="code-block"><pre><span class="cm">// Java - Spring AMQP</span>
<span class="ann">@Bean</span>
Queue orderQueue() { <span class="kw">return new</span> Queue(<span class="str">"orders"</span>); }

<span class="ann">@Bean</span>
DirectExchange exchange() { <span class="kw">return new</span> DirectExchange(<span class="str">"order-exchange"</span>); }

<span class="ann">@Bean</span>
Binding binding() {
  <span class="kw">return</span> BindingBuilder.bind(orderQueue()).to(exchange()).with(<span class="str">"new-order"</span>);
}

<span class="ann">@RabbitListener</span>(queues = <span class="str">"orders"</span>)
<span class="kw">void</span> processOrder(Order order) {
  <span class="cm">// message deleted from queue after this returns without exception</span>
  paymentService.charge(order);
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Dead Letter Queues & Retries <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="callout callout-amber">
        When a message fails (consumer throws exception or message expires), it goes to a <strong>Dead Letter Exchange (DLX)</strong> → Dead Letter Queue. This prevents poison messages from blocking the main queue.
      </div>
      <div class="code-block"><pre><span class="cm">// Configure DLX on queue creation</span>
Map&lt;String, Object&gt; args = <span class="kw">new</span> HashMap&lt;&gt;();
args.put(<span class="str">"x-dead-letter-exchange"</span>, <span class="str">"dlx"</span>);
args.put(<span class="str">"x-message-ttl"</span>, <span class="num">60000</span>);         <span class="cm">// 60 sec TTL</span>
args.put(<span class="str">"x-max-retries"</span>, <span class="num">3</span>);              <span class="cm">// max 3 attempts</span>
<span class="kw">return new</span> Queue(<span class="str">"orders"</span>, true, false, false, args);</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Kafka Deep Dive</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Why Kafka is fast — the internals <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
        <div class="callout callout-blue" style="margin:0">
          <strong>Sequential disk writes</strong><br>
          Kafka appends to log files sequentially — OS page cache makes this near-RAM speed. Random writes (DB) = 100x slower.
        </div>
        <div class="callout callout-green" style="margin:0">
          <strong>Zero-copy (sendfile)</strong><br>
          Kernel copies data directly disk→NIC bypassing user space. Eliminates 2 extra data copies per message.
        </div>
        <div class="callout callout-amber" style="margin:0">
          <strong>Batching + compression</strong><br>
          Producers batch messages. LZ4/Snappy/ZSTD compress batches. 10x throughput improvement.
        </div>
        <div class="callout callout-purple" style="margin:0">
          <strong>Partitions = parallelism</strong><br>
          N partitions → N consumers in parallel. Scale throughput linearly by adding partitions.
        </div>
      </div>
      <div class="code-block"><pre>Topic: "user-events"
  ├── Partition 0: [offset 0][offset 1][offset 2]...
  ├── Partition 1: [offset 0][offset 1]...
  └── Partition 2: [offset 0][offset 1][offset 2][offset 3]...

Consumer Group "analytics":
  Consumer A → reads Partition 0
  Consumer B → reads Partition 1
  Consumer C → reads Partition 2
  <span class="cm">// Each consumer tracks its own offset independently</span>

Consumer Group "billing" (separate — reads ALL messages independently):
  Consumer X → reads Partition 0, 1, 2</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Producer & Consumer patterns <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm">// Producer — Java</span>
Properties props = <span class="kw">new</span> Properties();
props.put(<span class="str">"bootstrap.servers"</span>, <span class="str">"kafka:9092"</span>);
props.put(<span class="str">"key.serializer"</span>, StringSerializer.class.getName());
props.put(<span class="str">"value.serializer"</span>, StringSerializer.class.getName());
props.put(<span class="str">"acks"</span>, <span class="str">"all"</span>);                       <span class="cm">// wait for all replicas</span>
props.put(<span class="str">"enable.idempotence"</span>, <span class="str">"true"</span>);     <span class="cm">// exactly-once producer</span>

KafkaProducer&lt;String, String&gt; producer = <span class="kw">new</span> KafkaProducer&lt;&gt;(props);
producer.send(<span class="kw">new</span> ProducerRecord&lt;&gt;(<span class="str">"orders"</span>, userId, orderJson));

<span class="cm">// Consumer — Java</span>
props.put(<span class="str">"group.id"</span>, <span class="str">"payment-service"</span>);  <span class="cm">// consumer group</span>
props.put(<span class="str">"auto.offset.reset"</span>, <span class="str">"earliest"</span>); <span class="cm">// replay from start</span>

KafkaConsumer&lt;String, String&gt; consumer = <span class="kw">new</span> KafkaConsumer&lt;&gt;(props);
consumer.subscribe(Arrays.asList(<span class="str">"orders"</span>));
<span class="kw">while</span> (true) {
  ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(<span class="num">100</span>));
  <span class="kw">for</span> (ConsumerRecord record : records) {
    processOrder(record.value());
    <span class="cm">// commit offset manually for at-least-once guarantees</span>
  }
  consumer.commitSync();
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Kafka delivery guarantees — at-least-once vs exactly-once <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Guarantee</th><th>Config</th><th>Risk</th><th>Use When</th></tr>
        <tr><td>At-most-once</td><td>acks=0, auto-commit</td><td>Data loss</td><td>Metrics, logging (loss OK)</td></tr>
        <tr><td>At-least-once</td><td>acks=all, manual commit</td><td>Duplicates</td><td>Most use cases — make consumers idempotent</td></tr>
        <tr><td>Exactly-once</td><td>enable.idempotence=true + transactions</td><td>Overhead</td><td>Financial, inventory</td></tr>
      </table>
    </div>
  </div>
</div>

<h2 class="section-title">When to Choose Which</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:16px">
    <div style="font-weight:700;font-size:15px;color:#065f46;margin-bottom:10px">✅ Use RabbitMQ when:</div>
    <ul style="margin:0 0 0 16px;line-height:2.2;font-size:14px">
      <li>Task-oriented workloads (send email, process payment)</li>
      <li>Smart routing (different queues for different message types)</li>
      <li>Request-Reply / RPC patterns</li>
      <li>Moderate throughput (&lt;100K msg/sec)</li>
      <li>Simple ops — single binary, easy to reason about</li>
      <li>Messages must be deleted after processing</li>
    </ul>
  </div>
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:16px">
    <div style="font-weight:700;font-size:15px;color:#1e40af;margin-bottom:10px">✅ Use Kafka when:</div>
    <ul style="margin:0 0 0 16px;line-height:2.2;font-size:14px">
      <li>Multiple systems consume the same events independently</li>
      <li>Replayability needed (reprocess historical events)</li>
      <li>Massive scale (millions of events/sec)</li>
      <li>Event sourcing / CDC (Change Data Capture)</li>
      <li>Analytics pipelines and audit logs</li>
      <li>Stream processing (Kafka Streams, Flink)</li>
    </ul>
  </div>
</div>

<div class="callout callout-amber">
  <strong>Managed services:</strong> Don't run Kafka yourself if you can avoid it. Use <strong>Confluent Cloud</strong>, <strong>Amazon MSK</strong>, or <strong>Upstash</strong>. Similarly for RabbitMQ: <strong>CloudAMQP</strong> or <strong>Amazon MQ</strong>.
</div>

${quizHTML('sd-msgqueue', [
  { q: "Key difference between Kafka and RabbitMQ message retention?", opts: ["RabbitMQ keeps messages longer", "Kafka persists messages configurable forever allowing replay; RabbitMQ deletes on acknowledgment", "Both delete immediately", "No difference"], ans: 1, exp: "RabbitMQ: message is gone once a consumer acknowledges it — designed for task queues. Kafka: messages persist by time or size policy (days, forever). Multiple consumer groups can read the same message independently. Replay past events anytime." },
  { q: "Why is Kafka throughput orders of magnitude higher than RabbitMQ?", opts: ["Kafka uses more memory", "Sequential disk writes + OS page cache + zero-copy sendfile + producer batching", "Kafka uses UDP", "RabbitMQ limits connections"], ans: 1, exp: "Kafka's speed: 1) Sequential log appends (OS page cache ≈ RAM speed), 2) sendfile() zero-copy skips user-space, 3) Producer batching compresses 10-100 messages together, 4) Partitions allow N-parallel consumers. RabbitMQ maintains per-message ACK state — much more overhead." },
  { q: "Consumer groups in Kafka mean?", opts: ["Only one consumer per topic", "Multiple independent groups each read ALL messages — billing and analytics can both consume orders independently", "Groups share a single offset", "Groups delete messages faster"], ans: 1, exp: "Each consumer group maintains its own offset per partition. Add a new consumer group and it starts reading from the beginning (or any offset). This is Kafka's killer feature for event streaming — fanout to N systems with zero coupling." },
  { q: "What is a Dead Letter Queue in RabbitMQ?", opts: ["A queue for system logs", "A queue receiving messages that failed processing — prevents poison messages blocking the main queue", "RabbitMQ's internal queue", "A backup queue"], ans: 1, exp: "DLQ: when a message is rejected (consumer throws exception, TTL expires, max retries reached), it routes to the Dead Letter Exchange → Dead Letter Queue. Ops team can inspect, fix, and replay from DLQ. Critical for production reliability." },
  { q: "Kafka ordering guarantee — what's the caveat?", opts: ["Global ordering across all partitions", "Ordering guaranteed per partition only — not globally across all partitions", "No ordering at all", "Ordered by timestamp always"], ans: 1, exp: "Within a partition: strict offset order guaranteed. Across partitions: no global order. Solution: use a partition key (userId, orderId) — all messages for the same key go to the same partition, giving per-entity ordering. This is intentional — it enables parallelism." },
  { q: "Idempotent consumers in Kafka — why needed?", opts: ["For better performance", "At-least-once delivery can duplicate messages on failure — consumers must handle duplicate processing safely", "Required by Kafka protocol", "Only for multi-partition topics"], ans: 1, exp: "With at-least-once: consumer processes message, commits offset, but crashes before commit → message reprocessed. Make consumers idempotent: check if already processed (dedup by event ID), use DB upserts. Exactly-once Kafka transactions are available but add overhead." },
  { q: "When would you choose RabbitMQ over Kafka for a payment system?", opts: ["Never — always use Kafka", "For task-queue style: each payment processed once, smart routing by payment type, simpler ops, no need for replay", "When scale exceeds 1M/sec", "When using Python only"], ans: 1, exp: "Payment processing is often task-queue style: each message processed once, ACK on success, NACK (+ DLQ) on failure. RabbitMQ routing lets you send domestic vs international payments to different queues with different consumers. Much simpler than Kafka for moderate throughput." },
  { q: "What is Change Data Capture (CDC) with Kafka?", opts: ["A backup strategy", "Capturing every DB change as a Kafka event — Debezium reads MySQL/Postgres WAL and publishes changes as events", "A Kafka compression method", "Consumer group management"], ans: 1, exp: "CDC with Debezium: reads database WAL (Write-Ahead Log), publishes INSERT/UPDATE/DELETE as Kafka events. Use cases: sync DB to Elasticsearch, invalidate caches on DB change, audit trail, microservice event sourcing. Zero impact on application code." },
  { q: "Kafka partition count — why does it matter for scaling?", opts: ["Only affects storage", "Partitions = max parallel consumers; 10 partitions = max 10 consumers in a group can process in parallel", "More partitions = slower", "Partitions are unlimited"], ans: 1, exp: "Each partition assigned to at most one consumer per group. 3 partitions + 10 consumers = 3 active, 7 idle. To scale to 10 parallel consumers: need 10 partitions. Partitions can be increased (but causes rebalancing) — plan partition count for expected peak parallelism." }
])}
`;

pages['sd-tradeoffs'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design → Distributed Systems</div>
  <h1 class="page-title">System Design Trade-offs</h1>
  <p class="page-subtitle">The definitive comparison guide. Every senior engineer question answered clearly.</p>
  ${revisionControls('sd-tradeoffs')}
</div>

<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px">
  ${[
    ['consistency','Strong vs Eventual Consistency'],
    ['latency','Latency vs Throughput'],
    ['acid-base','ACID vs BASE'],
    ['cache-rw','Read-Through vs Write-Through Cache'],
    ['batch-stream','Batch vs Stream Processing'],
    ['lb-apigw','Load Balancer vs API Gateway'],
    ['proxy','Proxy vs Reverse Proxy'],
    ['sql-nosql','SQL vs NoSQL'],
    ['replication','Primary-Replica vs Peer-to-Peer'],
    ['polling','Polling vs Long-Poll vs WebSockets vs Webhooks'],
    ['stateful','Stateful vs Stateless'],
    ['rate-algo','Token Bucket vs Leaky Bucket'],
    ['read-write','Read Heavy vs Write Heavy'],
    ['cdn','CDN vs Direct Serving'],
    ['serverless','Serverless vs Traditional'],
    ['compress','Compression vs Deduplication'],
    ['rest-rpc','REST vs RPC'],
    ['caching-sides','Server-Side vs Client-Side Cache']
  ].map((item,i) => `<button class="pill-tab${i===0?' active':''}" onclick="showBlock('td-${item[0]}',this)">${item[1]}</button>`).join('')}
</div>

<div id="block-td-consistency" class="block-section">
<h2 class="section-title">Strong vs Eventual Consistency</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Strong Consistency</th><th>Eventual Consistency</th></tr>
  <tr><td><strong>Guarantee</strong></td><td>Every read sees the latest write — no stale data</td><td>Reads may be stale briefly; all replicas converge over time</td></tr>
  <tr><td><strong>Latency</strong></td><td>Higher — must coordinate across replicas before confirming</td><td>Lower — write to local node, replicate asynchronously</td></tr>
  <tr><td><strong>Availability</strong></td><td>May block during network partition to stay consistent</td><td>Stays available even during partition (serves stale data)</td></tr>
  <tr><td><strong>Examples</strong></td><td>Postgres, MySQL, etcd, ZooKeeper, Spanner</td><td>Cassandra, DynamoDB, Redis (async replication), DNS</td></tr>
  <tr><td><strong>Use when</strong></td><td>Banking, inventory, bookings — stale = catastrophic</td><td>Social feeds, profiles, analytics — brief staleness OK</td></tr>
</table>
<div class="callout callout-blue">
  <strong>Interview tip:</strong> "Since partitions always happen in distributed systems, the real choice is CP (refuse requests to stay consistent) vs AP (serve stale data to stay available). For payments I choose CP; for a news feed I choose AP."
</div>
<div class="callout callout-amber">
  <strong>Advanced nuance:</strong> Mixed requirements are normal — Ticketmaster needs CP for booking but AP for search. Consistency models beyond binary: causal consistency, read-your-own-writes, monotonic reads, bounded staleness.
</div>
</div>

<div id="block-td-latency" class="block-section" style="display:none">
<h2 class="section-title">Latency vs Throughput</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Latency</th><th>Throughput</th></tr>
  <tr><td><strong>Definition</strong></td><td>Time for one request start-to-finish</td><td>Volume of work completed per unit time</td></tr>
  <tr><td><strong>Measured in</strong></td><td>ms / seconds</td><td>req/sec, MB/sec, events/sec</td></tr>
  <tr><td><strong>Improves with</strong></td><td>CDN, caching, closer servers, faster DB queries</td><td>Parallelism, batching, horizontal scaling, sharding</td></tr>
  <tr><td><strong>Trade-off</strong></td><td>Batching increases throughput but increases latency</td><td>High throughput systems often accept higher per-request latency</td></tr>
  <tr><td><strong>Critical for</strong></td><td>Gaming, trading, real-time comms, interactive UX</td><td>ETL pipelines, video streaming, bulk analytics</td></tr>
</table>
<div class="callout callout-blue">
  <strong>Key insight:</strong> You can have low latency OR high throughput easily, but both simultaneously requires careful engineering. A trade-off: sending data in larger batches improves throughput but increases time-to-first-byte latency.
</div>
</div>

<div id="block-td-acid-base" class="block-section" style="display:none">
<h2 class="section-title">ACID vs BASE</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:16px">
    <div style="font-weight:700;font-size:15px;color:#065f46;margin-bottom:12px">ACID — Strong Consistency</div>
    <div style="display:flex;flex-direction:column;gap:8px;font-size:14px">
      <div><strong style="color:#16a34a">A</strong>tomicity — all or nothing</div>
      <div><strong style="color:#16a34a">C</strong>onsistency — valid state always</div>
      <div><strong style="color:#16a34a">I</strong>solation — no interference between transactions</div>
      <div><strong style="color:#16a34a">D</strong>urability — committed = persisted</div>
    </div>
    <div style="margin-top:12px;font-size:13px;color:#374151">Use for: banking, orders, inventory, healthcare</div>
    <div style="margin-top:6px;font-size:13px;color:#374151">Examples: PostgreSQL, MySQL, Oracle, SQL Server</div>
  </div>
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:16px">
    <div style="font-weight:700;font-size:15px;color:#1e40af;margin-bottom:12px">BASE — High Availability</div>
    <div style="display:flex;flex-direction:column;gap:8px;font-size:14px">
      <div><strong style="color:#2563eb">BA</strong>sically Available — always responds</div>
      <div><strong style="color:#2563eb">S</strong>oft state — data in flux, eventually updates</div>
      <div><strong style="color:#2563eb">E</strong>ventually consistent — converges over time</div>
    </div>
    <div style="margin-top:12px;font-size:13px;color:#374151">Use for: social media, recommendations, analytics</div>
    <div style="margin-top:6px;font-size:13px;color:#374151">Examples: Cassandra, DynamoDB, MongoDB, Redis</div>
  </div>
</div>
<table class="data-table">
  <tr><th>Aspect</th><th>ACID</th><th>BASE</th></tr>
  <tr><td>Consistency</td><td>Strong — all transactions immediately consistent</td><td>Eventual — temporary divergence allowed</td></tr>
  <tr><td>Availability</td><td>May reduce availability to maintain consistency</td><td>High — system stays up even during partitions</td></tr>
  <tr><td>Scalability</td><td>Harder to scale horizontally</td><td>Designed for horizontal scale-out</td></tr>
  <tr><td>Developer complexity</td><td>DB handles consistency automatically</td><td>App must handle conflict resolution</td></tr>
</table>
</div>

<div id="block-td-cache-rw" class="block-section" style="display:none">
<h2 class="section-title">Read-Through vs Write-Through Cache</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Read-Through</th><th>Write-Through</th></tr>
  <tr><td><strong>When data loads</strong></td><td>On cache miss — lazy load from DB</td><td>On every write — sync to cache AND DB</td></tr>
  <tr><td><strong>Consistency</strong></td><td>May serve stale data between writes</td><td>Always consistent — cache = DB</td></tr>
  <tr><td><strong>Write latency</strong></td><td>Normal (writes go straight to DB)</td><td>Higher — must write to both</td></tr>
  <tr><td><strong>Read latency (hit)</strong></td><td>Very fast</td><td>Very fast</td></tr>
  <tr><td><strong>Read latency (miss)</strong></td><td>Slow — must fetch from DB</td><td>Rare — cache usually populated on write</td></tr>
  <tr><td><strong>Best for</strong></td><td>Read-heavy, infrequently updated data</td><td>Write-heavy where reads must be fresh</td></tr>
  <tr><td><strong>Examples</strong></td><td>Product catalog, user profiles, blog posts</td><td>Banking balances, inventory counts, session data</td></tr>
</table>
<div class="callout callout-amber">
  <strong>Write-Behind (async):</strong> Write to cache, return immediately, flush to DB asynchronously. Best write performance but risk of data loss if cache crashes before flush. Use for analytics counters, view counts.
</div>
</div>

<div id="block-td-batch-stream" class="block-section" style="display:none">
<h2 class="section-title">Batch Processing vs Stream Processing</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Batch Processing</th><th>Stream Processing</th></tr>
  <tr><td><strong>When processed</strong></td><td>Scheduled intervals (hourly, daily)</td><td>Continuously, as data arrives</td></tr>
  <tr><td><strong>Latency</strong></td><td>Minutes to hours</td><td>Milliseconds to seconds</td></tr>
  <tr><td><strong>Throughput</strong></td><td>Very high (optimised for large volumes)</td><td>Lower per job but continuous</td></tr>
  <tr><td><strong>Complexity</strong></td><td>Simple — collect, process, store</td><td>Complex — windowing, state, backpressure</td></tr>
  <tr><td><strong>Tools</strong></td><td>Spark, Hadoop, AWS Glue, dbt</td><td>Kafka Streams, Flink, Spark Streaming</td></tr>
  <tr><td><strong>Use when</strong></td><td>Payroll, reports, ETL, ML training data</td><td>Fraud detection, real-time analytics, IoT alerts</td></tr>
</table>
</div>

<div id="block-td-lb-apigw" class="block-section" style="display:none">
<h2 class="section-title">Load Balancer vs API Gateway vs Reverse Proxy</h2>
<table class="data-table">
  <tr><th>Component</th><th>Purpose</th><th>Layer</th><th>Features</th><th>Examples</th></tr>
  <tr><td><strong>Load Balancer</strong></td><td>Distribute traffic across multiple instances</td><td>L4 or L7</td><td>Health checks, failover, sticky sessions, SSL termination</td><td>AWS ALB/NLB, nginx, HAProxy</td></tr>
  <tr><td><strong>Reverse Proxy</strong></td><td>Forward client requests to backend servers, hide server identity</td><td>L7</td><td>Load balancing, SSL termination, caching, compression</td><td>nginx, Caddy, Envoy</td></tr>
  <tr><td><strong>API Gateway</strong></td><td>Manage, secure, route API calls to microservices</td><td>L7 (application)</td><td>Auth, rate limiting, routing, transformation, analytics</td><td>Kong, AWS API GW, Apigee</td></tr>
</table>
<div class="callout callout-blue">
  <strong>Typical architecture:</strong> Internet → Load Balancer (distribute across API Gateway instances) → API Gateway (auth, rate limit, route) → Microservices → internal Load Balancer
</div>
<div class="callout callout-green">
  <strong>Forward Proxy vs Reverse Proxy:</strong> Forward proxy = acts for the <em>client</em> (hides client IP, content filtering). Reverse proxy = acts for the <em>server</em> (hides server, load balancing). Nginx is almost always used as a reverse proxy.
</div>
</div>

<div id="block-td-proxy" class="block-section" style="display:none">
<h2 class="section-title">Proxy vs Reverse Proxy</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Forward Proxy</th><th>Reverse Proxy</th></tr>
  <tr><td><strong>Sits between</strong></td><td>Client and internet</td><td>Internet and backend servers</td></tr>
  <tr><td><strong>Hides</strong></td><td>Client identity from servers</td><td>Server identity from clients</td></tr>
  <tr><td><strong>Main uses</strong></td><td>Privacy, content filtering, corporate internet control, geo-bypass</td><td>Load balancing, SSL termination, caching, DDoS protection</td></tr>
  <tr><td><strong>Direction</strong></td><td>Outbound (client → internet)</td><td>Inbound (internet → servers)</td></tr>
  <tr><td><strong>Examples</strong></td><td>Squid, corporate proxy, VPN</td><td>nginx, Cloudflare, AWS ALB</td></tr>
</table>
</div>

<div id="block-td-sql-nosql" class="block-section" style="display:none">
<h2 class="section-title">SQL vs NoSQL</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>SQL (Relational)</th><th>NoSQL</th></tr>
  <tr><td><strong>Schema</strong></td><td>Fixed, defined upfront</td><td>Flexible, schemaless</td></tr>
  <tr><td><strong>ACID</strong></td><td>Full ACID transactions ✅</td><td>Eventual consistency (usually)</td></tr>
  <tr><td><strong>Scaling</strong></td><td>Vertical + read replicas</td><td>Horizontal sharding built-in</td></tr>
  <tr><td><strong>Queries</strong></td><td>Complex JOINs, aggregations, ad-hoc</td><td>Simple key lookups, limited joins</td></tr>
  <tr><td><strong>Types</strong></td><td>Tables & rows</td><td>Document, KV, Wide-col, Graph</td></tr>
  <tr><td><strong>Examples</strong></td><td>PostgreSQL, MySQL, Aurora</td><td>MongoDB, Cassandra, DynamoDB, Redis, Neo4j</td></tr>
  <tr><td><strong>Use when</strong></td><td>Complex relationships, transactions, reporting</td><td>Massive scale, flexible schema, simple lookups</td></tr>
</table>
<div class="callout callout-blue"><strong>Rule of thumb:</strong> Default to SQL (PostgreSQL). Switch to NoSQL only when you have a specific, proven need — scale, schema flexibility, or a data model that doesn't fit tables.</div>
</div>

<div id="block-td-replication" class="block-section" style="display:none">
<h2 class="section-title">Primary-Replica vs Peer-to-Peer Replication</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Primary-Replica (Leader-Follower)</th><th>Peer-to-Peer (Leaderless)</th></tr>
  <tr><td><strong>Writes</strong></td><td>Only to primary/leader</td><td>Any node</td></tr>
  <tr><td><strong>Reads</strong></td><td>Primary (strong) or replica (eventual)</td><td>Any node (quorum-based)</td></tr>
  <tr><td><strong>Consistency</strong></td><td>Strong on primary, eventual on replicas</td><td>Tunable via W+R &gt; N quorum</td></tr>
  <tr><td><strong>Failover</strong></td><td>Replica promoted to primary</td><td>No failover needed — any node accepts writes</td></tr>
  <tr><td><strong>Conflict</strong></td><td>No conflicts — single writer</td><td>Possible — last-write-wins or CRDT</td></tr>
  <tr><td><strong>Examples</strong></td><td>MySQL, PostgreSQL, MongoDB, Redis Sentinel</td><td>Cassandra, DynamoDB, Riak</td></tr>
</table>
<div class="callout callout-amber"><strong>Replication sync:</strong> Sync replication — write confirmed only when all replicas ack (strong, slow). Async — write confirmed when primary writes (fast, eventual). Semi-sync — confirmed when at least one replica acks (balanced).</div>
</div>

<div id="block-td-polling" class="block-section" style="display:none">
<h2 class="section-title">Polling vs Long-Polling vs WebSockets vs Webhooks</h2>
<table class="data-table">
  <tr><th>Method</th><th>How</th><th>Latency</th><th>Overhead</th><th>Best For</th></tr>
  <tr><td><strong>Polling</strong></td><td>Client asks server every N seconds</td><td>Up to N seconds</td><td>High — many empty responses</td><td>Low-frequency checks (email every 5min)</td></tr>
  <tr><td><strong>Long-Polling</strong></td><td>Client asks, server holds until data ready</td><td>Near real-time</td><td>Medium — new request per event</td><td>Chat/notifications when WebSockets unavailable</td></tr>
  <tr><td><strong>WebSockets</strong></td><td>Persistent bi-directional TCP connection</td><td>Real-time (&lt;10ms)</td><td>Low per-message, 1 connection</td><td>Chat, games, live dashboards, collaborative tools</td></tr>
  <tr><td><strong>Webhooks</strong></td><td>Server POSTs to your URL on event</td><td>Real-time (server-to-server)</td><td>Very low — only on events</td><td>Payment notifications, CI/CD triggers, 3rd party integrations</td></tr>
</table>
<div class="callout callout-blue"><strong>Choosing:</strong> Default to WebSockets for user-facing real-time. Use Webhooks for server-to-server event notification. Use Long-Polling as fallback when WebSockets unavailable. Avoid Polling unless update frequency is very low.</div>
</div>

<div id="block-td-stateful" class="block-section" style="display:none">
<h2 class="section-title">Stateful vs Stateless Architecture</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Stateful</th><th>Stateless</th></tr>
  <tr><td><strong>Session data</strong></td><td>Server stores session — responses depend on history</td><td>Every request self-contained — no server memory</td></tr>
  <tr><td><strong>Scaling</strong></td><td>Complex — sticky sessions or shared session store needed</td><td>Simple — any server can handle any request</td></tr>
  <tr><td><strong>Fault tolerance</strong></td><td>Server crash loses session state</td><td>Server crash transparent — next request goes elsewhere</td></tr>
  <tr><td><strong>Examples</strong></td><td>FTP, game servers, VoIP calls</td><td>REST APIs, microservices, Lambda functions</td></tr>
  <tr><td><strong>Use when</strong></td><td>Real-time continuous interaction (gaming, streaming)</td><td>Default choice — most web APIs, microservices</td></tr>
</table>
<div class="callout callout-green"><strong>Modern approach:</strong> Make services stateless, externalise state to Redis/DB. Enables horizontal scaling without sticky sessions. JWT tokens are a stateless auth mechanism.</div>
</div>

<div id="block-td-rate-algo" class="block-section" style="display:none">
<h2 class="section-title">Token Bucket vs Leaky Bucket</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Token Bucket</th><th>Leaky Bucket</th></tr>
  <tr><td><strong>Bursts</strong></td><td>✅ Allowed up to bucket capacity</td><td>❌ No bursts — constant output rate</td></tr>
  <tr><td><strong>Output</strong></td><td>Variable — burst then throttle</td><td>Smooth constant rate regardless of input</td></tr>
  <tr><td><strong>Mechanism</strong></td><td>Tokens refill at rate R. Request needs token to proceed.</td><td>Requests queue. Released at constant rate. Overflow discarded.</td></tr>
  <tr><td><strong>Use when</strong></td><td>API rate limiting, web servers (bursts OK)</td><td>VoIP, video streaming (smooth output required)</td></tr>
  <tr><td><strong>Used by</strong></td><td>AWS API Gateway, most rate limiters</td><td>Network traffic shaping, ISP bandwidth control</td></tr>
</table>
</div>

<div id="block-td-read-write" class="block-section" style="display:none">
<h2 class="section-title">Read Heavy vs Write Heavy Systems</h2>
<table class="data-table">
  <tr><th>Strategy</th><th>Read Heavy</th><th>Write Heavy</th></tr>
  <tr><td><strong>Primary bottleneck</strong></td><td>DB read throughput</td><td>DB write throughput, disk I/O</td></tr>
  <tr><td><strong>Caching</strong></td><td>Aggressive — Redis in front of DB</td><td>Limited — cache invalidation complex</td></tr>
  <tr><td><strong>DB scaling</strong></td><td>Read replicas — route reads to replicas</td><td>Write sharding — distribute writes across nodes</td></tr>
  <tr><td><strong>Data model</strong></td><td>Denormalize for fast reads</td><td>Normalize to reduce write amplification</td></tr>
  <tr><td><strong>Tools</strong></td><td>CDN, Redis, read replicas, Elasticsearch</td><td>Cassandra, Kafka, time-series DBs, LSM-tree stores</td></tr>
  <tr><td><strong>Examples</strong></td><td>News feeds, product catalogs, CDNs (99% reads)</td><td>IoT sensors, logging, analytics ingestion, chat</td></tr>
</table>
<div class="callout callout-blue"><strong>Identify your ratio first:</strong> Most systems are 80-95% reads. A 100:1 read/write ratio should immediately trigger caching + read replicas as the solution, not premature write optimisation.</div>
</div>

<div id="block-td-cdn" class="block-section" style="display:none">
<h2 class="section-title">CDN vs Direct Server Serving</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>CDN</th><th>Direct Server</th></tr>
  <tr><td><strong>Latency</strong></td><td>Low — serves from nearest edge node</td><td>Depends on server location</td></tr>
  <tr><td><strong>Global users</strong></td><td>Excellent — edge nodes worldwide</td><td>Poor for distant users</td></tr>
  <tr><td><strong>Cost</strong></td><td>Per-GB egress + CDN fees</td><td>Just origin server bandwidth</td></tr>
  <tr><td><strong>Cache invalidation</strong></td><td>Complex — TTL, API purge, URL versioning</td><td>Instant — no cache</td></tr>
  <tr><td><strong>Use for</strong></td><td>Static assets, media, global apps</td><td>Dynamic data, small/local apps</td></tr>
</table>
</div>

<div id="block-td-serverless" class="block-section" style="display:none">
<h2 class="section-title">Serverless vs Traditional Server-Based</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Serverless</th><th>Traditional</th></tr>
  <tr><td><strong>Scaling</strong></td><td>Automatic — scales to zero and to millions</td><td>Manual provisioning and scaling</td></tr>
  <tr><td><strong>Cost model</strong></td><td>Pay per execution (ms)</td><td>Pay for running servers 24/7</td></tr>
  <tr><td><strong>Cold starts</strong></td><td>100ms–3s latency on first invocation</td><td>No cold starts</td></tr>
  <tr><td><strong>State</strong></td><td>Stateless — external state required</td><td>Can maintain in-memory state</td></tr>
  <tr><td><strong>Vendor lock-in</strong></td><td>High (Lambda, Cloud Functions)</td><td>Low — portable</td></tr>
  <tr><td><strong>Use for</strong></td><td>Event-driven, variable workloads, APIs, glue code</td><td>Predictable load, low-latency, stateful apps</td></tr>
</table>
</div>

<div id="block-td-compress" class="block-section" style="display:none">
<h2 class="section-title">Data Compression vs Deduplication</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Compression</th><th>Deduplication</th></tr>
  <tr><td><strong>Works on</strong></td><td>Single file — removes redundancies within</td><td>Across dataset — removes identical copies</td></tr>
  <tr><td><strong>Types</strong></td><td>Lossless (ZIP, LZ4) or lossy (JPEG, MP3)</td><td>Always lossless — pointer to single copy</td></tr>
  <tr><td><strong>Best for</strong></td><td>Individual files, network transmission, Kafka messages</td><td>Backup systems, storage with repeated data</td></tr>
  <tr><td><strong>Overhead</strong></td><td>CPU to compress/decompress</td><td>CPU to hash and compare blocks</td></tr>
</table>
</div>

<div id="block-td-rest-rpc" class="block-section" style="display:none">
<h2 class="section-title">REST vs RPC (gRPC)</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>REST</th><th>gRPC / RPC</th></tr>
  <tr><td><strong>Protocol</strong></td><td>HTTP/1.1 or HTTP/2, JSON</td><td>HTTP/2, Protocol Buffers (binary)</td></tr>
  <tr><td><strong>Performance</strong></td><td>Good</td><td>Excellent — binary, multiplexed, streaming</td></tr>
  <tr><td><strong>Typing</strong></td><td>Loose</td><td>Strongly typed .proto schema</td></tr>
  <tr><td><strong>Streaming</strong></td><td>SSE/WebSocket workaround</td><td>Native bi-directional streaming</td></tr>
  <tr><td><strong>Browser support</strong></td><td>Universal</td><td>Limited (gRPC-Web needed)</td></tr>
  <tr><td><strong>Use for</strong></td><td>Public APIs, browser clients, 3rd party integrations</td><td>Internal microservices, low-latency, streaming data</td></tr>
</table>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;margin:14px 0">
  <div style="font-weight:700;margin-bottom:10px">Decision flowchart:</div>
  <div style="font-family:'DM Mono',monospace;font-size:13px;line-height:2">
    Is the API client-facing (browser/mobile)? → REST or GraphQL<br>
    &nbsp;&nbsp;├─ Over-fetching/under-fetching a concern? → GraphQL<br>
    &nbsp;&nbsp;└─ Standard CRUD? → REST<br>
    Is it internal microservice communication? → gRPC<br>
    Need real-time bidirectional streaming? → gRPC streaming or WebSockets
  </div>
</div>
</div>

<div id="block-td-caching-sides" class="block-section" style="display:none">
<h2 class="section-title">Server-Side vs Client-Side Caching</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Server-Side Cache</th><th>Client-Side Cache</th></tr>
  <tr><td><strong>Location</strong></td><td>Redis, Memcached on server</td><td>Browser cache, localStorage, service worker</td></tr>
  <tr><td><strong>Shared across users</strong></td><td>✅ Yes — one cached response serves all</td><td>❌ No — per-device</td></tr>
  <tr><td><strong>Network saved</strong></td><td>Reduces DB load</td><td>Reduces network requests entirely</td></tr>
  <tr><td><strong>Invalidation</strong></td><td>Immediate — delete key</td><td>Difficult — TTL/ETag/versioned URLs</td></tr>
  <tr><td><strong>Offline access</strong></td><td>❌ No</td><td>✅ Yes (service workers)</td></tr>
  <tr><td><strong>Use for</strong></td><td>DB query results, API responses, computed data</td><td>Static assets, fonts, app shell, user preferences</td></tr>
</table>
<div class="callout callout-green"><strong>Best practice:</strong> Use both. Server-side cache for shared data (Redis caching DB queries). Client-side for static assets (long TTL with content-hash URLs). CDN sits in between — server-side edge cache.</div>
</div>

${quizHTML('sd-tradeoffs', [
  { q: "Which consistency model should you use for a bank transfer?", opts: ["Eventual consistency — faster", "Strong consistency — stale balance = double spend", "Either works", "Depends on bank size"], ans: 1, exp: "Banking requires strong consistency. If two servers have different balances, a user could spend money they don't have or funds could be deducted twice. Use CP systems (Postgres with serializable isolation) and accept the latency cost." },
  { q: "REST vs gRPC — when to choose gRPC for microservices?", opts: ["Always use REST", "gRPC for internal services: binary protocol, typed schema, streaming, 5-10x lower overhead than JSON/HTTP", "gRPC when browser support needed", "gRPC only for Google services"], ans: 1, exp: "gRPC wins for internal microservices: Protocol Buffers are ~6x smaller than JSON, HTTP/2 multiplexes multiple streams on one connection, native bi-directional streaming. Use REST for public APIs and browser clients where gRPC-Web adds complexity." },
  { q: "WebSockets vs Long-Polling — main advantage of WebSockets?", opts: ["Simpler to implement", "Persistent bi-directional connection with sub-millisecond latency vs new HTTP request per event", "Works without HTTP", "Better security"], ans: 1, exp: "WebSockets: one persistent TCP connection, either side sends anytime, no HTTP overhead per message. Long-polling: must make new HTTP request after each event (connection setup/teardown overhead). For high-frequency real-time (gaming, collaborative editing, live trading): WebSockets." },
  { q: "Read-heavy system with 100:1 read/write ratio — first optimization?", opts: ["Add more write servers", "Add Redis caching + read replicas — eliminates 80-90% of DB reads", "Shard the database immediately", "Switch to NoSQL"], ans: 1, exp: "Pareto principle: 20% of content generates 80% of reads. Cache the hot 20% in Redis. Read replicas offload remaining reads from primary. This alone handles 100:1 read/write ratios. Only add sharding when write throughput or storage exceeds single node after these steps." },
  { q: "Stateless services: why are they easier to scale?", opts: ["They use less memory", "Any server can handle any request — add servers behind LB without sticky sessions or state sync", "They don't need a database", "Stateless services are always faster"], ans: 1, exp: "Stateless = all state in external store (DB, Redis, JWT token). Add 10 new servers: each can immediately serve any request. Stateful = must route same user to same server (sticky sessions) or sync session state across servers — complex, error-prone." },
  { q: "Token bucket vs leaky bucket — which allows bursts?", opts: ["Leaky bucket", "Token bucket — allows burst traffic up to bucket capacity before throttling", "Neither allows bursts", "Both allow identical bursts"], ans: 1, exp: "Token bucket: accumulates tokens up to capacity. A client that hasn't sent requests for a while has a full bucket and can burst. Leaky bucket: regardless of input burst, output is constant rate — overflow dropped. Token bucket is standard for API rate limiting." },
  { q: "When would you choose NoSQL over SQL?", opts: ["Always — NoSQL is modern", "When you need massive horizontal scale, schema flexibility, or a specific data model (document, graph, time-series)", "When the team prefers it", "For all new projects after 2020"], ans: 1, exp: "Default to SQL (PostgreSQL). Switch to NoSQL for: Cassandra (very high write throughput, multi-region), MongoDB (nested document structure, flexible schema), Redis (sub-ms caching), Neo4j (graph traversal), InfluxDB (time-series). 'Use the right tool' not 'use the new thing'." },
  { q: "CDN — what is the biggest challenge?", opts: ["Cost", "Cache invalidation — stale content at edge nodes after origin updates", "Geographic coverage", "Setting up origin pull"], ans: 1, exp: "CDN invalidation strategies: 1) Short TTL (content expires quickly but more origin hits), 2) Content-hash URLs (/app.a3f5b2.js — new deploy = new URL, cached forever), 3) API purge (CloudFront CreateInvalidation — instant but costs money). URL versioning is the most reliable approach." },
  { q: "Batch vs stream processing — which to use for fraud detection?", opts: ["Batch — process daily transactions overnight", "Stream processing — analyze each transaction in real-time as it happens", "Both are equally good", "Batch with 5-minute intervals"], ans: 1, exp: "Fraud detection requires stream processing: analyze each transaction the moment it occurs, flag and block before the fraudster gets away. Batch processing (nightly reports) would be useless — the fraudulent transactions have already completed." }
])}
`;

pages['sd-eventing'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design → Distributed Systems</div>
  <h1 class="page-title">Eventing &amp; Observability</h1>
  <p class="page-subtitle">FluentD, OpenTelemetry, Prometheus, Jaeger — the modern observability stack for distributed systems.</p>
  ${revisionControls('sd-eventing')}
</div>

<div class="elon-box">
  <strong>⚡ Three pillars of observability:</strong> Logs = what happened. Metrics = how much / how fast. Traces = where time was spent across services. All three together enable complete understanding of distributed systems.
</div>

<h2 class="section-title">The Modern Observability Stack</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:16px 0">
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#1e40af;margin-bottom:6px">📊 Prometheus</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Pull-based metrics. Scrapes /metrics endpoints. PromQL for queries. Alertmanager for routing alerts.</div>
    <div style="font-size:11px;color:#6b7280;margin-top:6px">Best for: infrastructure + service metrics</div>
  </div>
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#065f46;margin-bottom:6px">🔍 Jaeger / Tempo</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Distributed tracing. Trace IDs propagate across services. Visualise latency at each hop.</div>
    <div style="font-size:11px;color:#6b7280;margin-top:6px">Best for: finding slow service bottlenecks</div>
  </div>
  <div style="background:#fff7ed;border:2px solid #ea580c;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#c2410c;margin-bottom:6px">📝 FluentD / Fluent Bit</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Log collection agents. Read from files/containers. Parse, transform, route to Elasticsearch/Loki/S3.</div>
    <div style="font-size:11px;color:#6b7280;margin-top:6px">Best for: collecting logs from all pods/nodes</div>
  </div>
  <div style="background:#fae8ff;border:2px solid #a855f7;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#6b21a8;margin-bottom:6px">🌐 OpenTelemetry (OTel)</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Vendor-neutral standard for logs, metrics, traces. Instrument once → export anywhere via OTLP.</div>
    <div style="font-size:11px;color:#6b7280;margin-top:6px">Best for: unified instrumentation, no vendor lock-in</div>
  </div>
  <div style="background:#eff6ff;border:2px solid #3b82f6;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#1d4ed8;margin-bottom:6px">📈 Grafana</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Visualisation layer. Queries Prometheus, Loki, Jaeger, InfluxDB. Dashboards + alerting UI.</div>
    <div style="font-size:11px;color:#6b7280;margin-top:6px">Best for: unified observability dashboard</div>
  </div>
  <div style="background:#f0fdf4;border:2px solid #059669;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#065f46;margin-bottom:6px">📦 Loki</div>
    <div style="font-size:13px;color:#374151;line-height:1.8">Log aggregation by Grafana. Index only labels (not full text) — cheap + fast. Query via LogQL.</div>
    <div style="font-size:11px;color:#6b7280;margin-top:6px">Best for: K8s log storage, cost-effective</div>
  </div>
</div>

<h2 class="section-title">Architecture: From Pod to Dashboard</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2">
  <strong>Logs pipeline:</strong><br>
  Pod stdout/stderr → <strong>Fluent Bit</strong> (DaemonSet, reads container logs) → parse JSON + enrich with K8s metadata → <strong>Loki</strong> (store) / <strong>Elasticsearch</strong> → <strong>Grafana</strong> (query + alert)<br><br>
  <strong>Metrics pipeline:</strong><br>
  App /metrics endpoint → <strong>Prometheus</strong> scrapes every 15s → TSDB storage → <strong>Alertmanager</strong> (alert routing) → <strong>Grafana</strong> (dashboards)<br><br>
  <strong>Traces pipeline:</strong><br>
  App OTel SDK → spans with traceID → <strong>OTel Collector</strong> → <strong>Jaeger/Tempo</strong> (store) → <strong>Grafana</strong> (trace view)<br><br>
  <strong>All together:</strong> Click a Grafana metric spike → see logs for that time window → jump to trace → find exact slow DB query
</div>

<h2 class="section-title">FluentD vs Fluent Bit</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>FluentD</th><th>Fluent Bit</th></tr>
  <tr><td><strong>Language</strong></td><td>Ruby (C core)</td><td>C only</td></tr>
  <tr><td><strong>Memory</strong></td><td>~40 MB</td><td>~1 MB ← much lighter</td></tr>
  <tr><td><strong>Use case</strong></td><td>Complex log routing, heavy transformation</td><td>Edge/pod-level collection, forward to FluentD or Loki</td></tr>
  <tr><td><strong>Plugins</strong></td><td>500+ plugins</td><td>~50 plugins (focused)</td></tr>
  <tr><td><strong>K8s deployment</strong></td><td>Can be used but heavier</td><td>DaemonSet on every node ✅ preferred</td></tr>
</table>
<div class="callout callout-blue">
  <strong>Common pattern:</strong> Fluent Bit (DaemonSet) on every node → collects + forwards → FluentD (aggregator Deployment) → routes to multiple destinations (Elasticsearch AND S3 AND audit system). Or: Fluent Bit → directly to Loki (simpler).
</div>

<h2 class="section-title">OpenTelemetry — Instrument Once, Export Anywhere</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">OTel Collector — the hub <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm"># OTel Collector pipeline config</span>
receivers:
  otlp:
    protocols:
      grpc: {endpoint: 0.0.0.0:4317}   <span class="cm"># apps send here</span>
      http: {endpoint: 0.0.0.0:4318}

processors:
  batch:                                <span class="cm"># buffer + batch for efficiency</span>
  resource:
    attributes:
      - key: environment
        value: production
        action: upsert

exporters:
  prometheus: {endpoint: "0.0.0.0:8889"}  <span class="cm"># metrics to Prometheus</span>
  jaeger: {endpoint: "jaeger:14250"}       <span class="cm"># traces to Jaeger</span>
  loki:                                    <span class="cm"># logs to Loki</span>
    endpoint: "http://loki:3100/loki/api/v1/push"

service:
  pipelines:
    traces:   {receivers:[otlp], processors:[batch], exporters:[jaeger]}
    metrics:  {receivers:[otlp], processors:[batch], exporters:[prometheus]}
    logs:     {receivers:[otlp], processors:[batch], exporters:[loki]}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Structured Logging — the right way <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm">// BAD: plain text — can only grep, can't query fields</span>
logger.info(<span class="str">"User 12345 completed purchase of item ABC for $50"</span>);

<span class="cm">// GOOD: structured JSON — every field queryable in Loki/Elasticsearch</span>
logger.info(<span class="str">"purchase_completed"</span>,
  <span class="str">"userId"</span>, <span class="num">12345</span>,
  <span class="str">"itemId"</span>, <span class="str">"ABC"</span>,
  <span class="str">"amount"</span>, <span class="num">50.00</span>,
  <span class="str">"currency"</span>, <span class="str">"USD"</span>,
  <span class="str">"traceId"</span>, span.getSpanContext().getTraceId()  <span class="cm">// correlate with trace!</span>
);
<span class="cm">// → {"level":"info","event":"purchase_completed","userId":12345,"itemId":"ABC","amount":50.0,"traceId":"abc123"}</span>

<span class="cm">// Query in Loki: {app="order-service"} |= "purchase_completed" | json | amount > 100</span></pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Prometheus PromQL essentials <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm"># Rate of HTTP requests over last 5 minutes</span>
rate(http_requests_total{job="api",status="200"}[5m])

<span class="cm"># Error rate %</span>
sum(rate(http_requests_total{status=~"5.."}[5m]))
/ sum(rate(http_requests_total[5m])) * 100

<span class="cm"># p99 latency</span>
histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))

<span class="cm"># CPU usage by pod</span>
sum(rate(container_cpu_usage_seconds_total[5m])) by (pod)

<span class="cm"># Alert rule: error rate > 5% for 5 minutes</span>
alert: HighErrorRate
expr: |
  (sum(rate(http_requests_total{status=~"5.."}[5m]))
  / sum(rate(http_requests_total[5m]))) > 0.05
for: 5m
annotations:
  summary: "High error rate on {{ $labels.service }}"</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">RED Method (Services) vs USE Method (Infrastructure)</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0">
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#1e40af;margin-bottom:10px">RED — for Services</div>
    <div style="line-height:2.2;font-size:14px">
      <strong style="color:#2563eb">R</strong>ate — requests per second<br>
      <strong style="color:#2563eb">E</strong>rrors — error rate<br>
      <strong style="color:#2563eb">D</strong>uration — latency (p50/p95/p99)
    </div>
    <div style="font-size:12px;color:#6b7280;margin-top:8px">Use for HTTP services, APIs, microservices</div>
  </div>
  <div style="background:#fff7ed;border:2px solid #ea580c;border-radius:10px;padding:14px">
    <div style="font-weight:700;font-size:14px;color:#c2410c;margin-bottom:10px">USE — for Infrastructure</div>
    <div style="line-height:2.2;font-size:14px">
      <strong style="color:#ea580c">U</strong>tilization — % time busy<br>
      <strong style="color:#ea580c">S</strong>aturation — queue depth<br>
      <strong style="color:#ea580c">E</strong>rrors — error count/rate
    </div>
    <div style="font-size:12px;color:#6b7280;margin-top:8px">Use for CPU, disk, network, memory</div>
  </div>
</div>

${quizHTML('sd-eventing', [
  { q: "What are the three pillars of observability?", opts: ["CPU, Memory, Network", "Logs (what happened), Metrics (aggregated numbers), Traces (request journey)", "Availability, Performance, Security", "Latency, Throughput, Errors"], ans: 1, exp: "Logs: timestamped events. Metrics: numeric aggregates (QPS, error rate). Traces: distributed request journey across services with timing. All three needed for complete debugging. Correlate them with a shared traceId in log fields." },
  { q: "Fluent Bit vs FluentD — which to use as a DaemonSet on K8s nodes?", opts: ["FluentD — more plugins", "Fluent Bit — ~1MB memory vs FluentD ~40MB, designed for edge collection", "Both are identical", "Neither — use Prometheus instead"], ans: 1, exp: "Fluent Bit: C-only, ~1MB memory, designed as lightweight forwarder. Perfect as DaemonSet. FluentD: Ruby/C, ~40MB, better for complex aggregation and routing. Common pattern: Fluent Bit (node DaemonSet) → FluentD (aggregator) → multiple destinations." },
  { q: "OpenTelemetry Collector main benefit?", opts: ["Replaces Prometheus", "Vendor-neutral hub: apps instrument once, Collector fans out to Prometheus, Jaeger, Loki simultaneously", "Only for traces", "Requires Kubernetes"], ans: 1, exp: "OTel Collector receives OTLP signals from apps → processes (batch, filter, enrich) → exports to multiple backends simultaneously. Change backends without touching app code. One SDK, any observability stack." },
  { q: "Prometheus scrape model — pull vs push?", opts: ["Push — apps send metrics", "Pull — Prometheus scrapes /metrics endpoints at intervals", "Both equally", "Websocket streaming"], ans: 1, exp: "Prometheus pulls: scrapes configured /metrics endpoints every N seconds. Benefits: easy to detect down services (scrape fails = down), no push config needed in apps, centrally controlled interval. Use Pushgateway for batch jobs that can't be scraped." },
  { q: "Structured logging main advantage over plain text?", opts: ["Smaller file size", "JSON fields queryable by any key — userId, traceId, amount — enables filtering, alerting, correlation", "Faster to write", "Required by Kubernetes"], ans: 1, exp: "Plain text: grep is the only tool. Structured JSON in Loki: {app='api'} | json | userId=12345 instantly finds all events for that user. Including traceId in every log line lets you jump from a log event directly to the distributed trace in Jaeger." },
  { q: "RED method stands for?", opts: ["Reliability, Efficiency, Durability", "Rate (req/s), Errors (error rate), Duration (latency p50/p95/p99)", "Requests, Execution, Data", "Response, Endpoint, Debugging"], ans: 1, exp: "RED = golden signals for measuring service health. Rate: requests per second. Errors: fraction that fail. Duration: how long they take. USE method (Utilization, Saturation, Errors) is for infrastructure resources. Dashboard with both covers 90% of incidents." },
  { q: "How do you correlate logs, metrics, and traces?", opts: ["Timestamp matching only", "Inject traceId into every log field + exemplar links in Prometheus + Grafana unified view", "Use a single tool only", "Not possible across different tools"], ans: 1, exp: "Correlation: 1) OTel SDK injects traceId into logs automatically, 2) Prometheus exemplars link metric data points to traces, 3) Grafana shows all three — click a spike → see logs for that window → jump to the specific trace. The traceId is the glue." },
  { q: "What is a Prometheus alert rule's 'for' duration used for?", opts: ["How long to collect data before alerting", "Must be in alert condition continuously for this duration before firing — prevents flapping on brief spikes", "When to auto-resolve", "Alert frequency"], ans: 1, exp: "Without 'for: 5m': a single-second spike fires the alert immediately. With 'for: 5m': condition must be true continuously for 5 minutes before PagerDuty rings. Prevents false alerts from brief traffic spikes. Set 'for' based on how long the problem must persist to be real." },
  { q: "Sidecar pattern for logging — what problem does it solve?", opts: ["App performance", "Decouples app from log shipping — app writes to stdout, sidecar handles collection, parsing, forwarding without app changes", "Security isolation", "Network routing"], ans: 1, exp: "Sidecar: Fluent Bit container in same pod as app. App writes logs to stdout/files, sidecar reads and ships to Loki. Apps don't need logging SDKs or network config. Change log destination by updating sidecar config only. Used by Istio (Envoy), FluentD, Vault agent." }
])}
`;


pages['sd-specdriven'] = () => `
<div class="page-header">
  <div class="breadcrumb">System Design</div>
  <h1 class="page-title">AI &amp; Spec-Driven Design</h1>
  <p class="page-subtitle">MCP, RAG, VectorDB, agentic development — designing modern AI-powered systems.</p>
  ${revisionControls('sd-specdriven')}
</div>

<div class="elon-box">
  <strong>⚡ Shift in thinking:</strong> Traditional systems are deterministic — you define every step. Agentic systems are goal-driven — you define the outcome, the AI figures out the steps. Design for reasoning, not just processing.
</div>

<h2 class="section-title">Model Context Protocol (MCP)</h2>
<div class="callout callout-blue">
  MCP is an open protocol (by Anthropic) that standardises how AI models connect to external tools, databases, and services. Think of it as <strong>USB-C for AI integrations</strong> — one standard interface for everything.
</div>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">MCP Architecture <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2">
        <strong>MCP Host</strong> (Claude Desktop, VS Code) ↔ <strong>MCP Client</strong> (protocol layer) ↔ <strong>MCP Server</strong> (your tools)<br><br>
        MCP Server exposes:<br>
        • <strong>Tools</strong> — functions the AI can call (search_db, send_email, query_api)<br>
        • <strong>Resources</strong> — data the AI can read (files, DB tables, API responses)<br>
        • <strong>Prompts</strong> — reusable prompt templates
      </div>
      <div class="code-block"><pre><span class="cm">// MCP Server (TypeScript) — expose a database tool</span>
<span class="kw">const</span> server = <span class="kw">new</span> Server({name: <span class="str">"my-db"</span>, version: <span class="str">"1.0"</span>});

server.setRequestHandler(ListToolsRequestSchema, <span class="kw">async</span> () => ({
  tools: [{
    name: <span class="str">"query_users"</span>,
    description: <span class="str">"Query users from the database by criteria"</span>,
    inputSchema: {
      type: <span class="str">"object"</span>,
      properties: {
        filter: {type: <span class="str">"string"</span>, description: <span class="str">"SQL WHERE clause"</span>},
        limit: {type: <span class="str">"number"</span>}
      }
    }
  }]
}));

server.setRequestHandler(CallToolRequestSchema, <span class="kw">async</span> (req) => {
  <span class="kw">const</span> results = <span class="kw">await</span> db.query(
    <span class="str">"SELECT * FROM users WHERE " + filter + " LIMIT " + limit</span>
  );
  <span class="kw">return</span> {content: [{type: <span class="str">"text"</span>, text: JSON.stringify(results)}]};
});</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">RAG — Retrieval Augmented Generation</h2>
<div class="callout callout-amber">
  RAG solves the problem of LLMs having a knowledge cutoff. Instead of fine-tuning (expensive), retrieve relevant documents at query time and inject them into the prompt. The model answers based on YOUR data.
</div>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2;margin:14px 0">
  <strong>RAG Pipeline:</strong><br>
  1. <strong>Index time:</strong> Documents → Chunking → Embedding model → Vector DB<br>
  2. <strong>Query time:</strong> User question → Embed question → Vector similarity search → Top-K chunks<br>
  3. <strong>Generation:</strong> Prompt = "Here's context: [chunks]. Answer: [question]" → LLM → Response
</div>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Chunking Strategy — critical for RAG quality <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Strategy</th><th>How</th><th>Best for</th><th>Trade-off</th></tr>
        <tr><td><strong>Fixed size</strong></td><td>Split every N tokens (e.g., 512)</td><td>Simple, fast</td><td>May cut sentences mid-thought</td></tr>
        <tr><td><strong>Sentence/paragraph</strong></td><td>Split on natural boundaries</td><td>General text, articles</td><td>Variable chunk sizes</td></tr>
        <tr><td><strong>Semantic chunking</strong></td><td>Embed sentences, split where similarity drops</td><td>Long documents, research papers</td><td>More compute required</td></tr>
        <tr><td><strong>Recursive character</strong></td><td>Try "\n\n", "\n", " " in order</td><td>Code + markdown</td><td>LangChain default, good balance</td></tr>
        <tr><td><strong>Sliding window</strong></td><td>Overlapping chunks (e.g., 512 tokens, 50 overlap)</td><td>Preserve context at boundaries</td><td>More storage, duplicate content</td></tr>
      </table>
      <div class="callout callout-green">
        <strong>Rule of thumb:</strong> Chunk size 256–512 tokens for dense technical content. 512–1024 for prose. Always include overlap (10-20%) to preserve context at chunk boundaries. Store chunk metadata (source, page, section) for citations.
      </div>
    </div>
  </div>
</div>

<h2 class="section-title">Vector Databases</h2>
<table class="data-table">
  <tr><th>Database</th><th>Type</th><th>Best for</th><th>Notes</th></tr>
  <tr><td><strong>Pinecone</strong></td><td>Managed cloud</td><td>Production RAG, no ops</td><td>Fully managed, expensive at scale</td></tr>
  <tr><td><strong>Weaviate</strong></td><td>Open source / cloud</td><td>Hybrid search (vector + BM25)</td><td>Built-in modules for embeddings</td></tr>
  <tr><td><strong>Qdrant</strong></td><td>Open source / cloud</td><td>High performance, filtering</td><td>Rust-based, very fast</td></tr>
  <tr><td><strong>ChromaDB</strong></td><td>Open source</td><td>Local dev, prototyping</td><td>Easy setup, not production-scale</td></tr>
  <tr><td><strong>pgvector</strong></td><td>PostgreSQL extension</td><td>Already using Postgres</td><td>No new infra, good for &lt;10M vectors</td></tr>
  <tr><td><strong>Milvus</strong></td><td>Open source</td><td>Billion-scale vector search</td><td>Complex ops, high performance</td></tr>
</table>
<div class="callout callout-blue">
  <strong>Similarity search:</strong> Cosine similarity (angle between vectors — ignores magnitude, good for text), Dot product (magnitude matters — good for normalized embeddings), Euclidean distance (L2 — good for image embeddings). Most RAG systems use cosine similarity.
</div>

<h2 class="section-title">Agentic Development Patterns</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Agent Architecture — ReAct pattern <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2">
        ReAct = <strong>Re</strong>asoning + <strong>Act</strong>ing loop:<br>
        Thought → Action (call tool) → Observation (tool result) → Thought → Action → ... → Final Answer<br><br>
        1. LLM <strong>thinks</strong>: "I need to find current stock price"<br>
        2. LLM <strong>acts</strong>: calls get_stock_price("NVDA") tool<br>
        3. LLM <strong>observes</strong>: "NVDA = $875.40"<br>
        4. LLM <strong>thinks</strong>: "Now I can calculate portfolio value"<br>
        5. Repeat until task complete
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Skills / Tool Use — giving agents capabilities <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="code-block"><pre><span class="cm">// Tool definitions for Claude API</span>
tools = [
  {
    name: <span class="str">"web_search"</span>,
    description: <span class="str">"Search the web for current information"</span>,
    input_schema: {
      type: <span class="str">"object"</span>,
      properties: { query: {type: <span class="str">"string"</span>} },
      required: [<span class="str">"query"</span>]
    }
  },
  {
    name: <span class="str">"execute_code"</span>,
    description: <span class="str">"Execute Python code and return output"</span>,
    input_schema: {
      type: <span class="str">"object"</span>,
      properties: { code: {type: <span class="str">"string"</span>} }
    }
  }
]

<span class="cm">// Agent loop: call LLM → handle tool_use → send result → repeat</span>
<span class="kw">while</span> (response.stop_reason === <span class="str">"tool_use"</span>) {
  <span class="kw">const</span> toolResult = executeLocalTool(response.content);
  messages.push({role: <span class="str">"user"</span>, content: toolResult});
  response = <span class="kw">await</span> claude.messages.create({messages, tools});
}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Multi-Agent Systems — orchestrator + specialists <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2">
        <strong>Orchestrator agent</strong> — breaks task into subtasks, routes to specialist agents<br>
        <strong>Specialist agents</strong> — each has specific tools (web search, code execution, DB query)<br><br>
        Example: "Research competitors and write a report"<br>
        → Orchestrator → Research Agent (web search) → Analysis Agent (data analysis) → Writer Agent (synthesis)<br>
        → Orchestrator merges outputs → Final report
      </div>
      <div class="callout callout-amber">
        <strong>Key design decisions:</strong> How much autonomy? (fully autonomous vs human-in-the-loop). How to handle failures? (retry, escalate, fallback). How to prevent infinite loops? (max iterations, circuit breaker). How to share state? (message passing vs shared memory).
      </div>
    </div>
  </div>
</div>

<h2 class="section-title">Spec-Driven Development with AI</h2>
<div class="callout callout-green">
  <strong>Shift:</strong> Instead of writing code and then writing tests, write a machine-readable specification first — then let AI generate code, tests, docs, and APIs from the spec. The spec becomes the single source of truth.
</div>
<table class="data-table">
  <tr><th>Approach</th><th>What</th><th>AI Role</th></tr>
  <tr><td><strong>OpenAPI-first</strong></td><td>Write OpenAPI spec → generate server stubs, clients, docs</td><td>Generate implementation from spec</td></tr>
  <tr><td><strong>TDD with AI</strong></td><td>Write tests first → AI generates code to pass them</td><td>Generate implementation from test spec</td></tr>
  <tr><td><strong>PRD-to-code</strong></td><td>Natural language product requirements → AI generates architecture + code</td><td>Interpret requirements, propose architecture</td></tr>
  <tr><td><strong>Schema-driven</strong></td><td>Define data schemas → AI generates migrations, types, validation, CRUD</td><td>Boilerplate generation from schema</td></tr>
</table>

${quizHTML('sd-specdriven', [
  { q: "What problem does RAG solve?", opts: ["Makes LLMs faster", "Gives LLMs access to up-to-date private knowledge without expensive fine-tuning — retrieve at query time", "Replaces the model entirely", "Reduces hallucinations to zero"], ans: 1, exp: "RAG: at query time, embed the question → vector similarity search → inject top-K relevant chunks into the prompt → LLM answers using your data. No retraining needed. Knowledge can be updated by re-indexing documents. Cheaper than fine-tuning for factual knowledge." },
  { q: "What is MCP (Model Context Protocol)?", opts: ["A meta-learning algorithm", "Open protocol for AI models to connect to external tools, databases, and services via a standard interface", "A compression standard", "A training methodology"], ans: 1, exp: "MCP standardises how AI applications connect to capabilities — like USB-C for AI integrations. MCP servers expose tools (callable functions), resources (readable data), and prompts. Hosts like Claude Desktop, VS Code connect to any MCP server using the same protocol." },
  { q: "Chunking overlap (e.g., 10-20%) in RAG — why?", opts: ["Reduces storage", "Preserves context at chunk boundaries — a sentence split across two chunks stays coherent", "Required by vector databases", "Improves embedding speed"], ans: 1, exp: "Without overlap: a concept split across chunk boundary loses coherence — the embedding doesn't capture the full idea. With 50-token overlap: the tail of chunk N is repeated at the start of chunk N+1. Slightly more storage but much better retrieval quality for boundary queries." },
  { q: "pgvector vs Pinecone — when to choose pgvector?", opts: ["Always use Pinecone", "pgvector when you already use Postgres and have under ~10M vectors — no new infra, SQL queries work", "pgvector is always faster", "Pinecone only supports Python"], ans: 1, exp: "pgvector: PostgreSQL extension, add vector type to existing tables, combine with SQL filters, no new service. Perfect for smaller RAG systems already on Postgres. Pinecone/Qdrant for production scale (100M+ vectors), advanced filtering, or dedicated vector workloads." },
  { q: "ReAct pattern in agents — what does it stand for?", opts: ["Real-time Actions", "Reasoning + Acting — LLM alternates between thinking about what to do and calling tools to do it", "Reactive programming", "REST and CRUD"], ans: 1, exp: "ReAct loop: Thought (what do I need?) → Action (call tool) → Observation (tool result) → Thought → Action → ... until final answer. The model explicitly reasons about each step before acting. More reliable than pure end-to-end generation for multi-step tasks." },
  { q: "Semantic chunking advantage over fixed-size chunking?", opts: ["Always faster", "Splits where topic changes (semantic boundary) rather than at arbitrary token count — preserves coherent ideas in each chunk", "Uses less memory", "Required for OpenAI embeddings"], ans: 1, exp: "Fixed-size: may cut mid-sentence or mid-concept. Semantic: embed sentences, measure similarity to neighbours, split when similarity drops significantly — topic boundary. Better retrieval quality especially for documents that mix multiple topics. Higher compute cost." },
  { q: "Multi-agent system key design challenge?", opts: ["Setting up the database", "Preventing infinite loops, handling failures gracefully, coordinating state between agents without conflicts", "Writing prompt templates", "Choosing programming language"], ans: 1, exp: "Multi-agent challenges: 1) Infinite loops (set max_iterations), 2) Agent failures (retry/escalate/fallback), 3) State consistency (which agent's memory is authoritative?), 4) Cost control (each LLM call costs money), 5) Debugging (hard to trace multi-agent reasoning). Add circuit breakers and human checkpoints for high-stakes actions." }
])}
`;

