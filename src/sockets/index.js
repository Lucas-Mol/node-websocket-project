import io from "../server.js";
import addNewDocumentSocket from "./index/addNewDocumentSocket.js";
import getAllDocumentsSocket from "./index/getAllDocumentsSocket.js";
import removeDocumentSocket from "./document/removeDocumentSocket.js";
import selectDocumentSocket from "./document/selectDocumentSocket.js";
import textEditorTypingSocket from "./document/textEditorTypingSocket.js";
import signUpUserSocket from "./signup/signUpUserSocket.js";
import authUserSocket from "./login/authUserSocket.js";

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
    signUpUserSocket(socket);
    authUserSocket(socket);
});


