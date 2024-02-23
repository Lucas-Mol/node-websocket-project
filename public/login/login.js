/* eslint-disable no-undef */

import { emitAuthUser } from "./socket-login.js";
import { defineCookie } from "../utils/cookiesUtils.js";

const form = document.getElementById("form-login");

function resolveAuthUser({ success, message, jwt}) {
    if(success) {
        defineCookie("token", jwt);
        window.location.href = "/";
    } else if(message) {
        alert(message);
    } else {
        alert("Login failed");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form["input-user"].value;
    const password = form["input-passw"].value;

    emitAuthUser({ username, password }, resolveAuthUser);
});