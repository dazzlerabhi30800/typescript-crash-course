"use strict";
// const scrore: (number | string)[] = [445, 45, "string1"]
const scores = [445, 45, "string1"];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function doSearchProducts(products) {
    return products[0];
}
const getMoreProducts = (products) => {
    return products[0];
};
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
// console.log(anotherFunction<number, Database>(45, { connection: "abhi", username: "abhishek@30800", password: 134 }));
// console.log(identityFour<Bottle>({ brand: "abhishek", gym: 45 }));
