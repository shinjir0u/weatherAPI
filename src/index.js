import "./css/style.css";
import WeatherForcast from "./js/weatherForcast";
import ScreenController from "./js/screenController";

const screenController = new ScreenController(new WeatherForcast()).updateScreen("Yangon");

