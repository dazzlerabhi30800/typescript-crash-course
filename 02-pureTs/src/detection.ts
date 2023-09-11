function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}




function provideId(id: string | null) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    return id.toUpperCase();

}




function printAll(strs: string | string[] | null) {
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


interface User2 {
    name: string,
    email: string,
}


interface Admin {
    name: string,
    email: string,
    isAdmin: Boolean
}


function isAdmin(account: User2 | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return "admin not found";
}


function logValue(x: Date | string) {
    if (x instanceof Date) {
        return x.toUTCString();
    }
    else {
        return x.toUpperCase();
    }
}





type Fish = { swim: () => void };
type Bird = { fly: () => void };



function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}


function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food";
    }
    else {
        pet
        return "bird Food";
    }
}


interface Circle {
    kind: "Circle",
    radius: number,
}

interface Square {
    kind: "Square",
    side: number,
}


interface Rectangle {
    kind: "Rectangle",
    length: number,
    breadth: number,
}


type Shape = Circle | Square | Rectangle;


function getTrueShape(shape: Shape) {
    if (shape.kind === 'Circle') {
        return Math.floor(Math.PI * shape.radius ** 2);
    }
    else if (shape.kind === "Square") {
        return shape.side ** 2;
    }
    return shape;
}


function getArea(shape: Shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.floor(Math.PI * shape.radius ** 2);

        case "Square":
            return shape.side ** 2;

        case "Rectangle":
            return shape.length * shape.breadth;
        default:
            const _defaultforshape: never = shape
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
