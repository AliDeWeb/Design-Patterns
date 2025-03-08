interface Action {
  Pay: () => void;
}

class PayByPaypal implements Action {
  Pay() {
    console.log("Pay using paypal");
  }
}

class PayByVisa implements Action {
  Pay() {
    console.log("Pay using visa");
  }
}

class Payment {
  private strategy: Action | null = null;

  setStrategy(strategy: Action) {
    this.strategy = strategy;
  }

  pay() {
    if (!this.strategy) {
      console.log("Payment method not set!");
      return;
    }

    this.strategy.Pay();
  }
}

(() => {
  const payment = new Payment();

  payment.pay();

  payment.setStrategy(new PayByPaypal());
  payment.pay();

  payment.setStrategy(new PayByVisa());
  payment.pay();
})();
