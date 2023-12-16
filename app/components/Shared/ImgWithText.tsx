import React, { ReactNode } from "react";

interface Props {
  bgSrc: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const ImgWithText = ({ bgSrc, className, style, children }: Props) => {
  return (
    <div
      className={`h-[400px] w-full bg-red-200 flex justify-center items-center text-white text-3xl md:text-5xl ${className}`}
      style={{
        background: " url(" + bgSrc + "), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
        backgroundBlendMode: "overlay",
        backgroundPosition: "60% 60%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ImgWithText;
