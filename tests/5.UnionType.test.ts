describe("Union Type", () => {
    it("should support union type", () => {

        let sample: string | number | boolean = "Eko";
        console.log(sample);

        sample = 100;
        console.log(sample);

        sample = true;
        console.log(sample);

    });

    it("should support typeof operator", () => {

        function process(value: string | number | boolean) {
            if (typeof value === "string") {
                return value.toLocaleUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Eko")).toBe("EKO");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    })
})