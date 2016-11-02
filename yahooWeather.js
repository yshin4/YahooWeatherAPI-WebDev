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
      $('.result-container2').html('<h2>' + data.query.results.channel.item.title + '</h2>');
      $('.result-container3').html('<h2>' + data.query.results.channel.item.condition.temperature + '</h2>');
    }
  })
  ;

  $.get('https://query.yahooapis.com/v1/public/yql', {
    q: 'select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")',
    format: 'json',
    u: 'c'
  }, function(data){
    if(!data.query.results){
      alert("Location not found: " + location + "!");
    } else {
      $('.result-container2').html('<h2>' + data.query.results.channel.item.title + '</h2>' + data.query.results.channel.item.description)
    }
  })
  ;
}

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});
