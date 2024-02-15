/* eslint-disable no-undef */
import { emitRemoveDocument, emitTextEditorTyping, selectDocument } from "./socket-document.js";

const textEditor = document.getElementById("text-editor");
const btnRemoveDocument = document.getElementById("btn-remove-document");
const documentTitle = document.getElementById("document-title");
const params = new URLSearchParams(window.location.search);
const documentName = params.get("name");
documentTitle.innerHTML = documentName || "Untitled Document";

selectDocument(documentName);

textEditor.addEventListener("keyup", () => {
    emitTextEditorTyping({
        text: textEditor.value,
        documentName});
});

btnRemoveDocument.addEventListener("click", () => {
    emitRemoveDocument(documentName);
});

function updateTextEditor(text) {
    textEditor.value = text;
}

function alertAndRedirectToMainPage(name) {
    if(documentName === name) {
        alert(`The document named ${name} was removed`);
        window.location.href = "/";
    }
}

export { updateTextEditor, alertAndRedirectToMainPage };
