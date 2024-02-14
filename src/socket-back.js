import { createDocument, findDocument, getAllDocuments, removeDocument, updateDocument } from "./documentsService.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Client connected! ID: ", socket.id);

    socket.on("disconnect", (reason) => {
        console.log(`Client ${socket.id} disconnected! Reason: ${reason}`);
    });

    socket.on("get_documents", async (replyDocuments) => {
        const documents = await getAllDocuments();

        replyDocuments(documents);
    });

    socket.on("add_new_document", async (documentName) => {
        const hasDocument = (await findDocument(documentName)) !== null;
        
        if(hasDocument) {
            socket.emit("add_new_document_existing", documentName);
            return;
        }
        
        const result = await createDocument(documentName);

        if(result.acknowledged) {
            io.emit("add_front_document_to_list", documentName);
        }
    });

    socket.on("remove_document", async (documentName) => {
        const result = await removeDocument(documentName);

        if(result.deletedCount) {
            io.emit("remove_document_success", documentName);
        }
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


