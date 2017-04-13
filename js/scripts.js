// Get Weather
$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('.image img').attr('src', weather.image );
      $('.description p').text('src', weather.text );
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Go Accordian
$('.ui.accordion')
  .accordion()
;