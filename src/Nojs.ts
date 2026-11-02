export default class App {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    // Print the Name of the App.
    public printName() {
        console.log(`Name of this App is: ${this.name}.`);
    }

    // Get the Name of the App.
    public getName() : string {
        return this.name;
    }

    // Initialize the No.js library for NOT building web applications.
    public init() {
        throw new Error(`It seems you're trying to develop something. Don't.`);
    }
}