describe('Type of Alias', () => {
    it('should supoort in tpescript', () => {
        const category = {
            id: "1",
            name: "handphone"
        };
        const product = {
            id: "1",
            name: "Samsung s20",
            price: 2000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
