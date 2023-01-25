let weather = {
  apiKey: 'e4455fb88575d6b953035ab71e6e15ab',
  getData: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=imperial&APPID=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerText = name;
    document.querySelector('.temp').innerText = temp + ' °F';
    document.querySelector('.icon').src =
      'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    document.querySelector('.conditions').innerText = description;
    document.querySelector('.humidity').innerText =
      'Humidity - ' + humidity + '%';
    document.querySelector('.wind-speed').innerText =
      'Wind speed - ' + speed + ' mph';
    document.querySelector('.weather').classList.remove('loading');
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.getData(document.querySelector('.search-bar').value);
  },
};

document.querySelector('.search button').addEventListener('click', function () {
  weather.search();
});

document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      weather.search();
    }
  });

// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var cityName = document.querySelector('.city-name');
// var date = document.querySelector('.date');
// var conditions = document.querySelector('.conditions');
// var temperature = document.querySelector('.temperature');
// var humidity = document.querySelector('.humidity');
// var windSpeed = document.querySelector('.wind-speed');

// var day1 = document.querySelector('.day-1');
// var day2 = document.querySelector('.day-2');
// var day3 = document.querySelector('.day-3');
// var day4 = document.querySelector('.day-4');
// var day5 = document.querySelector('.day-5');

// //localStorage.getItem("City") = document.querySelector('.btn');

// button.addEventListener('click', function () {
//   fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q=' +
//       inputValue.value +
//       '&APPID=e4455fb88575d6b953035ab71e6e15ab&units=imperial'
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       var cityValue = data['name'];
//       var condValue = data['weather']['0']['description'];
//       var tempValue = data['main']['temp'];
//       var humdValue = data['main']['humidity'];
//       var windValue = data['wind']['speed'];

//       cityName.innerHTML = cityValue;
//       temperature.innerHTML = 'Temperature: ' + tempValue + ' °F';
//       conditions.innerHTML = 'Conditions: ' + condValue;
//       humidity.innerHTML = 'Humidity: ' + humdValue + ' %';
//       windSpeed.innerHTML = 'Wind Speed: ' + windValue + ' mph';
//       date.innerHTML = moment().format('MMMM Do YYYY');
//     })

//     .catch((err) => alert('City Name Invalid!'));
//   localStorage.setItem('City', inputValue.value);
//   getForecastData();
// });

// function getForecastData() {
//   fetch(
//     'https://api.openweathermap.org/data/2.5/forecast?q=' +
//       inputValue.value +
//       '&APPID=e4455fb88575d6b953035ab71e6e15ab&units=imperial'
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       var day1Value = data['list']['7']['main']['temp'];
//       var day2Value = data['list']['15']['main']['temp'];
//       var day3Value = data['list']['23']['main']['temp'];
//       var day4Value = data['list']['31']['main']['temp'];
//       var day5Value = data['list']['39']['main']['temp'];

//       day1.innerHTML = 'Day 1: ' + day1Value + ' °F';
//       day2.innerHTML = 'Day 2: ' + day2Value + ' °F';
//       day3.innerHTML = 'Day 3: ' + day3Value + ' °F';
//       day4.innerHTML = 'Day 4: ' + day4Value + ' °F';
//       day5.innerHTML = 'Day 5: ' + day5Value + ' °F';
//     });
// }
