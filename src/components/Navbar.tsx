"use client";

import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="navbar bg-base-100/70 backdrop-blur-md sticky top-0 z-50 drawer">
      <div className="flex-1 ">
        <a href="/#" className="text-xl cursor-pointer">
          <Image
            width={400}
            height={200}
            src="/logo-dark.png"
            className="mr-3 lg:w-96 w-64 transition-all duration-300"
            alt="Logo"
          />
        </a>
      </div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex gap-3">
        <a
          href="tel:017641983003"
          className="btn bg-primary hover:bg-primary/60 text-black transition-all duration-300 lg:flex hidden"
        >
          <Phone /> <span>0176 419 83 003</span>
        </a>
        <a
          href="mailto:info@dv-gutachten.de"
          className="btn transition-all duration-300 lg:flex hidden"
        >
          <Mail /> <span>info@dv-gutachten.de</span>
        </a>
      </div>
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="p-4 px-2 ">
            <a href="/#ueber-uns">Über uns</a>
          </li>
          <li className="p-4 px-2">
            <a href="/#leistungen">Leistungen</a>
          </li>
          <li className="p-4 px-2">
            <a href="/#faq">FAQ</a>
          </li>
          <li className="p-4 px-2">
            <a href="/#bewertungen">Kundenbewertungen</a>
          </li>
          <li className="p-4 px-2">
            <a href="/impressum">Impressum</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
