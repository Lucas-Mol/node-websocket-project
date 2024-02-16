/* eslint-disable no-undef */
const socket = io();

function emitAuthUser(userDTO, resolveAuthUser) {
    socket.emit("auth_user", userDTO, resolveAuthUser);
}

export { emitAuthUser };