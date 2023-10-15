import { Category, Product } from '../src/2.type-alias';

describe("Type Alias", () => {
    it("should support in type", () => {

        const category: Category = {
            id: 1,
            name: "Eko",
        }

        const product: Product = {
            id: "1",
            name: "Samsung Galaxy S23 Ultra",
            price: 23000000,
            category: category
        }

        console.log(product);
        console.log(category); 

    });
});