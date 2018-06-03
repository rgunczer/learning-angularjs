function duplicateAndReverse(arr) {
    return arr.concat(arr.slice().reverse());
}

var de = duplicateAndReverse([1,2,3,4,5]);
console.log(de);


function duplicateEach(arr) {
    var result = [];
    arr.forEach(function(item) {
        result.push(item);
        result.push(item);
    });;
    return result;
}

var de = duplicateEach([1,2,3,4,5]);
console.log(de);


function duplicate(arr) {
    return arr.concat(arr);
}

var d = duplicate([1,2,3,4,5]);
console.log(d);
