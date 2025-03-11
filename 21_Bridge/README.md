# 🌉 Bridge Pattern

## 📌 What is the Bridge Pattern?

The **Bridge Pattern** is a **structural design pattern** that decouples an abstraction from its implementation so that the
two can vary independently. It allows you to vary the abstraction and the implementation without affecting each other,
creating a bridge between them.

## 🛠️ Key Concepts:

1. **Abstraction** → Defines the high-level control logic. It maintains a reference to an object of type `Implementation`.
2. **Refined Abstraction** → Extends the `Abstraction` and provides more specialized control logic.
3. **Implementation** → Defines the interface for implementation classes. This interface doesn't need to match the
   `Abstraction` interface; in fact, they can be very different. The `Abstraction` should only communicate with the
   `Implementation` via the `Implementation` interface.
4. **Concrete Implementation** → Implements the `Implementation` interface, providing specific platform or implementation
   details.

## 🔥 When to Use?

✅ When you want to **decouple** an abstraction from its implementation so that they can evolve independently.  
✅ When you need to **avoid a permanent binding** between an abstraction and its implementation. The bridge lets you
switch implementations at runtime.  
✅ When both the **abstraction and its implementation** can have their own hierarchies, and you need to manage these
independent hierarchies.  
✅ When you want to **reduce coupling** between the client code and the implementation details.

## 🎯 Real-World Examples:

- **UI across Platforms** 🖥️📱 (Designing UI frameworks that work across different operating systems like Windows, macOS, Linux, or mobile platforms)
- **Remote Controls & Devices** 📺📻 (Creating a remote control abstraction that can control different types of devices like TVs, radios, etc.)
- **Drawing APIs** 🖍️ (Developing drawing APIs where the drawing logic is independent of the underlying hardware or rendering engine)

## 💡 Benefits:

✔ **Decoupling Abstraction and Implementation** – Allows you to change abstraction and implementation independently.  
✔ **Improved Extensibility** – You can extend the abstraction and implementation hierarchies independently.  
✔ **Runtime Binding of Implementation** – You can switch implementations at runtime, enhancing flexibility.  
✔ **Reduced Coupling** – Minimizes the dependency between the abstraction and concrete implementation classes, leading to cleaner design.

---

🔗 **Example Code:** [See Implementation](./app.ts)