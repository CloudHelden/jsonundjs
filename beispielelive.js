const einkauf = [
  { name: "Apfel", preis: 1 },
  { name: "Brot",  preis: 2 },
  { name: "Milch", preis: 3 }
];

const g = einkauf.reduce((sum, artikel) => sum + artikel.preis, 0);
console.log(g)