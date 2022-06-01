
class Dealership {
    constructor(name, maxCarsItCanContain, carsInStock) {
        this.name = name;
        this.maxCarsItCanContain = maxCarsItCanContain;
        this.carsInStock = carsInStock;
    }

    countCarsInStock() {
        return this.carsInStock.length;
    }

    addCarToStock(car) {
        if (this.countCarsInStock() < this.maxCarsItCanContain) {
            this.carsInStock.push(car);
        }
    }

    returnAllCarManufacturers() {
        const manufacturers = this.carsInStock.map(element => element.manufacturer);
        return manufacturers;
    }

    findAllCarsWithCertainManufacturer(manufacturer) {
        return this.carsInStock.filter(element =>
             element.manufacturer === manufacturer);
    }

    totalValueOfCars() {
        const initialValue = 0;
        const priceArray = this.carsInStock.map(element => element.price);
        return priceArray.reduce(
            (previousValue, currentValue) => currentValue + previousValue,
             initialValue);
        
    }
}


module.exports = Dealership;