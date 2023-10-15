import { sayHello } from '../src/1.say-hello';
describe("If statement", () => {
    it("should support in typescript", () => {

        const examValue = 100;

        if (examValue >= 90) {
            console.log("A");
        } else if (examValue >= 80) {
            console.log("B");
        } else if (examValue >= 70) {
            console.log("C");
        } else if (examValue >= 60) {
            console.log("D");
        } else {
            console.log("E");
        }

    });

    it("should support ternary operator", () => {

        const value = 80;
        const say = value >= 75 ? "Congratulation" : "Try Again";
        console.log(say);


    });

    it("should support switch case", () => {

        function sayHello(name: string): string {
            switch (name) {
                case "Eko":
                    return "Hello Eko";
                    break;
                case "Budi":
                    return "Hello Budi";
                    break;
                default:
                    return "Hello";
                    break;
            }
        }

        console.log(sayHello("Eko"));
        console.log(sayHello("Budi"));
        console.log(sayHello("Joko"));

    })
})