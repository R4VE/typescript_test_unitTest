describe('Object', () => {
    it('should support in typescript', () => {
        
        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Toplin"
        };

        console.info(person);

        person.id = "2";
        person.name = "Yono";

        console.info(person);
        
    });
});