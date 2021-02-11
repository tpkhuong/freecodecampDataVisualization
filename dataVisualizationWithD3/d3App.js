d3.select("body").append("h1").text("Learning D3");

d3.selectAll("li").text("list item");

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text("New Title");

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  // Add your code below this line

  .text(printEachItem);

function printEachItem(item) {
  return `${item} USD`;
}

// Add your code above this line
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD")
  // Add your code below this line
  .style("color", changeColor);

function changeColor(element) {
  return element < 20 ? "red" : "green";
}
// Add your code above this line
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  // Add your code below this line
  .attr("bar", "div");

// Add your code above this line

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  // Add your code below this line

  .style("height", changeHeight);

function changeHeight(element) {
  return `${element}px`;
}
// Add your code above this line

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => d * 10 + "px");

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3
  .select("body")
  // Add your code below this line
  .append("svg")
  .style("width", w)
  .attr("height", h);
// Add your code above this line

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  // Add your code below this line
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0);

// Add your code above this line

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  // Add your code below this line
  .data(dataset)
  .enter()
  .append("rect")
  // Add your code above this line
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (data, index) => {
    // Add your code below this line
    return data * 30;
    // Add your code above this line
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", (d, i) => {
    // Add your code below this line
    return i * 3;
    // Add your code above this line
  });

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => {
    // Add your code below this line
    return 100 - d * 3;
    // Add your code above this line
  })
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d);

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  // Add your code below this line

  .attr("fill", "navy");

// Add your code above this line

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy");

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  // Add your code below this line
  .append("text")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3)
  .text((d, i) => d);
// Add your code above this line

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => 3 * d)
  .attr("fill", "navy")
  // Add your code below this line
  .attr("bar");
// Add your code above this line

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d - 3);

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - 3 * d)
  .attr("width", 25)
  .attr("height", (d, i) => d * 3)
  .attr("fill", "navy")
  .attr("class", "bar")
  // Add your code below this line
  .append("title")
  .text((d, i) => d);
// Add your code above this line

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 30)
  .attr("y", (d, i) => h - (d * 3 + 3));

const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  // Add your code below this line
  .data(dataset)
  .enter()
  .append("circle");
// Add your code above this line

const dataset = [
  [34, 78],
  [109, 280],
  [310, 120],
  [79, 411],
  [420, 220],
  [233, 145],
  [333, 96],
  [222, 333],
  [78, 320],
  [21, 123],
];

const w = 500;
const h = 500;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  // Add your code below this line
  .attr("cx", (d) => d[0])
  .attr("cy", (d) => h - d[1])
  .attr("r", 5);
// Add your code above this line
