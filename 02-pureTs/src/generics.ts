// const scrore: (number | string)[] = [445, 45, "string1"]
const scores: Array<number | string> = [445, 45, "string1"]


function identityOne(val: boolean | number): boolean | number {
    return val;
}


function identityTwo(val: any): any {
    return val;
}


function identityThree<Type>(val: Type): Type {
    return val;
}


function identityFour<T>(val: T): T {
    return val;
}



// console.log(identityThree<string>("returnedString"));
// console.log(identityThree("returnedString"));
// console.log(identityFour<string>("returnedString"));

interface Bottle {
    brand: string,
    gym: number,
}


function doSearchProducts<T>(products: T[]): T {
    return products[0];
}


const getMoreProducts = <T>(products: T[]): T => {
    return products[0];
}


interface Database {
    connection: string,
    username: string,
    password: number,
}


function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return { valOne, valTwo };
}



interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}


class Sellable<T,> {
    public cart: T[] = [];


    addToCart(products: T) {
        this.cart.push(products);
    }
}





// console.log(anotherFunction<number, Database>(45, { connection: "abhi", username: "abhishek@30800", password: 134 }));
// console.log(identityFour<Bottle>({ brand: "abhishek", gym: 45 }));