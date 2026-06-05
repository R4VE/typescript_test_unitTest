describe('Optional parameter', () => {
    it('should support null and undefined', () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello('Toplin');
        const name = undefined;
        sayHello(name);
    });
});
export {};
