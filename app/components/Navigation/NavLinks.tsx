import Link from "next/link";
import React from "react";
import { RxCaretDown } from "react-icons/rx";

const NavLinks = () => {
  return (
    <div className="h-full hidden md:flex gap-4">
      <Link href="/" className="btn rounded-lg">
        Αρχική
      </Link>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn">
          Υπηρεσίες <RxCaretDown size={20} />
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <Link href="/" className="btn p-3 rounded-lg">
        Οι Δουλείες μας
      </Link>
      <Link href="/" className="btn p-3 rounded-lg">
        Επικοινωνία
      </Link>
    </div>
  );
};

export default NavLinks;
