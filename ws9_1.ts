abstract class Appliance {
  constructor(public brand: string) {}

  abstract turnOn(): void;
}

class WashingMachine extends Appliance {
  override turnOn(): void {
    console.log(`Washing machine (${this.brand}) is starting to wash clothes.`);
  }
}

class Refrigerator extends Appliance {
  override turnOn(): void {
    console.log(`Refrigerator (${this.brand}) is cooling down.`);
  }
}

const washingMachine = new WashingMachine("LG");
washingMachine.turnOn();
const refrigerator = new Refrigerator("Samsung");
refrigerator.turnOn();