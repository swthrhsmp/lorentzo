import React from "react";
import ImgWithText from "../components/Shared/ImgWithText";
import background from "@/public/assets/works.jpg";

const Works = () => {
  return (
    <section className="flex flex-col items-center">
      <ImgWithText style={{ backgroundPosition: "40% 40%" }} bgSrc={background.src}>
        Οι δουλειές μας
      </ImgWithText>
    </section>
  );
};

export default Works;
