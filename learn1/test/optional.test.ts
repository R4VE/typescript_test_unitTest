describe('Optional parameter', () => {
    it('should support null and undefined', () => {
        
        function sayHello(name?: string) {
            if(name){
                console.info(`Hello ${name}`);
            }else{
                console.info('Hello');
            }
        }

        sayHello('Toplin');
        const name: string | undefined = undefined;
        sayHello(name);

    });

    


});