"use strict";

const password = "asdasd2-34234";
if (
    password.length >= 4 &&
    (password.includes("-") || password.includes("_"))
) {
    console.log("Пароль надежный");
} else {
    console.log("Пароль недостаточно надежный");
}
