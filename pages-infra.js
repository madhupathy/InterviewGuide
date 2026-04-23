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
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:12px;padding:18px">
    <div style="font-weight:700;font-size:14px;color:#1e40af;margin-bottom:12px;text-align:center">🧠 CONTROL PLANE (Master)</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="background:#dbeafe;border:1px solid #3b82f6;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#1d4ed8">kube-apiserver</div>
        <div style="font-size:12px;color:#1e40af;margin-top:3px">Entry point for all requests. REST API. Validates &amp; persists to etcd. Only component that reads/writes etcd.</div>
      </div>
      <div style="background:#dbeafe;border:1px solid #3b82f6;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#1d4ed8">etcd</div>
        <div style="font-size:12px;color:#1e40af;margin-top:3px">Distributed KV store. Stores ALL cluster state. Source of truth. Always back this up.</div>
      </div>
      <div style="background:#dbeafe;border:1px solid #3b82f6;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#1d4ed8">kube-scheduler</div>
        <div style="font-size:12px;color:#1e40af;margin-top:3px">Picks the best node for new Pods. Considers: resources, affinity, taints/tolerations.</div>
      </div>
      <div style="background:#dbeafe;border:1px solid #3b82f6;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#1d4ed8">kube-controller-manager</div>
        <div style="font-size:12px;color:#1e40af;margin-top:3px">Runs control loops: Node, Replication, Endpoints, ServiceAccount controllers. Reconciles desired → actual state.</div>
      </div>
      <div style="background:#ede9fe;border:1px solid #8b5cf6;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#5b21b6">cloud-controller-manager</div>
        <div style="font-size:12px;color:#6d28d9;margin-top:3px">Cloud-specific: Load Balancers, storage volumes, routing (AWS / GCP / Azure).</div>
      </div>
    </div>
  </div>
  <div style="background:#f0fdf4;border:2px solid #059669;border-radius:12px;padding:18px">
    <div style="font-weight:700;font-size:14px;color:#065f46;margin-bottom:12px;text-align:center">⚙️ DATA PLANE (Worker Nodes)</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="background:#dcfce7;border:1px solid #16a34a;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#14532d">kubelet</div>
        <div style="font-size:12px;color:#166534;margin-top:3px">Node agent. Ensures containers in Pods are running &amp; healthy. Talks to container runtime (containerd).</div>
      </div>
      <div style="background:#dcfce7;border:1px solid #16a34a;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#14532d">kube-proxy</div>
        <div style="font-size:12px;color:#166534;margin-top:3px">Manages iptables/IPVS rules on each node. Implements Service → Pod routing (ClusterIP to Pod IP).</div>
      </div>
      <div style="background:#dcfce7;border:1px solid #16a34a;border-radius:8px;padding:10px">
        <div style="font-weight:700;font-size:13px;color:#14532d">Container Runtime (CRI)</div>
        <div style="font-size:12px;color:#166534;margin-top:3px">containerd or CRI-O. Actually starts and stops containers. kubelet talks to it via CRI API.</div>
      </div>
      <div style="background:#bbf7d0;border:1px solid #22c55e;border-radius:8px;padding:12px">
        <div style="font-weight:700;font-size:13px;color:#14532d;margin-bottom:8px">Pods (smallest deployable unit)</div>
        <div style="display:flex;gap:8px">
          <div style="flex:1;background:#86efac;border-radius:6px;padding:8px;text-align:center">
            <div style="font-size:11px;font-weight:700;color:#14532d">App Container</div>
            <div style="font-size:10px;color:#166534;margin-top:2px">Your code</div>
          </div>
          <div style="flex:1;background:#86efac;border-radius:6px;padding:8px;text-align:center">
            <div style="font-size:11px;font-weight:700;color:#14532d">Sidecar</div>
            <div style="font-size:10px;color:#166534;margin-top:2px">Logging / Proxy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
  { q: "What stores cluster state in Kubernetes?", opts: ["kube-apiserver", "etcd — distributed KV store, single source of truth", "kubelet", "Scheduler"], ans: 1, exp: "etcd is the brain of Kubernetes. All cluster state (pods, services, deployments, secrets) is stored in etcd. The API server is the only component that reads/writes etcd. Always back up etcd — losing it = losing the cluster." },
  { q: "Deployment vs StatefulSet — when to use each?", opts: ["StatefulSet has more replicas", "Deployment: stateless apps (any pod replaceable). StatefulSet: stateful (stable DNS names, stable storage, ordered ops)", "No difference", "StatefulSet can't scale"], ans: 1, exp: "Deployment: pods are interchangeable, random names, no stable storage. StatefulSet: pods have predictable names (pod-0, pod-1), stable DNS (pod-0.service.ns.svc.cluster.local), each gets its own PVC. Use for: Postgres, Kafka, Elasticsearch, Zookeeper." },
  { q: "What does kube-proxy do on each node?", opts: ["Proxies traffic from outside the cluster", "Manages iptables/IPVS rules implementing Service VIP → Pod IP routing", "Acts as ingress controller", "Manages container networking"], ans: 1, exp: "kube-proxy: runs on every node, watches Services and Endpoints, programs iptables (or IPVS) rules so traffic to ClusterIP:Port gets load-balanced to one of the healthy Pod IPs. Not an actual proxy in modern mode — just manages routing rules." },
  { q: "What is a Kubernetes Namespace?", opts: ["A DNS domain", "Virtual cluster within a cluster — provides isolation of resources, RBAC scope, and resource quotas", "A node group", "A container registry"], ans: 1, exp: "Namespaces partition cluster resources. Same name allowed in different namespaces. DNS: service.namespace.svc.cluster.local. Apply: RBAC permissions, ResourceQuotas, LimitRanges per namespace. Use namespaces for: team isolation, environment separation (dev/staging/prod)." },
  { q: "ConfigMap vs Secret — what's the security difference?", opts: ["No difference", "Secrets are base64-encoded and can be encrypted at rest in etcd; ConfigMaps are plain text", "Secrets encrypt automatically", "ConfigMaps support binary data"], ans: 1, exp: "ConfigMap: plain text key-value pairs for non-sensitive config. Secret: base64-encoded (NOT encrypted by default!). Enable encryption at rest with --encryption-provider-config in API server. Also: use external secret management (Vault, AWS Secrets Manager) for production." },
  { q: "What happens to pods when a Deployment is updated?", opts: ["All pods restart simultaneously", "Rolling update: new pods created gradually, old pods terminated — controlled by maxSurge and maxUnavailable", "Pods are deleted and recreated", "Nothing until manually triggered"], ans: 1, exp: "Rolling update (default): maxSurge=1 allows 1 extra pod during update; maxUnavailable=0 ensures no capacity loss. Recreate strategy: all old pods deleted first (downtime). Blue/Green: separate deployment, switch Service selector. Canary: small percentage to new version." },
  { q: "What is a DaemonSet used for?", opts: ["Running exactly one replica", "Running one pod on EVERY node — used for node-level agents like log collectors, monitoring, CNI plugins", "Running pods on schedule", "Managing StatefulSets"], ans: 1, exp: "DaemonSet ensures one pod runs on each node (or a subset). Automatically adds pods when nodes join, removes when nodes leave. Used for: fluentd (log collection), Prometheus node-exporter, datadog agent, Calico/Flannel CNI. Not suitable for application workloads." },
  { q: "How does Kubernetes service discovery work?", opts: ["Static IP configuration", "DNS: kube-dns/CoreDNS provides service-name.namespace.svc.cluster.local resolving to ClusterIP", "etcd lookup", "Manual /etc/hosts"], ans: 1, exp: "CoreDNS runs as a Deployment in kube-system. Every Pod's /etc/resolv.conf points to CoreDNS. Accessing 'my-service' resolves to my-service.default.svc.cluster.local → ClusterIP → kube-proxy routes to Pod. Cross-namespace: my-service.other-namespace.svc.cluster.local." },
  { q: "What causes Pending pod status?", opts: ["Application crash", "Unschedulable: insufficient CPU/memory on nodes, node selector mismatch, PVC not bound, or taint not tolerated", "Image not found", "Container starting"], ans: 1, exp: "Pending = scheduler can't find a suitable node. Causes: 1) Insufficient CPU/memory (requests too high), 2) NodeSelector/Affinity not matching any node, 3) PVC pending (no matching PV/StorageClass), 4) Node has taint not tolerated by pod. kubectl describe pod shows Events with reason." }
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
  { q: "CrashLoopBackOff with exit code 137 — what happened?", opts: ["App error in code", "OOMKilled — container exceeded memory limit and was killed by Linux kernel", "Image not found", "Liveness probe failed"], ans: 1, exp: "Exit code 137 = 128 + SIGKILL(9). The kernel killed the container because it exceeded its memory limit (OOMKilled). Solution: 1) Increase memory limit, 2) Find memory leak (take heap dump before OOM), 3) Use VPA to right-size automatically." },
  { q: "Service returns 'connection refused' — first diagnostic step?", opts: ["Restart all pods", "kubectl get endpoints <service> — if empty, selector doesn't match pod labels", "Check DNS", "Restart kube-proxy"], ans: 1, exp: "Empty endpoints is the #1 cause. Service selector must match pod labels exactly (case-sensitive). Compare: kubectl get svc -o yaml (spec.selector) vs kubectl get pods --show-labels. Also check: are pods Running and Ready? Is targetPort matching container port?" },
  { q: "ImagePullBackOff — what to check first?", opts: ["Node disk space", "Image name/tag exists in registry, imagePullSecrets configured for private registries, registry reachable from node", "Network policies", "Resource limits"], ans: 1, exp: "Steps: 1) Verify image name and tag exist (typo is most common), 2) For private registry: create docker-registry Secret and add imagePullSecrets to Pod spec or ServiceAccount, 3) Check node network connectivity to registry, 4) kubectl describe pod → Events show exact error." },
  { q: "Pod is Running but application returns 503 — likely cause?", opts: ["Pod crashed", "Readiness probe failing — pod is running but not ready, removed from Service endpoints", "Service misconfiguration", "DNS issue"], ans: 1, exp: "503 from Service = no Ready endpoints. Pod Running ≠ Ready. Readiness probe failure removes pod from Service. Check: kubectl describe pod → 'Readiness probe failed'. Common: app still initializing, dependent service not ready, health check URL wrong in probe config." },
  { q: "kubectl logs shows 'OOMKilled' — how to prevent recurrence?", opts: ["Reduce the application", "Set appropriate memory requests/limits, use VPA, analyze heap dumps to find leak", "Disable memory limits", "Use more nodes"], ans: 1, exp: "Fix OOMKilled: 1) Increase limits.memory if app legitimately needs more, 2) Investigate memory leak (heap dump with jmap, memory profiler), 3) Use VPA (VerticalPodAutoscaler) to auto-tune requests/limits, 4) Set JVM -Xmx below container limit (leave 20-30% headroom for JVM overhead)." },
  { q: "Node shows 'NotReady' — what do you check?", opts: ["Pod logs", "kubectl describe node: Conditions (DiskPressure, MemoryPressure, PIDPressure), kubelet status, network plugin health", "Service endpoints", "etcd logs"], ans: 1, exp: "kubectl describe node → Conditions section. Common causes: 1) kubelet not running (systemctl status kubelet), 2) DiskPressure (clean up logs/images: docker system prune), 3) Network plugin (CNI pod crashed in kube-system), 4) Clock skew (kubelet cert expired)." },
  { q: "How to debug a pod that crashes before you can exec into it?", opts: ["You can't", "kubectl logs <pod> --previous for last container's logs; use initContainer for debugging; override command with sleep infinity", "Delete and recreate", "Use kubectl attach"], ans: 1, exp: "Strategies: 1) kubectl logs --previous: logs from CRASHED container. 2) Override command: kubectl run debug --image=same-image -- sleep 3600 then exec in. 3) kubectl debug (ephemeral container). 4) Copy pod spec, add command:['sleep','3600'] to override entrypoint." },
  { q: "Horizontal Pod Autoscaler not scaling — what to check?", opts: ["Node count", "metrics-server installed and running, resource requests set on pods (HPA needs requests to calculate utilization %)", "Service type", "Storage class"], ans: 1, exp: "HPA requirements: 1) metrics-server must be running (kubectl top pods must work), 2) Pods must have resource requests set (HPA calculates utilization% = actual/request), 3) HPA targetCPUUtilizationPercentage threshold actually being reached. kubectl describe hpa shows current metrics." },
  { q: "What does kubectl rollout undo deployment/<name> do?", opts: ["Deletes the deployment", "Rolls back to the previous ReplicaSet (previous deployment revision)", "Restarts all pods", "Scales to zero"], ans: 1, exp: "Kubernetes keeps revision history (default: 10 revisions). rollout undo goes back to previous revision. rollout undo --to-revision=3 for specific version. Check history: kubectl rollout history deployment/my-app. Each rollout creates a new ReplicaSet — undo just shifts the active one." }
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
  { q: "What is a Kubernetes Operator?", opts: ["A Helm chart", "CRD + Controller that codifies operational knowledge — watches CR events and reconciles actual to desired state", "A K8s admin role", "A cloud provider plugin"], ans: 1, exp: "Operator pattern: 1) CRD defines new resource type (e.g., PostgresCluster), 2) Controller watches for CR creates/updates/deletes, 3) Controller reconciles: creates StatefulSets, Services, sets up replication. Encodes operational expertise: auto-failover, backup, scaling." },
  { q: "Istio sidecar injection — how does it work?", opts: ["Manual container addition", "MutatingWebhookConfiguration intercepts Pod creation, automatically injects Envoy sidecar container", "DaemonSet on each node", "Custom kubelet plugin"], ans: 1, exp: "Istio's mutating admission webhook: when pod is created in a labeled namespace (istio-injection=enabled), Kubernetes API calls Istio's webhook before creating pod. Webhook adds envoy sidecar + init container (sets iptables rules to intercept all traffic). Transparent to app." },
  { q: "What is the purpose of Helm in Kubernetes?", opts: ["Container runtime", "Package manager — bundles K8s manifests as Charts with templating, versioning, and lifecycle management (install/upgrade/rollback)", "Service mesh", "Monitoring tool"], ans: 1, exp: "Helm: K8s package manager. Chart = collection of K8s templates + values.yaml. helm install: renders templates with values, applies to cluster. helm upgrade --atomic: apply + rollback on failure. Repository: share reusable charts (Bitnami, official). 3-way merge for upgrades." },
  { q: "PodDisruptionBudget (PDB) prevents?", opts: ["Pod resource overuse", "Too many pods being voluntarily disrupted simultaneously during node drains or rolling updates", "Horizontal scaling", "Involuntary disruptions (node crash)"], ans: 1, exp: "PDB: minAvailable=2 means at least 2 pods must be available during disruptions. kubectl drain respects PDB — will wait if draining would violate it. Critical for HA: ensures rolling updates and node maintenance don't take down more than allowed fraction of your service." },
  { q: "Resource Requests vs Limits — what happens when a container exceeds CPU limit?", opts: ["Container is killed", "CPU is throttled (container gets less CPU time), not killed — unlike memory", "Pod is evicted", "Nothing — limits are suggestions"], ans: 1, exp: "CPU limit: container gets throttled (CFS bandwidth control) — runs slower but not killed. Memory limit: container is OOMKilled if it exceeds. This is why memory leaks are more dangerous than CPU spikes. Always set requests (scheduler uses for placement) and limits (cgroup enforcement)." },
  { q: "What is RBAC in Kubernetes?", opts: ["Network policy", "Role-Based Access Control — ServiceAccounts + Roles/ClusterRoles + RoleBindings control what can access what in the cluster", "Container security context", "Image scanning"], ans: 1, exp: "RBAC: ServiceAccount → RoleBinding → Role (namespace-scoped) or ClusterRoleBinding → ClusterRole (cluster-wide). Role defines: verbs (get, list, create, delete) on resources (pods, secrets, deployments). Principle of least privilege: give pods only permissions they need." },
  { q: "What triggers a Horizontal Pod Autoscaler to scale up?", opts: ["Time of day", "Current metric (CPU/memory/custom) exceeds target threshold — HPA calculates desired replicas = current × (current/target)", "Node addition", "Manual trigger only"], ans: 1, exp: "HPA formula: desiredReplicas = ceil(currentReplicas × (currentMetricValue / desiredMetricValue)). If 2 pods at 90% CPU, target=50%: desiredReplicas = ceil(2 × 90/50) = ceil(3.6) = 4 pods. Requires metrics-server (CPU/memory) or custom metrics adapter (Prometheus adapter for business metrics)." },
  { q: "What is a Kubernetes InitContainer?", opts: ["A lightweight main container", "Container that runs to completion before app containers start — used for setup, waiting for dependencies, config generation", "A sidecar that runs forever", "A container with reduced permissions"], ans: 1, exp: "InitContainers run sequentially before main containers. Uses: 1) Wait for DB to be ready (init: check DB connection loop), 2) Download config from vault, 3) Run database migrations, 4) Set file permissions. If init container fails, pod restarts. Main containers only start when all inits succeed." },
  { q: "Network Policy in Kubernetes — default behaviour without any policy?", opts: ["All traffic blocked", "All traffic allowed — pods can communicate with all other pods by default", "Only same-namespace allowed", "Only Service traffic allowed"], ans: 1, exp: "Default K8s: no NetworkPolicy = all pods can talk to all pods (flat network). Add a NetworkPolicy → only matching traffic allowed. Implement zero-trust: deny all by default, then allow specific ingress/egress per namespace/pod selector. Requires CNI support (Calico, Cilium, Weave)." }
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
  { q: "Three pillars of observability?", opts: ["CPU Memory Network", "Logs for what happened, Metrics for aggregated numbers, Traces for request journey across services", "Availability Performance Security", "Latency Throughput Errors"], ans: 1, exp: "Logs: timestamped events showing what happened and why. Metrics: numeric aggregates over time such as QPS error rate and CPU percent. Traces: distributed request journey showing which service added latency. All three are needed for complete debugging of distributed systems." },
  { q: "Prometheus pull model advantage?", opts: ["Push is always better", "Prometheus controls scrape interval and detects down services immediately since scrape fails; services need no push config", "No real difference", "Push reduces latency"], ans: 1, exp: "Pull advantages: if a service is down Prometheus knows immediately because the scrape fails and can trigger an alert. Scrape interval is controlled centrally. Services just expose a /metrics endpoint with no push destination configuration needed. Use Pushgateway for batch jobs." },
  { q: "What is a distributed trace span?", opts: ["A metric data point", "A single timed operation within a trace having traceID spanID parentSpanID start and end time and attributes", "A log line", "A Prometheus counter"], ans: 1, exp: "A trace is a tree of spans. Each span represents one operation such as an HTTP call DB query or cache lookup. All spans in a request share the same traceID and are linked by parentSpanID. Together they show the full journey of one request across all services with timing of each step." },
  { q: "PromQL rate() vs irate() when to use each?", opts: ["They are identical", "rate gives smoothed average over full window best for alerts. irate gives instant rate from last 2 points better for seeing spikes", "irate is deprecated", "rate is only for gauges"], ans: 1, exp: "rate(requests[5m]) gives the per-second average over 5 minutes which is smooth and good for alerting since it avoids false triggers from brief spikes. irate() uses only the last 2 data points so it is very sensitive and shows spikes but is noisy. Use rate for alerts and irate for investigation dashboards." },
  { q: "RED method stands for?", opts: ["Reliability Efficiency Durability", "Rate requests per second, Errors error rate, Duration latency percentiles p50 p95 p99", "Requests Execution Downtime", "Response Encoding Data"], ans: 1, exp: "RED is the golden signals framework for measuring service health. Rate: how many requests per second. Errors: what fraction fail. Duration: how long they take measured as p50 p95 and p99. The USE method covers infrastructure resources as Utilization Saturation and Errors. A dashboard with RED covers 90 percent of service incidents." },
  { q: "Structured logging main advantage?", opts: ["Faster to write", "Machine-parseable JSON enables filtering and alerting by specific fields like userId or traceId", "Plain text uses less space", "No practical difference"], ans: 1, exp: "Plain text logs can only be grepped. Structured JSON in Loki and Elasticsearch lets you filter by any field instantly. The key technique is including traceId in every log line so you can correlate log events with distributed traces in Jaeger. This ability to jump between logs and traces is the most powerful debugging approach available." },
  { q: "OpenTelemetry relationship to Prometheus and Jaeger?", opts: ["They compete directly", "OTel is vendor-neutral instrumentation standard and Prometheus with Jaeger are backends receiving OTel data via OTLP", "OTel fully replaces both", "No relationship"], ans: 1, exp: "OpenTelemetry provides a standardised SDK plus collector plus the OTLP wire protocol. Instrument your code once then export to any backend. The OTel Collector fans out to Prometheus for metrics, Jaeger or Tempo for traces, and Loki or Elasticsearch for logs. This separates instrumentation from backend choice eliminating vendor lock-in." },
  { q: "SLI vs SLO vs SLA differences?", opts: ["All the same", "SLI is the actual measurement. SLO is the internal target like 99.9 percent. SLA is the contractual commitment with penalties", "SLA is only internal", "SLO is the measurement"], ans: 1, exp: "SLI indicator: the actual measurement such as percent of requests completing under 200ms. SLO objective: the internal target you set such as 99.9 percent. SLA agreement: the external contract with customers that carries financial penalties if breached. Always set your SLO tighter than your SLA to maintain an error budget buffer." },
  { q: "Error budget practical usage?", opts: ["A financial budget for bug fixes", "The allowed failure quota: spend on risky deployments and freeze changes when exhausted to focus on reliability", "Maximum errors per day", "A cloud cost budget"], ans: 1, exp: "With SLO of 99.9 percent the error budget is 0.1 percent of requests allowed to fail which equals about 43 minutes of downtime per month. Fast teams burn this budget with risky deployments. When the budget runs out the team declares a deployment freeze and focuses on reliability improvements making reliability a shared product and engineering responsibility." }
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
  { q: "CAP: in presence of partition, what can't you have both of?", opts: ["Consistency + Availability", "Consistency + Availability — you must choose one", "Availability + Partition tolerance", "Consistency + Partition tolerance"], ans: 1, exp: "Network partitions always happen (hardware fails, cables cut). CAP: choose CP (refuse requests to stay consistent — etcd, ZooKeeper) or AP (serve stale data to stay available — Cassandra, DynamoDB). CA systems only work on single machines (no partition tolerance possible in distributed systems)." },
  { q: "PACELC extends CAP — what does the ELC part mean?", opts: ["Error-Latency-Correctness", "Else: even without partition, trade-off between Latency and Consistency exists", "External Load Control", "Eventually Linked Clusters"], ans: 1, exp: "PACELC: if Partition → choose A or C. Else (no partition) → choose L (low latency) or C (consistency). Example: DynamoDB default = EL (fast reads, eventual consistency). With strongly consistent reads = EC (higher latency, consistent). Captures real-world tradeoffs better than CAP." },
  { q: "Why is Kafka much faster than traditional message queues?", opts: ["Uses in-memory storage only", "Sequential disk writes + OS page cache + zero-copy sendfile + batch compression", "Uses UDP", "Single-threaded design"], ans: 1, exp: "1) Sequential writes to disk (OS page cache makes this near-RAM speed), 2) sendfile() zero-copy syscall (data goes disk→network without user-space copy), 3) Producer batching + compression (LZ4/Snappy/ZSTD), 4) No per-message state — just an offset. RabbitMQ maintains per-message ACK state." },
  { q: "Saga pattern vs 2PC — why use Saga?", opts: ["Saga is more consistent", "2PC holds distributed locks during protocol — slow, blocking, single point of failure. Saga: local transactions + compensating actions, no cross-service locks", "2PC is deprecated", "Saga is faster for small transactions"], ans: 1, exp: "2PC: Phase 1 prepare (all participants lock resources and vote), Phase 2 commit/abort. Problem: coordinator failure during phase 2 = resources locked indefinitely. Saga: each step local transaction, failure triggers compensating transactions in reverse. No locks, more available." },
  { q: "Raft consensus — when is a write committed?", opts: ["When leader writes it", "When majority of nodes (N/2 + 1) have written the log entry to their local logs", "When all nodes acknowledge", "When leader sends heartbeat"], ans: 1, exp: "Raft write: client → leader appends to log → sends AppendEntries to all followers → once majority (N/2+1) confirm → leader commits → responds to client → followers commit on next heartbeat. Majority quorum ensures durability even if minority of nodes fail." },
  { q: "Eventual consistency — what does it guarantee?", opts: ["Nothing", "Given no new writes, all replicas will eventually converge to the same value", "Strong ordering of all operations", "Reads always see latest write"], ans: 1, exp: "Eventual consistency: replicas may temporarily diverge (read stale data), but if you stop writing, all replicas will eventually agree. Does NOT guarantee: when convergence happens, ordering of concurrent writes. Cassandra, DynamoDB, DNS — all eventually consistent by default." },
  { q: "Consistent hashing — what problem does it solve?", opts: ["Load balancing", "When adding/removing cache/DB nodes: only ~1/N keys rehash (vs all keys with naive hash % N)", "Data encryption", "Replication ordering"], ans: 1, exp: "Naive sharding (key % N): adding 1 node changes N, almost all keys hash to different node = cache miss storm. Consistent hashing: keys and nodes on a ring. Adding a node: only keys between it and its predecessor change. Used by Cassandra, DynamoDB, CDNs, Memcached." },
  { q: "What is idempotency key and why is it essential for payments?", opts: ["An encryption key", "A unique request ID — allows safely retrying failed requests; server detects duplicate and returns cached result", "A hash of the payment amount", "A session token"], ans: 1, exp: "Payment timeout: did it succeed or not? Retry without idempotency = double charge. Idempotency key: client generates UUID, sends with request. Server: if key seen before, return cached result. If not, process and store result with key. Stripe, PayPal all require idempotency keys for payments." },
  { q: "Leader election — what guarantees does ZooKeeper provide?", opts: ["Eventual consistency", "Strong consistency via ZAB protocol (Zookeeper Atomic Broadcast) — linearizable reads from leader, sequential consistency", "No consistency guarantees", "Only availability"], ans: 1, exp: "ZooKeeper uses ZAB (Paxos-like). Writes: always go through leader, applied in total order. Reads from leader: linearizable (see all committed writes). Ephemeral znodes: auto-deleted when client session ends — used for leader election (first to create wins, others watch for deletion)." }
])}`;

pages['k8s-gpu'] = () => `
<div class="page-header">
  <div class="breadcrumb">Infrastructure → Kubernetes</div>
  <h1 class="page-title">GPU Operator & Multi-Node AI Clusters</h1>
  <p class="page-subtitle">NVIDIA GPU Operator, KubeRay, vLLM — running LLMs at production scale on Kubernetes.</p>
  ${revisionControls('k8s-gpu')}
</div>

<div class="elon-box">
  <strong>⚡ Real-world context:</strong> Meta Llama 4 Maverick (~749 GB model) runs across 16 NVIDIA H200 GPUs spanning 2 servers, managed by Kubernetes + KubeRay, with ~376 Gbit/s RDMA interconnect. This is how modern AI inference works at scale.
</div>

<h2 class="section-title">NVIDIA GPU Operator</h2>
<div class="callout callout-blue">
  The GPU Operator automates deployment and management of all NVIDIA software needed to run GPU workloads in Kubernetes. Without it, you'd manually install drivers, toolkits, and plugins on every node.
</div>
<table class="data-table">
  <tr><th>Component</th><th>What It Does</th></tr>
  <tr><td><strong>Device Plugin</strong></td><td>Exposes GPUs as schedulable K8s resources (<code>nvidia.com/gpu: 8</code>) — scheduler can assign GPUs to pods</td></tr>
  <tr><td><strong>Container Toolkit</strong></td><td>Lets containers access host NVIDIA drivers/CUDA without bundling them in every image</td></tr>
  <tr><td><strong>GPU Feature Discovery</strong></td><td>Auto-labels nodes with GPU metadata (product, driver version, CUDA capability) for intelligent scheduling</td></tr>
  <tr><td><strong>DCGM Exporter</strong></td><td>Exports GPU telemetry (temp, utilization, memory, power, ECC errors) as Prometheus metrics</td></tr>
</table>
<div class="code-block"><pre><span class="cm"># Pod requesting specific GPU resources</span>
resources:
  limits:
    nvidia.com/gpu: <span class="num">8</span>      <span class="cm"># 8 GPUs requested</span>

<span class="cm"># Node selector for specific GPU type</span>
nodeSelector:
  nvidia.com/gpu.product: H200-NVL

<span class="cm"># GPU Operator config — use host-installed driver</span>
driver:
  enabled: false          <span class="cm"># operator skips driver install</span></pre></div>

<h2 class="section-title">Multi-Node Architecture</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="background:#eef2ff;border:2px solid #2563eb;border-radius:10px;padding:16px">
    <div style="font-weight:700;font-size:14px;color:#1e40af;margin-bottom:10px">XE7740 (Node 1) — Pipeline Stage 1</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
      ${['GPU0','GPU1','GPU2','GPU3','GPU4','GPU5','GPU6','GPU7'].map(g=>`<span style="background:#dbeafe;border:1px solid #3b82f6;border-radius:4px;padding:3px 8px;font-size:12px;font-weight:600;color:#1d4ed8">${g}</span>`).join('')}
    </div>
    <div style="font-size:13px;color:#374151;line-height:1.8">
      8× H200 NVL (141 GB each)<br>
      Model Layers 1-48<br>
      Tensor Parallel = 8 (within node)<br>
      Ray Head + vLLM API Server
    </div>
  </div>
  <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:10px;padding:16px">
    <div style="font-weight:700;font-size:14px;color:#065f46;margin-bottom:10px">XE7745 (Node 2) — Pipeline Stage 2</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
      ${['GPU0','GPU1','GPU2','GPU3','GPU4','GPU5','GPU6','GPU7'].map(g=>`<span style="background:#dcfce7;border:1px solid #16a34a;border-radius:4px;padding:3px 8px;font-size:12px;font-weight:600;color:#14532d">${g}</span>`).join('')}
    </div>
    <div style="font-size:13px;color:#374151;line-height:1.8">
      8× H200 NVL (141 GB each)<br>
      Model Layers 49-96<br>
      Tensor Parallel = 8 (within node)<br>
      Ray Worker
    </div>
  </div>
</div>
<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;font-size:13px;color:var(--muted)">
  ↕ RoCE/RDMA inter-node ~376 Gbit/s | GPU-to-GPU bypasses CPU entirely
</div>

<h2 class="section-title">Parallelism Strategies</h2>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Tensor Parallelism (TP) — within one node <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="callout callout-blue">
        Each GPU holds a <strong>vertical slice</strong> of every layer's weight matrix. All 8 GPUs compute their slice in parallel → NCCL AllReduce combines results. Requires ultra-low latency (microseconds) — only practical within one server via PCIe P2P.
      </div>
      <div class="code-block"><pre>Layer weight matrix: 16384 x 16384
With TP=8: each GPU holds 16384 x 2048 slice
All 8 GPUs compute in parallel → AllReduce → final output</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">Pipeline Parallelism (PP) — across nodes <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div class="callout callout-green">
        Model layers split <strong>sequentially</strong> across nodes. Node 1 processes layers 1-48, passes activations to Node 2 for layers 49-96. Tolerates higher latency than TP — only one inter-node transfer per pipeline stage per token.
      </div>
      <div class="code-block"><pre>Request flow per token:
1. Input → XE7740 (layers 1-48) → intermediate activations
2. Activations sent via RoCE/GDRDMA → XE7745 (layers 49-96)
3. Output logits → back to XE7740 → emit token → next iteration</pre></div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">NCCL — GPU communication library <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <table class="data-table">
        <tr><th>Scenario</th><th>Transport</th><th>Speed</th></tr>
        <tr><td>GPUs on same server</td><td>P2P/IPC (PCIe direct) or SHM</td><td>Microseconds</td></tr>
        <tr><td>GPUs on different servers</td><td>NET/IB/GDRDMA (RoCE — GPU-to-GPU bypassing CPU)</td><td>~376 Gbit/s</td></tr>
        <tr><td>Initial process group setup</td><td>Gloo over TCP (management network)</td><td>One-time handshake only</td></tr>
      </table>
    </div>
  </div>
</div>

<h2 class="section-title">KubeRay — Kubernetes Operator for Ray</h2>
<div class="callout callout-amber">
  KubeRay manages the lifecycle of Ray clusters on Kubernetes. When a Ray worker pod crashes, KubeRay automatically recreates and reconnects it. The entire Ray cluster is defined in a single <code>RayCluster</code> YAML manifest.
</div>
<div class="code-block"><pre><span class="cm"># RayCluster custom resource — deploys head + worker pods</span>
apiVersion: ray.io/v1
kind: RayCluster
spec:
  headGroupSpec:
    template:
      spec:
        nodeSelector: {kubernetes.io/hostname: xe7740}  <span class="cm"># pin to Node 1</span>
        resources:
          limits: {nvidia.com/gpu: "8"}
  workerGroupSpecs:
  - replicas: 1
    template:
      spec:
        nodeSelector: {kubernetes.io/hostname: xe7745}  <span class="cm"># pin to Node 2</span>
        resources:
          limits: {nvidia.com/gpu: "8"}</pre></div>

<h2 class="section-title">vLLM — High Performance Inference Engine</h2>
<table class="data-table">
  <tr><th>Feature</th><th>What It Does</th></tr>
  <tr><td><strong>PagedAttention</strong></td><td>Manages KV cache like OS virtual memory — eliminates memory fragmentation, maximizes concurrent users</td></tr>
  <tr><td><strong>Continuous batching</strong></td><td>Dynamically batches requests to maximise GPU utilisation vs idle waiting</td></tr>
  <tr><td><strong>OpenAI-compatible API</strong></td><td>Exposes /v1/chat/completions — any OpenAI SDK works out of the box</td></tr>
  <tr><td><strong>Distributed inference</strong></td><td>Tensor + Pipeline parallelism via Ray across multiple GPUs and nodes</td></tr>
</table>

<div class="callout callout-green">
  <strong>KV cache sizing matters for concurrency:</strong>
  <table class="data-table" style="margin-top:8px">
    <tr><th>Config</th><th>Model per GPU</th><th>Free for KV Cache</th><th>Concurrent users (64K ctx)</th></tr>
    <tr><td>8 GPUs (1 node)</td><td>~93.7 GB</td><td>~32 GB</td><td>~25×</td></tr>
    <tr><td>16 GPUs (2 nodes)</td><td>~46.9 GB</td><td>~73 GB</td><td><strong>~98×</strong></td></tr>
  </table>
</div>


<h2 class="section-title">Device Plugin Framework</h2>
<div class="callout callout-blue">
  Device Plugins are how Kubernetes discovers and manages hardware devices (GPUs, FPGAs, NICs). The Device Plugin API is the standard mechanism — it predates CDI and DRA, and remains the most widely deployed.
</div>
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header" onclick="toggleAccordion(this)">How Device Plugins work <span class="accordion-arrow">▼</span></div>
    <div class="accordion-body">
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;font-family:'DM Mono',monospace;font-size:13px;line-height:2.2;margin-bottom:12px">
        1. Plugin registers with kubelet via gRPC socket<br>
        2. Plugin reports available devices (e.g., 8 GPUs)<br>
        3. kubelet advertises devices to API server as Extended Resources<br>
        4. Scheduler places pod on node with available devices<br>
        5. kubelet calls plugin's Allocate() → plugin returns device mounts, env vars<br>
        6. Container starts with device access
      </div>
      <div class="code-block"><pre><span class="cm"># Pod requesting GPU via device plugin</span>
resources:
  limits:
    nvidia.com/gpu: <span class="num">2</span>   <span class="cm"># device plugin exposes this as Extended Resource</span>

<span class="cm"># Plugin registers at: /var/lib/kubelet/device-plugins/nvidia.sock</span>
<span class="cm"># Implements: ListAndWatch(), Allocate(), GetDevicePluginOptions()</span></pre></div>
      <div class="callout callout-amber">
        <strong>Limitations:</strong> Device plugins are binary — a pod gets N devices or none. No fine-grained parameters (can't request "GPU with 10GB VRAM"). No device sharing between pods. These limitations led to CDI and DRA.
      </div>
    </div>
  </div>
</div>

<h2 class="section-title">CDI — Container Device Interface</h2>
<table class="data-table">
  <tr><th>Aspect</th><th>Details</th></tr>
  <tr><td><strong>What</strong></td><td>Standard JSON spec describing how to inject devices into containers — vendor-neutral, no custom runtime hooks</td></tr>
  <tr><td><strong>How</strong></td><td>CDI spec file lists device nodes, mounts, env vars. Container runtime reads spec and injects everything.</td></tr>
  <tr><td><strong>Before CDI</strong></td><td>Each runtime (Docker, containerd, CRI-O) needed vendor-specific hooks to inject GPU drivers</td></tr>
  <tr><td><strong>After CDI</strong></td><td>One JSON spec works across all OCI-compliant runtimes</td></tr>
  <tr><td><strong>Used by</strong></td><td>NVIDIA Container Toolkit (generates CDI specs), Intel, AMD GPU plugins</td></tr>
</table>
<div class="code-block"><pre><span class="cm"># CDI spec example: /etc/cdi/nvidia.yaml</span>
cdiVersion: <span class="str">"0.5.0"</span>
kind: <span class="str">"nvidia.com/gpu"</span>
devices:
  - name: <span class="str">"0"</span>
    containerEdits:
      deviceNodes:
        - path: /dev/nvidia0     <span class="cm"># device node to mount</span>
      mounts:
        - hostPath: /usr/lib/x86_64-linux-gnu/libnvidia-ml.so
          containerPath: /usr/lib/x86_64-linux-gnu/libnvidia-ml.so
      env:
        - NVIDIA_VISIBLE_DEVICES=0</pre></div>

<h2 class="section-title">DRA — Dynamic Resource Allocation (K8s 1.26+)</h2>
<div class="callout callout-green">
  DRA replaces the device plugin model with a richer API. Key improvements: resources can have <strong>parameters</strong> (request specific GPU model), resources can be <strong>shared</strong> between pods, and allocation is <strong>claim-based</strong> (like PVCs for devices).
</div>
<table class="data-table">
  <tr><th>Feature</th><th>Device Plugin (old)</th><th>DRA (new)</th></tr>
  <tr><td><strong>Resource model</strong></td><td>Simple counter (give me N GPUs)</td><td>Structured — parameters, attributes, constraints</td></tr>
  <tr><td><strong>Sharing</strong></td><td>Exclusive only</td><td>Shared or exclusive per claim</td></tr>
  <tr><td><strong>Partitioning</strong></td><td>Not supported</td><td>MIG partitions, time-slicing via parameters</td></tr>
  <tr><td><strong>Selection</strong></td><td>Any available device</td><td>Specific device by model, memory, capability</td></tr>
  <tr><td><strong>API pattern</strong></td><td>Extended Resources</td><td>ResourceClaim + ResourceClass (like PVC/StorageClass)</td></tr>
</table>
<div class="code-block"><pre><span class="cm"># DRA: ResourceClaim — like a PVC but for devices</span>
apiVersion: resource.k8s.io/v1alpha3
kind: ResourceClaim
metadata: {name: my-gpu-claim}
spec:
  devices:
    requests:
    - name: gpu
      deviceClassName: gpu.nvidia.com
      selectors:
      - cel:
          expression: <span class="str">"device.attributes['gpu-product'] == 'H100'"</span>

<span class="cm"># Pod references the claim</span>
spec:
  resourceClaims:
  - name: my-gpu
    source: {resourceClaimName: my-gpu-claim}
  containers:
  - name: app
    resources:
      claims:
      - name: my-gpu</pre></div>
<div class="callout callout-amber">
  <strong>DRA status:</strong> Beta in K8s 1.31+. Production clusters still mostly use Device Plugins. DRA is the future — designed for advanced GPU partitioning (MIG), FPGA allocation, and network device sharing. NVIDIA GPU Operator is adding DRA support alongside existing device plugin.
</div>

${quizHTML('k8s-gpu', [
  { q: "What does the NVIDIA Device Plugin do in Kubernetes?", opts: ["Installs GPU drivers", "Exposes GPUs as schedulable K8s resources (nvidia.com/gpu: 8) so the scheduler can assign GPUs to pods", "Monitors GPU temperature", "Enables CUDA in containers"], ans: 1, exp: "Without the device plugin, Kubernetes doesn't know GPUs exist. The plugin registers each GPU as a resource, enables pods to request specific GPU counts via resource limits, and manages GPU allocation to prevent double-booking." },
  { q: "Tensor Parallelism vs Pipeline Parallelism — key difference?", opts: ["TP is faster always", "TP splits each layer vertically across GPUs within a node (microsecond comms). PP splits layers sequentially across nodes (tolerates ms latency)", "PP is only for CPUs", "No difference"], ans: 1, exp: "TP: GPU 0 and GPU 1 each compute half of every layer simultaneously — requires synchronization after every layer (high frequency, must be fast, PCIe/NVLink). PP: GPU 0 does layers 1-48, GPU 1 does 49-96 — only one transfer per stage per token (tolerates network latency)." },
  { q: "Why use 16 GPUs instead of 8 for a single large model?", opts: ["16 GPUs = 2x faster always", "Each GPU holds less model weight, freeing more GPU memory for KV cache → 4x more concurrent users", "16 GPUs cheaper than 8", "Required by Kubernetes"], ans: 1, exp: "With 8 GPUs: 93.7 GB model per GPU, only 32 GB for KV cache (~25 concurrent users at 64K context). With 16 GPUs: 46.9 GB model per GPU, 73 GB for KV cache (~98 concurrent users). Nearly 4x concurrency improvement by spreading model across more GPUs." }
,
  { q: "What is CUDA and why does it matter for ML workloads?", opts: ["A database format", "NVIDIA's parallel computing platform — GPU cores execute thousands of threads simultaneously, ideal for matrix math in deep learning", "A container runtime", "A network protocol"], ans: 1, exp: "CUDA (Compute Unified Device Architecture): NVIDIA's programming model for GPU acceleration. A GPU has thousands of cores (H100: 16,896 CUDA cores) vs CPU's ~64. Matrix multiplication (core of neural net forward/backward pass) maps perfectly to SIMD GPU parallelism. cuDNN and cuBLAS are optimised CUDA libraries used by PyTorch/TensorFlow." },
  { q: "What is CDI (Container Device Interface)?", opts: ["A container image format", "A standard for container runtimes to access devices (GPUs) — replaces vendor-specific hooks with a common spec", "A K8s storage driver", "A CPU affinity tool"], ans: 1, exp: "CDI: Container Device Interface standard (co-developed by NVIDIA). Before CDI, each container runtime needed custom hooks to inject GPU drivers. CDI defines a standard JSON spec describing all files/devices/envvars needed for a device. Container runtime reads CDI spec and injects device without vendor-specific code." },
  { q: "What is DRA (Dynamic Resource Allocation) in Kubernetes?", opts: ["A disk management system", "A K8s 1.26+ API replacing device plugin model — allows fine-grained resource requests with parameters and structured sharing", "A dynamic autoscaling algorithm", "A DNS resolution approach"], ans: 1, exp: "DRA (Dynamic Resource Allocation): replaces device plugin model. Key improvements: 1) Resources can have parameters (request specific GPU model), 2) Resources can be shared between pods (not just exclusive), 3) Vendor drivers (ResourceClaim drivers) handle allocation. Enables advanced GPU partitioning like MIG (Multi-Instance GPU) in K8s." },
  { q: "NVIDIA MIG (Multi-Instance GPU) — what problem does it solve?", opts: ["Network bandwidth", "A large GPU can be partitioned into smaller isolated instances — different pods/users get dedicated GPU slices without interference", "Memory compression", "Driver isolation"], ans: 1, exp: "MIG partitions an H100 GPU into up to 7 isolated GPU instances (e.g., 1g.10gb = 1/7 of the GPU with 10GB memory). Each instance has guaranteed memory, compute, and bandwidth. Run 7 smaller ML workloads on 1 GPU instead of wasting 500GB GPU on a 10GB inference job. GPU Operator automates MIG configuration in Kubernetes." },
  { q: "PagedAttention in vLLM solves what GPU memory problem?", opts: ["Slow startup time", "KV cache fragmentation — uses virtual memory paging so different requests share GPU memory efficiently without waste", "Driver compatibility", "Multi-node networking"], ans: 1, exp: "KV cache (key-value attention cache): each token in context needs stored. Traditional: allocate max_seq_len upfront (wastes memory for short requests). PagedAttention: allocates in pages (like OS virtual memory). Short requests use small pages, long requests get more. 3-4x better memory utilisation → more concurrent users." },
  { q: "What is NCCL and when does it activate in multi-GPU inference?", opts: ["A network card driver", "NVIDIA's collective communications library — handles AllReduce, AllGather between GPUs during tensor parallel operations", "A checkpoint format", "A scheduling algorithm"], ans: 1, exp: "NCCL: optimised GPU-to-GPU communication. Used during tensor parallelism: after each GPU processes its weight slice, AllReduce combines results across all GPUs before moving to next layer. Intra-node: P2P/IPC over PCIe/NVLink. Inter-node: GPU Direct RDMA over InfiniBand/RoCE — CPU bypassed entirely." }
])}
`;

