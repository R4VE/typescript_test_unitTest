import { sayHello } from "../src/say-hello"

describe('sayHello', function () {
    it('should return hello toplin', function () {
        expect(sayHello('toplin')).toBe('Hello toplin');
    })
})