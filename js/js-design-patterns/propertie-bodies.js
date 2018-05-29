function Book() {
    var name = '';
    Object.defineProperty(this, 'name', {
        get: function() {
            console.log('get the name prop');
            return name;
        },
        set: function(val) {
            console.log(val);
            name = val;
        }
    });
}

var b = new Book();
b.name = 'Good parts';
console.log(b.name);

b.name = 'joel';
console.log(b.name);

console.log(+new Date());