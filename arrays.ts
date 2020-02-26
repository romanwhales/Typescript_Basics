const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corrolla'], ['camaro']];

const car2 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100);
