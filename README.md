## build img
docker build -t kubernetes-k8s:v1 .

## deploy pod
- kubectl apply -f hello-pod.yml
- kubectl apply -f hello-deployment.yml
- kubectl apply -f hello-service.yml
 
### cmds
- kubectl get pods
- kubectl port-forward hello-pod 3000:3000  