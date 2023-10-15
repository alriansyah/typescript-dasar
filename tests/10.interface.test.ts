import { Seller } from "../src/4.seller";

describe("Interface", () => {
    it("should support in typescript", () => {

        const seller: Seller = {
            id: 1,
            name: "eko",
            nib: "123",
            npwp: "456"
        }


        console.log(seller);
        seller.name = "budi";
        console.log(seller);

    });

    it("should supportfunction interface", () => {

        interface AddFunction {
            (value1: number, value2: number): number; // (parameter1, parameter2) => tipe return value
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1, 2)).toBe(3);

    })
})