import { sayHello } from '../src/1.say-hello';
describe("Function", () => {
    it("should support in typescript", () => {
        
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Eko")).toBe("Hello Eko");

        function printHello(name: string): void {
            console.log(`Hello ${name}`);
        }

        printHello("Eko");

    })
})