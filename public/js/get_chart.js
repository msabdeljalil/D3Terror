$(document).ready(function () {
  $('#get-chart').on("click", function(e) {
    e.preventDefault();
    var dataset = [5, 10, 15, 20, 25];
    d3.select("body").selectAll("#chart")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar");
    .style("height", function(d) {
    return d + "px";
});
  });

});
