import { CustomerType } from "../src/enum";
describe('Enum', () => {
    it('should support typescript', () => {
        const customer = {
            id: 1,
            name: "toplin",
            type: CustomerType.PLATINUM,
        };
        console.info(customer);
    });
});
