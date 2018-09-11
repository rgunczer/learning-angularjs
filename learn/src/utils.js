import { villains as names } from './data';

export const SerialKiller = {
    name: "Freddy Kruger",
    age: 45,
    killed: 34
}

export function sayMyName(obj) {
    console.log(`sayMyName1: ${obj.name}`);
    console.log(`sayMyName2: ${obj.name}`);
    console.log(`sayMyName3: ${obj.name}`);
}

export function sayNames() {
    console.log('sayNames begin: ' + names.length);
    names.forEach(name => console.log(name));
    console.log('sayNames end');
}