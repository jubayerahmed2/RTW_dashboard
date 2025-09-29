import { useContext, useEffect, useState } from "react";
import { backgroundImages } from "./assets";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather_board/WeatherBoard";
import { WeatherContext } from "./contexts";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);

  const [climateBg, setClimateBg] = useState();

  const getClimateImage = (climate) => {
    switch (climate) {
      case "Rain":
        return backgroundImages.rainyDay;
      case "Clouds":
        return backgroundImages.fewClouds;
      case "Clear":
        return backgroundImages.clearSky;
      case "Snow":
        return backgroundImages.snow;
      case "Thunder":
        return backgroundImages.thunderstorm;
      case "Fog":
        return backgroundImages.fewClouds;
      case "Haze":
        return backgroundImages.sunny;
      case "Mist":
        return backgroundImages.mist;
      default:
        return backgroundImages.clearSky;
    }
  };

  useEffect(() => {
    const currentClimateImage = getClimateImage(weatherData.climate);

    setClimateBg(currentClimateImage);
  }, [weatherData.climate]);

  return (
    <div
      style={{ backgroundImage: `url('${climateBg}')` }}
      className="px-6 bg-gray-700 text-white font-[Roboto] h-screen grid place-items-center  object-center bg-no-repeat bg-cover"
    >
      <Header />
      <main>
        {loading.state ? (
          <h2 className="text-6xl">{loading.message}</h2>
        ) : (
          <section>
            <WeatherBoard />
          </section>
        )}
      </main>
    </div>
  );
};
export default Page;
