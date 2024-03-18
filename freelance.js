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

for (let i = 0; i < freelancers.length; i++) {
  freelancers[i].name;
  console.log(freelancers[1].name);
}

const colors = ["red", "green", "blue", "purple", "orange", "black"];
const sizes = ["small", "medium", "large"];
const maxShapes = 10;

// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(addShape, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const circles = document.querySelector("#circles");
  const circleElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add(shape.color, shape.size);
    return element;
  });
  circles.replaceChildren(...circleElements);

  const squares = document.querySelector("#squares");
  const squareElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add(shape.color, shape.size);
    return element;
  });
  squares.replaceChildren(...squareElements);

  const triangle = document.querySelector("#triangle");
  const triangleElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add(shape.color, shape.size);
    return element;
  });
  triangle.replaceChildren(...triangleElements);
  // TODO: Render the circles
}

/**
 * Add a random shape to the `shapes` array
 */
function addShape() {
  const circles = document.querySelector("#circles");
  const circleElements = shapes.map((shape) => {});
  const color = colors[Math.floor(Math.random() * colors.length)];
}
// TODO: Randomize the size of the shape

shapes.push({ color, size: "small" });
const size = sizes[Math.floor(Math.random() * sizes.length)];
shapes.push({ color, size });
render();

// TODO: Stop adding shapes if we've reached the maximum number of shapes
if (shapes)
  (maxShapes) => {
    clearInterval(addShapeIntervalId);
  };
