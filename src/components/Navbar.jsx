import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoDesignernews } from "react-icons/io";

const Navlinks = [
  { name: "Home", to: "/" },
  { name: "General", to: "/" },
  { name: "Business", to: "/" },
  { name: "Entertainment", to: "/" },
  { name: "Health", to: "/" },
  { name: "Science", to: "/" },
  { name: "Sports", to: "/" },
  { name: "Technology", to: "/" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-slate-900 w-full flex text-white h-20 items-center relative">
      <div className="w-full flex md:visible invisible">
        <div className="flex items-center justify-start pl-4 w-1/2">
          <IoLogoDesignernews size={80} className="w-10 h-10" />
        </div>
        <div className="flex justify-end flex-wrap w-1/2 mx-6 space-x-4">
          {Navlinks.map(({ name, to }) => (
            <ul className="flex font-mono text-lg font-thin" key={name + to}>
              <li>
                {" "}
                <a href={to} className="tracking-wide">
                  {name}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="md:hidden mx-auto w-full">
        <GiHamburgerMenu
          size={30}
          className="mx-auto cursor-pointer absolute right-2 top-5"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div className="flex flex-col justify-center w-full">
            {Navlinks.map(({ name, to }) => (
              <ul
                className="flex flex-wrap gap-2 tracking-wide font-mono text-lg font-thin"
                key={name + to}
              >
                <li className="text-white text-lg">{name}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
