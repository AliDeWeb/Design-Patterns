# 🔄 Singleton Pattern

## 📌 What is the Singleton Pattern?

The **Singleton Pattern** ensures that a class has **only one instance** and provides a global point of access to it. It
is typically used when you need to **restrict the instantiation** of a class to just one object, ensuring that the
instance is shared throughout the application. 🏗️

It helps in managing **global state** and **resource control**, such as database connections, logging, or
configurations.

## 🛠️ Key Concepts:

1. **Singleton Class** → Ensures only one instance is created.
2. **Private Constructor** → Prevents instantiation outside the class.
3. **Global Access** → Provides a global point of access to the single instance.

## 🔥 When to Use?

✅ When you need to **control access** to shared resources like configurations or database connections.  
✅ When it is necessary to **limit the instantiation** of a class to one object to ensure global consistency.  
✅ When you want to **ensure there is only one instance** of a class in the entire application (e.g., logging, thread
pools).

## 🎯 Real-World Examples:

- **Database Connections**: A single connection instance shared throughout an application. 🗃️
- **Logging Systems**: A single logger instance used across multiple modules or components. 📝
- **Configuration Manager**: A centralized configuration object used throughout an application. ⚙️

---

🔗 **Example Code:** [See Implementation](./app.ts)