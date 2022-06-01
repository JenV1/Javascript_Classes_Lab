const Car = require('./Car');

const myCar = new Car("BMW", 5000, "Turbo 300");

describe('can access properties of car', () => {
    test('can access manufacturer', () => {
        expect(myCar.manufacturer).toBe("BMW");
    });

    test('can access price', () => {
        expect(myCar.price).toBe(5000);
    });

    test('can access engine type', () => {
        expect(myCar.engineType).toBe("Turbo 300");
    });
})