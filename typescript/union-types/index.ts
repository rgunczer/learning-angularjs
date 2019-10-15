console.log('apple');

interface Person {
    id: number;
}

interface Worker {
    companyId: number;
}

type A = Person & Worker;

let x: A;

x.companyId = 1;
x.id = 10;

let y: Person;
y.id = 12;

let z: Worker;
z.companyId = 1;

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

area({kind: "rectangle", width: 12, height: 1 });
