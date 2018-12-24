var inquirer = require('inquirer');

var questions = [
    // {
    //     type: 'confirm',
    //     name: 'toBeDelivered',
    //     message: 'Is this for delivery?',
    //     default: false
    // },
    {
        type: 'input',
        name: 'component-name',
        message: 'Component Name'
    },
    {
        type: 'list',
        name: 'size',
        message: 'What size?',
        choices: ['Large', 'Medium', 'Small'],
        filter: (val) => {
            return val.toLocaleLowerCase();
        }
    },
    {
        type: 'checkbox',
        name: 'support',
        message: 'Select Support',
        choices: [
            {
                name: 'DxDataGrid',
                value: 'grid'
            },
            {
                name: 'Modal Wrapper',
                value: 'modal'
            },
            new inquirer.Separator(' ---- '),
            {
                name: 'UserPreferences'
            }
        ]
    },
    {
        type: 'input',
        name: 'comments',
        message: 'Any Comments?',
        default: 'Nope. All good!'
    }
]

inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
    });
