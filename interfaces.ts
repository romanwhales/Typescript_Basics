interface Reportable {
  summary(): string;
}

const oldCivic = {
  // name: 'civic',
  // year: new Date(),
  // broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (vehicle: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  vehicle.summary();
};

printSummary(oldCivic);

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

printSummary(drink2);
