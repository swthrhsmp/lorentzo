import React from "react";
import Container from "../Home/Container";
import Logo from "./Logo";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer flex justify-center bg-slate-800 text-white ">
      <Container>
        <footer className="footer p-10 ">
          <aside>
            <Logo />
          </aside>
          <nav>
            <header className="footer-title">Επικοινωνία</header>
            <p className="flex items-center gap-1">
              <FaLocationDot />
              <a href={`tel:6999999999`}>Κιάτο κορινθίας</a>
            </p>
            <p className="flex items-center gap-1">
              <BsFillTelephoneFill />
              <a href={`tel:6999999999`}>699 999 9999</a>
            </p>
            <p className="flex items-center gap-1">
              <MdEmail />
              <a href={`mailto:asdfg@gmail.com`}>asdfg@gmail.com</a>
            </p>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
