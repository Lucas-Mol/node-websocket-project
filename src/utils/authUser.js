import { scryptSync, timingSafeEqual } from "crypto";

export default function authUser(user, password) {
    const incomingHash = scryptSync(password, user.saltPassword, 64);

    const realHash = Buffer.from(user.hashPassword, "hex");

    return timingSafeEqual(incomingHash, realHash);
}