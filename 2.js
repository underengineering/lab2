"use strict";

const name = "ИвАН";
const surname = "ИвАНоВич";

const fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
const fixedSurname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();

console.log("Имя:", fixedName);
console.log(
    name === fixedName ? "Имя осталось без изменений" : "Имя было преобразовано"
);

console.log("Фамилия:", fixedSurname);
console.log(
    surname === fixedSurname
        ? "Фамилия осталась без изменений"
        : "Фамилия была преобразована"
);
