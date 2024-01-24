"use client";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

interface Props {
  src: string;
}

const ImageItem = ({ src }: Props) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
      <div className="relative aspect-square" onClick={() => setShowImage(true)}>
        <div className="h-full w-full opacity-0 hover:opacity-100 absolute hover:bg-black/60 transition-all grid place-content-center cursor-pointer text-white">
          <FaRegEye size={70} />
        </div>
        <img src={src} className="h-full w-full object-cover" />
      </div>

      {showImage && (
        <div
          className="
          transition-all fixed inset-0 bg-black/70 z-50 grid place-items-center"
          onClick={() => setShowImage(false)}
        >
          <button className="absolute top-5 right-5 text-white">
            <FaWindowClose size={30} />
          </button>
          <div className="w-[90dvw] h-[90dvh]">
            <img src={src} className="animate-wiggle w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageItem;
