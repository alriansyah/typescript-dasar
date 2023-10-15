import { sayHello } from "../src/1.say-hello";

describe("Optional", () => {
    it("should support null and undefined", () => {

        function sayHello(name?: string | null) {
            if (name) {
                console.log(`Hello ${name}`);
            } else {
                console.log("Hello");
            }
        }

        sayHello("Eko");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);

    });
});