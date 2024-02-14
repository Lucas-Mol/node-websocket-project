import { documentCollection } from "../config/dbConnection.js";

function createDocument(name) {
    return documentCollection.insertOne({
        name,
        text: ""
    });
}

function getAllDocuments() {
    return documentCollection.find().toArray();
}

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

function removeDocument(name) {
    return documentCollection.deleteOne({ name });
}

export {    
    findDocument,
    updateDocument,
    getAllDocuments,
    createDocument,
    removeDocument 
};