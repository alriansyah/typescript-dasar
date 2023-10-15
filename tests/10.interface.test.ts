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
})