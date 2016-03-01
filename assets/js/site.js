$(document).ready(function() {
  $.simpleWeather({
    zipcode: '',
    woeid: '2357536', //2357536
    location: 'Lund Sweden',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.country+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

  $.simpleWeather({
    zipcode: '',
    woeid: '2487956', //2357536
    location: 'Patamalm, Sweden',
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.country+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';

      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
});
