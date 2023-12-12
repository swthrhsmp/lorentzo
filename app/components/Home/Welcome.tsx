import Container from "./Container";
import React from "react";

const Welcome = () => {
  return (
    <section className="flex flex-col items-center">
      <Container>
        <div className="w-full p-5">
          <h1 className="font-extrabold text-2xl mb-4">Δείτε τις δουλειές μας</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
            <div className="w-full aspect-square bg-red-200">Photo</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Welcome;
