import { CustomerType, type Customer } from "../src/enum";

describe('Enum', () => {
    it('should support typescript', () => {
        
        const customer: Customer = {
            id:1,
            name: "toplin",
            type: CustomerType.PLATINUM,
        };

        console.info(customer);

    });
});