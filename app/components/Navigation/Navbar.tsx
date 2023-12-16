import Link from "next/link";
import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="h-[112px] px-6 fixed top-0 flex justify-between items-center w-full bg-white z-50">
      <Logo />
      <Burger />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
