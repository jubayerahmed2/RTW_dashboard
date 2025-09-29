import { useContext } from "react";
import { SVGIcons } from "../../assets";
import { WeatherContext } from "../../contexts";
import { date_formatter } from "../../utils/date_formatter";

function WeatherHeading() {
  const { weatherData } = useContext(WeatherContext);

  const { climate, temperature, time, location } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return SVGIcons.rainyIcon;
      case "Clouds":
        return SVGIcons.cloudIcon;
      case "Clear":
        return SVGIcons.SnowIcon;
      case "Snow":
        return SVGIcons.thunderIcon;
      case "Thunder":
        return SVGIcons.thunderIcon;
      case "Fog":
        return SVGIcons.hazeIcon;
      case "Haze":
        return SVGIcons.hazeIcon;
      case "Mist":
        return SVGIcons.hazeIcon;

      default:
        return SVGIcons.sunIcon;
    }
  }

  return (
    <div key={weatherData.location}>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon()} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {date_formatter(time, "time", false)} -{" "}
        {date_formatter(time, "date", false)}
      </p>
    </div>
  );
}
export default WeatherHeading;
