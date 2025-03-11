# 🎨 Flyweight Pattern

## 📌 What is the Flyweight Pattern?

The **Flyweight Pattern** is a **structural design pattern** that reduces the number of objects created by sharing
common objects across multiple contexts. Instead of creating a new object every time, the Flyweight pattern ensures that
similar objects are shared, thereby reducing memory usage and improving performance.

## 🛠️ Key Concepts:

1. **Flyweight** → The shared object that represents a part of the state of the object, which can be reused across
   different contexts.
2. **Intrinsic State** → The part of the object’s state that is shared and doesn't change across contexts.
3. **Extrinsic State** → The part of the object’s state that can change and is passed to the Flyweight as parameters
   when needed.
4. **Flyweight Factory** → The class responsible for creating and managing Flyweight objects. It ensures that only one
   instance of a Flyweight is created for each shared state.

## 🔥 When to Use?

✅ When your application creates a large number of objects, many of which have similar data.  
✅ When you need to **minimize memory usage** by sharing common data between objects.  
✅ When the objects are mostly immutable, and only some data varies.

## 🎯 Real-World Examples:

- **Text Rendering** 📝 (Reusing characters or symbols in a large text document to save memory)
- **Game Objects** 🎮 (Reusing common objects like trees, rocks, or enemies in a game world)
- **Database Connections** 💻 (Reusing database connection objects that share common configuration)

## 💡 Benefits:

✔ **Memory Efficiency** – Reduces memory consumption by sharing common objects.  
✔ **Improved Performance** – Reduces the overhead of creating and managing many similar objects.  
✔ **Encapsulation of State** – Separates shared and unique states, ensuring that only necessary information is stored.

---

🔗 **Example Code:** [See Implementation](./app.ts) 

