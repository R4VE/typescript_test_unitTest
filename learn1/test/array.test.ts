describe('Array', () => {
   it('should same with javascript', () => {
      const names: string[] = ["lala", "lolo", "lili"];
      const values: number[] = [1,2,3];

      console.info(names);
      console.info(values);
   });

   it('should support readonly array', () => {
      const hobbies: ReadonlyArray<string> = ["membaca", "menulis", "nyanyi"];
      console.info(hobbies);

      // hobbies[0] = "Turu";

   });

   it('support tupple', () => {
      const person: readonly [string, string, number] = ["toplin", "lala", 22];
      console.info(person[0]);
      console.info(person[1]);
      console.info(person[2]);

      // person[0] = 0;

   });

})