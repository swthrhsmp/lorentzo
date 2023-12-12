import Link from "next/link";
import React from "react";
import { MdOutlineConstruction } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex">
      <Link href="/" className="flex items-center gap-2">
        <MdOutlineConstruction size={50} />
        <div>
          <h1 className="font-bold text-2xl">Lorentzo</h1>
          <p className="text-sm">Βιομηχανικά Δάπεδα,</p>
          <p className="text-sm">Σταμπωτά, Ράμπες</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
