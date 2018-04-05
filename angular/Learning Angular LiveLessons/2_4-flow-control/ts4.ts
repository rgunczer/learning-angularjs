for (let i:number = 0; i < 10; ++i) {
    console.log(i);
}

let idx:number = 0;
while(idx < 10) {
    console.log(idx++);
}

let index: number = 0;
do {
    console.log(index++);
} while(index < 10);

let arr: number[] = [2, 4, 6, 8, 10];
for(let value of arr) {
    console.log(value);
}