interface FileSystemComponent {
    getName(): string;

    getSize(): number;
}

class FileClass implements FileSystemComponent {
    private readonly name: string
    private readonly size: number

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }
}

class FolderClass implements FileSystemComponent {
    private readonly children: FileSystemComponent[] = []
    private readonly name: string

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    addChild(child: FileSystemComponent): void {
        this.children.push(child);
    }

    getSize(): number {
        return this.children.reduce((total, child) =>
                total + child.getSize()
            , 0)
    }
}

(() => {
    const file1 = new FileClass("file1.txt", 50)
    const file2 = new FileClass("file2.txt", 100)

    const subFolder = new FolderClass("sub folder")

    const mainFolder = new FolderClass("main folder")

    mainFolder.addChild(subFolder)
    mainFolder.addChild(file1)
    subFolder.addChild(file2)
    subFolder.addChild(file1)

    console.log(mainFolder.getName())
    console.log(mainFolder.getSize())
})()
