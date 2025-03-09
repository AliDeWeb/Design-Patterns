# 🔄 Chain of Responsibility Pattern

## 📌 What is the Chain of Responsibility Pattern?

The **Chain of Responsibility Pattern** is a behavioral design pattern that allows a request to be passed along a **chain of handlers**. Each handler in the chain processes the request **or passes it along** to the next handler in the chain. This pattern decouples the sender and receiver of a request and allows for dynamic changes in the chain structure. 🔄

This pattern promotes **flexibility** by allowing multiple objects to handle requests without tightly coupling the sender and receiver. 🏗️

## 🛠️ Key Concepts:

1. **Handler** → Defines an interface for handling requests and linking to the next handler in the chain.
2. **Concrete Handlers** → Handle specific types of requests and pass unhandled requests to the next handler in the chain.
3. **Client** → Initiates the request and sends it through the chain of handlers.

## 🔥 When to Use?

✅ When you want to pass a request through a **chain of objects**, allowing each object to decide whether to process the request or pass it on.  
✅ When you have a set of handlers that are **independent** and can process requests in a sequence.  
✅ When you want to **avoid tight coupling** between request senders and receivers.

## 🎯 Real-World Examples:

- **Customer Support**: Request goes through different support levels (e.g., Level 1 → Level 2 → Manager) until it is resolved 💬
- **Logging Systems**: Log messages are passed through different loggers (e.g., console, file, remote server) based on severity levels 📜
- **UI Event Handling**: Events are passed through a chain of event listeners before reaching the final target 🖱️

---

🔗 **Example Code:** [See Implementation](./app.ts)
