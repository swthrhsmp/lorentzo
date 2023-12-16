import React from "react";
import ImgWithText from "../components/Shared/ImgWithText";
import background from "@/public/assets/services.jpg";

const services = () => {
  return (
    <section className="flex flex-col items-center">
      <ImgWithText bgSrc={background.src}>Υπηρεσίες</ImgWithText>
    </section>
  );
};

export default services;
