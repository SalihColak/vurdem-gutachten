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
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Mouse from "../../public/mouse.png";
import Link from "next/link";
import Services from "@/components/Services";
import Standorte from "@/components/Standorte";

export default function Home() {
  const lenis = new Lenis();
  useEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

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
        <Navbar fluid className="fixed top-0 w-full shadow-xl z-30 bg-white">
          <NavbarBrand className="xl:ml-28" href="#">
            <Image
              width={10}
              height={10}
              src="/favicon.ico"
              className="mr-3 w-6 sm:w-9 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Vurdem
            </span>
          </NavbarBrand>
          <NavbarToggle />

          <div className="md:order-2 md:flex hidden">
            <Button className="cursor-pointer text-white text-4xl bg-gradient-to-br from-pink-500 to-orange-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-center">
              Kontakt aufnehmen
            </Button>
          </div>
          <NavbarCollapse className="ml-auto mr-10 ">
            <NavbarLink className="hover:text-orange-800 text-lg" href="#">
              Über Uns
            </NavbarLink>
            <NavbarLink className="hover:text-orange-400 text-lg" href="#">
              Unsere Dienstleistungen
            </NavbarLink>
            <NavbarLink className="hover:text-orange-400 text-lg" href="#">
              FAQ
            </NavbarLink>
            <NavbarLink className="hover:text-orange-400 text-lg" href="#">
              Kundenbewertungen
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
        <div className="text-white absolute xl:top-1/3 xl:left-32 top-1/2 left-1/2 w-full xl:w-fit xl:translate-y-0 xl:-translate-x-0 -translate-y-1/2 -translate-x-1/2 xl:mt-0">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
            className="font-bold text-4xl xl:text-6xl mb-6 text-center xl:text-left"
          >
            <h1>Unfallchaos?</h1>
            <h1>Wir bringen Ordnung rein!</h1>
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: 0.75 }}
            className="mb-10 text-center xl:text-left"
          >
            <h2 className="text-xl font-extralight">
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
              className="cursor-pointer text-white text-sm xl:text-xl bg-gradient-to-br from-pink-500 to-orange-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-3 xl:px-5 py-2.5 text-center me-2"
            >
              Kontakt aufnehmen
            </a>

            <button
              // href={"#dienstleistungen"}
              onClick={() => {
                lenis.scrollTo("#dienstleistungen");
              }}
              className="cursor-pointer bg-gray-300 text-black text-sm xl:text-xl font-medium rounded-lg p-2.5 px-3 xl:px-5"
            >
              Unsere Dienstleistungen
            </button>
          </motion.div>
        </div>

        <motion.div
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
          <button
            onClick={() => {
              lenis.scrollTo("#dienstleistungen");
            }}
          >
            <Image src={Mouse} alt="scroll" className="-translate-x-1/2" />
          </button>
        </motion.div>
      </div>
      <Services />
      {/* <Standorte /> */}
      <section className="h-screen bg-white relative"></section>
    </main>
  );
}
