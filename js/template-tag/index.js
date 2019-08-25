console.log('here')
let numberOfCopies = 0;

let pElems = document.getElementsByTagName('p')

console.log(pElems.length)

document.querySelector('#clone-template')
    .addEventListener('click', () => {
        let template = document.querySelector('#mytemplate')
        let clone = document.importNode(template.content, true);

        clone.querySelector('p').textContent += 'awesome'
        clone.querySelector('.cpy').textContent = ++numberOfCopies;

        document.body.appendChild(clone);
    });

