/* eslint-disable no-undef */
import { emitTextEditorTyping, selectDocument } from "./socket-front-document.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("name");
const documentTitle = document.getElementById("document-title");
documentTitle.innerHTML = documentName || "Untitled Document";

selectDocument(documentName);

const textEditor = document.getElementById("text-editor");

textEditor.addEventListener("keyup", () => {
    emitTextEditorTyping({
        text: textEditor.value,
        documentName});
});

function updateTextEditor(text) {
    textEditor.value = text;
}

export { updateTextEditor };
