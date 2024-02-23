import { getDocumentUsers, removeDocumentConnection } from "../../utils/documentConnections.js";

export default function disconnectUserSocket(connection ,socket, io) {
    socket.on("disconnect", () => {
        removeDocumentConnection(connection);
        const documentUsers = getDocumentUsers(connection.documentName);

        io.to(connection.documentName).emit("document_users", documentUsers);
    });
}