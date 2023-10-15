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
})