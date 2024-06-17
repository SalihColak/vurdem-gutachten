"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import bundesweit from "../../public/bundesweit.svg";
import immer from "../../public/immer.svg";
import quali from "../../public/quali.svg";
import { ArrowUpRight } from "lucide-react";
import { CookieModal } from "@schlomoh/react-cookieconsent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Content = () => (
  <>
    <h3>Diese Webseite benutzt Cookies</h3>
    <p>Um das Nutzungserlebnis zu steigern benutzt diese Webseite Cookies.</p>
  </>
);

export default function Home() {
  return (
    <main>
      <CookieModal
        acceptButtonText="Akzeptieren"
        declineButtonText="Ablehnen"
        headingColor="white"
        paragraphColor="grey"
        containerStyle={{ backgroundColor: "#14181d", zIndex: 9999 }}
        primaryButtonStyle={{ backgroundColor: "#427a90" }}
        infoContent={<Content />}
      />
      <Navbar />

      <div
        className=" h-screen bg-[url('/bg-hero.jpg')] bg-[right_20%_top_100%] xl:bg-right-top bg-no-repeat bg-cover 
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
        <div className="text-white absolute xl:top-1/4 xl:left-32 top-1/2 left-1/2 w-full xl:w-fit xl:translate-y-0 xl:-translate-x-0 -translate-y-1/2 -translate-x-1/2 xl:mt-0 mix-blend-screen px-2">
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
              href="#leistungen"
              type="button"
              className="uppercase cursor-pointer text-white text-sm xl:text-xl bg-[#1d232a] hover:bg-[#1d232a]/90 transition-all duration-300 hover:xl:px-6 font-medium rounded-lg px-3 xl:px-5 py-2.5 text-center me-2"
            >
              Alle Leistungen
            </a>
          </motion.div>
        </div>
      </div>
      <section className="lg:pb-10 bg-white relative">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="xl:absolute relative  xl:mt-0 mx-auto -top-32 xl:-top-96 xl:right-24 xl:w-[600px] 2xl:w-[1000px] bg-[#1d232a] lg:bg-[#1d232a]/80 backdrop-blur-2xl shadow-2xl rounded-xl w-[90%] flex flex-col items-center p-8 gap-4"
        >
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
        </motion.div>
      </section>
      <section
        id="ueber-uns"
        className="w-full sm:pb-40 pb-20 xl:pt-40 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center px-2 w-full"
        >
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
          <div className="flex md:flex-row flex-col justify-center 2xl:mt-36 mt-20 gap-20 text-[#1d232a] overflow-hidden w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=" flex flex-col items-center md:max-w-[21rem] text-center gap-6"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center  md:max-w-[21rem] text-center gap-6"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center  md:max-w-[21rem] text-center gap-6"
            >
              <Image src={quali} width={100} height={100} alt="Erfahrung" />
              <h5 className="text-2xl font-bold mt-2">
                Qualifizierte Gutachter
              </h5>
              <p className="text-xl font-light">
                Unsere langjährige Erfahrung mit Kunden führt zu hoher Qualität
                und Zufriedenheit.
              </p>
            </motion.div>
          </div>
          <a href="#bewerben">
            <Button
              className=" mt-20 text-xl p-1 rounded-xl bg-[#1d232a]"
              onClick={() => {
                const dialog = document.getElementById(
                  "contact_modal"
                ) as HTMLDialogElement;
                if (dialog) dialog.showModal();
              }}
            >
              Jetzt kontaktieren <ArrowUpRight size={24} />
            </Button>
          </a>
        </motion.div>
      </section>
      <section
        id="leistungen"
        className="flex flex-col items-center py-20 text-black relative scroll-mt-10"
      >
        <Image
          src={"/image1.jpg"}
          fill
          alt="hg"
          className="object-cover absolute top-0 left-0 w-full h-full blur-lg"
        />
        <div className="bg-[#1d232a] absolute top-0 left-0 w-full h-full opacity-85  z-10" />

        <div className=" w-[1200px] h-[80%] top-60 blur-2xl bg-gradient-to-tr from-primary/10 to-orange-400/10 rounded-full absolute hidden xl:block" />
        <h2 className="z-30 mb-20 text-4xl text-white font-medium">
          Unsere Leistungen
        </h2>
        <div className="z-20 relative grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-min flex flex-col w-96 bg-white rounded-xl group"
          >
            <div className="w-full h-60 relative overflow-hidden ">
              <Image
                src={"/haftpflicht.jpg"}
                fill
                alt="Unfallgutachten"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-min flex flex-col w-96  bg-white rounded-xl group"
          >
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/wert.jpg"}
                fill
                alt="Wertgutachten"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-min flex flex-col w-96  bg-white rounded-xl group"
          >
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/leasing.jpg"}
                fill
                alt="Leasingrücknahmen"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-min flex flex-col w-96  bg-white rounded-xl group"
          >
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/vorschaden.jpg"}
                fill
                alt="Vorschadenanalyse"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-min flex flex-col w-96  bg-white rounded-xl group"
          >
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/kurz.jpg"}
                fill
                alt="Kurzgutachten"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-min flex flex-col w-96  bg-white rounded-xl group"
          >
            <div className="w-full h-60 relative overflow-hidden">
              <Image
                src={"/reperatur.jpg"}
                fill
                alt="Reparaturbestätigungen"
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
          </motion.div>
        </div>
      </section>

      <section id="faq" className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What do you mean by Figma assets?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You will have access to download the full Figma project
                  including all of the pages, the components, responsive pages,
                  and also the icons, illustrations, and images included in the
                  screens.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What does lifetime access exactly mean?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Once you have purchased either the design, code, or both
                  packages, you will have access to all of the future updates
                  based on the roadmap, free of charge.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  How does support work?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Were aware of the importance of well qualified support, that
                  is why we decided that support will only be provided by the
                  authors that actually worked on this project.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Feel free to{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and well help you out as soon as we can.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  I want to build more than one project. Is that allowed?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You can use Windster for an unlimited amount of projects,
                  whether its a personal website, a SaaS app, or a website for a
                  client. As long as you dont build a product that will directly
                  compete with Windster either as a UI kit, theme, or template,
                  its fine.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What does free updates include?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The free updates that will be provided is based on the{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    roadmap
                  </a>{" "}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What does the free version include?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    free version
                  </a>{" "}
                  of Windster includes a minimal style guidelines, component
                  variants, and a dashboard page with the mobile version
                  alongside it.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is the difference between Windster and Tailwind UI?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Although both Windster and Tailwind UI are built for
                  integration with Tailwind CSS, the main difference is in the
                  design, the pages, the extra components and UI elements that
                  Windster includes.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Additionally, Windster is a project that is still in
                  development, and later it will include both the application,
                  marketing, and e-commerce UI interfaces.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Can I use Windster in open-source projects?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generally, it is accepted to use Windster in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to Windster itself.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Find out more information by{" "}
                  <a
                    href="#"
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className="lg:hidden  fixed right-0 top-80 text-white flex flex-col z-[999]">
        <a
          href="tel:017641983003"
          className="w-12 h-12 bg-[#1d232a] flex items-center justify-center rounded-tl-xl"
        >
          <Phone size={24} />
        </a>
        <a
          href="mailto:info@dv-gutachten.de"
          className="w-12 h-12 bg-primary flex items-center justify-center rounded-bl-xl"
        >
          <Mail size={24} />
        </a>
      </div>
      <dialog id="contact_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <div className="relative bg-[#1d232a] lg:bg-[#1d232a]/80 backdrop-blur-2xl shadow-2xl rounded-xl flex flex-col items-center p-8 gap-4">
            <h3 className="text-xl font-medium text-white">Kontaktieren</h3>

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
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  );
}
