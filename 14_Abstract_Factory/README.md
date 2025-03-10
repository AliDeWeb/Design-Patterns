# 🔄 Abstract Factory Pattern

## 📌 What is the Abstract Factory Pattern?

The **Abstract Factory Pattern** provides an **interface for creating families of related objects** without specifying their concrete classes. Unlike the **Factory Method Pattern**, which creates a single product, an **Abstract Factory** creates multiple related objects. 🏗️

This pattern promotes **loose coupling** and ensures that a group of objects are created together while maintaining consistency across them.

## 🛠️ Key Concepts:

1. **Abstract Factory** → Defines an interface for creating families of related objects.
2. **Concrete Factory** → Implements the abstract factory to create specific product families.
3. **Abstract Product** → Defines an interface for each type of product.
4. **Concrete Product** → Implements a specific variant of the product.

## 🔥 When to Use?

✅ When you need to ensure that **related objects are created together** while maintaining consistency.  
✅ When the system should be **independent of how objects are created, composed, and represented**.  
✅ When there are **multiple product families**, and you want to enforce using only one family at a time.

## 🎯 Real-World Examples:

- **UI Themes**: Creating related UI components (buttons, text boxes, checkboxes) for a dark mode or light mode. 🎨
- **Cross-Platform Development**: Providing factories that generate UI elements for Windows, macOS, or Linux. 💻
- **Database Drivers**: A factory that produces SQL and NoSQL database connectors while maintaining consistency. 🗄️

---

🔗 **Example Code:** [See Implementation](./app.ts)