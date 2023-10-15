describe("Any", () => {
    it("should support in typescript", () => {

        const person: any = {
            id: 1,
            name: "eko",
            age: 20
        };

        person.age = 30;
        person.address = "Indonesia";

        console.log(person);

    })
});