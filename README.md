# 🐦‍🔥 Design Patterns In TS - Principles and Rules

### By Ali Moradi [AliDeWeb](https://github.com/AliDeWeb)

### Principles of Object-Oriented Programming (OOP):

1. **Encapsulation** – Bundling data and methods within a class while restricting direct access to some details.
2. **Abstraction** – Hiding complex implementation details and exposing only the necessary functionality.
3. **Inheritance** – Allowing a class to inherit properties and behaviors from another class to promote code reuse.
4. **Polymorphism** – Enabling multiple classes to be treated as instances of a common superclass, allowing method
   overriding and dynamic behavior.

---

### **SOLID Principles:**

1. **Single Responsibility Principle (SRP)** – A class should have only one reason to change, meaning it should have
   only one responsibility.
2. **Open/Closed Principle (OCP)** – Software entities should be open for extension but closed for modification.
3. **Liskov Substitution Principle (LSP)** – Subtypes must be substitutable for their base types without altering the
   correctness of the program.
4. **Interface Segregation Principle (ISP)** – Clients should not be forced to depend on interfaces they do not use.
5. **Dependency Inversion Principle (DIP)** – High-level modules should not depend on low-level modules; both should
   depend on abstractions.

---

### **Other Important Principles:**

Apart from SOLID, other key design principles in OOP include:

- **DRY (Don’t Repeat Yourself)** – Avoid duplication by abstracting reusable code.
- **KISS (Keep It Simple, Stupid)** – Keep code simple and avoid unnecessary complexity.
- **YAGNI (You Ain’t Gonna Need It)** – Don’t implement features unless absolutely necessary.
- **Law of Demeter (LoD)** – Objects should only interact with closely related objects to reduce coupling.

These principles ensure maintainability, scalability, and clean code.

## 📂 Types of Design Patterns

Design patterns are categorized into three main types:

### **1. Behavioral Patterns**

These patterns focus on communication between objects and how they interact with each other.

- **Observer** – Defines a one-to-many dependency between objects so that when one object changes state, all its
  dependents are notified.
- **Strategy** – Allows an object to change its behavior dynamically by switching between multiple algorithms.
- **Command** – Encapsulates a request as an object, allowing for parameterization of clients, queuing of requests, and
  logging of operations.

### **2. Structural Patterns**

These patterns deal with the composition of classes and objects to form larger structures while keeping them flexible
and efficient.

- **Adapter** – Bridges the gap between incompatible interfaces.
- **Decorator** – Dynamically extends the functionality of an object without modifying its code.
- **Facade** – Provides a simplified interface to a complex subsystem.

### **3. Creational Patterns**

These patterns focus on object creation mechanisms to increase flexibility and reuse.

- **Factory Method** – Provides an interface for creating objects but allows subclasses to alter the type of objects
  created.
- **Singleton** – Ensures that a class has only one instance and provides a global point of access to it.
- **Builder** – Allows the step-by-step creation of complex objects, improving readability and maintainability.

## 📂 Patterns

| Design Pattern              | Documentation                                     |
|-----------------------------|---------------------------------------------------|
| **Memento**                 | [📜 README](01_Memento/README.md)                 |
| **State**                   | [📜 README](02_State/README.md)                   |
| **Iterator**                | [📜 README](03_Iterator/README.md)                |
| **Strategy**                | [📜 README](04_Strategy/README.md)                |
| **Template Method**         | [📜 README](05_Template_Method/README.md)         |
| **Command**                 | [📜 README](06_Command/README.md)                 |
| **Observer**                | [📜 README](07_Observer/README.md)                |
| **Mediator**                | [📜 README](08_Mediator/README.md)                |
| **Chain Of Responsibility** | [📜 README](09_Chain_Of_Responsibility/README.md) |
| **Visitor**                 | [📜 README](10_Visitor/README.md)                 |
| **Prototype**               | [📜 README](11_Prototype/README.md)               |
| **Singleton**               | [📜 README](12_Singleton/README.md)               |
| **Factory Method**          | [📜 README](13_Factory_Method/README.md)          |
| **Abstract Factory**        | [📜 README](14_Abstract_Factory/README.md)        |
| **Builder**                 | [📜 README](15_Builder/README.md)                 |
| **Composite**               | [📜 README](16_Composite/README.md)               |
| **Adaptor**                 | [📜 README](17_Adaptor/README.md)                 |
| **Decorator**               | [📜 README](18_Decorator/README.md)               |
