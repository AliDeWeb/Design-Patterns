# 🛡️ Proxy Pattern

## 📌 What is the Proxy Pattern?

The **Proxy Pattern** is a **structural design pattern** that provides a **surrogate** or **placeholder** for another object to control access to it. A proxy acts as an intermediary, allowing you to perform additional logic before, after, or instead of forwarding the request to the original object.

## 🛠️ Key Concepts:

1.  **Subject** → Defines the common interface for both the `RealSubject` and the `Proxy`. This interface outlines the methods that the client can use to interact with the `Subject` through either the `Proxy` or directly with the `RealSubject`.
2.  **Real Subject** → The actual object that contains the core business logic. The `Proxy` represents and controls access to this object.
3.  **Proxy** → A class that implements the same interface as the `RealSubject` and holds a reference to it. The `Proxy` controls access to the `RealSubject` and can add extra behavior (such as access control, logging, lazy initialization, etc.) before or after invoking methods on the `RealSubject`.

## 🔥 When to Use?

✅ When you need to **control access to an object**. The Proxy pattern lets you execute additional logic before or after the access to the real object.
✅ When you require **lazy initialization**. A Proxy can defer the creation of the `RealSubject` object until it's actually needed.
✅ When you want to **improve performance**.  A Proxy can postpone heavy or costly operations, or cache results from the real object.
✅ When you want to implement **access control**. A Protection Proxy can check permissions and access levels before granting access to the `RealSubject`.
✅ When you want to add **logging** or **monitoring** to object operations. A Smart Proxy can log or monitor information before and after calls to methods of the `RealSubject`.

## 🎯 Real-World Examples:

-   **Proxy Server** 🌐 (A proxy server acts as an intermediary between a client and a backend server, filtering requests, caching content, or enhancing security.)
-   **Image Proxy** 🖼️ (For displaying large images, an image proxy can show a low-resolution version initially and then load the high-resolution image in the background.)
-   **Virtual Proxy** 💾 (For heavyweight objects, a virtual proxy can delay the creation of the object until it is truly needed, saving resources until necessary.)
-   **Protection Proxy** 🔒 (For controlling access to sensitive resources, a protection proxy can check user permissions before allowing access.)
-   **Smart Proxy (Smart Reference)** 💡 (To add additional logic like reference counting or logging when accessing an object.)

## 💡 Benefits:

✔ **Access Control** – Enables fine-grained control and management of access to the real object.
✔ **Lazy Initialization** – Delays object creation until it's actually needed, potentially improving startup performance.
✔ **Performance Enhancements** – Improves performance through caching or deferring expensive operations.
✔ **Enhanced Security** – Increases system security by implementing access control and permission checks.
✔ **Decoupling** – Clients interact with the Proxy and remain decoupled from the implementation details of the `RealSubject`.

---

🔗 **Example Code:** [See Implementation](./app.ts)