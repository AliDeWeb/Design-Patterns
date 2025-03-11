# 🎨 Decorator Pattern

## 📌 What is the Decorator Pattern?

The **Decorator Pattern** is a **structural design pattern** that allows behavior to be dynamically added to an object *
*without modifying its original class**.

It wraps an object inside another object (the decorator), which enhances or modifies its behavior **at runtime**.

## 🛠️ Key Concepts:

1. **Component** → The base interface or abstract class.
2. **Concrete Component** → The main class that implements the component.
3. **Decorator** → A wrapper class that adds new functionality.
4. **Concrete Decorators** → Actual implementations that extend functionality.

## 🔥 When to Use?

✅ When you need to **dynamically modify** an object’s behavior.  
✅ When **subclassing** is not a flexible option.  
✅ When you need to **layer multiple enhancements** on an object.

## 🎯 Real-World Examples:

- **Text Formatting** ✍️ (Adding bold, italic, or underline styles to text dynamically)
- **Logging** 📜 (Adding extra logging functionality to existing classes)
- **Coffee Shop Orders** ☕ (Adding extra ingredients dynamically to a base coffee order)

## 💡 Benefits:

✔ **Open/Closed Principle** – You can extend functionality **without modifying** existing code.  
✔ **Flexible Composition** – You can combine multiple decorators in different ways.  
✔ **Runtime Behavior Change** – New functionality can be added **on the fly**.

---

🔗 **Example Code:** [See Implementation](./app.ts)
