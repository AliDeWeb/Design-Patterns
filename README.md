# 🐦‍🔥 Design Patterns In TS - Principles and Rules

### By Ali Moradi [AliDeWeb](https://github.com/AliDeWeb)

### Principles of Object-Oriented Programming (OOP):

1. **Encapsulation** – Bundling data and methods within a class while restricting direct access to some details.
2. **Abstraction** – Hiding complex implementation details and exposing only the necessary functionality.
3. **Inheritance** – Allowing a class to inherit properties and behaviors from another class to promote code reuse.
4. **Polymorphism** – Enabling multiple classes to be treated as instances of a common superclass, allowing method
   overriding and dynamic behavior.

-----

### **SOLID Principles:**

1. **Single Responsibility Principle (SRP)** – A class should have only one reason to change, meaning it should have
   only one responsibility.
2. **Open/Closed Principle (OCP)** – Software entities should be open for extension but closed for modification.
3. **Liskov Substitution Principle (LSP)** – Subtypes must be substitutable for their base types without altering the
   correctness of the program.
4. **Interface Segregation Principle (ISP)** – Clients should not be forced to depend on interfaces they do not use.
5. **Dependency Inversion Principle (DIP)** – High-level modules should not depend on low-level modules; both should
   depend on abstractions.

-----

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

| Design Pattern              | Documentation                                                                                                                                       |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Memento**                 | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=01_Memento/README.md)                 |
| **State**                   | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=02_State/README.md)                   |
| **Iterator**                | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=03_Iterator/README.md)                |
| **Strategy**                | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=04_Strategy/README.md)                |
| **Template Method**         | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=05_Template_Method/README.md)         |
| **Command**                 | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=06_Command/README.md)                 |
| **Observer**                | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=07_Observer/README.md)                |
| **Mediator**                | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=08_Mediator/README.md)                |
| **Chain Of Responsibility** | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=09_Chain_Of_Responsibility/README.md) |
| **Visitor**                 | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=10_Visitor/README.md)                 |
| **Prototype**               | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=11_Prototype/README.md)               |
| **Singleton**               | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=12_Singleton/README.md)               |
| **Factory Method**          | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=13_Factory_Method/README.md)          |
| **Abstract Factory**        | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=14_Abstract_Factory/README.md)        |
| **Builder**                 | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=15_Builder/README.md)                 |
| **Composite**               | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=16_Composite/README.md)               |
| **Adaptor**                 | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=17_Adaptor/README.md)                 |
| **Decorator**               | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=18_Decorator/README.md)               |
| **Facade**                  | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=19_Facade/README.md)                  |
| **Fly Weight**              | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=20_Fly_Weight/README.md)              |
| **Bridge**                  | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=21_Bridge/README.md)                  |
| **Proxy**                   | [📜 README](https://www.google.com/url?sa=E&source=gmail&q=https://www.google.com/url?sa=E%26source=gmail%26q=22_Proxy/README.md)                   |

-----

<div style="border: 1px solid #ccc; padding: 10px; margin-top: 20px; border-radius: 5px;">
    <h3 style="margin-top: 0;">Quick Review of Design Patterns</h3>
    <ul style="list-style: none; padding-left: 0;">
        <li><strong>Memento</strong>:  Save and restore an object's internal state without violating encapsulation.</li><br>
        <li><strong>State</strong>: Allow an object to alter its behavior when its internal state changes.</li><br>
        <li><strong>Iterator</strong>: Provide sequential access to elements of a collection object without exposing its underlying implementation.</li><br>
        <li><strong>Strategy</strong>: Define a family of algorithms, encapsulate each one, and make them interchangeable at runtime.</li><br>
        <li><strong>Template Method</strong>: Define the skeleton of an algorithm in a method, and let subclasses provide specific implementations for certain steps.</li><br>
        <li><strong>Command</strong>: Encapsulate a request as an object, thereby letting you parameterize clients with queues, requests, and operations.</li><br>
        <li><strong>Observer</strong>: Establish a one-to-many notification mechanism between objects, so that when one object changes state, all its dependents are notified automatically.</li><br>
        <li><strong>Mediator</strong>: Define an object that encapsulates how a set of objects interact, reducing direct dependencies between them.</li><br>
        <li><strong>Chain Of Responsibility</strong>: Avoid coupling the sender of a request to its receiver by giving multiple objects a chance to handle the request.</li><br>
        <li><strong>Visitor</strong>: Separate an algorithm from the object structure on which it operates, allowing addition of new operations to object structures without modifying the classes.</li><br>
        <li><strong>Prototype</strong>: Create new objects by copying an existing prototype.</li><br>
        <li><strong>Singleton</strong>: Ensure a class has only one instance and provide a global point of access to it.</li><br>
        <li><strong>Factory Method</strong>: Define an interface for creating an object, but let subclasses decide which class to instantiate.</li><br>
        <li><strong>Abstract Factory</strong>: Provide an interface for creating families of related objects without specifying their concrete classes.</li><br>
        <li><strong>Builder</strong>: Separate the construction of a complex object from its representation so that the same construction process can create different representations.</li><br>
        <li><strong>Composite</strong>: Compose objects into tree structures to represent part-whole hierarchies.</li><br>
        <li><strong>Adaptor</strong>: Convert the interface of a class into another interface clients expect, letting classes with incompatible interfaces work together.</li><br>
        <li><strong>Decorator</strong>: Attach additional responsibilities to an object dynamically.</li><br>
        <li><strong>Facade</strong>: Provide a unified interface to a set of interfaces in a subsystem.</li><br>
        <li><strong>Flyweight</strong>: Use sharing to support efficient fine-grained objects.</li><br>
        <li><strong>Bridge</strong>: Decouple an abstraction from its implementation, allowing the two to vary independently.</li><br>
        <li><strong>Proxy</strong>: Provide a surrogate or placeholder for another object to control access to it.</li>
    </ul>
</div>

