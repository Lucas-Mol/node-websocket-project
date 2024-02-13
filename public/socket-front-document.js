/* eslint-disable no-undef */
import { updateTextEditor } from "./document.js";

const socket = io();

function selectDocument(name) {
    socket.emit("select_document", name, (text) => {
        updateTextEditor(text);
    });
}

function emitTextEditorTyping(typingDTO) {
    socket.emit("text_editor_typing", typingDTO);
}

socket.on("text_editor_sharing", (text) => {
    updateTextEditor(text);
});

export { selectDocument, emitTextEditorTyping };