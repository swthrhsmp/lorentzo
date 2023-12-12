import React from "react";

interface Props {
  children: React.ReactNode;
  maxWidth?: number;
}

const Container = ({ children, maxWidth = 1000 }: Props) => {
  return <div className={`max-w-[${maxWidth}px] w-full`}>{children}</div>;
};

export default Container;
