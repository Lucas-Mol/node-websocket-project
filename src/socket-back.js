import { findDocument, updateDocument } from "./documentsService.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Client connected! ID: ", socket.id);

    socket.on("disconnect", (reason) => {
        console.log(`Client ${socket.id} disconnected! Reason: ${reason}`);
    });

    socket.on("select_document", async (documentName, replyText) => {
        socket.join(documentName);

        const document = await findDocument(documentName);

        if(document) {
            replyText(document.text);
        }
    });

    socket.on("text_editor_typing", async ({ text, documentName }) => {
        const update = await updateDocument(documentName, text);

        if(update.modifiedCount) {
            socket.to(documentName).emit("text_editor_sharing", text);
        }
    });
});


