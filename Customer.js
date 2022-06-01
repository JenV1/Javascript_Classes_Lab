class Customer {
    constructor(name, wallet) {
        this.name = name;
        this.wallet = wallet;
        this.car = null;
    }

    buyCar(dealership, car) {
        if (this.wallet >= car.price && dealership.carsInStock.includes(car)) {
            this.car = car; 
            const isCar = (element) => element === car;
            const indexOfCar = dealership.carsInStock.findIndex(isCar);
            dealership.carsInStock.splice(indexOfCar, 1);
        }
    }
}

module.exports = Customer;