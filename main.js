let names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

for (let i = 0; i < names.length; i++) {
  if (names[i][0].toUpperCase() === "J") {
    console.log(
      `Goodbye ${names[i].slice(0, 1).toUpperCase()}${names[i].slice(1)}`
    );
  } else {
    console.log(
      `Hello ${names[i].slice(0, 1).toUpperCase()}${names[i].slice(1)}`
    );
  }
}
