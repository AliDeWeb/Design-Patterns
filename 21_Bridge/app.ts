interface OperatingSystem {
    drawButton(x: number, y: number, width: number, height: number, text: string): void

    drawWindow(x: number, y: number, width: number, height: number, text: string): void
}

abstract class UIElement {
    protected os: OperatingSystem

    protected constructor(os: OperatingSystem) {
        this.os = os;
    }

    abstract draw(): void
}

class WindowsOS implements OperatingSystem {
    drawButton(x: number, y: number, width: number, height: number, text: string): void {
        console.log(`Windows: Drawing Button at (${x}, ${y}) with size ${width}x${height} and text "${text}"`);
    }

    drawWindow(x: number, y: number, width: number, height: number, title: string): void {
        console.log(`Windows: Drawing Window at (${x}, ${y}) with size ${width}x${height} and title "${title}"`);
    }
}

class MacOS implements OperatingSystem {
    drawButton(x: number, y: number, width: number, height: number, text: string): void {
        console.log(`MacOS: Drawing Button at (${x}, ${y}) with size ${width}x${height} and text "${text}"`);
    }

    drawWindow(x: number, y: number, width: number, height: number, title: string): void {
        console.log(`MacOS: Drawing Window at (${x}, ${y}) with size ${width}x${height} and title "${title}"`);
    }
}

class LinuxOS implements OperatingSystem {
    drawButton(x: number, y: number, width: number, height: number, text: string): void {
        console.log(`Linux: Drawing Button at (${x}, ${y}) with size ${width}x${height} and text "${text}"`);
    }

    drawWindow(x: number, y: number, width: number, height: number, title: string): void {
        console.log(`Linux: Drawing Window at (${x}, ${y}) with size ${width}x${height} and title "${title}"`);
    }
}

class ButtonElement extends UIElement {
    private readonly x: number;
    private readonly y: number;
    private readonly width: number;
    private readonly height: number;
    private readonly text: string;

    constructor(os: OperatingSystem, x: number, y: number, width: number, height: number, text: string) {
        super(os);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }

    draw(): void {
        this.os.drawButton(this.x, this.y, this.width, this.height, this.text);
    }
}

class WindowElement extends UIElement {
    private readonly x: number;
    private readonly y: number;
    private readonly width: number;
    private readonly height: number;
    private readonly title: string;

    constructor(os: OperatingSystem, x: number, y: number, width: number, height: number, title: string) {
        super(os);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.title = title;
    }

    draw(): void {
        this.os.drawWindow(this.x, this.y, this.width, this.height, this.title);
    }
}

(() => {
    function clientCode(uiElement: UIElement): void {
        uiElement.draw();
    }

    const windowsOS = new WindowsOS();
    const macOS = new MacOS();
    const linuxOS = new LinuxOS();

    const windowsButton = new ButtonElement(windowsOS, 10, 10, 50, 20, "Click me");
    const macOSButton = new ButtonElement(macOS, 10, 10, 50, 20, "Click me");
    const linuxButton = new ButtonElement(linuxOS, 10, 10, 50, 20, "Click me");

    const windowsWindow = new WindowElement(windowsOS, 50, 50, 200, 150, "My Window");
    const macOSWindow = new WindowElement(macOS, 50, 50, 200, 150, "My Window");
    const linuxWindow = new WindowElement(linuxOS, 50, 50, 200, 150, "My Window");

    clientCode(windowsButton);
    clientCode(macOSButton);
    clientCode(linuxButton);

    clientCode(windowsWindow);
    clientCode(macOSWindow);
    clientCode(linuxWindow);
})()
