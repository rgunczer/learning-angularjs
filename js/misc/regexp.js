
function ex01() {
    const str = 'Is this all athere is?';
    var pattern = /is/gi;
    var res = str.match(pattern);
    console.log(res);
}

function ex01() {
    const str = 'Is this w3Schhols all athere is?';
    var pattern = /w3schhols/i;
    // var res = str.match(pattern);
    var res = pattern.test(str);
    console.log(res);
}

function ex02() {
    const str = 'bika';
    // const str = 'beka';
    const patterns = [
        /bika/,
        /b.ka/,
        /b[ie]ka/,
        /b[^a]ka/
    ];
    return patterns.map(pattern => pattern.test(str));
}

console.log(ex02());
