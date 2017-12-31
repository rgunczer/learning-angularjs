function add(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}

function add1(x, y) {
    //y = y || 5; // will not work for 0 it is falsy

    if (y === undefined) {
        y = 5;
    }
    return x + y;
}

function addes6(x, y = 5) {
    return x + y;
}

//add(1, 2, 3);
add(1, 2);
add();
add(1, 2, 3, 4, 5);


var result = add1(4);
console.log(result);

result = add1(4, 0);
console.log(result);

result = addes6(4);
console.log(result);

result = addes6(4, 0);
console.log(result);

