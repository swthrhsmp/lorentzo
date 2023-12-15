import Container from "./Container";
import React from "react";
import Gallery from "./Gallery";

const Work = () => {
  return (
    <section id="works" className="flex flex-col items-center">
      <Container>
        <div className="w-full p-5">
          <h1 className="font-extrabold text-2xl md:text-4xl mb-4">Οι δουλείες μας</h1>
          <Gallery />
        </div>
      </Container>
    </section>
  );
};

export default Work;
