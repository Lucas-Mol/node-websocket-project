import { MongoClient } from "mongodb";

const URL = process.env.MONGO_URL || "mongodb://admin:1234@localhost:27017/";

const client = new MongoClient(URL);

let documentCollection;

try {
    await client.connect();

    const db = client.db("websocket_project");
    documentCollection = db.collection("documents");

    console.log("Connected successfully!");
} catch (error) {
    console.log(error);
}

export { documentCollection };