interface Car {
    drive(): void
}

interface Bike {
    ride(): void
}

interface VehicleFactory {
    createCar(): Car

    createBike(): Bike
}

class ModernCar implements Car {
    drive() {
        console.log("Driving a modern car 🚗");
    }
}

class ClassicCar implements Car {
    drive() {
        console.log("Driving a classic car 🚘");
    }
}

class ModernBike implements Bike {
    ride() {
        console.log("Riding a modern bike 🚴");
    }
}

class ClassicBike implements Bike {
    ride() {
        console.log("Riding a classic bike 🚲");
    }
}


class ModernVehicleFactory implements VehicleFactory {
    createCar(): Car {
        return new ModernCar();
    }

    createBike(): Bike {
        return new ModernBike();
    }
}

class ClassicVehicleFactory implements VehicleFactory {
    createCar(): Car {
        return new ClassicCar();
    }

    createBike(): Bike {
        return new ClassicBike();
    }
}

(() => {
    function createVehicles(factory: VehicleFactory) {
        const car = factory.createCar();
        const bike = factory.createBike();

        car.drive();
        bike.ride();
    }

    console.log("🚗🚴 Creating Modern Vehicles:");
    createVehicles(new ModernVehicleFactory());

    console.log("\n🚘🚲 Creating Classic Vehicles:");
    createVehicles(new ClassicVehicleFactory());
})()