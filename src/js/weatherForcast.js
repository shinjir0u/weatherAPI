class WeatherForcast {
  #API_KEY = "AA3Z9X7MHFBAEXUF7FKNDL7VE";

  #BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  #getURLToFetch(location) {
    return `${this.#BASE_URL}${location}?key=${this.#API_KEY}`;
  }

  async getWeather(location = "Yangon") {
    try {
      const url = this.#getURLToFetch(location);
      const response = await fetch(url);
      if (response.status !== 200)
        return "Coundn't get the weather for desired locations.";
      const responseJSON = await response.json();
      return {
        currentCondition: responseJSON.currentConditions.conditions,
        temperature: responseJSON.currentConditions.temp,
        prediction: responseJSON.description,
      };
    } catch (error) {
      return "Error Caught";
    }
  }
}

export default WeatherForcast;
