interface StandardPayment {
    pay(amount: number): boolean
}

class PaypalPayment implements StandardPayment {
    pay(amount: number): boolean {
        console.log("Paying using paypal amount: ", amount)
        return true
    }
}

class ThirdPartyPayment {
    processPayment(amountInDollars: number): void {
        console.log(`💰 Payment of $${amountInDollars} processed via ThirdPartyPayment.`);
    }
}

class PaymentAdapter implements StandardPayment {
    private thirdPartyPayment: ThirdPartyPayment;

    constructor(thirdPartyPayment: ThirdPartyPayment) {
        this.thirdPartyPayment = thirdPartyPayment;
    }

    pay(amount: number): boolean {
        this.thirdPartyPayment.processPayment(amount);
        return true;
    }
}

(() => {
    const paypalPayment = new PaypalPayment();
    paypalPayment.pay(1000);

    const paymentAdapter = new PaymentAdapter(new ThirdPartyPayment());
    paymentAdapter.pay(1000);
})()