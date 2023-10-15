import { Seller } from "../src/4.seller";
import { Employee, Manager } from "../src/5.employee";
import { sayHello } from '../src/1.say-hello';
import { Person } from "../src/6.Person";

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

    it("should support indextable interface", () => {

        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Eko", "Kurniawan", "Khannedy"];
        console.log(names);


    })

    it("should support indextable interface for non number index", () => {

        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "Eko",
            "address": "Surabaya"
        }

        expect(dictionary["name"]).toBe("Eko");
        expect(dictionary["address"]).toBe("Surabaya");
    })

    it("should support extends interface", () => {

        const employee: Employee = {
            id: "1",
            name: "Eko",
            division: "IT"
        }
        console.log(employee);

        const manager: Manager = {
            id: "1",
            name: "Eko",
            division: "IT",
            numberOfEmployees: 10
        }
        console.log(manager);

    })

    it("should support function in interface", () => {

        const person: Person = {
            name: "Eko",
            sayHello(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.log(person.sayHello("Al Riansyah"));


    });

    it("should support intersection types", () => {

        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }

        type Domain = HasName & HasId;

        const domain: Domain = {
            id: "1",
            name: "Eko"
        }

        console.log(domain);

    })
    it("should support type assertions", () => {

        const person: any = {
            name: "Eko",
            age: 30
        }

        const person2: Person = person as Person;
        // person2.sayHello("Al Riansyah");

        console.log(person2);
        
    })
})