# weather-forecast

Live Link: https://stevenfabrizio.github.io/weather-forecast/

---

This is a simple page that fetches data from Openweathermap API. It gets current weather data as well as hourly and daily data. The current weather conditions and day/night will affect the background that is rendered when a successful search is completed. Click the My Location button to let the app geolocate your position and populate the weather for you.

---

How it works: 

The 'Searching' screen is a div that has it's z-index increased on page load and when a user searches. After a setTimeout, it is decreased again and the normal page is displayed to the user.

The main part of the app is just a background image with some static divs displaying useState data above it. But the Hourly / Daily drag-scroll containers on the bottom are react-router-dom routes. They are seperate components who get their data passed as props from the landing page component.
