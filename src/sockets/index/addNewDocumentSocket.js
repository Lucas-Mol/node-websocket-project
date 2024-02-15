import { createDocument, findDocument } from "../../services/documentsService.js";

function addNewDocumentSocket(socket, io) {
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
}

export default addNewDocumentSocket;