interface Image {
    displayImage(): void;
}

class RealImage implements Image {
    private readonly filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromDisk()
    }

    private loadImageFromDisk(): void {
        console.log(`Loading image: ${this.filename}`);
    }

    displayImage(): void {
        console.log(`Displaying Real Image: ${this.filename}`);
    }
}

class ProxyImage implements Image {
    private readonly filename: string;
    private realImage: RealImage | null = null;

    constructor(filename: string) {
        this.filename = filename;
    }

    displayImage(): void {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.displayImage();
    }
}

(() => {
    function clientCode(image: Image): void {
        image.displayImage();
        image.displayImage();
    }

    let image1 = new ProxyImage("image1.jpg");
    let image2 = new ProxyImage("image2.png");

    clientCode(image1);
    clientCode(image2);
})()