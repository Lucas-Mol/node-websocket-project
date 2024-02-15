import { userCollection } from "../config/dbConnection.js";
import encryptPassword from "../utils/encryptPassword.js";

function signUpUser({ username, password }) {
    const { hashPassword, saltPassword } = encryptPassword(password);

    return userCollection.insertOne({ username, hashPassword, saltPassword });
}

function findUser(username) {
    return userCollection.findOne({ username });
}

export { signUpUser, findUser };