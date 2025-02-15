class Temperature {
  static #temperatureConversion = new Map([
    ["celsius-fahrenheit", (temperature) => temperature * (9 / 5) + 32],
    ["fahrenheit-celsius", (temperature) => (temperature - 32) * (5 / 9)],
    ["celsius-kelvin", (temperature) => temperature + 273.15],
    ["kelvin-celsius", (temperature) => temperature - 273.15],
    [
      "fahrenheit-kelvin",
      (temperature) => (temperature - 32) * (5 / 9) + 273.15,
    ],
    [
      "kelvin-fahrenheit",
      (temperature) => (temperature - 273.15) * (9 / 5) + 32,
    ],
  ]);

  static convertTemperature(temperature, inputUnit, outputUnit) {
    const conversion = `${inputUnit}-${outputUnit}`;
    if (this.#temperatureConversion.has(conversion))
      return this.#temperatureConversion.get(conversion)(temperature);
  }
}

export default Temperature;
