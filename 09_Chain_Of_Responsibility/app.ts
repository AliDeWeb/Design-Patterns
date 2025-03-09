abstract class Handler {
  protected nextHandler: Handler | null = null;

  setNext(handler: Handler) {
    this.nextHandler = handler;
    return handler;
  }

  abstract handle(request: string): void;
}

class BalanceHandler extends Handler {
  handle(request: string): void {
    if (request === "check balance") {
      console.log("Checking balance...");
    } else if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

class PaymentHandler extends Handler {
  handle(request: string): void {
    if (request === "process payment") {
      console.log("Processing payment...");
    } else if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

class DatabaseHandler extends Handler {
  handle(request: string): void {
    if (request === "save to database") {
      console.log("Saving payment details to database...");
    } else if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

(() => {
  const balanceHandler = new BalanceHandler();
  const paymentHandler = new PaymentHandler();
  const databaseHandler = new DatabaseHandler();

  balanceHandler.setNext(paymentHandler).setNext(databaseHandler);

  balanceHandler.handle("check balance");
  balanceHandler.handle("process payment");
  balanceHandler.handle("save to database");
  balanceHandler.handle("unknown request");
})();
