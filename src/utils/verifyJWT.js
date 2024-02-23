import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET || "super_secret";

export default function verifyJWT(token) {
    return jwt.verify(token, SECRET);
}