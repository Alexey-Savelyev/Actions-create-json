const core = require("@actions/core");
const fs = require("fs");

const writer = require("./json-writer");

async function main()
{
    try
    {
        let file = core.getInput('file', {required: true});

        let newValues = core.getInput('value', {required: true}).split("|");
        let field = newValues[0];
        let value = newValues[1];

        console.log(`field: ${field}`);
        console.log(`value: ${value}`);

        value = JSON.parse(value);

        let data = fs.readFileSync(file, 'utf8');

        let obj = JSON.parse(data);
        
        obj = writer.write(obj, field, value);
        
        data = JSON.stringify(obj, null, 2);

        fs.writeFileSync(file, data, 'utf8');
    }
    catch (error)
    {
        core.setFailed(error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch(e =>
    {
        console.error(e);
        process.exit(1);
    });