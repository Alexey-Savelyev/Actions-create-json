function write(obj, field, value)
{
    const root = obj;

    const fieldParts = field.split(".");

    fieldParts.forEach((fieldPart, index) =>
    {
        if (index === fieldParts.length - 1)
        {
            obj[fieldPart] = value;
        }
        else
        {
            obj[fieldPart] = obj[fieldPart] || {}
            obj = obj[fieldPart];
        }
    });

    return root;
}

module.exports = { write }