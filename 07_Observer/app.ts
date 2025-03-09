interface WeatherDisplay {
  update(): void;
}

abstract class WeatherStation {
  private observers: WeatherDisplay[] = [];

  addObserver(observer: WeatherDisplay) {
    this.observers.push(observer);
  }

  removeObserver(observer: WeatherDisplay) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify() {
    this.observers.forEach((obs) => {
      obs.update();
    });
  }
}

class ConcreteWeatherStation extends WeatherStation {
  private temperature: number = 0;

  getTemperature() {
    return this.temperature;
  }

  setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notify();
  }
}

class DisplayTemperature implements WeatherDisplay {
  private name: string;
  private concrete: ConcreteWeatherStation;

  constructor(name: string, concrete: ConcreteWeatherStation) {
    this.name = name;
    this.concrete = concrete;
  }

  update(): void {
    console.log(
      `${this.name} Temperature changed to ${this.concrete.getTemperature()}`
    );
  }
}

(() => {
  const concreteWeatherStation = new ConcreteWeatherStation();

  const device1 = new DisplayTemperature("Device 1", concreteWeatherStation);

  concreteWeatherStation.addObserver(device1);

  concreteWeatherStation.setTemperature(5);
})();
