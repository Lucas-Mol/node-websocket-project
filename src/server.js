import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import "./dbConnection.js";

const app = express();
const PORT = process.env.port || 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, "../../", "public");
app.use(express.static(publicDir));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

const io = new Server(httpServer);

export default io;
