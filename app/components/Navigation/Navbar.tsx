import Link from "next/link";
import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="p-6  flex justify-between">
      <Logo />
      <Burger />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
