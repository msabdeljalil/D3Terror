$(document).ready(function () {
  $('#get-chart').on("submit", function(event) {
    var country = $('#country').val()
    var city = $('#city').val()
    event.preventDefault();
    console.log(country, city)


    $.post('/get-data', {country: country, city: city}, function(data) {
      var city_attacks = data.attacks_in_city;
      console.log(city_attacks)
    }, 'json');

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

// function query_for_attacks(country, city) // Query_for_attacks function


}); // Document
