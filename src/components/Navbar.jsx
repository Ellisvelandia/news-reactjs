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
    <nav className="bg-black w-full flex text-white h-20 items-center relative">
      <div className="w-full flex md:visible invisible">
        <div className="flex items-center justify-start pl-4 w-1/2">
          <IoLogoDesignernews size={80} className="w-10 h-10" />
        </div>
        <div className="flex justify-end flex-wrap w-1/2 mx-6 md:space-x-4">
          {Navlinks.map(({ name, to }) => (
            <ul className="flex font-mono text-lg font-thin" key={name + to}>
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
      <div className="md:hidden mx-auto w-full h-screen">
        <GiHamburgerMenu
          size={30}
          className="mx-auto cursor-pointer absolute right-2 top-5"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div className="absolute left-0 h-full top-20">
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
