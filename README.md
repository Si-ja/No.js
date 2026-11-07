# NO.js

In a day and age of ultra optimizations, where things need to get done fast, comes a super blazing and easy to master library `NO.js`. It helps you __NOT__ develop websites even quicker. Get things NOT done as quick as possible and go out outside and enjoy NOT working for a bit.

## User Guide

### Installation
Include this library package with a desired release version in your own JavaScript/TypeScript project with the `package.json` file. Possible example:

```json
"devDependencies": {
    ...
    "nojs": "git://github.com/Si-ja/No.js.git#v0.1.1"
  }

```

### Usage
To initialize an application call the `App` class and initialize it. Possible use cases in your `index.ts` file:

```TypeScript
import App from "nojs/package/Nojs.js"

const app_name = "Your cool NOT new app name here!";
const app = new App(app_name);

console.log(app.getName());
app.init();
```

The application should successfully crash as you will atempt to run it and you will be able to stop developing and go outside.