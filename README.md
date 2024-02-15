Step 1. Install Prometheus

```shell
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

```

Step 2. Create Service Account

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  creationTimestamp: null
  name: kubby-meteor-service-account
```

Step 3. Create ClusterRole

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: kubby-meteor-clusterRole
rules:
  - apiGroups:
      - ""
    resources:
      - nodes
      - pods
      - services
    verbs:
      - get
      - list
      - watch
  - apiGroups:
      - metrics.k8s.io
    resources:
      - pods
      - nodes
    verbs:
      - get
      - list
      - watch
```

Step 4. Create ClusterRoleBinding

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  creationTimestamp: null
  name: kubby-meteor-clusterrolebinding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubby-meteor-clusterrole
subjects:
  - kind: ServiceAccount
    name: kubby-meteor-service-account
    namespace: default
```

Step 5. Create KubbyMeteor deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: kubby-meteor
  name: kubby-meteor
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kubby-meteor
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: kubby-meteor
    spec:
      serviceAccountName: kubby-meteor-service-account
      containers:
        - name: kubby-meteor
          image: ndoolan/kubby-meteor:2.4
          ports:
            - containerPort: 8000
          resources: {}
```

Step 6. Expose KubbyMeteor deployment

```yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    app: kubby-meteor
  name: kubby-meteor-service
spec:
  ports:
    - port: 80
      protocol: TCP
      targetPort: 8000
  selector:
    app: kubby-meteor
status:
  loadBalancer: {}
```

Step 7. Create Faros-Scope deployment

```yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    run: faros-scope
  name: faros-scope
spec:
  ports:
    - port: 80
      protocol: TCP
      targetPort: 3000
  selector:
    run: faros-scope
  type: LoadBalancer
status:
  loadBalancer: {}
```

Step 8. Expose Faros-Scope deployment

```yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    run: faros-scope
  name: faros-scope
spec:
  ports:
    - port: 80
      protocol: TCP
      targetPort: 3000
  selector:
    run: faros-scope
  type: LoadBalancer
status:
  loadBalancer: {}
```
