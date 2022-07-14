# weather-forecast

Live Link: https://stevenfabrizio.github.io/weather-forecast/

---

This is a simple page that fetches data from Openweathermap API. It gets current weather data as well as hourly and daily data. The current weather conditions and day/night will affect the background that is rendered when a successful search is completed. Click the My Location button to let the app geolocate your position and populate the weather for you.

UPDATE: You can now view recent searches from everybody by mousing over Recent Searches.

---

How it works: 

First off, the code is an absolute mess because it was an early project that I've kept adding onto.

The 'Searching' screen is a div that has it's z-index increased on page load and when a user searches. After a setTimeout, it is decreased again and the normal page is displayed to the user.

The main part of the app is just a background image with some static divs displaying useState data above it. But the Hourly / Daily drag-scroll containers on the bottom are react-router-dom routes. They are seperate components who get their data passed as props from the landing page component.

UPDATE:
I wanted to do something with a backend so I decided to add all successful searches to a database. What is sent to the server is the time of the search as well as the location. The 10 most recent searches are paginated and shown when moused over Recent Searches. Then in my frontend I am async await fetching it to be mapped and rendered in an overlay component.

It took less than two hours to set up this server and host it:
https://github.com/stevenfabrizio/weather-app-backend-on-heroku. 

You can view this paginated server data here: 
https://stevens-postgresql-backend.herokuapp.com/recent


---

![DayClear](https://cdn.discordapp.com/attachments/840740146176851979/969426758640234546/unknown.png)
![NightOvercast](https://cdn.discordapp.com/attachments/840740146176851979/969426665556049983/unknown.png)
![Thunderstorm](https://cdn.discordapp.com/attachments/840740146176851979/969427619642753024/unknown.png)
![Snow](https://cdn.discordapp.com/attachments/840740146176851979/969440422625673216/unknown.png)
