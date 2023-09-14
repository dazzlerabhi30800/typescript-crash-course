interface info {
    name: string,
    age: number,
    profile?: string,
}


const nameArr: string[] = ["abhishek", "michael", "franklin", "trevor"];
const infoArr: info[] = [
    { name: "Abhishek", age: 22, profile: "Frontend Developer" },
    { name: "Larry Page", age: 40, profile: "CEO of Google" },
    { name: "Michael", age: 50, profile: "FBI Agent" },
]


const mappedInfo: info[] = infoArr.map((item) => {
    return { ...item, age: item.age - 1 }
})

// element  selector
const button = document.querySelector('.btn') as HTMLButtonElement;
const list = document.querySelector('.list') as HTMLUListElement;

function renderLists() {
    list.innerHTML = infoArr.map((item) => {
        let { name, age } = item;
        return `
        <li>${name} & age is ${age}</li>
        `
    }).join('');
}

button.addEventListener('click', renderLists);

