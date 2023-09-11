let myMap = new Map<string, number>([
  ["trevor", 50],
  ["franklin", 35],
]);

myMap.set("abhishek", 22);
myMap.set("michael", 44);

let age = myMap.get("abhishek");
console.log(age);

for (let entry of myMap.entries()) {
  console.log(entry[0], entry[1]);
}

for (let value of myMap.values()) {
  console.log(value);
}

const newMap: { [key: string]: number } = {};

newMap["one"] = 1;
newMap["two"] = 2;
