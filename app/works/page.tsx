import React from "react";
import ImgWithText from "../components/Shared/ImgWithText";
import background from "@/public/assets/works.jpg";
import Container from "../components/Home/Container";
import ImagesShowcase from "./ImagesShowcase";

const Works = () => {
  return (
    <section className="flex flex-col items-center">
      <ImgWithText style={{ backgroundPosition: "40% 40%" }} bgSrc={background.src}>
        Οι δουλειές μας
      </ImgWithText>
      <Container>
        <ImagesShowcase />
      </Container>
    </section>
  );
};

export default Works;
