# 🏗️ Composite Pattern

## 📌 What is the Composite Pattern?

The **Composite Pattern** is a structural design pattern that allows you to **treat individual objects and groups of
objects uniformly**. 🌿

It enables you to build a **tree-like structure** where both **single elements** and **groups of elements** can be
processed the same way.

## 🛠️ Key Concepts:

1. **Component** → A common interface for both simple & complex objects.
2. **Leaf** → A single object that implements the component.
3. **Composite** → A group of components (can contain other composites or leaves).

## 🔥 When to Use?

✅ When working with **hierarchical structures** (e.g., file systems, UI components).  
✅ When you need **uniform treatment** of individual & grouped objects.  
✅ When building a **recursive structure** where a group contains similar objects.

## 🎯 Real-World Examples:

- **File System**: Files & folders 📂
- **UI Components**: Buttons, panels, windows 🖥️
- **Organization Hierarchies**: Employees & managers 👥

---

🔗 **Example Code:** [See Implementation](./app.ts)
