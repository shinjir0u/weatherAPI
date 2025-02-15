import Temperature from "./temperature";

class ScreenController {
  #WeatherForcast;

  #contentContainer = document.querySelector(".container");

  #weatherCondition = document.querySelector(".current-condition");

  #weatherTemperature = document.querySelector(".current-temperature");

  #weatherTemperatureScale = document.querySelector(".temperature-scale");

  #weatherPrediction = document.querySelector(".average-condition");

  #weatherLogoContainer = document.querySelector(".logo-container");

  #locationForm = document.querySelector("form");

  #locationInput = document.querySelector("#location");

  #weatherAddress = document.querySelector(".address");

  #fahrenheitButton = document.querySelector(".fahrenheit-button");

  #celsiusButton = document.querySelector(".celsius-button");

  #backgroundColorUpdates = document.querySelectorAll(
    ".background-color-update",
  );

  #fontColorUpdates = document.querySelectorAll(".font-color-update");

  #WeatherUI = new Map([
    [
      "Partially cloudy",
      {
        image: document.querySelector(".partially-cloudy-day-image"),
        icon: document.querySelector(".partially-cloudy-icon"),
      },
    ],
    [
      "Clear",
      {
        image: document.querySelector(".clear-day-image"),
        icon: document.querySelector(".clear-icon"),
      },
    ],
    [
      "Overcast",
      {
        image: document.querySelector(".overcast-day-image"),
        icon: document.querySelector(".overcast-icon"),
      },
    ],
    [
      "Rain",
      {
        image: document.querySelector(".rainy-day-image"),
        icon: document.querySelector(".rainy-icon"),
      },
    ],
    [
      "Snow",
      {
        image: document.querySelector(".snowy-day-image"),
        icon: document.querySelector(".snowy-icon"),
      },
    ],
  ]);

  constructor(WeatherForcastObject = {}) {
    this.#WeatherForcast = WeatherForcastObject;
  }

  async updateScreen(location) {
    try {
      const { currentCondition, temperature, prediction, address } =
        await this.#WeatherForcast.getWeather(location);
      this.#updateBackgroundImage(currentCondition)
        .#updateAddress(address)
        .#updateCondtion(currentCondition)
        .#updateTemperature(temperature)
        .#updateLogo(currentCondition)
        .#updatePrediction(prediction)
        .#updateBackgroundColor(currentCondition)
        .#updateFontColor(currentCondition)
        .#addFormEvent()
        .#addCelsiusButtonEvent()
        .#addFahrenheitButtonEvent();
      return this;
    } catch (error) {
      alert("No such country");
      return null;
    }
  }

  #updateBackgroundImage(condition) {
    if (this.#WeatherUI.has(condition))
      this.#contentContainer.style.backgroundImage = `url(${this.#WeatherUI.get(condition).image.src})`;
    return this;
  }

  #updateAddress(address) {
    this.#weatherAddress.textContent = address;
    return this;
  }

  #updateLogo(condition) {
    if (this.#WeatherUI.has(condition))
      this.#weatherLogoContainer.firstElementChild.replaceWith(
        this.#WeatherUI.get(condition).icon.cloneNode(true),
      );

    return this;
  }

  #updateTemperature(temperature, temperatureScale = "F") {
    this.#weatherTemperature.textContent = temperature;
    this.#weatherTemperatureScale.textContent = temperatureScale;
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

  #addFahrenheitButtonEvent() {
    this.#fahrenheitButton.addEventListener("click", () => {
      this.#fahrenButtonEventHandler();
    });
    return this;
  }

  #fahrenButtonEventHandler() {
    if (this.#weatherTemperatureScale.textContent === "C") {
      const convertedTemperature = Temperature.convertTemperature(
        Number.parseInt(this.#weatherTemperature.textContent),
        "celsius",
        "fahrenheit",
      );
      this.#weatherTemperature.textContent = convertedTemperature.toFixed(1);
      this.#weatherTemperatureScale.textContent = "F";
    }
  }

  #addCelsiusButtonEvent() {
    this.#celsiusButton.addEventListener("click", () => {
      this.#celsiusButtonEventHandler();
    });
    return this;
  }

  #celsiusButtonEventHandler() {
    if (this.#weatherTemperatureScale.textContent === "F") {
      const convertedTemperature = Temperature.convertTemperature(
        Number.parseInt(this.#weatherTemperature.textContent),
        "fahrenheit",
        "celsius",
      );
      this.#weatherTemperature.textContent = convertedTemperature.toFixed(1);
      this.#weatherTemperatureScale.textContent = "C";
    }
  }
}

export default ScreenController;
