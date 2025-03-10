class Config {
    private static instance: Config = new Config();
    private readonly configs: { key: string, value: string }[] = []

    static getInstance() {
        return Config.instance;
    }

    private constructor() {
    }

    set(key: string, value: string) {
        this.configs.push({key, value});
    }

    get(key: string) {
        for (const object of this.configs) {
            if (object.key === key) return object.value
        }
    }
}

(() => {
    const config = Config.getInstance()
    config.set("name", "Design Patterns")
    console.log(config.get("name"))
})()