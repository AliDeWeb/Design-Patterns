class State {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getState() {
    return this.content;
  }
}

class StatesHistory {
  private readonly states: State[];

  constructor() {
    this.states = [];
  }

  getStates() {
    return this.states;
  }

  pushState(state: State) {
    this.states.push(state);

    return this.states;
  }

  popState() {
    return this.states.pop();
  }
}

class Editor {
  private content: string;

  constructor() {}

  getState() {
    return this.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  setState() {
    return new State(this.content);
  }

  undo(statesHistory: StatesHistory) {
    const history = statesHistory.getStates();

    if (!history.length) return;

    statesHistory.popState();

    const lastIndex = history.length - 1;

    this.content = history[lastIndex]?.getState() ?? "";
  }
}

(() => {
  const statesHistory = new StatesHistory();
  const editor = new Editor();

  editor.setContent("a");
  statesHistory.pushState(editor.setState());

  editor.setContent("b");
  statesHistory.pushState(editor.setState());

  editor.setContent("c");
  statesHistory.pushState(editor.setState());

  editor.undo(statesHistory);
  editor.undo(statesHistory);

  console.log(editor.getState());
})();
