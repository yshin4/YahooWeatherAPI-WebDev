
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
      $('.result-container1').html('<h2>' + data.query.results.channel.item.title + '</h2>' + data.query.results.channel.item.description)
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
