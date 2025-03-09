# 🔄 Observer Pattern

## 📌 What is the Observer Pattern?

The **Observer Pattern** defines a **one-to-many** dependency between objects, so when one object (**Subject**) changes state, all its **Observers** are notified **automatically**. 🔔

It promotes **loose coupling** and follows the **Publish-Subscribe model**. 📰

## 🛠️ Key Concepts:

1. **Subject (Publisher)** → Maintains a list of observers and notifies them.
2. **Observers (Subscribers)** → React to changes in the subject.
3. **Subscription Mechanism** → Observers can subscribe/unsubscribe dynamically.

## 🔥 When to Use?

✅ When multiple objects need to react to **state changes** in another object.  
✅ When you want to implement **event-driven systems**.  
✅ When you need a **decoupled notification mechanism**.

## 🎯 Real-World Examples:

- **UI Event Listeners**: Button click handlers 🎯
- **Newsletters**: Users subscribe to email updates 📩
- **Stock Market**: Investors get real-time price updates 📈

---

🔗 **Example Code:** [See Implementation](./app.ts)
