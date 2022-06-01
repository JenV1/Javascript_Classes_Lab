const Car = require('./Car');
const Dealership = require('./Dealership');

const myCar = new Car("BMW", 5000, "Turbo 300");
const theirCar = new Car("Ford", 1000, "Med 10");
const addedCar = new Car("BMW", 10000, "Super 3000");

const dealership = new Dealership("Cars Are Us", 100, [myCar, theirCar]);

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

describe('dealership method tests', () => {
    test('check number of cars in stock works', () => {
        expect(dealership.countCarsInStock()).toBe(2);
    })

    test('check you can add a car to stock', () => {
        dealership.addCarToStock(addedCar);
        expect(dealership.countCarsInStock()).toBe(3);
    })
})