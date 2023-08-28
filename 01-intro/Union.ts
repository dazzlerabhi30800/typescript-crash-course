
let score: number | string = 45;
score = "45";



type User = {
    name: string,
    id: number,
}


type Admin = {
    username: string,
    id: number,
}



// let hitesh: User | Admin = {username: "Abhishek", id: 44};



getDbId("45");


function getDbId(id: number | string) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    return id;
}



// array



// const arr1: Array<number | string> = [1, "abhi", 3, 4];
const arr1: (string | number)[] = [1, "abhi", 3, 4];




let seatAllotment: "aisle" | "first-class" | "economy";

seatAllotment = "aisle";
