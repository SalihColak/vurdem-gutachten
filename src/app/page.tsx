"use client";

import {
  Button,
  Card,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Mouse from "../../public/mouse.png";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main
      className="h-screen bg-[url('/bg-hero.jpg')] bg-[right_20%_top_100%] xl:bg-right-top bg-no-repeat bg-cover 
      relative
    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-r
    before:from-black
    xl:before:to-transparent
    xl:before:opacity-85
    before:opacity-65
    before:to-black
    "
    >
      <div className="relative h-screen">
        {/* <Navbar fluid className="fixed top-0 w-full shadow-xl z-30 bg-white">
          <NavbarBrand className="xl:ml-20" href="#">
            <Image
              width={300}
              height={200}
              src="/logo-dv.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </NavbarBrand>
          <NavbarToggle />

          <NavbarCollapse className="uppercase">
            <NavbarLink className="hover:text-orange-400 text-lg" href="#">
              Leistungen
            </NavbarLink>
            <NavbarLink className="hover:text-orange-400 text-lg" href="#">
              FAQ
            </NavbarLink>
            <NavbarLink className="hover:text-orange-400 text-lg" href="#">
              Kundenbewertungen
            </NavbarLink>
          </NavbarCollapse>
        </Navbar> */}
        <div className="navbar bg-base-100 sticky top-0 z-30 drawer">
          <div className="flex-1">
            <a className="text-xl cursor-pointer">
              <Image
                width={400}
                height={200}
                src="/logo-dv.png"
                className="mr-3 lg:w-96 w-64 transition-all duration-300"
                alt="Logo"
              />
            </a>
          </div>
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="flex gap-3">
            <button className="btn transition-all duration-300 lg:flex hidden">
              <Phone /> <span>0176 419 83 003</span>
            </button>
            <button className="btn transition-all duration-300 lg:flex hidden">
              <Mail /> <span>info@dv-gutachten.de</span>
            </button>
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
              <li className="p-4 px-2">
                <a>Leistungen</a>
              </li>
              <li className="p-4 px-2">
                <a>FAQ</a>
              </li>
              <li className="p-4 px-2">
                <a>Kundenbewertungen</a>
              </li>
              <li className="p-4 px-2">
                <a>Impressum</a>
              </li>
              <li className="flex lg:hidden p-4 px-2">
                <div className="bg-white text-black font-bold">
                  <Phone size={18} />
                  0176 419 83 003
                </div>
              </li>
              <li className="flex lg:hidden p-4 px-2">
                <div className="bg-white text-black font-bold">
                  <Mail size={18} />
                  info@dv-gutachten.de
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white absolute xl:top-1/3 xl:left-32 top-1/2 left-1/2 w-full xl:w-fit xl:translate-y-0 xl:-translate-x-0 -translate-y-1/2 -translate-x-1/2 xl:mt-0 mix-blend-screen px-2">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
            className="font-bold text-4xl xl:text-5xl mb-6 text-center xl:text-left  !leading-[55px] mix-blend-screen"
          >
            <h1>Unfallchaos?</h1>
            <h1 className="mix-blend-screen">
              Wir bringen{" "}
              <span className="bg-white rounded-full text-black px-3 mix-blend-screen">
                Ordnung
              </span>{" "}
              rein!
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.75 }}
            className="mb-10 text-center xl:text-left"
          >
            <h2 className="text-xl sm:font-extralight font-light">
              Unfälle sind Stress genug. Wir machen den Rest!
              <br />
              Schnelle Hilfe für dein Auto, klare Zahlen für deine Sicherheit.
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}
            className="flex flex-wrap gap-4 items-center xl:justify-start justify-center"
          >
            <a
              href="#"
              type="button"
              className="uppercase cursor-pointer text-white text-sm xl:text-xl bg-[#1d232a] hover:bg-[#1d232a]/90 transition-all duration-300 hover:xl:px-6 font-medium rounded-lg px-3 xl:px-5 py-2.5 text-center me-2"
            >
              Alle Leistungen
            </a>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            ease: "circIn",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-12 left-1/2 w-10 hidden xl:block"
        >
          <a href="#dienstleistungen">
            <Image src={Mouse} alt="scroll" className="-translate-x-1/2" />
          </a>
        </motion.div> */}
      </div>
      <section className="h-screen bg-white relative">
        <div className="xl:absolute relative  xl:mt-0 mx-auto -top-32 xl:-top-60 xl:right-24 xl:w-[600px]  bg-[#1d232a] shadow-xl rounded-xl w-[90%] flex flex-col items-center p-8 gap-4">
          <h3 className="text-xl font-medium text-white">Schaden melden</h3>
          <p className="text-center mb-3">
            Sie hatten einen Unfall? Nutzen Sie das folgende Formular um mir im
            ersten Schritt die wichtigsten Infos bereit zu stellen.
          </p>
          <div className="flex flex-col w-full gap-4">
            <div className="flex lg:flex-row flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex lg:flex-row flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Telefon"
                className="input input-bordered lg:w-1/2 w-full"
              />
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Anliegen
                </option>
                <option>Unfallgutachten</option>
                <option>Kostenvoranschläge</option>
                <option>Wertgutachten</option>
                <option>Leasingrücknahmen</option>
                <option>Vorschädenanalyse</option>
                <option>Reperaturbestätigungen</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <textarea
              placeholder="Optionale Nachricht"
              className="textarea textarea-bordered"
              rows={4}
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox text-3xl border-primary checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:blue]"
                />
                <span className="label-text mr-auto ml-3">
                  Ich habe die Datenschutzerklärung gelesen und stimme zu.
                </span>
              </label>
            </div>
            <Button className="btn btn-primary">Absenden</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
