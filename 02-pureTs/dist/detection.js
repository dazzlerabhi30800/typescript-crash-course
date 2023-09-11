"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    return id.toUpperCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else {
            console.log(strs.toLowerCase());
        }
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return "admin not found";
}
function logValue(x) {
    if (x instanceof Date) {
        return x.toUTCString();
    }
    else {
        return x.toUpperCase();
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'Circle') {
        return Math.floor(Math.PI * shape.radius ** 2);
    }
    else if (shape.kind === "Square") {
        return shape.side ** 2;
    }
    return shape;
}
function getArea(shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.floor(Math.PI * shape.radius ** 2);
        case "Square":
            return shape.side ** 2;
        case "Rectangle":
            return shape.length * shape.breadth;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
// console.log(getTrueShape({ kind: "Square", side: 4 }));
console.log(getArea({ kind: "Rectangle", length: 4, breadth: 10 }));
// console.log(isAdmin({ name: "abhishek", email: "abhis#gmail.com" }));
// console.log(logValue("2022-03-25"));
// const swim = () => console.log('swim');
// console.log(getFood({ swim: () => swim }));
// console.log(getFood({ swim: () => console.log('fsfs') }));
// console.log(detectType(4));
// console.log(provideId("appleid3454"));
// console.log(printAll(["item1", "item2", "item3"]));
