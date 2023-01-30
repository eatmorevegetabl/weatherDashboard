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
    document.querySelector('.current-temp').innerText = temp + ' °F';
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
    var day1 = data.list[3].dt_txt;
    var iconDay1 = data.list[3].weather[0].icon;
    var tempDay1 = data.list[3].main.temp;
    var day2 = data.list[11].dt_txt;
    var iconDay2 = data.list[11].weather[0].icon;
    var tempDay2 = data.list[11].main.temp;
    var day3 = data.list[19].dt_txt;
    var tempDay3 = data.list[19].main.temp;
    var iconDay3 = data.list[19].weather[0].icon;
    var day4 = data.list[27].dt_txt;
    var tempDay4 = data.list[27].main.temp;
    var iconDay4 = data.list[27].weather[0].icon;
    var day5 = data.list[35].dt_txt;
    var tempDay5 = data.list[35].main.temp;
    var iconDay5 = data.list[35].weather[0].icon;

    document.querySelector('#day1').innerText = window
      .moment(day1)
      .format('ddd h a');
    document.querySelector('#day1-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay1 + '@2x.png';
    document.querySelector('#day1-am').innerText = tempDay1 + ' °F';

    document.querySelector('#day2').innerText = window
      .moment(day2)
      .format('ddd h a');
    document.querySelector('#day2-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay2 + '@2x.png';
    document.querySelector('#day2-am').innerText = tempDay2 + ' °F';

    document.querySelector('#day3').innerText = window
      .moment(day3)
      .format('ddd h a');
    document.querySelector('#day3-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay3 + '@2x.png';
    document.querySelector('#day3-am').innerText = tempDay3 + ' °F';

    document.querySelector('#day4').innerText = window
      .moment(day4)
      .format('ddd h a');
    document.querySelector('#day4-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay4 + '@2x.png';
    document.querySelector('#day4-am').innerText = tempDay4 + ' °F';

    document.querySelector('#day5').innerText = window
      .moment(day5)
      .format('ddd h a');
    document.querySelector('#day5-icon').src =
      'http://openweathermap.org/img/wn/' + iconDay5 + '@2x.png';
    document.querySelector('#day5-am').innerText = tempDay5 + ' °F';

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
