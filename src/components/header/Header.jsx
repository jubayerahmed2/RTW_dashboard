import { useState } from "react";
import FavoriteLocationDropdown from "./FavoriteLocationDropdown";
import FavoriteLocationsModal from "./FavoriteLocationsModal";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="w-6xl mx-auto flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <SearchBar />
          <FavoriteLocationDropdown onShow={() => setShowModal(!showModal)} />
          {showModal && <FavoriteLocationsModal />}
        </div>
      </nav>
    </header>
  );
}
export default Header;
