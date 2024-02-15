/* eslint-disable no-undef */
import "./socket-index.js";
import { emitAddDocument } from "./socket-index.js";

const documents = document.getElementById("list-documents");
const form = document.getElementById("form-add-document");
const inputDocument = document.getElementById("input-document");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    emitAddDocument(inputDocument.value);
    inputDocument.value = "";
});

function insertDocumentLink(documentName) {
    documents.innerHTML += `
    <a
        id="document-${documentName}"
        href="/document?name=${documentName}" 
        class="list-group-item list-group-item-action"
    >
        ${documentName}
    </a>
    `;
}

function removeDocumentLink(documentName) {
    const removedDocument = document.getElementById(`document-${documentName}`);

    documents.removeChild(removedDocument);
}

export { insertDocumentLink, removeDocumentLink };