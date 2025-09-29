import { useContext } from "react";
import { FavoritesContext, LocationContext } from "../../contexts";

function FavoriteLocationsModal() {
  const { favorites } = useContext(FavoritesContext);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <div
      className="max-w-xs py-4 bg-gray-800
     rounded-md border-gray-500 absolute right-0 top-16  shadow-lg "
    >
      <h3 className="text-lg font-bold px-4">Favorite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {!favorites.length && <h2 className="text-center">Empty</h2>}

        {favorites.length > 0 &&
          favorites.map((fav) => (
            <li
              onClick={() => setSelectedLocation(fav)}
              key={fav.location}
              className="hover:bg-gray-700"
            >
              {fav.location}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default FavoriteLocationsModal;
