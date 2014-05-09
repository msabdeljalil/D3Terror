$(document).ready(function () {
  var city_attacks = "I set it at the top";
  var country_attacks = "I also set this at the top";

  $('#get-chart').on("submit", function(event) {
    var country = $('#country').val()
    var city = $('#city').val()
    event.preventDefault();

     var request = $.ajax({
      url: '/get_data',
      type: "POST",
      data: {country: country, city: city},
      dataType: "json"
    });

    request.done(function( response ){
      city_attacks = response.attacks_in_city.length
      country_attacks = response.attacks_in_country
      console.log("Hello from the request func ?", city_attacks);
    });

    d3.select(".chart")
    .selectAll("div")
    .data(city_attacks)
    .enter()
    .append("div")
    // .attr("class", "bar");
    .style("height", function(d) {
    return d + "px";
    }); // Function
  }); //Get Chart

  function query_for_attacks(country, city) {
  $.post('/get_data', {country: country, city: city}, function(data) {
        city_attacks = data.attacks_in_city;
        country_attacks = data.attacks_in_country;
      }, 'json');
  };// Query_for_attacks function

}); // Document
