
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

// const hasUntilDestroy = /import\s*{\s*[^}]*untilDestroyed[^}]*}\s*from\s*("|')ngx-take-until-destroy\1(?=[^]*untilDestroyed\(\w*\)[^]*)/;
function ex03() {
    var str = `import  {   untilDestroyed  }  from "ngx-take-until-destroy"`;
    var patt1 = /import\s*{\s*untilDestroyed\s*}\s*from\s*('|")/;
    var result = str.match(patt1);
    return result;
}

console.log(ex03());
