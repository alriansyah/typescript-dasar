describe("Object", () => {
    it("should support in typesript", () => {

        const person :{id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Eko"
        }

        console.log(person);
        person.id = "2";
        person.name = "Budi";
        console.log(person);

    });
});