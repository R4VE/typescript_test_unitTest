import type { Seller } from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        
        const seller: Seller = {
            id: 1,
            name: "Toplin",
            nib: "123455",
            npwp: "134551"
        };

    

        console.info(seller);

    });

    it('should support function interface', () => {
        
        interface  AddFunction {
            (value1: number, value2: number): number;
        };

        const  add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);

        

    });

    it('should support indexable interface', () => {
        
        interface StringArray {
            [index: number]: string
        };

        const names : StringArray = ["yaya", "yani", "yanto"];

        console.info(names);

    });

    it('should support indexable interface for non number index', () => {
        
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name" : "Toplin",
            "addres": "Bandung",

        };

        expect(dictionary["name"]).toBe("Toplin");
        expect(dictionary["addres"]).toBe("Bandung");

    });

});