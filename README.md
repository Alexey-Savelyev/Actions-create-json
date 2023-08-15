# GitHub Action - Upsert JSON values

This GitHub Action helps to create a JSON file


## Usage

Add this step in your workflow file
```yaml
    -   name: Create JSON
    uses: Alexey-Savelyev/Actions-create-json@v1.0.0
        with:
            name: "credentials.json"
            json: ${{ secrets.MY_JSON }}
            dir: 'src/'
```

Or just declare a string of a json on the property `json` like:

```yaml
    -   name: Create JSON
    uses: Alexey-Savelyev/Actions-create-json@v1.0.0
        with:
            name: "new-json-file.json"
            json: '{"name":"jsdaniell", "password":"mypass"}'
            dir: 'src/'
```

### Input Variables

- `file`: The name of the file to be written (e.g. 'settings.json')
- `json`: The JSON string that can be a secret of the github repo or a string of a JSON (e.g. '{ 'key1': 'value1' }')
- `dir`: Optional subfolder directory to save the json file (e.g. src/)


## Credits

This repo was forked and modified. original - https://github.com/jsdaniell/create-json