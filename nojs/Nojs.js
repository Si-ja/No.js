"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor(name) {
        this.name = name;
    }
    // Print the Name of the App.
    printName() {
        console.log(`Name of this App is: ${this.name}.`);
    }
    // Get the Name of the App.
    getName() {
        return this.name;
    }
    // Initialize the No.js library for NOT building web applications.
    init() {
        throw new Error(`It seems you're trying to develop something. Don't.`);
    }
}
exports.default = App;
//# sourceMappingURL=Nojs.js.map