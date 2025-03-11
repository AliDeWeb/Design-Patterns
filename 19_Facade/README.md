# 🎨 Facade Pattern

## 📌 What is the Facade Pattern?

The **Facade Pattern** is a **structural design pattern** that provides a simplified interface to a complex subsystem of
classes. It acts as a **wrapper** that hides the complexities of the subsystem and provides an easy-to-use interface to
the client.

## 🛠️ Key Concepts:

1. **Facade** → A simplified interface that aggregates and exposes methods of a set of classes.
2. **Subsystem Classes** → The complex classes that are hidden behind the facade and perform the actual work.
3. **Client** → The user of the Facade, which interacts with the simplified interface.

## 🔥 When to Use?

✅ When you need to **simplify a complex system** and provide a more user-friendly interface.  
✅ When you want to **decouple** a client from the subsystem.  
✅ When the subsystem is too complex or has too many interdependencies, and you want to hide that complexity.

## 🎯 Real-World Examples:

- **Home Theater System** 🎥 (A simplified remote control interface to manage TV, speakers, DVD players, etc.)
- **Online Shopping** 🛒 (Providing a simplified checkout process by hiding the complexity of payment, shipping, and
  inventory systems)
- **Banking Systems** 🏦 (A unified interface to access account services, loan systems, and credit card information)

## 💡 Benefits:

✔ **Simplifies Interface** – Reduces the number of classes and methods the client needs to interact with.  
✔ **Loose Coupling** – Decouples the client from the subsystem, making the system easier to maintain.  
✔ **Flexibility** – Allows for easier substitution of different subsystems without affecting the client.

---

🔗 **Example Code:** [See Implementation](./app.ts) 

