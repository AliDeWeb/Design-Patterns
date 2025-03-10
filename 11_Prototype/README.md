# 🔄 Prototype Pattern

## 📌 What is the Prototype Pattern?

The **Prototype Pattern** allows you to **create new objects** by copying an existing object, known as the **prototype**, rather than creating a new instance from scratch. This is particularly useful when object creation is costly or complex. 🏗️

It promotes **reusability** and **efficiency** by enabling the creation of new objects based on existing ones, reducing the need for repeated instantiation.

## 🛠️ Key Concepts:

1. **Prototype** → Defines a method for cloning itself to create new instances.
2. **Client** → Requests new objects by copying the prototype.
3. **Clone** → The process of creating a copy of an object.

## 🔥 When to Use?

✅ When you need to **create similar objects** without hardcoding all the details.  
✅ When object creation is **expensive** or complex and you need to reuse existing configurations.  
✅ When you want to maintain an object without re-initializing it from scratch every time.

## 🎯 Real-World Examples:

- **UI Components**: Reusing button, card, or form elements with slight variations. 🖼️
- **Game Development**: Cloning characters or objects in a game with minor modifications. 🎮
- **Document Templates**: Duplicating documents with predefined settings and content. 📄

---

🔗 **Example Code:** [See Implementation](./app.ts)