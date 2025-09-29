import Page from "./Page";
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
          <Page />
        </FavoritesProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
