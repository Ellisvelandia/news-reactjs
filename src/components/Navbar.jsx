import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoDesignernews } from "react-icons/io";
import { Link } from "react-router-dom";

const Navlinks = [
  { name: "Home", to: "/" },
  { name: "General", to: "/general" },
  { name: "Business", to: "/business" },
  { name: "Entertainment", to: "/entertainment" },
  { name: "Health", to: "/health" },
  { name: "Science", to: "/science" },
  { name: "Sports", to: "/sports" },
  { name: "Technology", to: "/technology" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="sticky bg-black text-white top-0 w-full h-20 flex items-center sm:px-0 px-8 py-2 shadow-md z-10 mx-auto">
      <div className="w-full flex lg:visible invisible">
        <div className="flex items-center justify-start pl-4 w-1/2">
          <IoLogoDesignernews size={80} className="w-10 h-10" />
        </div>
        <div className="flex justify-end flex-wrap w-1/2 mx-6 md:space-x-4">
          {Navlinks.map(({ name, to }) => (
            <ul className="flex font-serif text-lg font-thin" key={name + to}>
              <li>
                {" "}
                <Link to={to} className="tracking-wide">
                  {name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="lg:hidden mx-auto w-full h-screen">
        <GiHamburgerMenu
          size={30}
          className="mx-auto cursor-pointer absolute right-2 top-5 z-10"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div className="w-full h-full absolute top-20 left-1/2 transform z-0 -translate-x-1/2 -translate-y-1/2">
            {Navlinks.map(({ name, to }) => (
              <ul
                className="flex w-full h-full gap-2 tracking-wide font-mono text-lg font-thin px-2 bg-black"
                key={name + to}
              >
                <li className="text-white text-lg">
                  {" "}
                  <Link to={to} className="tracking-wide">
                    {name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
