# 🔄 Factory Pattern

## 📌 What is the Factory Pattern?

The **Factory Pattern** defines an **interface** for creating objects, but it allows **subclasses** or other parts of
the code to decide which class to instantiate. Instead of directly creating instances, the pattern delegates the
creation of objects to a factory method. 🏗️

This pattern helps to **encapsulate the object creation process**, promoting flexibility and making it easier to **swap
** object types or extend functionality without modifying the code that uses them.

## 🛠️ Key Concepts:

1. **Factory Method** → Defines the method responsible for creating objects.
2. **Product** → Represents the objects created by the factory.
3. **Concrete Factory** → Implements the factory method to instantiate specific product classes.

## 🔥 When to Use?

✅ When the object creation process is **complex** or requires various configurations.  
✅ When you want to **decouple** the client code from the object creation logic.  
✅ When you need to create **families of related objects** or have variations in product types.

## 🎯 Real-World Examples:

- **Vehicle Production**: A factory that produces different types of vehicles (cars, trucks, bikes) based on the input.
  🚗
- **UI Elements**: A factory that creates different UI components like buttons, text boxes, or sliders depending on the
  platform. 🖥️
- **Database Connections**: A factory that provides database connection objects depending on the type of database (
  MySQL, PostgreSQL, etc.). 🗄️

---

🔗 **Example Code:** [See Implementation](./app.ts)