import React from "react";
import background from "../../../public/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Container from "./Container";

const Hero = () => {
  return (
    <section
      className={`h-[600px] bg-red-200 flex justify-center items-center text-white`}
      style={{
        background: " url(" + background.src + "), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
        backgroundBlendMode: "overlay",
        backgroundPosition: "40% 40%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="w-full  p-5">
          <h1 className="font-bold text-3xl md:text-5xl mb-4 md:mb-10">Καλωσήρθατε</h1>
          <h2 className="font-bold text-2xl md:text-4xl mb-3">Αναλαμβάνουμε την κατασκευή:</h2>
          <ul className="ml-4 mb-7">
            <li>
              <h2 className="flex items-center gap-2 text-1xl md:text-3xl">
                <MdOutlineKeyboardArrowRight />
                Βιομηχανικών δαπέδων
              </h2>
            </li>
            <li>
              <h2 className="flex items-center gap-2 text-1xl md:text-3xl">
                <MdOutlineKeyboardArrowRight />
                Σταμποτών δαπέδων
              </h2>
            </li>
            <li>
              <h2 className="flex items-center gap-2 text-1xl md:text-3xl">
                <MdOutlineKeyboardArrowRight />
                Ραμπών
              </h2>
            </li>
            <li>
              <h2 className="flex items-center gap-2 text-1xl md:text-3xl">
                <MdOutlineKeyboardArrowRight />
                Πατητή τσιμεντοκονία
              </h2>
            </li>
          </ul>
          <button className="btn">Επικοινωνια</button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
