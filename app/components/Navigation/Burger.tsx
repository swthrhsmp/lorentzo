"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";

const Burger = () => {
  return (
    <>
      <div className="block md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn">
            <RxHamburgerMenu size={24} />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-3">
            <li>
              <Logo />
            </li>
            <li>
              <Link href="/" className="btn  grid place-content-center" onClick={() => document.getElementById("my-drawer")?.click()}>
                Αρχική
              </Link>
            </li>
            <li>
              <Link href="/services" className="btn  grid place-content-center" onClick={() => document.getElementById("my-drawer")?.click()}>
                Υπηρεσίες
              </Link>
            </li>
            <li>
              <Link href="/works" className="btn  grid place-content-center" onClick={() => document.getElementById("my-drawer")?.click()}>
                Τα έργα μας
              </Link>
            </li>
            <li>
              <Link href="/about" className="btn  grid place-content-center" onClick={() => document.getElementById("my-drawer")?.click()}>
                Σχετικά με εμάς
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn  grid place-content-center" onClick={() => document.getElementById("my-drawer")?.click()}>
                Επικοινωνία
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Burger;
