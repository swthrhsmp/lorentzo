import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className="border-[1px] rounded-md shadow-xl overflow-hidden  text-white bg-slate-800">{children}</div>;
};

export default Card;
