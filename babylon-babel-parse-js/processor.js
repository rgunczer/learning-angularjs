const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('babel-traverse').default;

const filename = 'src/script.js'

const content = fs.readFileSync(filename, 'utf-8')

const deps = []

const ast = parser.parse(content, {
    sourceType: 'module'
})

traverse(ast, {
    ImportDeclaration: ({node}) => {
        //console.log(node);
        deps.push(node.source.value)
    }
})

//console.log(content);
// console.log(ast);

console.log('discovered import paths');
deps.forEach((item) => {
    console.log(`- [${item}]`);
})