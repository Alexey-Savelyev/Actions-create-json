# GitHub Action - Upsert JSON values

This GitHub Action helps edit a JSON file


## Usage

Add this step in your workflow file
```yaml
-   name: Fill settings.json
    uses: Alexey-Savelyev/Actions-upsert-json@v1.0.0
    with:
        file: ./settings.json
        field: "rootkey"
        value: "{ "key1": "value1", "key2": "value2" }"
```

### Input Variables

- `file`: File name to edit (e.g. 'settings.json', 'path/settings.json')
- `field`: JSON key
- `value`: JSON value string


## Credits

This repo was forked and modified. original - https://github.com/jossef/action-set-json-field