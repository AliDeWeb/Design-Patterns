interface Mediator {
  sendMessage(message: string, sender: User): void;
  addUser(user: User): void;
}

class ChatRoom implements Mediator {
  private users: User[] = [];

  sendMessage(message: string, sender: User): void {
    this.users.forEach((user) => {
      if (user !== sender) user.receiveMessage(message);
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}

class User {
  constructor(private name: string, private mediator: Mediator) {}

  sendMessage(message: string) {
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message: string) {
    console.log(`${this.name} received: ${message}`);
  }
}

(() => {
  const chatRoom = new ChatRoom();

  const user1 = new User("User1", chatRoom);
  const user2 = new User("User2", chatRoom);
  const user3 = new User("User3", chatRoom);

  chatRoom.addUser(user1);
  chatRoom.addUser(user2);
  chatRoom.addUser(user3);

  user1.sendMessage("hello guys");
})();
