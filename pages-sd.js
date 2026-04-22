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
  ${['load-balancing','caching','databases','cap','sharding','replication','acid','indexes','scaling','api','auth'].map((s,i)=>`<button class="pill-tab${i===0?' active':''}" onclick="showBlock('${s}',this)">${['Load Balancing','Caching','SQL vs NoSQL','CAP & PACELC','Sharding','Replication','ACID','Indexes','Scaling','APIs & Rate Limiting','Auth & APIs'][i]}</button>`).join('')}
</div>

<div id="block-load-balancing" class="block-section">
  <h2 class="section-title">Load Balancing</h2>
  <table class="data-table">
    <tr><th>Algorithm</th><th>How it works</th><th>Best for</th><th>Downside</th></tr>
    <tr><td><strong>Round Robin</strong></td><td>Requests distributed in order</td><td>Stateless services, equal capacity servers</td><td>Ignores server load</td></tr>
    <tr><td><strong>Least Connections</strong></td><td>Send to server with fewest active connections</td><td>Long-lived connections (WebSocket, DB)</td><td>Slightly more overhead</td></tr>
    <tr><td><strong>Weighted RR</strong></td><td>More powerful servers get more requests</td><td>Heterogeneous servers</td><td>Manual weight tuning</td></tr>
    <tr><td><strong>IP Hash</strong></td><td>Hash of client IP → same server</td><td>Session affinity (sticky sessions)</td><td>Uneven if IPs not distributed</td></tr>
    <tr><td><strong>Random</strong></td><td>Pick server randomly</td><td>Equal servers, low traffic</td><td>Luck-based, can be uneven</td></tr>
  </table>
  <div class="callout callout-blue">
    <strong>L4 vs L7 LB:</strong> L4 (Transport layer) — routes by IP/port, fast, no content inspection. L7 (Application layer) — routes by URL, headers, cookies; enables path-based routing, A/B testing, SSL termination. Use L7 (nginx, AWS ALB) for modern microservices.
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
  <h2 class="section-title">CAP Theorem & PACELC</h2>
  <div class="callout callout-blue">
    <strong>CAP:</strong> In the presence of a network Partition, choose Consistency OR Availability — you can't have both.
    <br><strong>PACELC:</strong> Extends CAP. Even without partitions (Else), there's a Latency vs Consistency trade-off.
  </div>
  <table class="data-table">
    <tr><th>System</th><th>CAP</th><th>PACELC</th><th>Why</th></tr>
    <tr><td>Cassandra</td><td>AP</td><td>PA/EL</td><td>Tunable consistency: ONE, QUORUM, ALL</td></tr>
    <tr><td>DynamoDB</td><td>AP</td><td>PA/EL</td><td>Eventual by default, strong reads opt-in</td></tr>
    <tr><td>Zookeeper / etcd</td><td>CP</td><td>PC/EC</td><td>Raft consensus, stops serving on partition</td></tr>
    <tr><td>MongoDB (primary reads)</td><td>CP</td><td>PC/EC</td><td>Primary holds truth, secondary may lag</td></tr>
    <tr><td>PostgreSQL</td><td>CP</td><td>PC/EC</td><td>WAL-based, strict durability</td></tr>
    <tr><td>Redis (no persistence)</td><td>AP</td><td>PA/EL</td><td>Speed over durability, async replication</td></tr>
  </table>
  <div class="callout callout-amber">
    <strong>Interview tip:</strong> Interviewers love CAP. Say: "Since network partitions always happen, the real choice is between CP (stop accepting writes to stay consistent) vs AP (serve potentially stale data to stay available). For a banking system I'd pick CP; for a social feed I'd pick AP."
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
</div>

<div id="block-acid" class="block-section" style="display:none">
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
</div>

<div id="block-indexes" class="block-section" style="display:none">
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
  <table class="data-table">
    <tr><th>Strategy</th><th>What</th><th>When</th><th>Limit</th></tr>
    <tr><td><strong>Vertical Scale-up</strong></td><td>Bigger server (more CPU/RAM)</td><td>Quick fix, small-medium scale</td><td>Hardware ceiling, single point of failure</td></tr>
    <tr><td><strong>Horizontal Scale-out</strong></td><td>Add more servers behind LB</td><td>Stateless services</td><td>Session/state management complexity</td></tr>
    <tr><td><strong>Read Replicas</strong></td><td>DB replicas handle reads</td><td>Read-heavy (90%+ reads)</td><td>Replication lag, eventual consistency</td></tr>
    <tr><td><strong>Caching Layer</strong></td><td>Redis/Memcached in front of DB</td><td>Repetitive reads, high QPS</td><td>Cache invalidation complexity</td></tr>
    <tr><td><strong>Sharding</strong></td><td>Split DB horizontally</td><td>DB is bottleneck despite replicas</td><td>Cross-shard queries, resharding pain</td></tr>
    <tr><td><strong>CDN</strong></td><td>Edge servers for static/media</td><td>Global users, media-heavy</td><td>Cache invalidation, cost</td></tr>
    <tr><td><strong>Async / Queue</strong></td><td>Decouple slow operations via MQ</td><td>Email, notifications, processing</td><td>Eventual consistency, complexity</td></tr>
    <tr><td><strong>Microservices</strong></td><td>Split monolith by domain</td><td>Teams scaling, independent deploys</td><td>Network hops, distributed tracing</td></tr>
  </table>
  <div class="callout callout-blue">
    <strong>Scaling interview framework:</strong> Start with vertical → add caching → read replicas → CDN → async queues → horizontal sharding. Each step 10× the capacity. Don't over-engineer upfront.
  </div>
</div>

<div id="block-api" class="block-section" style="display:none">
  <h2 class="section-title">APIs, Rate Limiting &amp; Protocols</h2>
  <table class="data-table">
    <tr><th></th><th>REST</th><th>GraphQL</th><th>gRPC</th></tr>
    <tr><td><strong>Protocol</strong></td><td>HTTP/1.1, HTTP/2</td><td>HTTP/1.1, HTTP/2</td><td>HTTP/2 (binary)</td></tr>
    <tr><td><strong>Format</strong></td><td>JSON/XML</td><td>JSON</td><td>Protocol Buffers (binary)</td></tr>
    <tr><td><strong>Typing</strong></td><td>Loose</td><td>Strongly typed schema</td><td>Strongly typed .proto</td></tr>
    <tr><td><strong>Over-fetching</strong></td><td>Yes (fixed response)</td><td>No (client specifies fields)</td><td>No (defined in proto)</td></tr>
    <tr><td><strong>Streaming</strong></td><td>SSE/WebSocket workaround</td><td>Subscriptions</td><td>Native bi-directional streaming</td></tr>
    <tr><td><strong>Performance</strong></td><td>Good</td><td>Good (n+1 problem)</td><td>Excellent (binary, multiplexed)</td></tr>
    <tr><td><strong>Best for</strong></td><td>Public APIs, web clients</td><td>Complex client queries, BFF</td><td>Internal microservices, low-latency</td></tr>
  </table>

  <h2 class="section-title" style="margin-top:20px">API Latency &amp; SLO Targets</h2>
  <table class="data-table">
    <tr><th>API Type</th><th>P50 target</th><th>P99 target</th><th>Notes</th></tr>
    <tr><td>Read API (cached)</td><td>&lt;10ms</td><td>&lt;50ms</td><td>Redis hit</td></tr>
    <tr><td>Read API (DB)</td><td>&lt;50ms</td><td>&lt;200ms</td><td>Indexed query</td></tr>
    <tr><td>Write API</td><td>&lt;100ms</td><td>&lt;500ms</td><td>DB write + async fan-out</td></tr>
    <tr><td>Search API</td><td>&lt;100ms</td><td>&lt;300ms</td><td>Elasticsearch</td></tr>
    <tr><td>Media upload</td><td>&lt;500ms</td><td>&lt;2s</td><td>S3 + async processing</td></tr>
  </table>

  <div class="accordion">
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">Rate Limiting — Quick Reference <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="code-block"><pre>// Token bucket (AWS API Gateway default):
CAPACITY = 1000 tokens, REFILL = 100/sec
→ allows bursts up to 1000, then throttles at 100/sec

// Headers to return:
X-RateLimit-Limit:     1000
X-RateLimit-Remaining: 842
X-RateLimit-Reset:     1704067200  // epoch reset time
Retry-After:           30          // seconds (on 429)

// Distributed rate limiting (across multiple servers):
// Use Redis Lua script for atomic check-and-decrement
// Token bucket or sliding window counter (see Rate Limiter case study)</pre></div>
      </div>
    </div>
    <div class="accordion-item">
      <div class="accordion-header" onclick="toggleAccordion(this)">Consistent Hashing <span class="accordion-arrow">▼</span></div>
      <div class="accordion-body">
        <div class="callout callout-green">
          Place both servers and keys on a hash ring (0–2³²). Each key is served by the first server clockwise. Adding/removing a server only affects ~N/total_servers keys — minimal reshuffling.
        </div>
        <div class="code-block"><pre>// Virtual nodes: each physical server owns 100-200 positions on ring
// Prevents hot spots when servers have different capacities

Without consistent hashing: add 1 server → rehash ALL keys
With consistent hashing:    add 1 server → move only ~1/N keys

// Used by: Cassandra, DynamoDB, Memcached, CDNs</pre></div>
      </div>
    </div>
  </div>

  
<div id="block-auth" class="block-section" style="display:none">
<div class="section-title">7 Authentication Patterns</div>

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
  <div class="page-title">Authentication &amp; API Design</div>
  <div class="page-subtitle">7 auth patterns, REST vs gRPC vs GraphQL, and API design principles for senior engineers.</div>
</div>

<div class="section-title">7 Authentication Patterns</div>

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

