//variables
//var lat = 
//var lon =
//var currentDate = moment().format("dddd, MMMM Do");
//var searchButtonEl = document.getElementById('search');
document.getElementById("current_date").innerHTML = Date();

searchButtonEl = document.getElementById (search);

const userCardTemplate = document.querySelector("[data-city-template")
const userCardContainer = document.querySelector("[data-city-cards-container]")
const searchInput = document.querySelector("[data-search]")

let city = []

searchButtonEl.addEventListener("click", then () {
  city.forEach (city => {
    const isVisible = 
    city.name.toLowerCase().inclues(value)
    city.element.classList.toggle("hide", !isVisible)
  })
})

//need a form input for cityName
fetch ('http://api.openweathermap.org/geo/1.0/direct?q=Richmond&limit=1&appid=cf30aa7d4098c837bc982a675f853adc')
  .then(res => res.json())
  .then(city => {})
    city = city.map(city => {
    const card = cityCardTemplate.content.cloneNode(true).children[0]
    let city_name = card.querySelector("[data-city]")
    city.textContent = city.name
    cityCardContainer.append(card)
    return {city: city.name, element: card }
    })
/*
//then we need to convert the city name into longitude and latitute
searchButtonEl.addEventListener("click", function () {
  fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=cf30aa7d4098c837bc982a675f853adc')

}*/

//then we need to add the lat and long to the fetch to search openweathermap for the day's weather
searchButtonEl.addEventListener("click", function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.5407&lon=77.4360&appid=cf30aa7d4098c837bc982a675f853adc');
})
      /*    
          //DOM
       //Element(ex tempEL).innerHTML = variable;
       //need temperature, wind, humidity, uv, and the date
*/