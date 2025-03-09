# Iterator Pattern 🚶‍♂️🔄

The **Iterator Pattern** is a behavioral design pattern that allows sequential access to the elements of a collection (like arrays or objects) without exposing the underlying details of the collection's structure. It provides a uniform interface to traverse through the collection.

## 🛠️ Components

1. **Iterator Interface**: Defines methods like `hasNext()` and `next()` for traversing elements.
2. **Concrete Iterator**: Implements the Iterator interface, handling iteration logic for a specific collection.
3. **Iterable Interface**: Defines a method like `getIterator()` to return an iterator for the collection.
4. **Concrete Collection**: The collection or data structure (array, object, etc.) that the iterator will work with.

## 🔍 Why Use It?

- **Decoupling**: Keeps iteration separate from the internal structure of the collection.
- **Consistency**: Provides a uniform way to iterate through different types of collections (arrays, objects, etc.).
- **Flexibility**: You can change the internal structure of the collection without affecting the code that iterates over it. ✨

## 📝 Example

- **For an Array**:

  - Use an iterator to traverse through an array.

- **For an Object**:
  - Create an iterator to go through the keys and values of an object.

## 🧠 Benefits

- **Separation of Concerns**: Keeps iteration logic independent of the collection's structure.
- **Multiple Iterators**: You can create different iterators for the same collection (e.g., forward/backward).
- **Easier Maintenance**: Modifying the collection doesn’t affect the iteration code.

## 🚀 Conclusion

The **Iterator Pattern** is great for iterating through collections without worrying about their internal structure. Whether you're working with arrays, objects, or custom data types, the iterator pattern ensures a clean and consistent approach to accessing data. 🌟

---

🔗 **Example Code:** [See Implementation](./app.ts)
