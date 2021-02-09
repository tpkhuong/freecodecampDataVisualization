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
