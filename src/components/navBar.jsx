import { Search, Menu } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const NavBar = ({ logoSrc, menuItems, userAvatar }) => {
  const [menu, setMenu] = useState(menuItems[0].label);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-5 py-2 flex flex-col lg:px-10 lg:py-2 lg:gap-y-10">
      <div className="flex justify-between items-center">
        <a href="#" className="text-xl">
          <img
            src={logoSrc}
            alt="logo"
            className="w-32 h-10 lg:w-30 lg:h-16 cursor-pointer"
          />
        </a>
        <div className="relative border-gray-500 p-2 lg:p-4 w-2/3 lg:w-1/3 border-solid flex items-center shadow-lg shadow-gray-100 rounded">
          <Search className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500  text-xs cursor-pointer" />
          <input
            type="search"
            name="search"
            placeholder="Search here"
            className="pl-2 lg:pl-5 text-gray-600 rounded w-full outline-none bg-transparent"
          />
        </div>
        <img src={userAvatar} alt="User avatar" className="rounded-full w-8 h-8 lg:w-14 lg:h-14 bg-slate-300 p-1 cursor-pointer" />
        <button className="lg:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu className="w-6 h-6 text-gray-500" />
        </button>
      </div>
      <ul className={`flex-col lg:flex-row lg:flex gap-3 lg:gap-10 justify-center text-gray-500 font-medium text-sm lg:text-base ${menuOpen ? 'flex' : 'hidden'}`}>
        {menuItems.map((item) => (
          <li
            key={item.label}
            onClick={() => setMenu(item.label)}
            className={`${menu === item.label ? "underline underline-offset-8 decoration-4 decoration-blue-700" : ""} cursor-pointer`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default NavBar;
