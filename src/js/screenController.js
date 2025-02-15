class ScreenController {
  #WeatherForcast;

  #weatherCondition = document.querySelector(".current-condition");

  #weatherTemperature = document.querySelector(".current-temperature");

  #weatherPrediction = document.querySelector(".average-condition");

  #weatherLogoContainer = document.querySelector(".logo-container");

  #locationForm = document.querySelector("form");

  #locationInput = document.querySelector("input[type='text']");

  #backgroundColorUpdates = document.querySelectorAll(
    ".background-color-update",
  );

  #fontColorUpdates = document.querySelectorAll(".font-color-update");

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
      .#updatePrediction(prediction)
      .#updateBackgroundColor(currentCondition)
      .#updateFontColor(currentCondition)
      .#addFormEvent();
    return this;
  }

  #updateLogo(condition) {
    if (this.#WeatherUI.has(condition))
      this.#weatherLogoContainer.firstElementChild.replaceWith(
        this.#WeatherUI.get(condition).icon.cloneNode(true),
      );

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

  #updateBackgroundColor(condition) {
    const formattedCondition = condition.toLowerCase().split(" ").join("-");
    this.#backgroundColorUpdates.forEach((element) => {
      element.style.backgroundColor = `var(--${formattedCondition}-background-color)`;
    });
    return this;
  }

  #updateFontColor(condition) {
    const formattedCondition = condition.toLowerCase().split(" ").join("-");
    this.#fontColorUpdates.forEach((element) => {
      element.style.color = `var(--${formattedCondition}-font-color)`;
    });
    return this;
  }

  #addFormEvent() {
    this.#locationForm.addEventListener("submit", (event) => {
      this.#formEventHandler(event);
    });
    return this;
  }

  #formEventHandler(event) {
    event.preventDefault();
    const location = this.#locationInput.value;
    this.updateScreen(location);
  }
}

export default ScreenController;
