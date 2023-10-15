describe("Array", () => {
    it("should same with javascript", () => {

        const names:string[] = ["eko", "budi", "jok0"];
        const values:number[] = [1, 2, 3, 4, 5];

        console.log(names);
        console.log(values);

    });

    it("should support readonly array", () => {
        
        const hobies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.log(hobies);
        console.log(hobies[0]);
        console.log(hobies[1]);
        
        // hobies[0] = "Coding";

    });
});