import io from "../server.js";
import addNewDocumentSocket from "./addNewDocumentSocket.js";
import getAllDocumentsSocket from "./getAllDocumentsSocket.js";
import removeDocumentSocket from "./removeDocumentSocket.js";
import selectDocumentSocket from "./selectDocumentSocket.js";
import textEditorTypingSocket from "./textEditorTypingSocket.js";

io.on("connection", (socket) => {
    console.log("Client connected! ID: ", socket.id);

    socket.on("disconnect", (reason) => {
        console.log(`Client ${socket.id} disconnected! Reason: ${reason}`);
    });

    getAllDocumentsSocket(socket);
    addNewDocumentSocket(socket, io);
    removeDocumentSocket(socket, io);
    selectDocumentSocket(socket);
    textEditorTypingSocket(socket);
});


