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
import Link from "next/link";
import bundesweit from "../../public/bundesweit.svg";
import immer from "../../public/immer.svg";
import quali from "../../public/quali.svg";
import { ArrowUpRight } from "lucide-react";

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
        <div className="navbar bg-base-100 fixed top-0 z-50 drawer">
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
                <a>Über uns</a>
              </li>
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
      <section className="lg:pb-10 bg-white relative">
        <div className="xl:absolute relative  xl:mt-0 mx-auto -top-32 xl:-top-[420px] xl:right-24 xl:w-[600px] 2xl:w-[1000px] bg-[#1d232a] lg:bg-[#1d232a]/80 backdrop-blur-2xl shadow-2xl rounded-xl w-[90%] flex flex-col items-center p-8 gap-4">
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
              className="textarea textarea-bordered textarea-md text-base"
              rows={4}
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox text-3xl border-primary checked:border-primary [--chkbg:theme(colors.primary)] [--chkfg:blue]"
                />
                <span className="label-text mr-auto ml-3">
                  Ich habe die{" "}
                  <Link
                    href={"/datenschutz"}
                    target="_blank"
                    className="text-primary"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme zu.
                </span>
              </label>
            </div>
            <Button className="btn btn-primary">Absenden</Button>
          </div>
        </div>
      </section>
      <section
        id="ueber-uns"
        className="w-full sm:pb-40 pb-20 xl:pt-40 bg-white"
      >
        <div className="flex flex-col items-center px-2">
          <h5 className="text-lg font-bold mb-2 text-center text-neutral-800">
            Über Uns
          </h5>
          <h3 className="lg:text-4xl xl:text-4xl text-2xl font-semibold xl:leading-[60px] mb-8 text-center text-[#1d232a]">
            Vertrauenswürdige und zuverlässige KFZ-Gutachten
          </h3>
          <p className="max-w-[70rem] text-center md:text-xl text-lg font-light text-neutral-600 md:!leading-9 !leading-7">
            In einem modernen Haushalt ist ein Auto unverzichtbar. Wenn Ihr
            Fahrzeug einen Schaden erleidet, kann Ihre Mobilität stark
            eingeschränkt sein. Damit Sie in solchen Situationen schnell und
            zuverlässig Unterstützung erhalten, steht Ihnen unser junges,
            engagiertes Team mit professionellen KFZ-Gutachten zur Seite.
          </p>
          <div className="flex md:flex-row flex-col justify-center 2xl:mt-36 mt-20 gap-20 text-[#1d232a]">
            <div className=" flex flex-col items-center md:max-w-[21rem] text-center gap-6">
              <Image
                src={bundesweit}
                width={100}
                height={100}
                alt="Bundesweit"
              />
              <h5 className="text-2xl font-bold mt-2">Bundesweit</h5>
              <p className="text-xl font-light">
                Egal wo sie sich befinden, wir sind in ganz Deutschland für Sie
                da.
              </p>
            </div>
            <div className="flex flex-col items-center  md:max-w-[21rem] text-center gap-6">
              <Image
                src={immer}
                width={100}
                height={100}
                alt="24/7 erreichbar"
              />
              <h5 className="text-2xl font-bold mt-2">24/7 erreichbar</h5>
              <p className="text-xl font-light">
                Wir sind immer für Sie erreichbar, auch an Wochenenden und
                Feiertagen.
              </p>
            </div>
            <div className="flex flex-col items-center  md:max-w-[21rem] text-center gap-6">
              <Image src={quali} width={100} height={100} alt="Erfahrung" />
              <h5 className="text-2xl font-bold mt-2">
                Qualifizierte Gutachter
              </h5>
              <p className="text-xl font-light">
                Unsere langjährige Erfahrung mit Kunden führt zu hoher Qualität
                und Zufriedenheit.
              </p>
            </div>
          </div>
          <a href="#bewerben">
            <Button className=" mt-20 text-xl p-1 rounded-xl bg-[#1d232a]">
              Jetzt kontaktieren <ArrowUpRight size={24} />
            </Button>
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center py-20 text-black relative">
        <Image
          src={"/image1.jpg"}
          fill
          alt="hg"
          className="object-cover absolute top-0 left-0 w-full h-full blur-lg"
        />
        <div className="bg-[#1d232a] absolute top-0 left-0 w-full h-full opacity-90  z-10" />

        <div className=" w-[1200px] h-[80%] top-60 blur-2xl bg-gradient-to-tr from-primary/10 to-orange-400/10 rounded-full absolute hidden xl:block" />
        <h2 className="z-30 mb-20 text-4xl text-white font-medium">
          Unsere Leistungen
        </h2>
        <div className="z-20 relative grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col w-96  bg-white rounded-xl group">
            <div className="w-full h-60 relative overflow-hidden ">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallschaden"
                className="rounded-t-xl object-cover transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <details className="collapse collapse-arrow">
                <summary className="collapse-title text-xl font-medium ">
                  Unfallgutachten
                </summary>
                <div className="collapse-content transition-all duration-300">
                  <p>
                    Wenn durch einen Unfall Schadensersatzansprüche entstehen,
                    kann es ratsam sein, ein Gutachten erstellen zu lassen. Ein
                    unabhängiger KFZ-Gutachter kann Ihnen schnelle und
                    zuverlässige Auskunft darüber geben, wie hoch der
                    Sachschaden ist.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="flex flex-col w-96  bg-white rounded-xl group">
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallschaden"
                className="rounded-t-xl object-cover transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <details className="collapse collapse-arrow">
                <summary className="collapse-title text-xl font-medium ">
                  Wertgutachten
                </summary>
                <div className="collapse-content transition-all duration-300">
                  <p>
                    Ein Wertgutachten durch einen unabhängigen und neutralen
                    Kfz-Sachverständigen bringt Ihnen eine realistische
                    Einschätzung über den aktuellen Marktwert Ihres Fahrzeugs.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="flex flex-col w-96  bg-white rounded-xl group">
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallschaden"
                className="rounded-t-xl object-cover transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <details className="collapse collapse-arrow">
                <summary className="collapse-title text-xl font-medium ">
                  Leasingrücknahmen
                </summary>
                <div className="collapse-content transition-all duration-300">
                  <p>
                    Ein Wertgutachten durch einen unabhängigen und neutralen
                    Kfz-Sachverständigen bringt Ihnen eine realistische
                    Einschätzung über den aktuellen Marktwert Ihres Fahrzeugs.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="flex flex-col w-96  bg-white rounded-xl group">
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallschaden"
                className="rounded-t-xl object-cover transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <details className="collapse collapse-arrow">
                <summary className="collapse-title text-xl font-medium ">
                  Vorschädenanalyse
                </summary>
                <div className="collapse-content transition-all duration-300">
                  <p>
                    Bei einer Vorschadenanalyse überprüft der
                    KFZ-Sachverständige das Fahrzeug auf bestehende und vor
                    allem versteckte Schäden und Mängel. Bei der Anschaffung
                    eines neuen Fahrzeugs ist es sinnvoll, das Fahrzeug
                    überprüfen zu lassen, denn manchmal sind Vor- oder
                    Altschäden nicht auf den ersten Blick erkennbar, können
                    jedoch den Wert Ihres Fahrzeugs erheblich mindern.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="flex flex-col w-96  bg-white rounded-xl group">
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallschaden"
                className="rounded-t-xl object-cover transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <details className="collapse collapse-arrow">
                <summary className="collapse-title text-xl font-medium ">
                  Kurzgutachten
                </summary>
                <div className="collapse-content transition-all duration-300">
                  <p>
                    Das Kurzgutachten ist weitgehend mit dem Kostenvoranschlag
                    gleichzusetzen, unterscheidet sich jedoch sehr von einem
                    normalen KFZ-Gutachten. Es wird zur Beweissicherung für die
                    Versicherung verwendet, jedoch vor Gericht hat es keine
                    Beweis sichernde Funktion.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="flex flex-col w-96  bg-white rounded-xl group">
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallschaden"
                className="rounded-t-xl object-cover transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <details className="collapse collapse-arrow">
                <summary className="collapse-title text-xl font-medium ">
                  Reparaturbestätigungen
                </summary>
                <div className="collapse-content transition-all duration-300">
                  <p>
                    Damit Sie bei der Schadensregulierung auf der sicheren Seite
                    sind, empfiehlt es sich oft, das Fahrzeug nach der Reparatur
                    bei dem KFZ-Sachverständigen vorzuführen. Dieser kann
                    überprüfen, ob alles, was Ihnen die Werkstatt in Rechnung
                    gestellt hat, auch wirklich durchgeführt bzw. fachgerecht
                    instand gesetzt wurde. Besonders wichtig ist Ihre
                    Reparaturbestätigung durch Ihren Gutachter dann, wenn Sie
                    die Reparatur Ihres Fahrzeugs in Eigenregie durchgeführt
                    haben. Damit wir Ihren Nutzungsausfall bei der Versicherung
                    des Verursachers geltend machen können.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen bg-white"></section>
    </main>
  );
}
