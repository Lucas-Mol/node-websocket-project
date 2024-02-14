import { documentCollection } from "./dbConnection.js";

function getAllDocuments() {
    return documentCollection.find().toArray();
}

function findDocument(name) {
    return documentCollection.findOne({ name });
}

function createDocument(name) {
    return documentCollection.insertOne({
        name,
        text: ""
    });
}

function updateDocument(name, text) {
    return documentCollection.updateOne({ name }, { 
        $set: { 
            text 
        }
    });
}

function removeDocument(name) {
    return documentCollection.deleteOne({ name });
}

export { findDocument, updateDocument, getAllDocuments, createDocument, removeDocument };