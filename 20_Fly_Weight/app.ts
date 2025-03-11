class TreeFlyWeight {
    public type: string
    public color: string

    constructor(type: string, color: string) {
        this.type = type
        this.color = color
    }
}

class TreeFlyweightFactory {
    private trees: { [key: string]: TreeFlyWeight } = {}

    getTree(type: string, color: string): TreeFlyWeight {
        const key = `${type}-${color}`

        if (
            !this.trees[key]) this.trees[key] = new TreeFlyWeight(type, color)

        return this.trees[key]
    }
}

(() => {
    const factory = new TreeFlyweightFactory();

    const tree1 = factory.getTree("Oak", "Green")
    const tree2 = factory.getTree("Oak", "Green")
    const tree3 = factory.getTree("Pine", "Dark Green")

    console.log(tree1, tree2, tree3)
    console.log(tree1 === tree2)
    console.log(tree1 === tree3)
})()