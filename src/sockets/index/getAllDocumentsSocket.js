import { getAllDocuments } from "../../services/documentsService.js";

function getAllDocumentsSocket(socket) {
    socket.on("get_documents", async (replyDocuments) => {
        const documents = await getAllDocuments();

        replyDocuments(documents);
    });
}

export default getAllDocumentsSocket;