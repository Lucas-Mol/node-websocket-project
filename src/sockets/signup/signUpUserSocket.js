import { findUser, signUpUser } from "../../services/usersService.js";

function signUpUserSocket(socket) {
    socket.on("signup_user", async (userDTO, resolveSignUpUser) => {
        const user = await findUser(userDTO.username);

        if(user !== null) {
            resolveSignUpUser(false, "User already exists");
            return;
        }

        const result = await signUpUser(userDTO);
        resolveSignUpUser(result.acknowledged);
    });
}

export default signUpUserSocket;