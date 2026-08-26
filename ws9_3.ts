export
abstract class PaymentGateway {
  protected amount: number;
  protected tid: string;

  constructor(amount: number) {
    this.amount = amount;
    this.tid = "TXN-" + Math.floor(1000 + Math.random() * 9000);
  }

  abstract processPayment(): boolean;

  printReceipt(success: boolean): void {
    if (success) {
      console.log(`[Receipt] TXN: ${this.tid} | Amount: $${this.amount} | Status: SUCCESS`);
    } else {
      console.log(`[Receipt] TXN: ${this.tid} | Status: FAILED`);
    }
  }
}

class CreditCardPayment extends PaymentGateway {
  private cardNumber: string;

  constructor(amount: number, cardNumber: string) {
    super(amount);
    this.cardNumber = cardNumber;
  }

  override processPayment(): boolean {
    if (this.cardNumber.length === 16) {
      const last4 = this.cardNumber.slice(-4);
      console.log(`[CreditCard] Charging $${this.amount} to card ending in ${last4}`);
      return true;
    } else {
      console.log("[CreditCard] Invalid Card Number!");
      return false;
    }
  }
}

class PromptPayPayment extends PaymentGateway {
  private phoneNumber: string;

  constructor(amount: number, phoneNumber: string) {
    super(amount);
    this.phoneNumber = phoneNumber;
  }

  override processPayment(): boolean {
    if (this.phoneNumber.length === 10) {
      console.log(`[PromptPay] Generating QR Code for $${this.amount} (Phone: ${this.phoneNumber})`);
      return true;
    } else {
      console.log("[PromptPay] Invalid Phone Number!");
      return false;
    }
  }
}

const payments: PaymentGateway[] = [
  new CreditCardPayment(1500, "1234567890123456"),
  new CreditCardPayment(500, "1234"),
  new PromptPayPayment(350, "0812345678"),
  new PromptPayPayment(10000, "034109300")
];

payments.forEach((payment) => {
  const result = payment.processPayment();
  payment.printReceipt(result);
});