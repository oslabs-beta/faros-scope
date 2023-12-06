const io = require("socket.io-client");

// Connect to the server
// const socket = io("http://104.154.129.231:8000");
const socket = io("http://localhost:8000");

// Handle connection
socket.on("connect", () => {
  console.log("Connected to server");

  // Emit an event or send a message
  socket.emit("event", { message: "Hello from client!" });
});

// Handle disconnection
socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

// Handle custom events or messages from the server
socket.on("podAdded", (data) => {
  console.log("CLIENT RECEIVED MESSAGE");
  console.log("Pod Added:", data.metadata.name);
});
socket.on("podModified", (data) => {
  console.log("CLIENT RECEIVED MESSAGE");
  console.log("Pod Modified:", data.metadata.name);
});
socket.on("podDeleted", (data) => {
  console.log("CLIENT RECEIVED MESSAGE");
  console.log("Pod Deleted:", data.metadata.name);
});
