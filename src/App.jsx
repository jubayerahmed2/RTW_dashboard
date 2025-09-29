import Header from "./components/header/Header";
import WeatherBoard from "./components/weather_board/WeatherBoard";
import {
  FavoritesProvider,
  LocationProvider,
  WeatherProvider,
} from "./providers";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoritesProvider>
          <div className="px-6 bg-gray-700 text-white font-[Roboto] h-screen grid place-items-center">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavoritesProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
