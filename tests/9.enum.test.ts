import { Customer, CustomerType } from "../src/3.enum";

describe("Enum", () => {
    it("should support in typescript", () => {

        const customer: Customer = {
            id: 1,
            name: "Eko",
            type: CustomerType.GOLD
        }

        console.log(customer);
        

    });
})