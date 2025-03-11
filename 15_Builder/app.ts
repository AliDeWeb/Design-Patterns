interface Product {
    name: string
    price: number
    category: string

    setName(name: string): Product

    setPrice(price: number): Product

    setCategory(category: string): Product
}

class ProductBuilder implements Product {
    name: string
    price: number
    category: string

    setName(name: string): Product {
        this.name = name
        return this
    }

    setPrice(price: number): Product {
        this.price = price
        return this
    }

    setCategory(category: string): Product {
        this.category = category
        return this
    }
}

(() => {
    const product = new ProductBuilder()
    product.setName("Laptop").setPrice(50.46).setCategory("Electronic")

    console.log(product)
})()