import verifyJWT from "../utils/verifyJWT.js";

export default function authenticateUser(socket, next) {
    const authToken = socket.handshake.auth.token;

    try {
        const payloadToken = verifyJWT(authToken);

        socket.emit("auth_success", payloadToken);
        next();
    } catch (error) {
        next(error);
    }
}