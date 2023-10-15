import { sayHello } from "../src/1.say-hello";

describe("sayHello", () => {
    it("should return hello eko", () => {
        expect(sayHello("eko")).toBe("Hello eko");
    })
})