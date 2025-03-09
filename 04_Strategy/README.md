# 🎭 Strategy Pattern

## 🔥 Overview

The **Strategy Pattern** is a behavioral design pattern that allows a class to change its behavior at runtime by switching between different algorithms or strategies. Instead of implementing multiple behaviors inside a class, it delegates the responsibility to separate strategy classes.

## 🚀 Why Use It?

- **Encapsulates algorithms** 🏗️ into interchangeable objects.
- **Promotes the Open/Closed Principle** 📜 (open for extension, closed for modification).
- **Reduces code duplication** ✂️ by separating concerns.

## 🎯 When to Use?

- When you need **multiple variations of an algorithm** (e.g., different sorting methods).
- When a class has **many conditional statements** that choose behaviors.
- When you want to **dynamically switch behaviors** at runtime.

## 🏗️ Structure

- **Context**: The main class that delegates work to a strategy.
- **Strategy Interface**: Defines a common interface for all strategies.
- **Concrete Strategies**: Implement different variations of an algorithm.

## 📌 Real-world Example

A **payment system** where users can select different payment methods (Credit Card, PayPal, Bitcoin) at runtime.

🔗 **Related Patterns:**

- **State Pattern** 🏛️ (focuses on object states rather than interchangeable algorithms)
- **Decorator Pattern** 🎨 (adds behavior dynamically without modifying existing code)

---

🔗 **Example Code:** [See Implementation](./app.ts)
