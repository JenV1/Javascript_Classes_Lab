const Car = require('./Car');

const myCar = new Car("BMW", 5000, "Turbo 300");

describe('can access properties of car', () => {
    test('can access manufacturer', () => {
        expect(myCar.manufacturer).toBe("BMW");
    })
})