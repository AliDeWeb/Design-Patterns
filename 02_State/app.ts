interface State {
  doAction: () => void;
}

class Game {
  private action: State;

  constructor() {}

  doAction() {
    this.action.doAction();
  }

  setAction(action: State) {
    this.action = action;
  }
}

class Play implements State {
  doAction() {
    console.log("Playing");
  }
}
class Pause implements State {
  doAction() {
    console.log("Paused");
  }
}

(() => {
  const game = new Game();

  game.setAction(new Play());
  game.doAction();

  game.setAction(new Pause());
  game.doAction();
})();
