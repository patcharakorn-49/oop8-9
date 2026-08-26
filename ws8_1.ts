class PaymentGateway {
  process(amount: number): void {
    console.log(`Processing base payment of $${amount}`);
  }
}

class CreditCardPayment extends PaymentGateway {
  override process(amount: number): void {
    console.log(`Processing CC payment of $${amount}`);
  }
}

class PayPalPayment extends PaymentGateway {
  override process(amount: number): void {
    console.log(`Redirecting to PayPal for $${amount}`);
  }
}

function executePayment(p: PaymentGateway, amt: number): void {
  p.process(amt);
}

const cc = new CreditCardPayment();
executePayment(cc, 90);
const paypal = new PayPalPayment();
executePayment(paypal, 200);