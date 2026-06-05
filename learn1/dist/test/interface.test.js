describe('Interface', () => {
    it('should support in typescript', () => {
        const seller = {
            id: 1,
            name: "Toplin",
            nib: "123455",
            npwp: "134551"
        };
        console.info(seller);
    });
    it('should support function interface', () => {
        ;
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', () => {
        ;
        const names = ["yaya", "yani", "yanto"];
        console.info(names);
    });
    it('should support indexable interface for non number index', () => {
        const dictionary = {
            "name": "Toplin",
            "addres": "Bandung",
        };
        expect(dictionary["name"]).toBe("Toplin");
        expect(dictionary["addres"]).toBe("Bandung");
    });
});
export {};
