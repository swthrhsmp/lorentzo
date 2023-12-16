import React from "react";
import ImgWithText from "../components/Shared/ImgWithText";
import background from "@/public/assets/about.jpg";

const About = () => {
  return (
    <section className="flex flex-col items-center">
      <ImgWithText style={{ backgroundPosition: "40% 55%" }} bgSrc={background.src}>
        Σχετικά με εμάς
      </ImgWithText>
    </section>
  );
};

export default About;
