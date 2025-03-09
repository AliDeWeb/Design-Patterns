# 🏗️ Template Method Pattern

## 📌 What is Template Method?

The **Template Method Pattern** defines the **skeleton of an algorithm** in a base class but lets subclasses **override specific steps** without modifying the overall structure. 🚀

It follows the **Hollywood Principle:**  
_"Don't call us, we'll call you!"_ 🎭

## 🛠️ Key Concepts:

1. **Abstract Base Class** → Defines the algorithm structure.
2. **Concrete Subclasses** → Implement the variable steps.
3. **Hook Methods** → Allow optional overriding.

## 🔥 When to Use?

✅ When you have an algorithm with **common structure** but **variable steps**.  
✅ When you want to enforce **code reusability** and **consistency**.  
✅ When different implementations **share core logic** but differ in details.

## 🎯 Real-World Examples:

- **Game AI**: Different enemy behaviors with a shared decision-making process. 🎮
- **Data Parsers**: A CSV and JSON parser with common parsing logic. 📊
- **Coffee Making**: Different coffee types but the same preparation process. ☕
