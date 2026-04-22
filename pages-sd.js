// ═══════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════
pages['home'] = () => `
<div class="page-header">
  <div class="breadcrumb">SeniorEdge</div>
  <div class="page-title">Senior SWE Interview Prep</div>
  <div class="page-subtitle">A structured, streamlined guide covering System Design, DS/Algorithms, Java, Spring, Kubernetes, and more. No fluff — just what matters for FAANG and senior roles.</div>
</div>

<div class="elon-box">
  <div class="eb-label">⚡ Musk's Relevance Rule</div>
  <div class="eb-rule">"Question every requirement. Delete parts or processes that have errors. Simplify. Accelerate. Automate."</div>
  <div class="eb-desc">Apply this to interview prep: <strong>delete what's irrelevant</strong> for your target role, <strong>simplify</strong> concepts until they're crystal clear, <strong>accelerate</strong> with patterns not problem-by-problem memorization, then automate retention with spaced repetition.</div>
</div>

<div class="two-col" style="margin-top:24px">
  <div class="info-box">
    <div class="info-title">📍 Your Focus Order</div>
    <ol class="content-list" style="margin-top:8px">
      <li><strong>System Design</strong> — highest signal at senior level</li>
      <li><strong>DS &amp; Algo Patterns</strong> — 15 patterns cover 90% of problems</li>
      <li><strong>Java &amp; Spring</strong> — JVM internals, concurrency, Spring IOC</li>
      <li><strong>Kubernetes</strong> — control plane, troubleshooting</li>
      <li><strong>Go, Linux, Distributed</strong> — role-specific deep dives</li>
    </ol>
  </div>
  <div class="info-box">
    <div class="info-title">⏱ 3-Week Plan</div>
    <ul class="content-list" style="margin-top:8px">
      <li><strong>Week 1:</strong> System Design framework + 5 patterns + Arrays/Trees</li>
      <li><strong>Week 2:</strong> 6 more SD patterns + Graphs + Java core</li>
      <li><strong>Week 3:</strong> Remaining patterns + Mock interviews + K8s deep dive</li>
    </ul>
  </div>
</div>

<div class="section-title" style="margin-top:28px">📚 Topics</div>

<div class="home-grid">
  <div class="home-card" onclick="showPage('sd-intro')">
    <div class="home-card-icon">🏗️</div>
    <div class="home-card-title">System Design</div>
    <div class="home-card-desc">5-step framework, 11 patterns, case studies, building blocks</div>
    <div class="home-card-topics">⭐ Highest Priority</div>
  </div>
  <div class="home-card" onclick="showPage('sd-patterns')">
    <div class="home-card-icon">✨</div>
    <div class="home-card-title">11 SD Patterns</div>
    <div class="home-card-desc">Read-heavy, write-heavy, async pipeline, real-time, and more</div>
    <div class="home-card-topics">→ Start Here for SD</div>
  </div>
  <div class="home-card" onclick="showPage('ds-overview')">
    <div class="home-card-icon">📐</div>
    <div class="home-card-title">DS &amp; Algorithms</div>
    <div class="home-card-desc">8 data structures + 8 algorithm patterns with Java code</div>
    <div class="home-card-topics">Arrays → Trees → Graphs</div>
  </div>
  <div class="home-card" onclick="showPage('algo-patterns')">
    <div class="home-card-icon">🔄</div>
    <div class="home-card-title">Algo Patterns</div>
    <div class="home-card-desc">Two Pointers, Sliding Window, BFS/DFS, Backtracking, Top-K</div>
    <div class="home-card-topics">Pattern-first approach</div>
  </div>
  <div class="home-card" onclick="showPage('java-core')">
    <div class="home-card-icon">☕</div>
    <div class="home-card-title">Java Deep Dive</div>
    <div class="home-card-desc">Collections, Concurrency, Streams, Memory, HashMap internals</div>
    <div class="home-card-topics">JVM internals matter</div>
  </div>
  <div class="home-card" onclick="showPage('spring-core')">
    <div class="home-card-icon">🍃</div>
    <div class="home-card-title">Spring Boot</div>
    <div class="home-card-desc">IoC, AOP, Transactions, JPA, Auto-configuration</div>
    <div class="home-card-topics">Spring ecosystem</div>
  </div>
  <div class="home-card" onclick="showPage('k8s-core')">
    <div class="home-card-icon">⚙️</div>
    <div class="home-card-title">Kubernetes</div>
    <div class="home-card-desc">Control plane, CRDs, Operators, Troubleshooting</div>
    <div class="home-card-topics">K8s internals</div>
  </div>
  <div class="home-card" onclick="showPage('go-core')">
    <div class="home-card-icon">🐹</div>
    <div class="home-card-title">Go &amp; Goroutines</div>
    <div class="home-card-desc">Concurrency patterns, channels, goroutines, GC</div>
    <div class="home-card-topics">Go concurrency model</div>
  </div>
  <div class="home-card" onclick="showPage('distributed')">
    <div class="home-card-icon">🌐</div>
    <div class="home-card-title">Distributed Systems</div>
    <div class="home-card-desc">CAP, consensus, Kafka, Cassandra, consistency patterns</div>
    <div class="home-card-topics">CAP theorem & beyond</div>
  </div>
  <div class="home-card" onclick="showPage('ds-revision')">
    <div class="home-card-icon">🔁</div>
    <div class="home-card-title">Revision Tracker</div>
    <div class="home-card-desc">Track what you've mastered vs needs review</div>
    <div class="home-card-topics">Spaced repetition</div>
  </div>
</div>

<div class="callout blue" style="margin-top:24px">
  <strong>How to use this guide:</strong> Pick a topic from the sidebar → read the concept → check the memory trick → solve the embedded quiz → mark as mastered or needs review. The revision tracker surfaces topics you flagged for re-study.
</div>
`;

// ═══════════════════════════════════════════════
// SYSTEM DESIGN — FRAMEWORK
// ═══════════════════════════════════════════════
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
  { q: 'What should you do FIRST in a system design interview?', opts: ['Draw the architecture', 'Clarify functional and non-functional requirements', 'Pick a database', 'Estimate the scale'], ans: 1, exp: 'Always start by clarifying requirements. Interviewers often leave them vague to see if you ask the right questions. Skipping this leads to designing the wrong system.' },
  { q: 'A system that must always respond even during partial failures prioritizes which CAP property?', opts: ['Consistency', 'Partition Tolerance + Consistency', 'Availability + Partition Tolerance', 'None of the above'], ans: 2, exp: 'AP systems choose Availability + Partition Tolerance, meaning they respond with possibly stale data rather than refusing to serve. Examples: Cassandra, DynamoDB, DNS.' },
  { q: 'Which layer typically sits BETWEEN users and your application servers?', opts: ['Cache layer', 'Load Balancer', 'Database', 'Message Queue'], ans: 1, exp: 'The Load Balancer sits between clients and application servers. It distributes traffic, performs health checks, and provides HA by routing around failed servers.' },
  { q: 'Non-functional requirements include which of the following?', opts: ['User can post a tweet', 'System handles 1M concurrent users', 'API returns list of followers', 'Users can search by hashtag'], ans: 1, exp: 'Non-functional requirements describe HOW the system performs (scalability, availability, latency), while functional requirements describe WHAT it does.' }
])}

`;

// ═══════════════════════════════════════════════
// SYSTEM DESIGN — ESTIMATION
// ═══════════════════════════════════════════════
pages['sd-estimation'] = () => `
<div class="breadcrumb">System Design → <span>Back-of-Envelope Estimation</span></div>
<div class="page-header">
  <div class="page-title">Back-of-Envelope Estimation</div>
  <div class="page-subtitle">Quick math that shows you can reason about scale. Interviewers want to see your thought process, not a precise answer.</div>
</div>

<div class="memory-tip">
  <div class="mt-label">🧮 Power of Twos — Memorize This</div>
  <div class="mt-content">
    <span class="inline-code">1 KB = 10³</span> &nbsp;
    <span class="inline-code">1 MB = 10⁶</span> &nbsp;
    <span class="inline-code">1 GB = 10⁹</span> &nbsp;
    <span class="inline-code">1 TB = 10¹²</span><br>
    <span class="inline-code">1 day = 86,400 sec ≈ 10⁵</span> &nbsp;
    <span class="inline-code">1 year ≈ 3×10⁷ sec</span>
  </div>
</div>

<div class="section-title">Latency Numbers Every Engineer Should Know</div>

<table class="data-table">
  <thead><tr><th>Operation</th><th>Latency</th><th>Relative</th></tr></thead>
  <tbody>
    <tr><td>L1 cache reference</td><td class="o1">0.5 ns</td><td>1x</td></tr>
    <tr><td>L2 cache reference</td><td class="ologn">7 ns</td><td>14x L1</td></tr>
    <tr><td>Main memory reference</td><td>100 ns</td><td>200x L1</td></tr>
    <tr><td>Compress 1KB (Snappy)</td><td>10 μs</td><td>-</td></tr>
    <tr><td>Send 2KB over 1Gbps</td><td>20 μs</td><td>-</td></tr>
    <tr><td>SSD random read</td><td>100 μs</td><td>-</td></tr>
    <tr><td>Round trip in same datacenter</td><td>500 μs</td><td>-</td></tr>
    <tr><td>HDD seek</td><td class="on2">10 ms</td><td>20000x memory</td></tr>
    <tr><td>Network round trip CA→EU</td><td class="on2">150 ms</td><td>-</td></tr>
  </tbody>
</table>

<div class="section-title">Estimation Examples</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">
    📱 Example: Twitter-scale estimation <span class="accordion-arrow">▼</span>
  </div>
  <div class="accordion-body">
    <p><strong>Given:</strong> 300M MAU, 50% daily active, avg 5 tweets/day</p>
    <div class="code-block"><pre>// QPS calculation
DAU = 150M
Tweets/day = 150M × 5 = 750M
Write QPS = 750M / 86400 ≈ 8,700 writes/sec
Peak write QPS = 8,700 × 3 ≈ 26,000 writes/sec

// Read is ~10x write for social media (read-heavy)
Read QPS ≈ 87,000 reads/sec

// Storage (keeping 5 years)
Avg tweet size = 140 chars × 2 bytes = 280 bytes
Media metadata = 1 KB
Total per tweet = ~1.3 KB
Storage/day = 750M × 1.3 KB ≈ 975 GB/day
5-year storage = 975 GB × 365 × 5 ≈ ~1.7 PB</pre></div>
  </div>
</div>

<div class="accordion">
  <div class="accordion-header" onclick="toggleAccordion(this)">
    🎬 Example: Netflix-scale estimation <span class="accordion-arrow">▼</span>
  </div>
  <div class="accordion-body">
    <p><strong>Given:</strong> 200M subscribers, peak 30% concurrent streaming</p>
    <div class="code-block"><pre>// Bandwidth
Concurrent users = 200M × 30% = 60M
1080p bitrate = 4 Mbps
Peak bandwidth = 60M × 4 Mbps = 240 Tbps

// Storage — 100K titles, 3 versions each
Avg 2hr movie at 4Mbps = 4Mbps × 7200s = 3.6 GB
100K × 3 × 3.6 GB ≈ 1.08 PB
With CDN redundancy (5x) ≈ 5.4 PB</pre></div>
  </div>
</div>
`;

// ═══════════════════════════════════════════════
// SYSTEM DESIGN — 11 PATTERNS
// ═══════════════════════════════════════════════
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
  { q: 'A social media feed has 100x more reads than writes. Which pattern applies?', opts: ['Write-Heavy', 'Read-Heavy', 'Transactional', 'Real-Time'], ans: 1, exp: 'Read-Heavy pattern. Solution: Redis cache in front of DB, read replicas, CDN for media. The mantra is "don\'t make the DB do work".' },
  { q: 'You\'re designing a payment system. The most critical requirement is:', opts: ['High throughput', 'ACID transactions + idempotency', 'Eventual consistency', 'Low latency CDN'], ans: 1, exp: 'Transactional pattern. Payments need ACID guarantees (SQL), idempotency keys to prevent duplicate charges, and row-level locking to prevent double-spending.' },
  { q: 'Video transcoding of uploaded videos. Which pattern?', opts: ['Real-Time', 'Read-Heavy', 'Compute-Heavy', 'Recommendation'], ans: 2, exp: 'Compute-Heavy pattern. Split video into chunks, process in parallel with a worker pool, merge results. Workers are stateless, no coordination needed between them.' },
  { q: '"Accept fast, process later" is the mantra for which pattern?', opts: ['Real-Time', 'Write-Heavy', 'Transactional', 'Multi-Region'], ans: 1, exp: 'Write-Heavy pattern. Use a durable queue (Kafka) to accept writes instantly, then process asynchronously. Never block the producer waiting for DB writes.' }
])}

`;

// ═══════════════════════════════════════════════
// SD — BUILDING BLOCKS
// ═══════════════════════════════════════════════
pages['sd-building'] = () => `
<div class="breadcrumb">System Design → <span>Building Blocks</span></div>
<div class="page-header">
  <div class="page-title">Building Blocks Reference</div>
  <div class="page-subtitle">The core primitives of every distributed system. Know when to use each and the trade-offs involved.</div>
</div>

<div class="pill-tabs">
  <div class="pill-tab active" onclick="showBlock('lb', this)">Load Balancer</div>
  <div class="pill-tab" onclick="showBlock('cache', this)">Caching</div>
  <div class="pill-tab" onclick="showBlock('db', this)">SQL vs NoSQL</div>
  <div class="pill-tab" onclick="showBlock('cap', this)">CAP Theorem</div>
  <div class="pill-tab" onclick="showBlock('hashing', this)">Consistent Hashing</div>
</div>

<div id="block-lb" class="block-section">
  <div class="section-title">Load Balancing Algorithms</div>
  <table class="data-table">
    <thead><tr><th>Algorithm</th><th>How it works</th><th>Best for</th><th>Watch out</th></tr></thead>
    <tbody>
      <tr><td><strong>Round Robin</strong></td><td>Requests cycle through servers in order</td><td>Homogeneous servers, stateless apps</td><td>Doesn't consider server load</td></tr>
      <tr><td><strong>Least Connections</strong></td><td>Route to server with fewest active connections</td><td>Variable request duration (WebSockets)</td><td>Requires connection tracking overhead</td></tr>
      <tr><td><strong>Weighted Round Robin</strong></td><td>Like Round Robin, but proportional to server capacity</td><td>Heterogeneous server fleets</td><td>Weights need manual tuning</td></tr>
      <tr><td><strong>IP Hash</strong></td><td>Hash of client IP determines server</td><td>Stateful sessions (sticky sessions)</td><td>Uneven if IPs aren't distributed</td></tr>
      <tr><td><strong>Least Response Time</strong></td><td>Route to fastest-responding server</td><td>Latency-sensitive APIs</td><td>More overhead to measure</td></tr>
    </tbody>
  </table>

  <div class="callout amber">
    <strong>Interview tip:</strong> "Load Balancer, API Gateway, and Reverse Proxy often confuse candidates. Here's the difference:"
    <ul class="content-list" style="margin-top:6px">
      <li><strong>Reverse Proxy:</strong> Forwards client requests to backend, hides backend topology. (nginx)</li>
      <li><strong>Load Balancer:</strong> A reverse proxy that distributes traffic across a pool using an algorithm. (ALB, HAProxy)</li>
      <li><strong>API Gateway:</strong> A smarter reverse proxy with auth, rate limiting, routing, transformation, and monitoring. (Kong, AWS API Gateway)</li>
    </ul>
  </div>

  <div class="section-title" style="margin-top:20px">SSL Termination</div>
  <p>SSL/TLS termination happens at the load balancer. The LB decrypts HTTPS traffic, then forwards as plain HTTP internally. Benefits: offloads CPU from app servers, centralizes certificate management. The internal network is typically trusted, making plain-text internal traffic acceptable.</p>
</div>

<div id="block-cache" class="block-section" style="display:none">
  <div class="section-title">Caching Strategies</div>
  
  <div class="two-col">
    <div>
      <div class="section-title" style="font-size:14px;border:none;padding:0;margin-bottom:8px">Write Strategies</div>
      <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(this)">Write-Through <span class="accordion-arrow">▼</span></div>
        <div class="accordion-body">Write to cache AND DB simultaneously. Strong consistency, higher write latency. Use when reads are frequent and stale data is unacceptable.</div>
      </div>
      <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(this)">Write-Back (Write-Behind) <span class="accordion-arrow">▼</span></div>
        <div class="accordion-body">Write to cache only, async write to DB later. Fast writes, risk of data loss if cache fails. Use for write-heavy workloads where slight data loss is acceptable.</div>
      </div>
      <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(this)">Write-Around <span class="accordion-arrow">▼</span></div>
        <div class="accordion-body">Write directly to DB, bypass cache. Cache miss on next read. Good when written data is rarely re-read (avoids flooding cache).</div>
      </div>
    </div>
    <div>
      <div class="section-title" style="font-size:14px;border:none;padding:0;margin-bottom:8px">Read Strategies</div>
      <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(this)">Cache-Aside (Lazy Loading) <span class="accordion-arrow">▼</span></div>
        <div class="accordion-body">App checks cache → miss → load from DB → populate cache. Most common pattern. App controls what's cached. Cache failure doesn't break the app (degrades to DB reads).</div>
      </div>
      <div class="accordion">
        <div class="accordion-header" onclick="toggleAccordion(this)">Read-Through <span class="accordion-arrow">▼</span></div>
        <div class="accordion-body">Cache handles the miss — fetches from DB automatically. App only talks to cache. Simpler app code, but cache becomes a dependency.</div>
      </div>
    </div>
  </div>

  <div class="section-title" style="margin-top:20px">Eviction Policies</div>
  <table class="data-table">
    <thead><tr><th>Policy</th><th>Description</th><th>Use case</th></tr></thead>
    <tbody>
      <tr><td><strong>LRU</strong></td><td>Evict least recently used</td><td>General purpose — most common</td></tr>
      <tr><td><strong>LFU</strong></td><td>Evict least frequently used</td><td>When access frequency matters more</td></tr>
      <tr><td><strong>TTL</strong></td><td>Evict after time expires</td><td>API responses, session tokens</td></tr>
      <tr><td><strong>FIFO</strong></td><td>Evict oldest inserted item</td><td>Simple queues</td></tr>
    </tbody>
  </table>
</div>

<div id="block-db" class="block-section" style="display:none">
  <div class="section-title">SQL vs NoSQL Decision</div>
  
  <div class="callout green">
    <strong>Rule of thumb:</strong> Start with SQL. Move to NoSQL only when you have a specific scaling need or data model mismatch. "Polyglot persistence" — use both for different parts of your system.
  </div>

  <table class="data-table">
    <thead><tr><th>Factor</th><th>SQL (PostgreSQL, MySQL)</th><th>NoSQL</th></tr></thead>
    <tbody>
      <tr><td>Schema</td><td>Fixed, enforced</td><td>Flexible, per-document</td></tr>
      <tr><td>Scaling</td><td>Vertical (then complex sharding)</td><td>Horizontal (built-in)</td></tr>
      <tr><td>Consistency</td><td>ACID, strong</td><td>BASE, eventual (typically)</td></tr>
      <tr><td>Joins</td><td>Native, efficient</td><td>Application-side or denormalize</td></tr>
      <tr><td>Best for</td><td>Financial, transactional, relational</td><td>Large scale, flexible schema, time-series</td></tr>
    </tbody>
  </table>

  <div class="two-col" style="margin-top:16px">
    <div class="info-box">
      <div class="info-title">Choose SQL when:</div>
      <ul class="content-list" style="margin-top:6px;font-size:13px">
        <li>Data is structured and relational</li>
        <li>Consistency is non-negotiable</li>
        <li>Complex queries / joins needed</li>
        <li>Multi-step transactions</li>
        <li>Financial / inventory systems</li>
      </ul>
    </div>
    <div class="info-box">
      <div class="info-title">Choose NoSQL when:</div>
      <ul class="content-list" style="margin-top:6px;font-size:13px">
        <li>Web-scale writes (Cassandra, DynamoDB)</li>
        <li>Flexible/evolving schema (MongoDB)</li>
        <li>Simple key lookups at low latency</li>
        <li>Time-series data (InfluxDB, TimescaleDB)</li>
        <li>Graph traversals (Neo4j)</li>
      </ul>
    </div>
  </div>
</div>

<div id="block-cap" class="block-section" style="display:none">
  <div class="section-title">CAP Theorem</div>
  <p>A distributed system can guarantee <strong>at most 2 of 3</strong>: Consistency, Availability, Partition Tolerance. Since network partitions <em>always</em> happen, the real choice is <strong>CP vs AP</strong>.</p>

  <div class="two-col">
    <div class="info-box">
      <div class="info-title">CP Systems (Consistent + Partition Tolerant)</div>
      <ul class="content-list" style="margin-top:6px;font-size:13px">
        <li>Refuses to respond if it can't guarantee consistency</li>
        <li>Examples: <strong>HBase, Zookeeper, etcd</strong></li>
        <li>Use for: financial systems, leader election, config management</li>
      </ul>
    </div>
    <div class="info-box">
      <div class="info-title">AP Systems (Available + Partition Tolerant)</div>
      <ul class="content-list" style="margin-top:6px;font-size:13px">
        <li>Returns possibly stale data but always responds</li>
        <li>Examples: <strong>Cassandra, DynamoDB, CouchDB, DNS</strong></li>
        <li>Use for: social media, caches, shopping carts</li>
      </ul>
    </div>
  </div>

  <div class="memory-tip">
    <div class="mt-label">💡 PACELC Extension</div>
    <div class="mt-content">CAP is silent about normal operation. PACELC adds: Even when no Partition, you trade Latency vs Consistency. Cassandra = PA/EL (available + low latency). HBase = PC/EC (consistent always). This matters for interview depth questions.</div>
  </div>
</div>

<div id="block-hashing" class="block-section" style="display:none">
  <div class="section-title">Consistent Hashing</div>
  <p>Problem: With N servers and hash(key) % N, adding/removing a server remaps almost ALL keys. Consistent hashing limits remapping to key/N items on average.</p>
  
  <div class="diagram">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="120" fill="none" stroke="#e2ddd6" stroke-width="2"/>
      <!-- Nodes on ring -->
      <circle cx="150" cy="30" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="150" y="35" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="700">A</text>
      <circle cx="260" cy="195" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="260" y="200" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="700">B</text>
      <circle cx="60" cy="230" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="60" y="235" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="700">C</text>
      <!-- Data points -->
      <circle cx="220" cy="55" r="6" fill="#059669"/>
      <text x="230" y="52" font-size="9" fill="#059669">k1</text>
      <circle cx="270" cy="110" r="6" fill="#059669"/>
      <text x="278" y="114" font-size="9" fill="#059669">k2</text>
      <circle cx="95" cy="275" r="6" fill="#d97706"/>
      <text x="105" y="279" font-size="9" fill="#d97706">k3</text>
      <!-- Labels -->
      <text x="150" y="165" text-anchor="middle" font-size="11" fill="#7a7065">Hash Ring</text>
      <text x="150" y="180" text-anchor="middle" font-size="10" fill="#7a7065">Adding server D</text>
      <text x="150" y="193" text-anchor="middle" font-size="10" fill="#7a7065">only moves ~1/N keys</text>
    </svg>
  </div>

  <p><strong>Virtual Nodes (Vnodes):</strong> Each physical server gets multiple positions on the ring. This improves distribution uniformity and makes adding/removing servers affect smaller, more even slices. Cassandra uses 256 vnodes per node by default.</p>
  
  <div class="callout blue">
    <strong>Used by:</strong> Amazon DynamoDB, Apache Cassandra, Redis Cluster, CDN edge routing, Memcached clustering
  </div>
</div>

`;

// ═══════════════════════════════════════════════
// SD — AUTH & APIs
// ═══════════════════════════════════════════════
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
  { q: 'JWTs are stateless. What is the main downside?', opts: ['They are too large', 'Cannot revoke before expiry', 'Require HTTPS', 'Slow to generate'], ans: 1, exp: 'JWTs cannot be revoked before expiry since the server doesn\'t store session state. Mitigate with short TTL (15 min) + refresh tokens stored server-side, or maintain a revocation blacklist in Redis.' },
  { q: 'Which OAuth 2.0 flow is for server-to-server (no user involved)?', opts: ['Authorization Code', 'Implicit', 'Client Credentials', 'Device Flow'], ans: 2, exp: 'Client Credentials flow is for machine-to-machine (M2M) where there\'s no user interaction. The app authenticates with its own credentials to get an access token.' },
  { q: 'You want to minimize payload size between microservices. Best choice?', opts: ['REST + JSON', 'GraphQL', 'gRPC + Protobuf', 'SOAP + XML'], ans: 2, exp: 'gRPC with Protocol Buffers is binary and typically 3-10x smaller than JSON. It also uses HTTP/2 for multiplexing, making it ideal for high-throughput microservice communication.' }
])}
`;

// ═══════════════════════════════════════════════
// SD — CASE STUDIES
// ═══════════════════════════════════════════════
pages['sd-cases'] = () => `
<div class="breadcrumb">System Design → <span>Case Studies</span></div>
<div class="page-header">
  <div class="page-title">System Design Case Studies</div>
  <div class="page-subtitle">Apply the 5-step framework to real systems. Each case uses the patterns you've learned.</div>
</div>
<div class="card-grid">
  <div class="card" onclick="showPage('sd-url')">
    <div class="card-icon">🔗</div>
    <div class="card-title">URL Shortener</div>
    <div class="card-desc">TinyURL, bit.ly — hashing, redirects, analytics</div>
  </div>
  <div class="card" onclick="showPage('sd-feed')">
    <div class="card-icon">📰</div>
    <div class="card-title">News Feed</div>
    <div class="card-desc">Twitter/Facebook feed — fan-out strategies</div>
  </div>
  <div class="card" onclick="showPage('sd-chat')">
    <div class="card-icon">💬</div>
    <div class="card-title">Chat System</div>
    <div class="card-desc">WhatsApp-style — WebSocket, message storage</div>
  </div>
  <div class="card" onclick="showPage('sd-ratelimit')">
    <div class="card-icon">🚦</div>
    <div class="card-title">Rate Limiter</div>
    <div class="card-desc">Token bucket, sliding window, Redis</div>
  </div>
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
  { q: "Why use a Lua script in Redis for rate limiting?", opts: ["Lua is faster than Python", "Lua executes atomically in Redis — prevents race conditions between GET and SET", "Redis only supports Lua", "To avoid network round trips only"], ans: 1, exp: "Lua scripts run atomically in Redis — the entire script executes as a single operation. Without this, two servers could both read count=99 and both increment to 100, allowing 2 requests when only 1 should pass." },
  { q: "Token bucket vs fixed window — key difference?", opts: ["Token bucket is simpler", "Token bucket allows controlled bursts; fixed window has the boundary double-request problem", "Fixed window is more accurate", "No difference at low traffic"], ans: 1, exp: "Token bucket: allows burst up to bucket size, then throttles smoothly. Fixed window: allows 2× the limit at window boundaries (end of minute + start of next). Token bucket is preferred for user-facing APIs." },
  { q: "Sliding window counter vs sliding window log?", opts: ["They are identical", "Counter uses ~2 Redis keys (O(1) memory); Log stores every request timestamp (O(n) memory)", "Log is always more accurate", "Counter requires more Redis operations"], ans: 1, exp: "Sliding window log: exact, stores every timestamp, O(n) memory. Sliding window counter: ~98% accurate, only stores 2 counters, O(1) memory. Counter is preferred for production at scale." }
])}
`;
