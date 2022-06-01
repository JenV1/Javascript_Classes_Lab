const Car = require('./Car');
const Dealership = require('./Dealership');
const Customer = require('./Customer');

const myCar = new Car("BMW", 5000, "Turbo 300");
const theirCar = new Car("Ford", 1000, "Med 10");
const addedCar = new Car("BMW", 10000, "Super 3000");
const extraCar = new Car("Mercedez", 10000, "Fly 10");

const dealership = new Dealership("Cars Are Us", 3, [myCar, theirCar]);

const customer = new Customer("Amy", 7000);

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

    test('check you cannot go over the max car number', () => {
        dealership.addCarToStock(extraCar);
        expect(dealership.countCarsInStock()).toBe(3);
    })

    test('check return all manufacturers function', () => {
        expect(dealership.returnAllCarManufacturers()).toStrictEqual(
            ["BMW", "Ford", "BMW"]);
    })

    test('check return all cars of a given manufacturer function', () => {
        expect(dealership.findAllCarsWithCertainManufacturer("BMW")).toStrictEqual(
            [myCar, addedCar]
        );
    })

    test('check total values of cars function', () => {
        expect(dealership.totalValueOfCars()).toBe(16000);
    })
})

describe('customer class method checks', () => {
    test('customer cannot buy a car not in the dealership', () => {
        expect(customer.buyCar(dealership, extraCar)).tobeNull;
    })

    test('customer cannot buy a car they cannot afford', () => {
        expect(customer.buyCar(dealership, addedCar)).tobeNull;
    })

    test('customer can buy an appropriate car', () => {
        customer.buyCar(dealership, myCar);
        expect(customer.car).toBe(myCar);
        expect(dealership.carsInStock.includes(myCar)).toBeFalse;
    })
})