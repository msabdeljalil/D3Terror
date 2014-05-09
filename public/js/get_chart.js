$(document).ready(function () {
  $('#get-chart').on("submit", function(event) {
    var country = $('#country').serialize()
    var city = $('#city').serialize()
    event.preventDefault();
    query_for_attacks(country, city)

    // var dataset = [5, 10, 15, 20, 25];
    // d3.select("body").selectAll("#chart")
    // .data(dataset)
    // .enter()
    // .append("div")
    // .attr("class", "bar");
    // .style("height", function(d) {
    // return d + "px";
    // }); // Function
  }); //Get Chart

  $.post('/get-data', function(data){
    data[0]
  });




}); // Document
