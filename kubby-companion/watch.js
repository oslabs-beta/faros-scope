const server = require("http").createServer();
const io = require("socket.io")(server);
const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromFile("./edwins.yaml"); // Load your Kubernetes config
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const watch = new k8s.Watch(kc);
const namespace = "default"; // Define your namespace
watch
  .watch(
    `/api/v1/namespaces/${namespace}/pods`, // Watch specific namespace
    {},
    (type, apiObj, watchObj) => {
      if (type === "ADDED") {
        console.log("New Pod Added:", apiObj.metadata.name);
        io.emit("podAdded", apiObj);
      } else if (type === "MODIFIED") {
        console.log("Pod Modified:", apiObj.metadata.name);
        io.emit("podModified", apiObj);
      } else if (type === "DELETED") {
        console.log("Pod Deleted:", apiObj.metadata.name);
        io.emit("podDeleted", apiObj);
      }
    },
    (err) => {
      console.error(err);
      io.emit("watchError", err);
    }
  )
  .then((req) => {
    console.log("Watching for changes in namespace:", namespace);
  });

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
