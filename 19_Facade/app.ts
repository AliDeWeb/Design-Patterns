class Amplifier {
    turnOn() {
        console.log("Amplifier turned on");
    }
}

class DVDPlayer {
    turnOn() {
        console.log("DVDPlayer turned on");
    }
}

class Lights {
    brightness() {
        console.log("lights brightness");
    }
}

class HomeTheaterFacade {
    private amp: Amplifier;
    private dvd: DVDPlayer;
    private lights: Lights;

    constructor() {
        this.amp = new Amplifier();
        this.dvd = new DVDPlayer();
        this.lights = new Lights();
    }

    watchMovie() {
        console.log("Processing");
        this.amp.turnOn();
        this.dvd.turnOn();
        this.lights.brightness();
        console.log("Movie started");
    }
}

(() => {
    const homeTheater = new HomeTheaterFacade();
    homeTheater.watchMovie();
})()
