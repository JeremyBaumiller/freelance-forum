const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
const body = document.querySelector("body");
const title = document.createElement("h1");
title.textContent = "Freelance-Forum";
body.append(title);

// for (let i = 0; i < freelancers.length; i++) {
//   employeesNames.textContent = freelancers[i].name;
//   const employeesPrice = document.createElement("ul");
//   employeesPrice.textContent = freelancers[i].price;
//   let Employees = freelancers[i].name;
//   console.log(freelancers[1].name);
//   console.log(Employees);
// }
let counter = 0;
const countInterval = setInterval(count, 3000);
function count() {
  console.log(counter++);
  if (counter > 8) {
    clearInterval(countInterval);
  }
}
