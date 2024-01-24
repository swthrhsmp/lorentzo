import React from "react";
import ImageItem from "./ImageItem";
import getToken from "../utils/getToken";

interface IImages {
  contents: {
    filename: string;
  }[];
}

const ImagesShowcase = async () => {
  const resp = await fetch("https://api.sirv.com/v2/files/readdir?dirname=%2Florentzo", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${await getToken()}`,
    },
  });
  const images: IImages = await resp.json();
  return (
    <div className="p-2 md:p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.contents.map((img) => (
        <ImageItem key={img.filename} src={`https://lorentzo.sirv.com/lorentzo/${img.filename}`} />
      ))}
    </div>
  );
};

export default ImagesShowcase;
