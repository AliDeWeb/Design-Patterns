# 🏗️ Builder Pattern

## 📌 What is the Builder Pattern?

The **Builder Pattern** is a **creational design pattern** that allows you to **construct complex objects step by step
**. Instead of forcing a large constructor with multiple parameters, it provides a more readable and flexible way to *
*build objects progressively**.

This pattern is particularly useful when an object has **multiple optional attributes** or when you want to enforce **a
specific sequence of construction steps**. 🚀

## 🛠️ Key Concepts:

1. **Builder** → Defines a set of methods for step-by-step construction of an object.
2. **Product** → The final object that is built using the builder.
3. **Method Chaining** → Each method returns the builder itself, allowing **fluent API calls** for setting properties.

## 🔥 When to Use?

✅ When creating an object with **multiple optional parameters** leads to a messy constructor.  
✅ When you need **a clear and structured way to build different variations of an object**.  
✅ When you want to **ensure a specific sequence of initialization steps** for an object.

## 🎯 Real-World Examples:

- **Building HTTP requests** by setting headers, body, and method step by step. 🌐
- **Constructing complex game characters** with different attributes. 🎮
- **Creating UI components** that require multiple configurations. 🎨

---

🔗 **Example Code:** [See Implementation](./app.ts)