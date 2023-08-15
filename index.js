const core = require("@actions/core");
const fs = require("fs");

const writer = require("./json-writer");

async function main()
{
    try
    {
        let file = core.getInput('file', {required: true});

        let value = core.getInput('value', {required: true}).split("|");
        let field = value[0];

        console.log(`value: ${value}`);
        console.log(`field: ${field}`);
        
        value = JSON.parse(value[1]);

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