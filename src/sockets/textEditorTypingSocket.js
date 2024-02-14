import { updateDocument } from "../services/documentsService.js";

function textEditorTypingSocket(socket) {
    socket.on("text_editor_typing", async ({ text, documentName }) => {
        const update = await updateDocument(documentName, text);

        if(update.modifiedCount) {
            socket.to(documentName).emit("text_editor_sharing", text);
        }
    });
}

export default textEditorTypingSocket;