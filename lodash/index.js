console.log('lodash test');

console.log(_.VERSION);

function findIndexTest() {
    console.log('find index test');
    let users = [
        {
            name: 'ellie',
            age: 16
        },
        {
            name: 'joel',
            age: 50
        },
        {
            name: 'tess',
            age: 40
        }
    ];


    let name = 'joel';
    let index = _.findIndex(users, function(e) {
        return e.name == name;
    });

    console.log(`index: ${index}`);
}

function chunkTest() {
    console.log('chunk test');
    var arr = [1, 2, 3, 4, 5, 6];
    var chunks = _.chunk(arr, 2);

    console.log(`chunks length: ${chunks.length}`);
}

function removeTest() {
    console.log('remove test');
    var arr = [1, 2, 3, 4, 5, 6];

    var removed = _.remove(arr, function(item) {
        return item % 2 === 0;
    });

    console.log(arr);
}

function takeTest() {
    console.log('take test');
    let arr = [1, 2, 3];
    let res = _.take(arr);
    console.log(res);
    res = _.take([1,2,3,4,5,6], 3);
    console.log(res);
}

function concatTest() {
    console.log('concatTest');
    var arr1 = [1,2,3];
    var arr2 = [4,5,6];

    var res = _.concat(arr1, arr2);
    console.log(res);
}

function capitalizeTest() {
    console.log('capitalizeTest');
    var res = _.capitalize('JOEL');
    console.log(res);
}

findIndexTest();
chunkTest();
removeTest();
takeTest();
concatTest();
capitalizeTest();