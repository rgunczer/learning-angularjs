const path = require('path');
const fs = require('fs');
const SwaggerParser = require("swagger-parser");

console.log('swagger parser test');

const lines = [];
const fileName = 'OrganizationManagementAPI';
const pathToSourceApi = path.join(__dirname, 'api', fileName) + '.yml';
const pathToDestTs = path.join(__dirname, 'dest', fileName) + '.modelY.ts';

let parser = new SwaggerParser();
parser.validate(pathToSourceApi, {
    validate: {
        spec: false
    },
    resolve: {
        external: false
    }
})
    .then(api => {
        console.log("API name: %s, Version: %s", api.info.title, api.info.version);

        lines.push('//');
        lines.push('// ' + `${api.info.title} - ${api.info.version}`);
        lines.push('//');
        lines.push('');

        Object.entries(api.components.schemas).forEach(([key, value]) => {
            lines.push(`${key}\n\n ${JSON.stringify(value, null, 2)}\n\n`);

            // if (key.trim() === 'HALOrganizationLinks') {
            //     debugger;
            // }

            // lines.push(`export interface ${key} {`);
            // extractProps(value);
            // lines.push('}');
            // lines.push('');
        });
        writeOutputTS();
    })
    .catch(error => {
        console.error('err:', error);
    });

function calcRequiredIndicator(requiredArray, value) {
    if (requiredArray) {
        if (requiredArray.includes(value)) {
            return '';
        }
    }
    return '?';
}

function getTsType(type) {
    if (type === 'integer') {
        return 'number';
    } else if (type === 'array') {
        return '[]';
    } else {
        return type;
    }
}

function extractProps(obj, indent = '') {
    // lines.push(`${JSON.stringify(obj, null, 2)}`);
    // return;

    if (obj.properties) {
        Object.entries(obj.properties).forEach(([key, value]) => {
            if (value.type === 'object') {
                lines.push(`  ${key}${calcRequiredIndicator(obj.required, key)}: {`);
                extractProps(value, '  ');
                lines.push(`  },`);
            } else if (value.allOf) {
                lines.push(`  ${indent}${key}${calcRequiredIndicator(obj.required, key)}: {`);
                getAllOfArrayValues(value.allOf);
                lines.push(`  },`);
            } else {
                lines.push(`  ${indent}${key}${calcRequiredIndicator(obj.required, key)}: ${getTsType(value.type)};`);
            }
        });
    }

    if (obj.allOf) {
        obj.allOf.forEach(allOfItem => {
            extractProps(allOfItem);
        });
    }
}

function getAllOfArrayValues(arr) {

    arr.forEach(allOfItem => {
        extractProps(allOfItem, '  ');
    });

}

function writeOutputTS() {
    fs.writeFile(pathToDestTs, lines.join('\n'), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Wrote file: [${pathToDestTs}]`);
    });
}
