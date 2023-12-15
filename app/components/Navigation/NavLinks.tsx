import Link from "next/link";
import React from "react";
import { RxCaretDown } from "react-icons/rx";

const NavLinks = () => {
  return (
    <ul className="menu menu-horizontal h-full hidden md:flex">
      <li>
        <Link href="/" className="px-2 py-2  rounded-lg">
          Αρχική
        </Link>
      </li>
      <li>
        <Link href="/services" className=" px-2 py-2 rounded-lg">
          Υπηρεσίες
        </Link>
      </li>
      <li>
        <Link href="/works" className=" px-2 py-2 rounded-lg">
          Οι Δουλείες μας
        </Link>
      </li>
      <li>
        <Link href="/about" className=" px-2 py-2 rounded-lg">
          Σχετικα με εμάς
        </Link>
      </li>
      <li>
        <Link href="/contact" className=" px-2 py-2 rounded-lg">
          Επικοινωνία
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
