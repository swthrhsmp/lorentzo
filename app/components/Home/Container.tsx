import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className={`max-w-[1000px] w-full`}>{children}</div>;
};

export default Container;
