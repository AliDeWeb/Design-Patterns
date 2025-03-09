// Interface
interface Command {
  execute: () => void;
  undo: () => void;
}

// Receivers
class TV {
  turnOn() {
    console.log("turning on tv");
  }

  turnOff() {
    console.log("turning off tv");
  }
}

class Button {
  onClick() {
    console.log("running on click event");
  }
}

// Concretes
class TurnOnCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute() {
    this.tv.turnOn();
  }

  undo() {
    this.tv.turnOff();
  }
}
class TurnOffCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute() {
    this.tv.turnOff();
  }

  undo() {
    this.tv.turnOn();
  }
}
class ButtonCommand implements Command {
  private button: Button;

  constructor(button: Button) {
    this.button = button;
  }

  execute() {
    this.button.onClick();
  }

  undo() {
    console.log("not set");
  }
}

// Invoker
class CommandRunner {
  private command: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }

  undo() {
    this.command.undo();
  }
}

(() => {
  const tv = new TV();
  const button = new Button();
  const commandRunner = new CommandRunner();

  commandRunner.setCommand(new TurnOnCommand(tv));
  commandRunner.execute();
  commandRunner.undo();

  commandRunner.setCommand(new TurnOffCommand(tv));
  commandRunner.execute();
  commandRunner.undo();

  commandRunner.setCommand(new ButtonCommand(button));
  commandRunner.execute();
  commandRunner.undo();
})();
