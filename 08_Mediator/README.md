# 🔄 Mediator Pattern

## 📌 What is the Mediator Pattern?

The **Mediator Pattern** defines an object (**Mediator**) that encapsulates how a set of objects (**Colleagues**) interact with each other. Instead of objects communicating **directly**, they interact **through the mediator**, reducing dependencies between them. 🔄

This pattern promotes **loose coupling** by centralizing communication logic in a single place. 🏗️

## 🛠️ Key Concepts:

1. **Mediator** → Defines communication rules between objects.
2. **Concrete Mediator** → Manages object interactions.
3. **Colleagues** → Objects that rely on the mediator to communicate.

## 🔥 When to Use?

✅ When multiple objects interact **frequently**, causing a **complex dependency graph**.  
✅ When you want to **centralize communication logic** and **reduce coupling**.  
✅ When you need to simplify **event-driven interactions**.

## 🎯 Real-World Examples:

- **Chat Rooms**: Users communicate via a chat server 💬
- **Air Traffic Control**: Pilots communicate through a control tower ✈️
- **UI Components**: Buttons, forms, and dialogs interact via a central manager 🎛️

---

🔗 **Example Code:** [See Implementation](./mediator.ts)
