interface IPerson {
    name: string;
    age: number;
    gender: string;
}

function printPersonInfo(person: IPerson): void {
    console.log("person info: ");
    console.log(person.name);
    console.log(person.age);
    console.log(person.gender);
}