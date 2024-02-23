/* eslint-disable no-undef */
import { getCookie } from "../utils/cookiesUtils.js";
import { alertAndRedirectToMainPage, handleAuthSuccess, updateTextEditor, updateUserInterface } from "./document.js";

const socket = io("/app", {
    auth: {
        token: getCookie("token")
    }
});

socket.on("auth_success", handleAuthSuccess);

socket.on("connect_error", () => {
    window.location.href = "/login";
});

function selectDocument(entryData) {
    socket.emit("select_document", entryData, (text) => {
        updateTextEditor(text);
    });
}

function emitTextEditorTyping(typingDTO) {
    socket.emit("text_editor_typing", typingDTO);
}

function emitRemoveDocument(documentName) {
    socket.emit("remove_document", documentName);
}

socket.on("document_users", updateUserInterface);

socket.on("text_editor_sharing", (text) => {
    updateTextEditor(text);
});

socket.on("remove_document_success", (documentName) => {
    alertAndRedirectToMainPage(documentName);
});

export { selectDocument, emitTextEditorTyping, emitRemoveDocument };