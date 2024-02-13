import { documentCollection } from "./dbConnection.js";

function findDocument(name) {
    return documentCollection.findOne({ name });
}

function updateDocument(name, text) {
    return documentCollection.updateOne({ name }, { 
        $set: { 
            text 
        }
    });
}

export { findDocument, updateDocument };