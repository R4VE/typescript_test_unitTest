import type { Category, Product } from "../src/type-alias";

describe('Type of Alias', () => {
    it('should supoort in tpescript', () => {
        
        const category: Category = {
            id: "1",
            name: "handphone"
        };

        const product: Product = {
            id: "1",
            name: "Samsung s20",
            price: 2000000,
            category: category
        };

        console.info(category);
        console.info(product);
        
    });
});