"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num, a) {
    return num + a;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    return { name: name, email: email };
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email };
};
var result = addTwo(45, 3);
loginUser("abhishek", "abhis@gmail.com");
getUpper('abhishek');
var _a = signUpUser("abhi", "abhi@gmail.com", 345, true), name = _a.name, email = _a.email;
console.log(name);
