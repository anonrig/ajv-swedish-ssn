# ajv-swedish-ssn

Adds a `swedish-ssn` format to [Ajv](https://ajv.js.org).

## Install

```bash
npm i --save ajv-swedish-ssn
```

## Setup

```javascript
import Ajv from 'ajv'
import ssnValidator from 'ajv-swedish-ssn'
const ajv = new Ajv()
ssnValidator(ajv)
```

## Usage

When defining your JSON schema, use the `format` keyword with ther value set to `swedish-ssn`. For example

```json
{
  "type": "object",
  "properties": {
    "ssn": {
      "type": "string",
      "format": "swedish-ssn"
    }
  }
}
```
