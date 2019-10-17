const yaml = require('js-yaml');
const fs = require('fs');

try {
    const api = yaml.safeLoad(fs.readFileSync('./api/OrganizationManagementAPI.yml', 'utf8'));
    console.log(api);
    debugger;
    Object.entries(api.components.schemas).forEach(([key, value]) => {
        console.log(`${key}\n\n ${JSON.stringify(value, null, 2)}\n\n`);
    });

} catch (e) {
    console.log(e);
}
