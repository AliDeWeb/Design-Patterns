# Memento Pattern 🧠💾

The **Memento Pattern** is a behavioral design pattern that allows saving and restoring an object's state without exposing its internal details. It’s useful for implementing **undo/redo** functionality.

## 🛠️ Components

1. **Originator** 🏗️: The object whose state needs to be saved and restored.
2. **Memento** 📜: A snapshot of the originator's state.
3. **Caretaker** 💼: Manages mementos and decides when to restore a state.

## 🔍 Why Use It?

- **Undo/Redo Functionality** ⏪⏩
- **Preserving Object State Without Violating Encapsulation** 🔐
- **Easy State Management** 📊

## 📝 Example Use Cases

- **Text Editors** 📝: Saving document history.
- **Game Saves** 🎮: Storing checkpoints.
- **Settings Configurations** ⚙️: Reverting changes to previous states.

## 🧠 Benefits

- **Encapsulation**: The object’s internal structure remains hidden.
- **History Tracking**: Enables rollback to previous states.
- **Separation of Concerns**: The caretaker manages state history, while the originator focuses on business logic.

## 🚀 Conclusion

The **Memento Pattern** is perfect for applications where you need to **save and restore object states** without exposing their internals. It's widely used in **editor software, games, and state management systems**. 🌟

---

🔗 **Example Code:** [See Implementation](./app.ts)
