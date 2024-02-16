import JWT from "jsonwebtoken";

const SECRET = process.env.SECRET || "super_secret";

export default function generateJWT(payload) {
    return JWT.sign(payload, SECRET, {
        expiresIn: "1h"
    });
}