// this function will return should return a number other it will throw error
function addTwo(num: number, a: number): number {
    return num * a;
}




function getUpper(str: string) {
    return str.toUpperCase();
}


function signUpUser(name: string, email: string, password: any, isPaid: boolean) {
    return {name, email};
}


let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return {name, email}; 
}


const result: number = addTwo(5, 3);


loginUser("abhishek", "abhis@gmail.com");

getUpper('abhishek');


let {name, email} = signUpUser("abhi","abhi@gmail.com",345,true);
console.log(name);





const getHello = (s: string):string => {
    return "";
}



// const saiyans = ["goku", "vegeta", "gohan", "trunks"];
const saiyans = ["goku", "vegeta", "gohan", "trunks"];

saiyans.map(( ssj: string ):string => {
    return `Saiyan Name is ${ssj}` 
})



const logErrorMsg = (msg: string): void => {
    console.log(msg);
}


const handleError = (msg: string): never => {
    throw new Error(msg);
} 




export {}