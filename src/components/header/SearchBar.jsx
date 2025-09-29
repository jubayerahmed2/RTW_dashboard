import { useContext, useState } from "react";
import { LocationContext } from "../../contexts";
import { getLocationByName } from "../../data/locations";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  const handleSubmit = () => {
    const getLocation = getLocationByName(searchTerm);

    setSelectedLocation({ ...getLocation });
    setSearchTerm("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
export default SearchBar;
