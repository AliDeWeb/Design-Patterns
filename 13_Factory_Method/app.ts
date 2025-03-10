interface Vehicle {
    drive(): void
}

abstract class VehicleFactory {
    abstract createVehicle(): Vehicle
}

class Car implements Vehicle {
    drive() {
        console.log("Driving a car");
    }
}

class Bike implements Vehicle {
    drive() {
        console.log("Riding a bike");
    }
}

class CarFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}

class BikeFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Bike();
    }
}

(() => {
    function getVehicle(factory: VehicleFactory): Vehicle {
        return factory.createVehicle();
    }

    const carFactory = new CarFactory();
    const bikeFactory = new BikeFactory();

    const car = getVehicle(carFactory);
    const bike = getVehicle(bikeFactory);

    car.drive();
    bike.drive();
})()

