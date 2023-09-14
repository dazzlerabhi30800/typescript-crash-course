// const companyName: any = "Abhi Corps";

// const companyType = <number>companyName.length;
// console.log(typeof companyType);

// let myName: unknown = "Abhishek Choudhary";
//
// let companyName = myName as string;
// console.log(companyName);

interface employee {
  name: string;
  age: number;
}

// let employee = {};
// employee.name = "Abhishek",
// employee.age= 22,

let employee = <employee>{};
employee.name = "Abhishek";
employee.age = 22;

// console.log(employee);

let myNum: any = 6;

let convertedNum = myNum as string;
// console.log(typeof convertedNum);

interface student {
  name: string;
  age: number;
}

function getStudent(name: string) {
  return {
    name,
    age: 22,
  };
}

// const student = getStudent("Abhishek Choudhar") as student;
// console.log(student);

interface student1 {
  marks(): void;
}

interface student2 {
  sub(): void;
}

function student1orstudent2(): student1 | student2 {
  let student1: student1 = {
    marks() {
      console.log("my marks are 99/100");
    },
  };

  return student1;
}

function isStudent1(person: student1 | student2): person is student1 {
  return (person as student1).marks !== undefined;
}

let person = student1orstudent2();
if (isStudent1(person)) {
  (person as student1).marks();
}
