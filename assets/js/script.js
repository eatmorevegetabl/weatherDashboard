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

//Forecast

let forecast = {
  apiKey: 'e4455fb88575d6b953035ab71e6e15ab',
  getForecastData: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
        city +
        '&units=imperial&exclude=current,minutely,hourly,alerts&APPID=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayForecast(data));
  },
  displayForecast: function (data) {
    var tempDay1AM = data.list[7].main.temp;
    var iconDay1AM = data.list[7].weather[0].icon;
    var tempDay1PM = data.list[11].main.temp;
    var tempDay2AM = data.list[15].main.temp;
    var iconDay2AM = data.list[15].weather[0].icon;
    var tempDay2PM = data.list[19].main.temp;
    var tempDay3AM = data.list[23].main.temp;
    var iconDay3AM = data.list[23].weather[0].icon;
    var tempDay3PM = data.list[27].main.temp;
    var tempDay4AM = data.list[31].main.temp;
    var iconDay4AM = data.list[31].weather[0].icon;
    var tempDay4PM = data.list[35].main.temp;

    document.querySelector('#day1-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay1AM + '@2x.png';
    document.querySelector('#day1-am').innerText =
      'Day - ' + tempDay1AM + ' °F';
    document.querySelector('#day1-pm').innerText =
      'Night - ' + tempDay1PM + ' °F';

    document.querySelector('#day2-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay2AM + '@2x.png';
    document.querySelector('#day2-am').innerText =
      'Day - ' + tempDay2AM + ' °F';
    document.querySelector('#day2-pm').innerText =
      'Night - ' + tempDay2PM + ' °F';

    document.querySelector('#day3-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay3AM + '@2x.png';
    document.querySelector('#day3-am').innerText =
      'Day - ' + tempDay3AM + ' °F';
    document.querySelector('#day3-pm').innerText =
      'Night - ' + tempDay3PM + ' °F';

    document.querySelector('#day4-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay4AM + '@2x.png';
    document.querySelector('#day4-am').innerText =
      'Day - ' + tempDay4AM + ' °F';
    document.querySelector('#day4-pm').innerText =
      'Night - ' + tempDay4PM + ' °F';
    document.querySelector('.forecast').classList.remove('loading');
  },
  search: function () {
    this.getForecastData(document.querySelector('.search-bar').value);
  },
};

document.querySelector('.search button').addEventListener('click', function () {
  forecast.search();
});

document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      forecast.search();
    }
  });
