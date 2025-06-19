const apiKey = process.env.API_KEY;

class WeatherForcast {
  #API_KEY = apiKey;

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
        address: responseJSON.resolvedAddress,
      };
    } catch (error) {
      return "Error Caught";
    }
  }
}

export default WeatherForcast;
