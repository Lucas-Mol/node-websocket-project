import { findDocument } from "../../services/documentsService.js";
import { addNewDocumentConnection, getDocumentUsers } from "../../utils/documentConnections.js";
import disconnectUserSocket from "./disconnectUserSocket.js";

function selectDocumentSocket(socket, io) {
    socket.on("select_document", async ({ documentName, username }, replyText) => {
        const document = await findDocument(documentName);

        if(document) {
            socket.join(documentName);

            addNewDocumentConnection({ documentName, username });
            const documentUsers = getDocumentUsers(documentName);

            io.to(documentName).emit("document_users", documentUsers);

            replyText(document.text);
        }

        disconnectUserSocket({ documentName, username } ,socket, io);
    });
}

export default selectDocumentSocket;