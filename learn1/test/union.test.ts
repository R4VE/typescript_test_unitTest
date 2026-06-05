describe('union type', () => {
    it('should be union', () => {
        let sample : number | string | boolean = "Toplin";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);
    });

    it('should support typeof operator', () => {

        function process(value: number | string | boolean) {
            if(typeof value === "string") {
                return value.toUpperCase();
            }else if(typeof value === "number") {
                return value + 2;
            }else {
                return !value;
            }
        }

        expect(process("Toplin")).toBe("TOPLIN");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
