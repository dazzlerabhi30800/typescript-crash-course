
const User = {
    name: "Abhishek",
    email: "abhis@gmail.com",
    isActive: true,
}


// function createUser({name: string, isActive: boolean}){}


// let newUser = {name: "Abhishek", isActive: false, email: "abhi3@gmail.com"};

// createUser(newUser);


// const createCourse = (): {name: string, price: number} => {
//     return {name: "reactjs", price: 599}
// } 




// type aliases

// type User = {
//     name: string,
//     email: string,
//     isActive?: boolean
// }



// function createUser(user: User): void {}


// createUser({name: "Abhishek", email: "abhi@gmail.com",isActive: false});
// createUser({name: "Abhishek", email: "abhi@gmail.com",});


// Read Only types

// type User = {
//     readonly _id: string,
//     name: string,
//     email: string,
//     isActive: boolean,
//     creditDetails?: number,
// }



// function createUser(u: User) {
//     return {} 
// }

// let myUser: User = {
//     _id: "134",
//     name: "h",
//     email: "abhi@gmail.com",
//     isActive: true,
// }

// myUser.email = "abhinew@gmail.com"


type cardNumber = {
    cardNumber: string;
}
type cardData = {
    cardData: string
}

// combine all the types using &
type cardDetails = cardNumber & cardData & {cvv: number};




export {}