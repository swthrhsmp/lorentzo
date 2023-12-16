import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Container from "../Home/Container";

const Navbar = () => {
  return (
    <nav className="h-[112px] px-6 fixed top-0 flex justify-center items-center w-full bg-white z-50">
      <Container>
        <div className="flex justify-between items-center w-full">
          <Logo />
          <Burger />
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
