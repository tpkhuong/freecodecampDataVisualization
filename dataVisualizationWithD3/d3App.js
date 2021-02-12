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
  .attr("cx", (d, i) => d[0])
  .attr("cy", (d, i) => h - d[1])
  .attr("r", 5);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  // Add your code below this line
  .attr("x", (d) => d[0] + 5)
  .attr("y", (d) => h - d[1])
  .text((d) => d[0] + "," + d[1]);
// Add your code above this line

const positionData = [
  [1, 7, -4],
  [6, 3, 8],
  [2, 9, 3],
];
// Add your code below this line

const output = d3.min(positionData, (d) => d[2]); // Change this line

// Add your code above this line

d3.select("body").append("h2").text(output);

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
const padding = 60;

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", (d) => 5);

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d[0] + "," + d[1])
  .attr("x", (d) => xScale(d[0] + 10))
  .attr("y", (d) => yScale(d[1]));

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = undefined;
// Add your code above this line

svg
  .append("g")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

// Add your code below this line
var yAxis = d3.axisLeft(yScale);

svg.append("g").attr("transform");
svg
  .append("g")
  .attr("transform", "translate(" + padding + ",0")
  .call(yAxis);
svg
  .append("g")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);
// Add your code above this line
