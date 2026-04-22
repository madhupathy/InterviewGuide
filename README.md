# InterviewGuide

A comprehensive Senior SWE interview prep guide — single self-contained HTML file.

## Contents (42 pages)

- **System Design** — Framework, Estimation, Building Blocks (CAP, ACID, Sharding, Replication, Indexes, APIs, Auth), 11 Patterns, Case Studies (URL Shortener, News Feed, Chat, Rate Limiter, LRU Cache)
- **Distributed Systems** — Message Queues (Kafka/RabbitMQ), Consensus & CAP, 18-tab Trade-offs Reference
- **DS & Algorithms** — Arrays, LinkedList, HashMap, Trees, Graphs, Heap, 7 Algorithm Patterns, Revision Tracker
- **Java** — Core OOP, Collections, Concurrency, Streams, Memory/JVM
- **Spring Boot** — IoC, DI, AOP, Transactions, JPA, Circuit Breaker
- **Golang** — Goroutines, Channels, Worker Pool, Context, Error Handling
- **Kubernetes** — Architecture, Troubleshooting, CRDs/Operators, Observability, GPU Operator
- **225+ Interview Questions** — 9 questions per section, auto-scoring quizzes

## Usage

Open `InterviewGuide.html` directly in any browser — no server, no build step needed.

```bash
# Or serve locally
python3 -m http.server 8000
# then open http://localhost:8000/InterviewGuide.html
```

## Deploy

```bash
# Vercel (recommended)
npm i -g vercel
cp InterviewGuide.html index.html
vercel --prod
```

## Repository

- `InterviewGuide.html` — single-file deployable app (self-contained, ~470 KB)
- `index.html` — base shell with CSS + JS engine
- `pages-sd.js` — System Design + Distributed Systems pages
- `pages-ds.js` — DS & Algorithms pages
- `pages-java.js` — Java, Spring Boot, Golang pages
- `pages-infra.js` — Kubernetes, Observability pages
