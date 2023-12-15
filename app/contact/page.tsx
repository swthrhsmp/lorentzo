import React from "react";
import background from "@/public/assets/contact.jpg";
import { FaPhone, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from "../components/Home/Container";

const MOBILE = "699999999";
const LANDPHONE = "2742000000";
const EMAIL = "lorentzo@gmail.com";

const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <div
        className={`h-[400px] w-full bg-red-200 flex justify-center items-center text-white text-3xl md:text-5xl`}
        style={{
          background: " url(" + background.src + "), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          backgroundBlendMode: "overlay",
          backgroundPosition: "60% 60%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        Επικοινωνία
      </div>
      <Container>
        <div className="grid grid-cols-1 p-6 gap-4 ">
          <div className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg">
            <div className="bg-slate-700 h-full p-6 text-white">
              <FaMobileAlt size={30} />
            </div>
            <a href={`tel:${MOBILE}`} className="font-bold text-1xl md:text-2xl hover:underline">
              {MOBILE}
            </a>
          </div>
          <div className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg">
            <div className="bg-slate-700 h-full p-6 text-white">
              <FaPhone size={30} />
            </div>
            <a href={`tel:${LANDPHONE}`} className="font-bold text-1xl md:text-2xl hover:underline">
              {LANDPHONE}
            </a>
          </div>
          <div className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg">
            <div className="bg-slate-700 h-full p-6 text-white">
              <MdEmail size={30} />
            </div>
            <a href={`mailto:${EMAIL}`} className="font-bold text-1xl md:text-2xl hover:underline">
              {EMAIL}
            </a>
          </div>
          <div className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg">
            <div className="bg-slate-700 h-full p-6 text-white">
              <FaLocationDot size={30} />
            </div>
            <a href="https://maps.app.goo.gl/jaj9BxXcYo6KQRLd9" target="_blank" className="font-bold text-1xl md:text-2xl hover:underline">
              Κίατο Κορινθίας
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
