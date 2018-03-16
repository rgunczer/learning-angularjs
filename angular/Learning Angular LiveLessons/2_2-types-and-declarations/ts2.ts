// number
// string
// boolean
// null, undefined
// any
// void

var x = 1000;
var xx:number;

var y = 'string';
var yy:string = 'string';

// error TS2322: Type '"str"' is not assignable to type 'number'.
// var xxx: number = 'str';

var z = true;
var zz:boolean = true;

// var abc:any = undefined;
// var abc:any = 123;
// var abc:any = 'string';


// var let const
function f(shouldInitialize:boolean) {
    if (shouldInitialize) {
        var n = 10;
    }
    return n;
}

console.log(f(true)); // 10
console.log(f(false)); // undefined


function f1(shouldInitialize:boolean) {
    let n: number;
    if (shouldInitialize) {
        n = 10;
    }
    return n;
}

console.log(f1(true)); // 10
console.log(f1(false)); // undefined

const MYNAME: string = "Joel";

MYNAME = "Ellie";