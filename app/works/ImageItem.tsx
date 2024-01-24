"use client";
import React from "react";
import { FaRegEye } from "react-icons/fa6";

interface Props {
  src: string;
}

const ImageItem = ({ src }: Props) => {
  return (
    <div className="relative aspect-square" onClick={() => alert("hi")}>
      <div className="h-full w-full opacity-0 hover:opacity-100 absolute hover:bg-black/60 transition-all grid place-content-center cursor-pointer text-white">
        <FaRegEye size={70} />
      </div>
      <img src={src} className="h-full w-full" />
    </div>
  );
};

export default ImageItem;
