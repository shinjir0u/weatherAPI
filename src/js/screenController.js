class ScreenController {
  #WeatherForcast;

  #weatherCondition = document.querySelector(".current-condition");

  #weatherTemperature = document.querySelector(".current-temperature");

  #weatherPrediction = document.querySelector(".average-condition");

  #weatherLogo = document.querySelector(".logo");

  #WeatherUI = new Map([
    [
      "Partially cloudy",
      {
        image: "../img/partially-cloudy-day.jpg",
        icon: document.querySelector(".partially-cloudy-icon"),
      },
    ],
    [
      "Clear",
      {
        image: "../img/clear-day.jpg",
        icon: document.querySelector(".clear-icon"),
      },
    ],
    [
      "Overcast",
      {
        image: "../img/overcast-day.jpg",
        icon: document.querySelector(".overcast-icon"),
      },
    ],
    [
      "Rain",
      {
        image: "../img/rainy-day.jpg",
        icon: document.querySelector(".rainy-icon"),
      },
    ],
    [
      "Snow",
      {
        image: "../img/snowy-day.jpg",
        icon: document.querySelector(".snowy-icon"),
      },
    ],
    [
      "Default",
      {
        image: "../img/default.jpg",
      },
    ],
  ]);

  constructor(WeatherForcastObject = {}) {
    this.#WeatherForcast = WeatherForcastObject;
  }

  async updateScreen(location) {
    const { currentCondition, temperature, prediction } =
      await this.#WeatherForcast.getWeather(location);
    this.#updateCondtion(currentCondition)
      .#updateTemperature(temperature)
      .#updateLogo(currentCondition)
      .#updatePrediction(prediction);
    return this;
  }

  #updateLogo(condition) {
    if (this.#WeatherUI.has(condition))
      this.#weatherLogo.replaceWith(this.#WeatherUI.get(condition).icon.cloneNode(true));
    return this;
  }

  #updateTemperature(temperature) {
    this.#weatherTemperature.textContent = temperature;
    return this;
  }

  #updateCondtion(condition) {
    this.#weatherCondition.textContent = condition;
    return this;
  }

  #updatePrediction(prediction) {
    this.#weatherPrediction.textContent = prediction;
    return this;
  }
}

export default ScreenController;
