import { findDocument } from "../../services/documentsService.js";

function selectDocumentSocket(socket) {
    socket.on("select_document", async (documentName, replyText) => {
        socket.join(documentName);

        const document = await findDocument(documentName);

        if(document) {
            replyText(document.text);
        }
    });
}

export default selectDocumentSocket;