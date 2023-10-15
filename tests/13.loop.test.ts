describe("Loop", () => {
    it("should support for loop", () => {

        const names: string[] = ["Eko", "Kurniawan", "Khannedy"];

        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

        for (const name of names) {
            console.log(name);

        }

        for (const index in names) {
            console.log(names[index]);
        }

    });

    it("should support while loop", () => {

        let counter = 0;
        while (counter < 10) {
            console.log(counter);
            counter++;
        }

    });

    it("should support do while loop", () => {

        let counter = 0;
        do {
            console.log(counter);
            counter++;
        } while (counter < 10);

    })
})