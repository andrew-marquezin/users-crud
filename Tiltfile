k8s_yaml(["k8s/backend-deployment.yaml", "k8s/frontend-deployment.yaml"])

docker_build(
  'users-crud-backend',
  './backend',
  auto_update=[
    sync('./backend', '/app'),
  ]
)

docker_build(
  'users-crud-frontend',
  './frontend'
  auto_update=[
    sync('./frontend', '/app'),
  ]
)

k8s_resource('backend-deployment', port_forwards=3001)

k8s_resource('frontend-deployment', port_forwards=5173)