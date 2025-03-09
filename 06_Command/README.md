# 🎮 Command Pattern

## 📌 What is the Command Pattern?

The **Command Pattern** encapsulates a request as an object, allowing you to **parameterize clients**, **queue requests**, and **support undo/redo functionality**. 🕹️

It separates **what to do** from **who does it** by using **invokers, commands, and receivers**.

## 🛠️ Key Concepts:

1. **Command Interface** → Defines an action (execute/undo).
2. **Concrete Commands** → Implement the actions.
3. **Receiver** → The actual executor of the request.
4. **Invoker** → Triggers the command.
5. **Client** → Configures and assigns commands.

## 🔥 When to Use?

✅ When you need **undo/redo functionality**.  
✅ When you want to **queue or log actions**.  
✅ When you want to **decouple senders from receivers**.  
✅ When actions need to be executed **at different times**.

## 🎯 Real-World Examples:

- **Remote Controls**: Pressing buttons to trigger actions on a TV 📺
- **Text Editors**: Undo/Redo functionality 📝
- **Macro Recording**: Recording and replaying user actions 🎬

---

🔗 **Example Code:** [See Implementation](./app.ts)
