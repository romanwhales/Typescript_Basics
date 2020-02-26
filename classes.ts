class Vehicle2 {
  color: string;
  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  constructor(color: string) {
    this.color = color;
  }
  protected honk(): void {
    console.log('Honk');
  }
}

class Car2 extends Vehicle2 {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle2 = new Vehicle2('orange');
console.log(vehicle2.color);
// vehicle2.drive();
// vehicle2.honk();

const car3 = new Car2(4, 'red');
// car3.drive();
// car3.honk();
car3.startDrivingProcess();
