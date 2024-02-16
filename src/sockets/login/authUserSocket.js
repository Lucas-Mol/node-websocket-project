import { findUser } from "../../services/usersService.js";
import authUser from "../../utils/authUser.js";
import generateJWT from "../../utils/generateJWT.js";

export default function authUserSocket(socket) {
    socket.on("auth_user", async ({ username, password }, resolveAuthUser) => {
        const user = await findUser(username);

        if(!user) {
            resolveAuthUser({ 
                success: false,
                message: "User not found"});
            return;
        }

        const authenticated = authUser(user, password);

        if(authenticated) {
            const jwt = generateJWT({ username });
            resolveAuthUser({
                success: authenticated,
                jwt
            });
        } else {
            resolveAuthUser({ 
                success: authenticated,
                message: "Password is incorrect"
            });
        }
    });
}