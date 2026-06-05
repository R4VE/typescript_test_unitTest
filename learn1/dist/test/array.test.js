describe('Array', () => {
    it('should same with javascript', () => {
        const names = ["lala", "lolo", "lili"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', () => {
        const hobbies = ["membaca", "menulis", "nyanyi"];
        console.info(hobbies);
        // hobbies[0] = "Turu";
    });
    it('support tupple', () => {
        const person = ["toplin", "lala", 22];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = 0;
    });
});
export {};
