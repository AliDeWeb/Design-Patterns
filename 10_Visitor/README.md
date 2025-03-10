# 🔄 Visitor Pattern

## 📌 What is the Visitor Pattern?

The **Visitor Pattern** allows you to **add new operations** to existing object structures **without modifying their
classes**. 🏗️

It separates **algorithm logic** from object structure, making it easier to **extend functionality** while following the
**Open/Closed Principle (OCP)**. 🔓

## 🛠️ Key Concepts:

1. **Visitor** → Defines operations to perform on elements.
2. **Element** → Accepts a visitor to apply operations.
3. **Double Dispatch** → Ensures the correct method is called for the object type.

## 🔥 When to Use?

✅ When you need to **add behaviors** to existing classes **without modifying them**.  
✅ When you want to apply **different operations** on elements of a complex object structure.  
✅ When dealing with **complex hierarchies** where new operations are frequently added.

## 🎯 Real-World Examples:

- **Compilers**: Different visitors analyze or optimize code 🖥️
- **Tax Calculators**: Different tax rules for various item types 💰
- **AST (Abstract Syntax Tree)**: Processing syntax trees in programming languages 📜

---

🔗 **Example Code:** [See Implementation](./app.ts)
