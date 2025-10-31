const {Server} = require("socket.io");



function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*", // replace with your Next.js frontend URL in production
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("🟢 Client connected:", socket.id);

    socket.on("join_chat", (chatId) => {
      socket.join(chatId);
      console.log(`User joined chat ${chatId}`);
    });

    socket.on("send_message", (data) => {
      console.log("📩 Message received:", data);

      // Emit the message to everyone in the same chat room
      io.to(data.chatId).emit("receive_message", {
        senderId: data.senderId,
        content: data.content,
        timestamp: new Date(),
      });
    });

    socket.on("disconnect", () => {
      console.log("🔴 Client disconnected:", socket.id);
    });
  });

  return io;
}
module.exports = setupSocket;