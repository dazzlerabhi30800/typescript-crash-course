type coupon = (name: string, value: number) => number;
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial?: () => string
    startTrial(): string,
    // getCoupon: coupon;
    getCoupon(couponName: string, value: number): number
    // getCoupon: (couponName: string) => string,
}

// reopening of the interface by adding the new properties
interface User {
    githubToken: string,
}


interface Admin extends User {
    role: "admin" | "ta" | "learner",
}


const Abhishek: User = {
    dbId: 345, email: "abhis@gmail.com", userId: 454, startTrial: () => {
        return "fsffsf"
    },
    githubToken: "454",
    // getCoupon: (name = "abhishek") => name,
    getCoupon: (name: "abhishek", value: number) => value,
};

console.log(Abhishek);




export { }

