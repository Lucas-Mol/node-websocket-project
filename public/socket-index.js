/* eslint-disable no-undef */

import { insertDocumentLink, removeDocumentLink } from "./index.js";
import { getCookie } from "./utils/cookiesUtils.js";

const socket = io("/app", {
    auth: {
        token: getCookie("token")
    }
});

socket.on("connect_error", () => {
    window.location.href = "/login";
});

socket.emit("get_documents", (documents) => {
    documents.forEach(document => {
        insertDocumentLink(document.name);
    });
});

function emitAddDocument(documentName) {
    socket.emit("add_new_document", documentName);
}

socket.on("add_front_document_to_list", (documentName) => {
    insertDocumentLink(documentName);
});

socket.on("add_new_document_existing", (documentName) => {
    alert(`The document named ${documentName} already exists!`);
});

socket.on("remove_document_success", (documentName) => {
    removeDocumentLink(documentName);
});

export { emitAddDocument };