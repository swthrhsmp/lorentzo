import React from "react";
import background from "@/public/assets/contact.jpg";
import { FaPhone, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from "../components/Home/Container";
import ImgWithText from "../components/Shared/ImgWithText";

const MOBILE = "699999999";
const LANDPHONE = "2742000000";
const EMAIL = "lorentzo@gmail.com";

const Contact = () => {
  return (
    <section className="flex flex-col items-center">
      <ImgWithText bgSrc={background.src}>Επικοινωνία</ImgWithText>
      <Container>
        <div className="grid grid-cols-1 p-6 gap-4 ">
          <a
            href={`tel:${MOBILE}`}
            className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg transition-all duration-100 hover:translate-y-[-5px] font-bold text-1xl md:text-2xl hover:underline"
          >
            <div className="bg-slate-700 h-full p-6 text-white">
              <FaMobileAlt size={30} />
            </div>

            {MOBILE}
          </a>
          <a
            href={`tel:${LANDPHONE}`}
            className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg transition-all duration-100 hover:translate-y-[-5px] font-bold text-1xl md:text-2xl hover:underline"
          >
            <div className="bg-slate-700 h-full p-6 text-white">
              <FaPhone size={30} />
            </div>
            {LANDPHONE}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg transition-all duration-100 hover:translate-y-[-5px] font-bold text-1xl md:text-2xl hover:underline"
          >
            <div className="bg-slate-700 h-full p-6 text-white">
              <MdEmail size={30} />
            </div>
            {EMAIL}
          </a>
          <a
            href="https://maps.app.goo.gl/jaj9BxXcYo6KQRLd9"
            target="_blank"
            className=" bg-slate-200 flex items-center gap-4 rounded-xl overflow-hidden drop-shadow-lg transition-all duration-100 hover:translate-y-[-5px] font-bold text-1xl md:text-2xl hover:underline"
          >
            <div className="bg-slate-700 h-full p-6 text-white">
              <FaLocationDot size={30} />
            </div>
            Κίατο Κορινθίας
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
