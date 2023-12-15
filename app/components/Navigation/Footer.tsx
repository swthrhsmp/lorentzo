import React from "react";
import Container from "../Home/Container";
import Logo from "./Logo";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-slate-800 text-white ">
      <Container>
        <footer className="footer pt-10 pb-6 px-6 ">
          <aside>
            <Logo />
          </aside>
          <nav>
            <header className="footer-title">Επικοινωνία</header>
            <p className="flex items-center gap-1">
              <FaLocationDot />
              <a href={`https://maps.app.goo.gl/jaj9BxXcYo6KQRLd9`}>Κιάτο Κορινθίας, 20200</a>
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
            <header className="footer-title">Εταιρεία</header>
            <Link href="/" className="link link-hover">
              Επικοινωνία
            </Link>
            <Link href="#works" className="link link-hover">
              Οι δουλειές μας
            </Link>
            <Link href="/about" className="link link-hover">
              Σχετικα με εμάς
            </Link>
          </nav>
        </footer>
      </Container>
      <div className="divider divider-neutral"></div>
      <Container>
        <div className="pb-2 px-6 mt-[-15px]">
          <a href="https://balas.dev" className="text-sm">
            Made with ❤️
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
