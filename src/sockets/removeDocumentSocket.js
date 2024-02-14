import { removeDocument } from "../services/documentsService.js";

function removeDocumentSocket(socket, io) {
    socket.on("remove_document", async (documentName) => {
        const result = await removeDocument(documentName);

        if(result.deletedCount) {
            io.emit("remove_document_success", documentName);
        }
    });
}

export default removeDocumentSocket;