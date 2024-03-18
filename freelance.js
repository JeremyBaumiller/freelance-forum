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
//   const employeesPrice = document.createElement("ul");
//   employeesPrice.textContent = freelancers[i].price;
//   info.append;
// }
let info = document.querySelector("#information");
const randomIndex = Math.floor(Math.random() * 8);
let Counter = 0++;
const randomName = freelancers[randomIndex];
const countInterval = setInterval(count, 3000);

function count() {
  info.append(Counter++);
  if (Counter > 8) {
    clearInterval(countInterval);
    // info.append(randomName);
  }
  for (let i = 0; i < freelancers.length; i++) {
    const Employee = freelancers[Counter].name;
    let employeesName = document.createElement("li");
    employeesName.textContent = Employee;
    info.append(employeesName);
  }
}
