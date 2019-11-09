// make this work duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]


function duplicate(arr) {
    return [...arr, ...arr];
}

function duplicate1(arr) {
    const dup = [];

    for (let i = 0; i < 2; ++i) {
        arr.forEach(element => {
            dup.push(element)
        });
    }

    return dup;
}

const res = duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

console.log(res);
