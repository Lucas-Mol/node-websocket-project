const documentConnections = [];

function addNewDocumentConnection(connection) {
    documentConnections.push(connection);
}

function getDocumentUsers(documentName) {
    return documentConnections
        .filter(conn => conn.documentName === documentName)
        .map(conn => conn.username);
}

function removeDocumentConnection({ documentName, username }) {
    const index = documentConnections.findIndex(conn => {
        return conn.documentName === documentName 
            && conn.username === username;
    });

    if(index !== -1) {
        documentConnections.splice(index, 1);
    }
}

export { addNewDocumentConnection, getDocumentUsers, removeDocumentConnection };