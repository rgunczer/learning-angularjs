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
    let index = _.findIndex(users, function (e) {
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

    var removed = _.remove(arr, function (item) {
        return item % 2 === 0;
    });

    console.log(arr);
}

function takeTest() {
    console.log('take test');
    let arr = [1, 2, 3];
    let res = _.take(arr);
    console.log(res);
    res = _.take([1, 2, 3, 4, 5, 6], 3);
    console.log(res);
}

function concatTest() {
    console.log('concatTest');
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5, 6];

    var res = _.concat(arr1, arr2);
    console.log(res);
}

function capitalizeTest() {
    console.log('capitalizeTest');
    var res = _.capitalize('JOEL');
    console.log(res);
}

function uniqueIdTest() {
    console.log('uniqueIdTest');
    let id = _.uniqueId();
    console.log(id);
    let anotherId = _.uniqueId('prefx-');
    console.log(anotherId);
}

function groupByTest() {
    console.log('groupByTest');

    const array = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Just@do.it",
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Just@do.it",
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
        },
        {
            "postId": 2,
            "id": 6,
            "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
            "email": "Presley.Mueller@myrl.com",
        },
        {
            "postId": 2,
            "id": 7,
            "name": "repellat consequatur praesentium vel minus molestias voluptatum",
            "email": "Just@do.it",
        }
    ];

    console.log(`source array: `, array)

    const result = _.groupBy(array, 'postId');

    console.log(`result array: `, result);
}

function groupByTest2() {
    console.log('groupByTest2');

    const array = [
        12.1,
        12.56,
        14.01
    ];

    console.log(`source array: `, array)

    const result = _.groupBy(array, Math.floor);

    console.log(`result array: `, result);
}

function groupByTest3() {
    console.log('groupByTest3');

    const array = [
        {
            name: 'aaa',
            dobyear: 1970
        },
        {
            name: 'bbb',
            dobyear: 1971
        },
        {
            name: 'ccc',
            dobyear: 1989
        }
    ];

    console.log(`source array: `, array)

    const currentYear = new Date().getFullYear();
    const result = _.groupBy(array, (obj) => {
        return currentYear - obj.dobyear;
    });

    console.log(`result array: `, result);
}


findIndexTest();
chunkTest();
removeTest();
takeTest();
concatTest();
capitalizeTest();
uniqueIdTest();
groupByTest();
groupByTest2();
groupByTest3();
