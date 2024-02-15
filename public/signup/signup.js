/* eslint-disable no-undef */

import { emitSignupUser } from "./socket-signup.js";

const form = document.getElementById("form-signup");

function resolveSignUpUser(success, message) {
    if(success) {
        alert(message || "Signed up successfully!");
    } else {
        alert(message || "Signed up failed!");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form["input-user"].value;
    const password = form["input-passw"].value;

    emitSignupUser({ username, password }, resolveSignUpUser);
});