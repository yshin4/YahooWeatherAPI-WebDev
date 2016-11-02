"use strict";

function getForecast(){
  var location = $('#city').val();

  $.get('https://query.yahooapis.com/v1/public/yql', {
    q: 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")',
    format: 'json',
    u: 'c'
  }, function(data){
    if(!data.query.results){
      alert("Location not found: " + location + "!");
    } else {
      $('.result-container1').html('<h2>' + data.query.results.channel.item.title + '</h2>' + data.query.results.channel.item.description);
      $('.result-container2').html('<p>' + "Chill: " + data.query.results.channel.wind.chill + "°" + data.query.results.channel.units.temperature + '<p>'
                                    + '<p>' + "Direction: " + data.query.results.channel.wind.direction + "°" + data.query.results.channel.units.temperature + '<p>'
                                    + '<p>' + "Speed: " + data.query.results.channel.wind.speed + data.query.results.channel.units.speed + '<p>');
      $('.result-container3').html('<p>' + "Humidity: " + data.query.results.channel.atmosphere.humidity + "%" + '</p>'
                                    + '<p>' + "Visibility: " + data.query.results.channel.atmosphere.visibility + data.query.results.channel.units.distance + '</p>'
                                    + '<p>' + "Pressure: " + data.query.results.channel.atmosphere.pressure + data.query.results.channel.units.pressure + '</p>'
                                    + '<p>' + "Rising: " + data.query.results.channel.atmosphere.rising + '</p>');
      $('.result-container4').html('<h2>' + data.query.results.channel.item.title + '</h2>');
      $('.result-container5').html('<h3>' + '<a href="' + data.query.results.channel.item.link + '"> Yahoo Weather Site </a>' + '</h3>');
    }
  });
}

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});
