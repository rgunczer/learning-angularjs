try {
    throw void 0
} catch(foo) {
    foo = 'foo';
    console.log(foo);
}


// foo; // reference error!