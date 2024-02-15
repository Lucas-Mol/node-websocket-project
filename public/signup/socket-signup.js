/* eslint-disable no-undef */
const socket = io();

function emitSignupUser(signUpDTO, resolveSignUpUser) {
    socket.emit("signup_user", signUpDTO, resolveSignUpUser);
}


export { emitSignupUser };