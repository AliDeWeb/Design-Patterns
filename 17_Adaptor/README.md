# 🔄 Adapter Pattern

## 📌 What is the Adapter Pattern?

The **Adapter Pattern** is a **structural design pattern** that allows objects with **incompatible interfaces** to work
together. 🎭

It acts as a **bridge** between two incompatible interfaces by converting one interface into another that a client
expects.

## 🛠️ Key Concepts:

1. **Target Interface** → The expected interface used by the client.
2. **Adaptee** → The existing class with an incompatible interface.
3. **Adapter** → A wrapper that translates the Adaptee's methods to the Target Interface.

## 🔥 When to Use?

✅ When integrating **legacy code** into a new system.  
✅ When using a **third-party library** with an incompatible interface.  
✅ When you need a **wrapper** around an existing class to modify its behavior.

## 🎯 Real-World Examples:

- **Power Plug Adapters** 🔌 (Converts different plug types to fit a socket)
- **Media Converters** 🎥 (Converting .avi to .mp4 for compatibility)
- **Payment Gateway Integration** 💳 (Adapting different payment APIs to a standard interface)

---

🔗 **Example Code:** [See Implementation](./app.ts)
