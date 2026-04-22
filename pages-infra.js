// ─── KUBERNETES CORE ─────────────────────────────────────────────────────────
pages['k8s-core'] = () => `
<div class="page-header">
  <div class="breadcrumb">Kubernetes</div>
  <h1 class="page-title">Kubernetes Fundamentals</h1>
  <p class="page-subtitle">Control plane, data plane, core objects, and storage.</p>
  ${revisionControls('k8s-core')}
</div>

<div class="elon-box">
  <strong>⚡ K8s in one line:</strong> Kubernetes is a container orchestrator — it decides WHERE to run your containers, keeps them running, and handles scaling, networking, and secrets.
</div>

<h2 class="section-title">Architecture: Control Plane vs Data Plane</h2>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:24px;margin:16px 0;overflow-x:auto">
<svg viewBox="0 0 680 320" style="width:100%;max-width:680px;display:block;margin:0 auto">
  <!-- Control Plane -->
  <rect x="10" y="10" width="300" height="295" rx="12" fill="#eef2ff" stroke="#2563eb" stroke-width="2"/>
  <text x="160" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="#1e40af">CONTROL PLANE (Master)</text>
  <!-- API Server -->
  <rect x="25" y="50" width="270" height="50" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="160" y="71" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">kube-apiserver</text>
  <text x="160" y="88" text-anchor="middle" font-size="10" fill="#3b82f6">Entry point for all requests. REST API. Validates &amp; persists to etcd.</text>
  <!-- etcd -->
  <rect x="25" y="115" width="125" height="48" rx="8" fill="#c7d2fe" stroke="#6366f1"/>
  <text x="87" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">etcd</text>
  <text x="87" y="153" text-anchor="middle" font-size="10" fill="#4338ca">Distributed KV store. Source of truth for cluster state.</text>
  <!-- Scheduler -->
  <rect x="163" y="115" width="132" height="48" rx="8" fill="#c7d2fe" stroke="#6366f1"/>
  <text x="229" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">kube-scheduler</text>
  <text x="229" y="153" text-anchor="middle" font-size="10" fill="#4338ca">Picks best node for new Pods.</text>
  <!-- Controller Manager -->
  <rect x="25" y="178" width="270" height="48" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="160" y="199" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">kube-controller-manager</text>
  <text x="160" y="215" text-anchor="middle" font-size="10" fill="#3b82f6">Node ctrl, Replication ctrl, Endpoints ctrl, Service Account ctrl...</text>
  <!-- cloud CM -->
  <rect x="25" y="240" width="270" height="48" rx="8" fill="#ede9fe" stroke="#8b5cf6"/>
  <text x="160" y="261" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">cloud-controller-manager</text>
  <text x="160" y="277" text-anchor="middle" font-size="10" fill="#7c3aed">Cloud-specific: LB, storage, routing (AWS/GCP/Azure)</text>
  <!-- Data Plane -->
  <rect x="330" y="10" width="340" height="295" rx="12" fill="#f0fdf4" stroke="#059669" stroke-width="2"/>
  <text x="500" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="#065f46">DATA PLANE (Worker Nodes)</text>
  <!-- kubelet -->
  <rect x="345" y="50" width="150" height="48" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="420" y="71" text-anchor="middle" font-size="11" font-weight="700" fill="#14532d">kubelet</text>
  <text x="420" y="87" text-anchor="middle" font-size="10" fill="#166534">Node agent. Ensures containers in Pods are running &amp; healthy.</text>
  <!-- kube-proxy -->
  <rect x="505" y="50" width="155" height="48" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="582" y="71" text-anchor="middle" font-size="11" font-weight="700" fill="#14532d">kube-proxy</text>
  <text x="582" y="87" text-anchor="middle" font-size="10" fill="#166534">Network rules on each node. Services → Pod routing (iptables/IPVS).</text>
  <!-- CRI -->
  <rect x="345" y="115" width="310" height="48" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="500" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#14532d">Container Runtime (CRI)</text>
  <text x="500" y="153" text-anchor="middle" font-size="10" fill="#166534">containerd / CRI-O — runs the actual containers</text>
  <!-- Pods -->
  <rect x="345" y="178" width="310" height="115" rx="8" fill="#bbf7d0" stroke="#22c55e"/>
  <text x="500" y="200" text-anchor="middle" font-size="11" font-weight="700" fill="#14532d">Pods (smallest deployable unit)</text>
  <rect x="360" y="210" width="90" height="70" rx="6" fill="#86efac" stroke="#4ade80"/>
  <text x="405" y="230" text-anchor="middle" font-size="10" fill="#14532d">App Container</text>
  <rect x="460" y="210" width="90" height="70" rx="6" fill="#86efac" stroke="#4ade80"/>
  <text x="505" y="230" text-anchor="middle" font-size="10" fill="#14532d">Sidecar</text>
  <text x="505" y="248" text-anchor="middle" font-size="9" fill="#166534">(logging/proxy)</text>
</svg>
</div>

<h2 class="section-title">Core K8s Objects</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Pod, Deployment, Service, Ingress</div>
    <div class="accordion-body">
      <div class="code-block"><pre>---
# Pod — one or more containers sharing network/storage
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: api
    image: myapp:1.0
    ports: [{containerPort: 8080}]
    resources:
      requests: {cpu: 100m, memory: 128Mi}
      limits:   {cpu: 500m, memory: 256Mi}

---
# Deployment — declarative Pod management + rolling updates
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate: {maxSurge: 1, maxUnavailable: 0}
  template:
    spec:
      containers:
      - name: api
        image: myapp:1.1      # update → rolling rollout

---
# Service — stable endpoint for Pods (ClusterIP/NodePort/LoadBalancer)
apiVersion: v1
kind: Service
spec:
  selector: {app: myapp}    # targets all Pods with this label
  ports: [{port: 80, targetPort: 8080}]
  type: ClusterIP            # internal only

---
# Ingress — HTTP routing to Services
apiVersion: networking.k8s.io/v1
kind: Ingress
spec:
  rules:
  - host: api.myapp.com
    http:
      paths:
      - path: /v1
        backend:
          service: {name: api-v1, port: {number: 80}}</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">StatefulSet, PersistentVolume, ConfigMap & Secret</div>
    <div class="accordion-body">
      <div class="code-block"><pre>---
# StatefulSet — ordered, stable identities (DBs, Kafka, Zookeeper)
# Pods: db-0, db-1, db-2 (predictable hostnames, stable storage)
kind: StatefulSet
spec:
  serviceName: "db"          # headless service for DNS (db-0.db.default.svc.cluster.local)
  volumeClaimTemplates:      # each Pod gets its own PVC
  - spec:
      storageClassName: fast
      resources: {requests: {storage: 10Gi}}

---
# PersistentVolumeClaim — request storage
kind: PersistentVolumeClaim
spec:
  storageClassName: standard
  accessModes: [ReadWriteOnce]
  resources: {requests: {storage: 5Gi}}

---
# ConfigMap — non-secret config
kind: ConfigMap
data:
  DB_HOST: "postgres.default.svc"
  APP_ENV: "production"
# Mount as env vars or volume files

---
# Secret — base64-encoded (not encrypted by default!)
kind: Secret
type: Opaque
data:
  password: cGFzc3dvcmQxMjM=   # base64("password123")
# Enable encryption at rest in etcd for production</pre></div>
    </div>
  </div>
</div>

${quizHTML('k8s-core', [
  { q: "What stores cluster state in Kubernetes?", opts: ["kube-apiserver", "etcd", "kubelet", "Scheduler"], ans: 1, exp: "etcd is a distributed key-value store that is the single source of truth for all cluster state. The API server is the only component that reads/writes etcd directly. Always run etcd with backups!" },
  { q: "What's the difference between Deployment and StatefulSet?", opts: ["StatefulSet has more replicas", "Deployment for stateless apps; StatefulSet for stateful apps needing stable identities, ordered ops, persistent storage", "No difference in K8s 1.25+", "StatefulSet can't be updated"], ans: 1, exp: "StatefulSet provides: stable Pod names (pod-0, pod-1), stable DNS hostnames, stable storage (own PVC per Pod), ordered startup/shutdown. Use for DBs, Kafka, Elasticsearch. Deployments are for stateless apps." },
  { q: "What does kube-proxy do?", opts: ["Proxies traffic from outside to Pods", "Manages iptables/IPVS rules so Services route to Pod IPs", "Acts as Ingress controller", "Load balances across clusters"], ans: 1, exp: "kube-proxy runs on each node and manages network rules (iptables or IPVS) that implement the Service abstraction — ensuring traffic to a Service's ClusterIP gets forwarded to one of the backing Pods." }
])}`;

// ─── K8S TROUBLESHOOT ────────────────────────────────────────────────────────
pages['k8s-troubleshoot'] = () => `
<div class="page-header">
  <div class="breadcrumb">Kubernetes</div>
  <h1 class="page-title">K8s Troubleshooting Playbook</h1>
  <p class="page-subtitle">Systematic debugging for the most common Kubernetes issues.</p>
  ${revisionControls('k8s-troubleshoot')}
</div>

<div class="elon-box">
  <strong>⚡ Debug order:</strong> Events → Describe → Logs → Exec. Always check <code>kubectl describe</code> first — Events section tells you what K8s tried to do and why it failed.
</div>

<h2 class="section-title">Essential Debug Commands</h2>
<div class="code-block"><pre># Golden workflow
kubectl get pods -n &lt;ns&gt; -o wide          # status + node placement
kubectl describe pod &lt;pod&gt; -n &lt;ns&gt;        # events, conditions, resource limits
kubectl logs &lt;pod&gt; -n &lt;ns&gt; --previous     # logs from crashed container
kubectl logs &lt;pod&gt; -c &lt;container&gt;         # specific container in multi-container pod
kubectl exec -it &lt;pod&gt; -- /bin/sh         # get a shell inside running container
kubectl get events --sort-by='.lastTimestamp' -n &lt;ns&gt;  # recent cluster events
kubectl top pods -n &lt;ns&gt;                  # CPU/memory usage (needs metrics-server)</pre></div>

<h2 class="section-title">Common Issues & Fixes</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">🔴 Node Not Ready</div>
    <div class="accordion-body">
      <div class="code-block"><pre>kubectl describe node &lt;node-name&gt;
# Look for: Conditions section, Events

# Common causes:
# 1. kubelet not running
systemctl status kubelet
journalctl -u kubelet -n 50

# 2. Disk pressure / memory pressure
# Node has DiskPressure or MemoryPressure taint → pods evicted/not scheduled

# 3. Network plugin (CNI) issue
kubectl get pods -n kube-system  # check calico/flannel/weave pods

# 4. Certificate expired
kubeadm certs check-expiration

# Recovery steps:
kubectl cordon &lt;node&gt;           # stop new pods scheduling
kubectl drain &lt;node&gt; --ignore-daemonsets --delete-emptydir-data
# fix node, then:
kubectl uncordon &lt;node&gt;</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">🔴 CrashLoopBackOff</div>
    <div class="accordion-body">
      <div class="code-block"><pre># Pod keeps crashing and restarting with exponential backoff
kubectl logs &lt;pod&gt; --previous           # logs from BEFORE the crash
kubectl describe pod &lt;pod&gt;              # exit code, reason

# Common causes and signals:
# Exit code 1 → App error (check logs for stacktrace)
# Exit code 137 → OOMKilled (increase memory limit)
# Exit code 139 → Segfault
# Exit code 126/127 → Command not found (entrypoint wrong)

# Check OOM
kubectl describe pod | grep -i "OOM\|kill\|137"
kubectl get events | grep OOM

# Fix OOMKilled:
resources:
  limits:
    memory: 512Mi    # increase this
  requests:
    memory: 256Mi</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">🔴 ImagePullBackOff / ErrImagePull</div>
    <div class="accordion-body">
      <div class="code-block"><pre># Kubernetes can't pull the container image
kubectl describe pod | grep -A 5 "Events"

# Causes:
# 1. Wrong image name/tag
image: myapp:v1.0   # does this tag exist in registry?

# 2. Private registry — no pull secret
kubectl create secret docker-registry regcred \
  --docker-server=registry.example.com \
  --docker-username=user \
  --docker-password=pass

spec:
  imagePullSecrets:
  - name: regcred   # reference in Pod spec

# 3. Registry unreachable (network policy / VPC issue)
# Test from node: docker pull &lt;image&gt;

# 4. Image is too large — increase node storage</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">🔴 Service Not Routing Traffic</div>
    <div class="accordion-body">
      <div class="code-block"><pre># Step 1: check Service endpoints
kubectl get endpoints &lt;service-name&gt;
# If empty → label selector mismatch!

# Step 2: verify selector matches Pod labels
kubectl get svc &lt;svc&gt; -o yaml | grep selector -A 5
kubectl get pods --show-labels | grep app=myapp   # labels match?

# Step 3: test DNS resolution inside cluster
kubectl run debug --image=busybox -it --rm -- nslookup my-service.default.svc.cluster.local
kubectl run debug --image=busybox -it --rm -- wget -qO- http://my-service

# Step 4: check network policies
kubectl get networkpolicies -n &lt;ns&gt;
# NetworkPolicy might be blocking traffic

# Step 5: kube-proxy logs
kubectl logs -n kube-system -l k8s-app=kube-proxy</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">🔴 Liveness & Readiness Probe Failures</div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Probe</th><th>Failure Action</th><th>Use For</th></tr>
        <tr><td>livenessProbe</td><td>Restart container</td><td>Detect deadlock, hung process</td></tr>
        <tr><td>readinessProbe</td><td>Remove from Service endpoints</td><td>Traffic only when ready</td></tr>
        <tr><td>startupProbe</td><td>Kill container if startup too slow</td><td>Slow-starting apps</td></tr>
      </table>
      <div class="code-block"><pre>livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30    # wait before first check (app startup time)
  periodSeconds: 10
  failureThreshold: 3        # restart after 3 consecutive failures
  timeoutSeconds: 5

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5

# Debug: look for probe failure events
kubectl describe pod | grep -i "Liveness\|Readiness\|probe"</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">🔴 Persistent Volume Issues</div>
    <div class="accordion-body">
      <div class="code-block"><pre># Pod stuck in Pending — PVC not bound
kubectl get pvc -n &lt;ns&gt;
kubectl describe pvc &lt;pvc-name&gt;

# Common causes:
# 1. No matching PV (wrong storageClass, size, accessMode)
kubectl get sc   # available storage classes
kubectl get pv   # available persistent volumes

# 2. PV in Released state (needs manual cleanup)
kubectl edit pv &lt;pv-name&gt;
# Remove: spec.claimRef  → allows re-binding

# 3. Wrong access mode
# ReadWriteOnce = single node; ReadWriteMany = multiple nodes (NFS/EFS)

# 4. Quota exceeded
kubectl describe quota -n &lt;ns&gt;</pre></div>
    </div>
  </div>
</div>

${quizHTML('k8s-troubleshoot', [
  { q: "Pod is CrashLoopBackOff with exit code 137 — what happened?", opts: ["App error in code", "OOMKilled — container exceeded memory limit", "Image not found", "Liveness probe failed"], ans: 1, exp: "Exit code 137 = 128 + 9 (SIGKILL) = OOMKilled. The container was killed by the kernel because it exceeded its memory limit. Solution: increase memory limit or find the memory leak." },
  { q: "kubectl get endpoints shows empty for a Service — most likely cause?", opts: ["Service is wrong type", "Pod label selector in Service doesn't match Pod labels", "Pods are on wrong node", "No Ingress configured"], ans: 1, exp: "Empty endpoints means the Service selector doesn't match any running Pod labels. Compare spec.selector in the Service YAML with metadata.labels in the Pod YAML. This is the #1 cause of Service routing issues." },
  { q: "What's the difference between liveness and readiness probes?", opts: ["They're the same", "Liveness failure → restart container; Readiness failure → remove from load balancer endpoints", "Readiness failure → restart container", "Liveness is for startup only"], ans: 1, exp: "Liveness: is the container alive? Failure → kubelet restarts it. Readiness: is the container ready to serve traffic? Failure → removed from Service endpoints (not restarted). Use readiness for graceful deploys." }
])}`;

// ─── K8S ADVANCED ────────────────────────────────────────────────────────────
pages['k8s-advanced'] = () => `
<div class="page-header">
  <div class="breadcrumb">Kubernetes</div>
  <h1 class="page-title">Advanced K8s — CRDs, Operators, Service Mesh</h1>
  <p class="page-subtitle">CRDs, Operators, Istio, Sidecar pattern, HPA/VPA.</p>
  ${revisionControls('k8s-advanced')}
</div>

<h2 class="section-title">Custom Resource Definitions (CRDs)</h2>
<div class="callout callout-blue">
  CRDs let you extend the Kubernetes API with your own resource types. Once defined, you can use <code>kubectl get</code>, apply, watch them just like built-in resources.
</div>
<div class="code-block"><pre>---
# Define a CRD: "Database" resource
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databases.mycompany.com
spec:
  group: mycompany.com
  names:
    kind: Database
    plural: databases
  scope: Namespaced
  versions:
  - name: v1alpha1
    served: true
    storage: true
    schema:
      openAPIV3Schema:
        type: object
        properties:
          spec:
            type: object
            properties:
              engine: {type: string}
              replicas: {type: integer}
              storageGB: {type: integer}

---
# Now create an instance of your custom resource
apiVersion: mycompany.com/v1alpha1
kind: Database
metadata:
  name: prod-postgres
spec:
  engine: postgres
  replicas: 3
  storageGB: 100</pre></div>

<h2 class="section-title">Operators — Kubernetes Automation</h2>
<div class="callout callout-amber">
  An <strong>Operator</strong> = CRD + Controller. The Controller watches for CR events (create/update/delete) and reconciles actual state to desired state. Operators codify operational knowledge (backup, failover, upgrades).
</div>
<div class="code-block"><pre>// Controller reconciliation loop (Go / controller-runtime)
func (r *DatabaseReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
  // 1. Fetch the custom resource
  db := &myv1.Database{}
  if err := r.Get(ctx, req.NamespacedName, db); err != nil {
    return ctrl.Result{}, client.IgnoreNotFound(err)
  }

  // 2. Compute desired state
  desired := buildStatefulSet(db)

  // 3. Reconcile (create/update if drift from actual)
  existing := &appsv1.StatefulSet{}
  err := r.Get(ctx, types.NamespacedName{Name: desired.Name}, existing)
  if errors.IsNotFound(err) {
    return ctrl.Result{}, r.Create(ctx, desired)  // create
  }
  // update if spec changed...
  return ctrl.Result{RequeueAfter: 30 * time.Second}, nil
}</pre></div>

<div class="memory-tip">
  <strong>Popular Operators:</strong> Prometheus Operator, Cert-Manager, ArgoCD, Strimzi (Kafka), CloudNativePG (Postgres), Zalando Postgres Operator.
</div>

<h2 class="section-title">Istio Service Mesh</h2>
<div class="callout callout-purple">
  Istio injects a <strong>sidecar proxy (Envoy)</strong> into every Pod. All traffic goes through Envoy. This gives you: mTLS, traffic management (canary, retry, circuit break), observability (traces, metrics) — without app code changes.
</div>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin:16px 0;overflow-x:auto">
<svg viewBox="0 0 600 200" style="width:100%;max-width:600px;display:block;margin:0 auto">
  <!-- Pod A -->
  <rect x="20" y="30" width="180" height="130" rx="10" fill="#eef2ff" stroke="#6366f1"/>
  <text x="110" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">Pod A</text>
  <rect x="35" y="65" width="70" height="50" rx="6" fill="#c7d2fe" stroke="#818cf8"/>
  <text x="70" y="93" text-anchor="middle" font-size="10" fill="#3730a3">App</text>
  <rect x="120" y="65" width="70" height="50" rx="6" fill="#a5b4fc" stroke="#6366f1"/>
  <text x="155" y="86" text-anchor="middle" font-size="10" fill="#1e1b4b">Envoy</text>
  <text x="155" y="102" text-anchor="middle" font-size="9" fill="#3730a3">sidecar</text>
  <text x="110" y="148" text-anchor="middle" font-size="9" fill="#6366f1">mTLS, retries, traces</text>
  <!-- Arrow -->
  <line x1="202" y1="95" x2="258" y2="95" stroke="#059669" stroke-width="2" marker-end="url(#arr2)"/>
  <text x="230" y="88" text-anchor="middle" font-size="10" fill="#059669">mTLS</text>
  <!-- Pod B -->
  <rect x="260" y="30" width="180" height="130" rx="10" fill="#eef2ff" stroke="#6366f1"/>
  <text x="350" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#3730a3">Pod B</text>
  <rect x="275" y="65" width="70" height="50" rx="6" fill="#a5b4fc" stroke="#6366f1"/>
  <text x="310" y="86" text-anchor="middle" font-size="10" fill="#1e1b4b">Envoy</text>
  <text x="310" y="102" text-anchor="middle" font-size="9" fill="#3730a3">sidecar</text>
  <rect x="360" y="65" width="70" height="50" rx="6" fill="#c7d2fe" stroke="#818cf8"/>
  <text x="395" y="93" text-anchor="middle" font-size="10" fill="#3730a3">App</text>
  <!-- Istiod -->
  <rect x="460" y="30" width="130" height="130" rx="10" fill="#faf5ff" stroke="#a855f7"/>
  <text x="525" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#6b21a8">Istiod</text>
  <text x="525" y="72" text-anchor="middle" font-size="10" fill="#7e22ce">Control Plane</text>
  <text x="525" y="92" text-anchor="middle" font-size="9" fill="#7e22ce">• Pilot (routing)</text>
  <text x="525" y="108" text-anchor="middle" font-size="9" fill="#7e22ce">• Citadel (certs)</text>
  <text x="525" y="124" text-anchor="middle" font-size="9" fill="#7e22ce">• Galley (config)</text>
  <line x1="441" y1="90" x2="458" y2="90" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4"/>
</svg>
</div>

<div class="code-block"><pre># Istio traffic management
---
# VirtualService — routing rules
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata: {name: my-service}
spec:
  hosts: [my-service]
  http:
  - match:
    - headers: {x-version: {exact: v2}}
    route:
    - destination: {host: my-service, subset: v2}
  - route:   # default: 90/10 canary
    - destination: {host: my-service, subset: v1}
      weight: 90
    - destination: {host: my-service, subset: v2}
      weight: 10
  retries:
    attempts: 3
    retryOn: gateway-error,connect-failure
  timeout: 5s</pre></div>

<h2 class="section-title">Sidecar Patterns — Fluentd, Envoy</h2>
<table class="data-table">
  <tr><th>Sidecar</th><th>Purpose</th><th>How it works</th></tr>
  <tr><td>Fluentd</td><td>Log collection</td><td>Reads log files from shared volume, ships to Elasticsearch/CloudWatch</td></tr>
  <tr><td>Envoy (Istio)</td><td>Service mesh proxy</td><td>All ingress/egress traffic through Envoy — mTLS, retries, metrics</td></tr>
  <tr><td>Jaeger agent</td><td>Distributed tracing</td><td>Collects spans from app, batches to Jaeger collector</td></tr>
  <tr><td>Vault agent</td><td>Secret injection</td><td>Fetches secrets from Vault, writes to shared volume</td></tr>
</table>

<h2 class="section-title">HPA & VPA</h2>
<div class="code-block"><pre># HPA — scale replicas based on metrics
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
spec:
  scaleTargetRef: {kind: Deployment, name: api}
  minReplicas: 2
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target: {type: Utilization, averageUtilization: 70}
  - type: External    # custom metric (Prometheus, Datadog)
    external:
      metric: {name: http_requests_per_second}
      target: {type: AverageValue, averageValue: 1000}

# VPA — right-size CPU/memory requests automatically
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
spec:
  targetRef: {kind: Deployment, name: api}
  updatePolicy: {updateMode: "Auto"}  # Auto restarts pods with new limits</pre></div>

${quizHTML('k8s-advanced', [
  { q: "What is a Kubernetes Operator?", opts: ["A Helm chart with values", "A CRD + Controller that codifies operational knowledge into automated reconciliation loops", "A K8s admin user role", "A cloud provider plugin"], ans: 1, exp: "An Operator extends K8s with domain-specific knowledge. It watches Custom Resources and reconciles actual state to desired. Examples: DB failover, backup scheduling, certificate rotation — all automated." },
  { q: "What does Istio's sidecar proxy (Envoy) enable without app changes?", opts: ["Database connection pooling", "mTLS, distributed tracing, circuit breaking, and traffic shifting", "Container image caching", "Node auto-provisioning"], ans: 1, exp: "Istio injects Envoy as a sidecar. Since all traffic passes through Envoy, you get automatic mTLS encryption, distributed traces (Jaeger/Zipkin), retries, circuit breaking, and canary routing — zero app code changes." }
])}`;

// ─── K8S OBSERVABILITY ───────────────────────────────────────────────────────
pages['k8s-observability'] = () => `
<div class="page-header">
  <div class="breadcrumb">Kubernetes</div>
  <h1 class="page-title">Observability — Logs, Metrics, Traces</h1>
  <p class="page-subtitle">The three pillars of observability: OpenTelemetry, Prometheus, Grafana, and distributed tracing.</p>
  ${revisionControls('k8s-observability')}
</div>

<div class="elon-box">
  <strong>⚡ Three Pillars:</strong> Logs = what happened. Metrics = how much / how fast. Traces = where time was spent across services. You need all three to debug distributed systems effectively.
</div>

<h2 class="section-title">OpenTelemetry (OTLP)</h2>
<div class="callout callout-blue">
  OpenTelemetry is the <strong>open standard</strong> for telemetry. Your app emits signals (logs, metrics, traces) → OTel Collector → any backend (Prometheus, Jaeger, Tempo, Datadog). Vendor-neutral.
</div>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px;margin:16px 0;overflow-x:auto">
<svg viewBox="0 0 640 160" style="width:100%;max-width:640px;display:block;margin:0 auto">
  <rect x="10" y="30" width="110" height="100" rx="8" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="65" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Your App</text>
  <text x="65" y="80" text-anchor="middle" font-size="10" fill="#3b82f6">OTel SDK</text>
  <text x="65" y="98" text-anchor="middle" font-size="9" fill="#3b82f6">Logs/Metrics</text>
  <text x="65" y="114" text-anchor="middle" font-size="9" fill="#3b82f6">Traces</text>
  <line x1="122" y1="80" x2="158" y2="80" stroke="#6366f1" stroke-width="2" marker-end="url(#arr2)"/>
  <text x="140" y="73" text-anchor="middle" font-size="9" fill="#6366f1">OTLP</text>
  <rect x="160" y="30" width="130" height="100" rx="8" fill="#ede9fe" stroke="#8b5cf6"/>
  <text x="225" y="60" text-anchor="middle" font-size="11" font-weight="700" fill="#5b21b6">OTel Collector</text>
  <text x="225" y="78" text-anchor="middle" font-size="9" fill="#7c3aed">Receive → Process</text>
  <text x="225" y="94" text-anchor="middle" font-size="9" fill="#7c3aed">→ Export</text>
  <text x="225" y="110" text-anchor="middle" font-size="9" fill="#7c3aed">Sidecar or DaemonSet</text>
  <line x1="292" y1="60" x2="328" y2="40" stroke="#059669" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="292" y1="80" x2="328" y2="80" stroke="#d97706" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="292" y1="100" x2="328" y2="120" stroke="#dc2626" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="330" y="20" width="100" height="36" rx="6" fill="#dcfce7" stroke="#16a34a"/>
  <text x="380" y="43" text-anchor="middle" font-size="11" fill="#14532d">Prometheus</text>
  <rect x="330" y="65" width="100" height="36" rx="6" fill="#fffbeb" stroke="#d97706"/>
  <text x="380" y="88" text-anchor="middle" font-size="11" fill="#92400e">Tempo/Jaeger</text>
  <rect x="330" y="110" width="100" height="36" rx="6" fill="#fef2f2" stroke="#dc2626"/>
  <text x="380" y="133" text-anchor="middle" font-size="11" fill="#991b1b">Loki / ES</text>
  <line x1="432" y1="38" x2="468" y2="80" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="432" y1="83" x2="468" y2="83" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <line x1="432" y1="128" x2="468" y2="90" stroke="#6366f1" stroke-width="1.5" marker-end="url(#arr2)"/>
  <rect x="470" y="50" width="110" height="60" rx="8" fill="#faf5ff" stroke="#a855f7"/>
  <text x="525" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="#6b21a8">Grafana</text>
  <text x="525" y="95" text-anchor="middle" font-size="10" fill="#7e22ce">Dashboards</text>
  <text x="525" y="110" text-anchor="middle" font-size="9" fill="#7e22ce">Alerts</text>
</svg>
</div>

<h2 class="section-title">Prometheus + Grafana</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">How Prometheus works</div>
    <div class="accordion-body">
      <div class="callout callout-green">
        Prometheus <strong>scrapes</strong> (pulls) metrics from /metrics endpoints at intervals. Apps expose metrics via Prometheus client library. Prometheus stores in a TSDB (time-series DB) and evaluates alerting rules.
      </div>
      <div class="code-block"><pre># prometheus.yml — scrape config
scrape_configs:
  - job_name: 'my-app'
    static_configs:
      - targets: ['my-app.default.svc:8080']
    # Or use K8s service discovery:
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true

# PromQL examples
http_requests_total{job="api",status="500"}    # counter
rate(http_requests_total[5m])                  # req/s over 5min
histogram_quantile(0.99, rate(latency_bucket[5m]))  # p99 latency
up{job="api"}                                  # health check</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Grafana Dashboards & Alerting</div>
    <div class="accordion-body">
      <div class="callout callout-amber">
        <strong>USE (Utilization, Saturation, Errors)</strong> is the key metrics framework for infrastructure. <strong>RED (Rate, Errors, Duration)</strong> for services. These form the basis of your Grafana dashboards.
      </div>
      <div class="code-block"><pre># USE Method (infra)
Utilization: CPU%, memory%, disk%
Saturation: queue depth, wait time
Errors: error count, error rate

# RED Method (services)
Rate: requests/sec
Errors: error rate (5xx / total)
Duration: p50, p95, p99 latency</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Distributed Tracing</h2>
<div class="callout callout-blue">
  A <strong>trace</strong> = a tree of <strong>spans</strong>. Each span represents one operation (HTTP call, DB query). Spans carry context (trace ID, span ID) propagated via HTTP headers.
</div>
<div class="code-block"><pre>// Instrumenting with OpenTelemetry (Java)
Tracer tracer = GlobalOpenTelemetry.getTracer("my-app");

Span span = tracer.spanBuilder("processOrder")
  .setAttribute("order.id", orderId)
  .startSpan();
try (Scope scope = span.makeCurrent()) {
  // This context propagates to outgoing HTTP calls automatically
  result = inventoryService.reserve(items);  // child span created
  paymentService.charge(amount);             // child span created
} catch (Exception e) {
  span.recordException(e);
  span.setStatus(StatusCode.ERROR);
  throw e;
} finally {
  span.end();
}</pre></div>

<h2 class="section-title">Structured Logging</h2>
<div class="code-block"><pre>// Bad: plain text — hard to query
logger.info("User 12345 purchased item ABC for $50");

// Good: structured JSON — queryable in Loki/Elasticsearch
logger.info("purchase completed",
  "userId", 12345,
  "itemId", "ABC",
  "amount", 50.00,
  "traceId", span.getSpanContext().getTraceId()  // correlate with traces!
);
// → {"level":"info","msg":"purchase completed","userId":12345,"itemId":"ABC","amount":50.0,"traceId":"abc123"}</pre></div>

<h2 class="section-title">TimescaleDB for Metrics</h2>
<div class="callout callout-amber">
  TimescaleDB is PostgreSQL + time-series optimization. Hypertables auto-partition by time. Use with Prometheus remote_write for long-term metric storage with SQL queries.
</div>
<div class="code-block"><pre>-- Create a hypertable (auto-partitioned by time)
CREATE TABLE metrics (
  time TIMESTAMPTZ NOT NULL,
  service TEXT,
  cpu_usage DOUBLE PRECISION
);
SELECT create_hypertable('metrics', 'time');

-- Query recent data (uses time-based index)
SELECT time_bucket('5 minutes', time) AS bucket, AVG(cpu_usage)
FROM metrics
WHERE time > NOW() - INTERVAL '1 hour'
  AND service = 'api'
GROUP BY bucket ORDER BY bucket;</pre></div>

${quizHTML('k8s-observability', [
  { q: "What are the three pillars of observability?", opts: ["CPU, Memory, Network", "Logs, Metrics, Traces", "Availability, Performance, Security", "Latency, Throughput, Errors"], ans: 1, exp: "Logs = what happened (events, errors). Metrics = aggregated numbers over time (req/s, CPU%, error rate). Traces = timing across service calls (where is latency coming from?). All three together enable complete system understanding." },
  { q: "How does Prometheus collect metrics?", opts: ["Apps push to Prometheus", "Prometheus pulls (scrapes) from /metrics endpoints at intervals", "Via OpenTelemetry push only", "Via Kubernetes events API"], ans: 1, exp: "Prometheus uses a pull model: it scrapes HTTP endpoints (usually /metrics) at configured intervals. Apps expose metrics via client libraries. This is different from push-based systems like StatsD." },
  { q: "RED method stands for?", opts: ["Reliability, Efficiency, Durability", "Rate, Errors, Duration", "Requests, Execution, Downtime", "Responses, Encoding, Data"], ans: 1, exp: "RED = Rate (requests/sec), Errors (error rate or count), Duration (latency percentiles like p50/p99). It's the golden signal framework for measuring service health. USE method is for infrastructure resources." }
])}`;

// ─── DISTRIBUTED SYSTEMS ─────────────────────────────────────────────────────
pages['distributed'] = () => `
<div class="page-header">
  <div class="breadcrumb">Distributed Systems</div>
  <h1 class="page-title">Distributed Systems Fundamentals</h1>
  <p class="page-subtitle">CAP/PACELC, consensus (Raft/Paxos), Kafka vs RabbitMQ, eventual consistency.</p>
  ${revisionControls('distributed')}
</div>

<div class="elon-box">
  <strong>⚡ Core truth:</strong> In distributed systems, partial failure is the norm, not the exception. Design for failure, not against it.
</div>

<h2 class="section-title">CAP & PACELC</h2>
<div class="callout callout-blue">
  <strong>CAP:</strong> In the presence of a network Partition, choose Consistency OR Availability — you can't have both.<br><br>
  <strong>PACELC:</strong> Extends CAP — even without partitions (Else), you still face a Latency vs Consistency tradeoff.
</div>
<table class="data-table">
  <tr><th>System</th><th>CAP</th><th>PACELC</th><th>Notes</th></tr>
  <tr><td>Cassandra</td><td>AP</td><td>PA/EL</td><td>Tunable consistency (ONE→QUORUM→ALL)</td></tr>
  <tr><td>DynamoDB</td><td>AP</td><td>PA/EL</td><td>Eventual default, strong reads optional</td></tr>
  <tr><td>HBase/BigTable</td><td>CP</td><td>PC/EC</td><td>Always consistent, higher latency</td></tr>
  <tr><td>MongoDB (default)</td><td>CP</td><td>PA/EC</td><td>Reads from primary = consistent</td></tr>
  <tr><td>ZooKeeper</td><td>CP</td><td>PC/EC</td><td>Used for leader election, config</td></tr>
  <tr><td>Couchbase</td><td>AP</td><td>PA/EL</td><td>Cross-datacenter conflict resolution</td></tr>
</table>

<h2 class="section-title">Consensus Algorithms</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Raft — the understandable consensus</div>
    <div class="accordion-body">
      <div class="callout callout-green">
        Raft's insight: Paxos is hard to understand and implement. Raft decomposes consensus into sub-problems: leader election, log replication, safety. Used by: etcd, CockroachDB, TiKV, Consul.
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:12px">
<pre style="color:var(--text)">Raft Roles:
  FOLLOWER   → receives log entries from Leader
  CANDIDATE  → running for Leader (election timeout fired)
  LEADER     → handles all client requests, replicates log

Election:
  1. Follower times out (no heartbeat) → becomes Candidate
  2. Votes for itself, sends RequestVote to others
  3. First to get majority (N/2 + 1) wins → becomes Leader
  4. Leader sends heartbeats to prevent new elections

Log Replication:
  1. Client → Leader (write request)
  2. Leader appends to log → sends AppendEntries to all Followers
  3. Once majority confirms → Leader commits → responds to client
  4. Followers commit on next heartbeat

Safety: A node only votes for a candidate with a log at least as up-to-date as its own.</pre>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Paxos — the original (complex)</div>
    <div class="accordion-body">
      <div class="code-block"><pre>Paxos phases:
  Phase 1 (Prepare/Promise):
    Proposer: "I want to propose, promise to ignore lower-numbered proposals?"
    Acceptor: "I promise not to accept proposals numbered &lt; N"
  
  Phase 2 (Accept/Accepted):
    Proposer: "Accept value V with proposal N"
    Acceptors: accept if N &gt;= highest promised
  
  Consensus: majority acceptors agree
  
Used by: Google Chubby, Spanner (Multi-Paxos), Zookeeper (ZAB - Paxos-like)</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Kafka vs RabbitMQ</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Kafka</th><th>RabbitMQ</th></tr>
  <tr><td>Model</td><td>Log-based (append-only, partitioned)</td><td>Queue-based (message deleted on ack)</td></tr>
  <tr><td>Retention</td><td>Configurable (days/forever)</td><td>Until consumed</td></tr>
  <tr><td>Consumers</td><td>Consumer Groups — read independently at own offset</td><td>Competing consumers — message goes to one</td></tr>
  <tr><td>Ordering</td><td>Per-partition guaranteed</td><td>Per-queue (with caveats)</td></tr>
  <tr><td>Throughput</td><td>Millions/sec (sequential disk I/O)</td><td>Tens of thousands/sec</td></tr>
  <tr><td>Replay</td><td>Yes — seek to any offset</td><td>No — once consumed, gone</td></tr>
  <tr><td>Best for</td><td>Event streaming, analytics, audit log, CDC</td><td>Task queues, RPC, pub-sub with routing</td></tr>
</table>

<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Kafka internals — why it's fast</div>
    <div class="accordion-body">
      <div class="code-block"><pre>Topic: ordered stream of events
  └── Partitions (parallelism unit)
        └── Segments (log files on disk)

Producer → hashes key → picks partition → appends to log
Consumer Group → each partition assigned to ONE consumer
  → add consumers up to partition count for linear scale-out

Why fast:
  1. Sequential disk writes (OS page cache)
  2. Zero-copy sendfile() syscall
  3. Batch compression (LZ4, Snappy, ZSTD)
  4. No random disk access

Exactly-once semantics (producers):
  props.put("enable.idempotence", "true");
  props.put("transactional.id", "my-txn-id");
  // Or use Kafka Streams transactions</pre></div>
    </div>
  </div>
</div>

<h2 class="section-title">Eventual Consistency Patterns</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Saga Pattern — distributed transactions</div>
    <div class="accordion-body">
      <div class="callout callout-amber">
        2PC (Two-Phase Commit) is slow and blocking. <strong>Sagas</strong> break a transaction into local steps with compensating transactions for rollback.
      </div>
      <div class="code-block"><pre>// Choreography Saga (event-driven)
OrderService: OrderPlaced →
PaymentService: PaymentProcessed (or PaymentFailed) →
InventoryService: InventoryReserved (or InventoryFailed) →
ShippingService: ShipmentScheduled

// On failure — compensating transactions run in reverse
InventoryFailed → PaymentService: RefundPayment → OrderService: CancelOrder

// Orchestration Saga (central coordinator)
SagaOrchestrator:
  1. call PaymentService.charge()    → on fail: end
  2. call InventoryService.reserve() → on fail: call PaymentService.refund()
  3. call ShippingService.schedule() → on fail: call Inventory.release() + Payment.refund()</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">CQRS & Event Sourcing</div>
    <div class="accordion-body">
      <div class="code-block"><pre>// CQRS: separate read and write models
WriteModel: optimized for commands (normalize, validate, persist)
ReadModel: optimized for queries (denormalize, project, cache)
// Sync via events or change data capture (CDC)

// Event Sourcing: store events, not state
// Instead of: UPDATE account SET balance = 900
// Store: AccountDebited{id: 1, amount: 100, timestamp: ...}
// Current state = replay all events
Events: [Opened{100}, Deposited{500}, Withdrawn{100}] → Balance = 500

// Benefits: full audit log, replay, time travel
// Downsides: eventual consistency, query complexity, event schema evolution</pre></div>
    </div>
  </div>
</div>

${quizHTML('distributed', [
  { q: "CAP theorem: in presence of partition, choose?", opts: ["Consistency + Availability", "Either Consistency OR Availability, not both", "Always Availability", "Always Consistency"], ans: 1, exp: "When a network partition occurs, you can't have both C and A. A CP system stops accepting writes to remain consistent (etcd, ZooKeeper). An AP system serves potentially stale data to stay available (Cassandra, DynamoDB)." },
  { q: "Why is Kafka much faster than traditional message queues?", opts: ["Uses in-memory storage only", "Sequential disk writes + zero-copy + batching + no per-message state", "Uses UDP instead of TCP", "Runs in the kernel space"], ans: 1, exp: "Kafka's speed comes from: 1) sequential disk I/O (OS page cache + disk sequential reads are fast), 2) zero-copy (sendfile syscall bypasses user space), 3) batching + compression, 4) no per-message state management." },
  { q: "What problem do Sagas solve?", opts: ["Load balancing across services", "Distributed transactions without 2PC — using local transactions + compensating actions", "Service discovery", "Rate limiting"], ans: 1, exp: "2PC (Two-Phase Commit) holds locks across services — it's slow and a single point of failure. Sagas break distributed transactions into local transactions per service, with compensating transactions for rollback. No cross-service locks." }
])}`;
