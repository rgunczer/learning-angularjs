/* jshint esversion: 6 */

function logData(data) {
    console.log('data: ' + JSON.stringify(data));
}

function logSeparator() {
    console.log('---------------------------------');
}

function run(fn) {
    console.log(':: ' + fn.name);
    fn();
}

function reduceToArrayNoDuplicates() {    
    var arr = [
        { id:123, value:"value1", name:"Name1"},
        { id:124, value:"value2", name:"Name1"},
        { id:125, value:"value3", name:"Name2"},
        { id:126, value:"value4", name:"Name2"},
        { id:127, value:"value4", name:"Name3"}
    ];

    var names = arr.reduce( function(a, b) {
        if (a.indexOf(b.name) === -1) {
            a.push(b.name);
        }
        return a;
    }, []);

    logData(arr);
    console.log('names: ' + names);
    logSeparator();
}

function reduceToNumberEs5es6Syntax() {

    var array = [0, 1, 2, 3];
    const result = array.reduce( (accumulator, currentValue) => accumulator + currentValue );
    logData(array);
    console.log('result is: ' + result);

    const result1 = array.reduce(function(accumulator, current) {
        return accumulator + current;
    });

    logData(array);
    console.log('result1 is: ' + result1);
    logSeparator();
}

function reduceComplexObjectToObject() {
    var array = [
        { id: 12, name: 'joel', age: 50 },
        { id: 43, name: 'aloy', age: 20 },
        { id: 9, name: 'ellie', age: 12 }
    ];

    const result = array.reduce(function(accumulator, current) {
        return { age: accumulator.age + current.age };
    });

    logData(array);
    console.log('result: ' + JSON.stringify(result));
    logSeparator();
}

function reduceCountSelectedFlag() {
    var list = [
        {
            selected: true,
        },
        {
            selected: false,
        },
        {
            selected: true,
        }
    ];

    var count = list.reduce(function(accumulator, item) {
        return accumulator + (item.selected === true ? 1 : 0); 
    }, 0);

    logData(list);
    console.log('result is: ' + count);
    logSeparator();
}

run(reduceToArrayNoDuplicates);
run(reduceToNumberEs5es6Syntax);
run(reduceComplexObjectToObject);
run(reduceCountSelectedFlag);