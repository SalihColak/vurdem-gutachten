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
                  Wann benötige ich ein Kfz-Gutachten?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ein Kfz-Gutachten ist hilfreich bei Unfällen, zur Bewertung
                  des Fahrzeugwerts beim Kauf oder Verkauf, zur Feststellung von
                  Schäden bei Versicherungsansprüchen, zur Dokumentation des
                  Zustands für Finanzierungen oder zur Einstufung von
                  historischen Fahrzeugen (Oldtimern) bei der Versicherung.
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
                  Wie viel kostet ein Kfz-Gutachten und übernimmt die
                  Versicherung die Kosten?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Die Kosten für ein Kfz-Gutachten variieren je nach Umfang und
                  Art des Gutachtens. Bei einem Haftpflichtschaden, bei dem Sie
                  keine Schuld tragen, übernimmt die gegnerische Versicherung
                  die Kosten für ein Gutachten vollständig. Sie müssen dann
                  nichts zahlen.
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
                  Welche Unterlagen benötige ich für ein Gutachten?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Für ein Kfz-Gutachten benötigen Sie in der Regel die
                  Fahrzeugpapiere, einen Nachweis über den Schaden (z. B.
                  Unfallmitteilung) und gegebenenfalls vorherige Gutachten oder
                  Reparaturberichte.
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
                  Kann ich das Gutachten auch bei einem Gericht verwenden?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ja, Gutachten von qualifizierten Kfz-Gutachtern können in
                  rechtlichen Auseinandersetzungen und Gerichtsverfahren
                  verwendet werden, um eine fundierte Bewertung des Fahrzeugs
                  vorzulegen.
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
                  Was passiert, wenn mein Fahrzeug nicht fahrbereit ist?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Wenn Ihr Fahrzeug nicht fahrbereit ist, können wir nach
                  Absprache einen Ortstermin bei Ihnen vor Ort oder in einer
                  Werkstatt durchführen, um das Gutachten zu erstellen.
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
                  Wie detailliert ist ein Kfz-Gutachten?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ein Kfz-Gutachten ist sehr detailliert und umfasst alle
                  relevanten Aspekte des Fahrzeugs, wie Schäden, Wert,
                  technische Details und Reparaturbedarf. Das Gutachten enthält
                  zudem Fotos und eine umfassende Beschreibung des Fahrzeugs.
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
                  Können Sie auch historische oder klassische Fahrzeuge
                  begutachten?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ja, wir haben Erfahrung mit der Begutachtung von historischen
                  und klassischen Fahrzeugen. Solche Fahrzeuge erfordern oft
                  spezielle Kenntnisse und Expertise, die wir bereitstellen
                  können.
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
                  Kann ich eine zweite Meinung zu einem bestehenden Gutachten
                  einholen?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ja, Sie können jederzeit eine zweite Meinung einholen. Ein
                  zweites Gutachten kann zusätzliche Klarheit bringen oder
                  bestehende Differenzen klären.
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
                  Was ist der Wiederbeschaffungswert eines Fahrzeugs?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Der Wiederbeschaffungswert eines Fahrzeugs ist der Betrag, den
                  man aufbringen muss, um ein gleichwertiges Fahrzeug in einem
                  vergleichbaren Zustand und mit ähnlicher Ausstattung und
                  Laufleistung wiederzubeschaffen. Dieser Wert berücksichtigt
                  den aktuellen Marktwert und dient als Grundlage für die
                  Berechnung vom Entschädigungszahlungen durch Versicherungen im
                  Schadensfall. Der Wiederbeschaffungswert ist relevant, wenn
                  ein Fahrzeug nach einem Unfall oder Schaden als
                  wirtschaftlicher Totalschaden eingestuft wird.
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
                  Was ist eine Wertminderung (technischer und merkantiler
                  Minderwert)?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Eine Wertminderung bezeichnet den finanziellen Verlust, den
                  ein Fahrzeug nach einem Unfall oder Schaden erleidet, selbst
                  wenn es vollständig repariert wurde. Dieser Wertverlust
                  entsteht, weil das Fahrzeug durch den Schaden an Wert
                  eingebüßt hat und Käufer bei einem späteren Verkauf häufig
                  weniger bereit sind zu zahlen, da das Fahrzeug als
                  {'"'}Unfallfahrzeug{'"'} gilt. Der technische Minderwert
                  bezieht sich auf den Verlust an Wert, den das Fahrzeug nach
                  der Reparatur weiterhin hat, da verbleibende technische Mängel
                  oder Beeinträchtigungen vorhanden sind. Der merkantile
                  Minderwert bezieht sich auf den Verlust an Wert, welchen das
                  Fahrzeug noch hat, da es als Unfallfahrzeug gilt, unabhängig
                  davon, wie gut die Reparatur durchgeführt wurde.
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
                  Wie finde ich einen qualifizierten Kfz-Gutachter?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Achten Sie auf die Qualifikationen und Erfahrungen des
                  Gutachters. Zertifikate, Mitgliedschaften in Berufsverbänden
                  und Empfehlungen von Verwandten und Freunden können
                  Anhaltspunkte für die Qualität des Gutachters sein.
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
                  Darf ich einen Rechtsanwalt einschalten? Habe ich die Kosten
                  zu tragen?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ja, wir raten Ihnen auf jeden Fall einen Rechtsanwalt zu
                  beauftragen. Dieser kümmert sich um den Schriftverkehr mit der
                  gegnerischen Versicherung. Wenn Sie keine Schuld am Unfall
                  tragen, werden auch die Anwaltskosten vollständig von der
                  gegnerischen Versicherung übernommen. Falls Sie keinen Anwalt
                  haben, können Sie uns direkt ansprechen und wir empfehlen
                  Ihnen Anwälte mit denen wir jahrelang zusammenarbeiten.
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
                  Welche Arten von Gutachten bieten Sie an?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Wir bieten verschiedene Arten von Gutachten an, darunter
                  Schadengutachten, Wertgutachten, Kostenvoranschläge,
                  Zustandsberichte, technische Beurteilungen und
                  Oldtimer-Bewertungen. Bei speziellen Anforderungen sprechen
                  Sie uns einfach an.
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
                  Wie vereinbare ich einen Termin für ein Gutachten?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sie können einen Termin telefonisch, per E-Mail oder über
                  unser Online-Buchungssystem vereinbaren. Teilen Sie uns
                  einfach Ihre Kontaktdaten und Ihre Verfügbarkeit mit. Wir
                  kommen gerne zu Ihnen und begutachten das Fahrzeug bei vor Ort
                  oder vereinbaren einen Termin in einer Werkstatt, sodass bei
                  Bedarf auch Fahrzeugteile demontiert werden können.
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
                  Was ist der Unterschied zwischen einem {'"'}Schadengutachten
                  {'"'} und einem
                  {' "'}Wertgutachten{'"'}?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ein Schadengutachten bewertet den Umfang und die Kosten der
                  Reparaturen nach einem Unfall oder Schaden, während ein
                  Wertgutachten den aktuellen Marktwert des Fahrzeugs, abhängig
                  von Schäden und Zustand, bestimmt.
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
                  Was versteht man unter dem Restwert eines Kraftfahrzeugs?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Der Restwert eines Kraftfahrzeugs bezeichnet den verbleibenden
                  Wert eines Fahrzeugs nach einem Unfall oder Schaden. Er stellt
                  den Betrag dar, den man durch den Verkauf des beschädigten
                  Fahrzeugs noch erzielen kann. Der Restwert wird üblicherweise
                  von Sachverständigen ermittelt und spielt eine wichtige Rolle
                  bei der Schadensregulierung durch Versicherungen. In der Regel
                  erfolgt die Ermittlung des Restwerts durch das Einholen von
                  Angeboten spezialisierter Restwertbörsen oder Verwerter. Der
                  Restwert wird dann von dem Wiederbeschaffungswert abgezogen,
                  die die Versicherung für den Totalschaden des Fahrzeugs zahlt.
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
                  Was ist ein wirtschaftlicher Totalschaden?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ein wirtschaftlicher Totalschaden liegt vor, wenn die Kosten
                  für die Reparatur den Fahrzeugwert übersteigen. Aus
                  finanzieller Sicht lohnt sich in diesem Fall eine Reparatur
                  nicht mehr. Wenn der Fahrzeughalter auf eine Reparatur
                  besteht, könnte mithilfe der 130%-Regelung das Fahrzeug
                  dennoch repariert werden. Aus technischer Sicht ist eine
                  Instandsetzung möglich.
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
                  Was ist ein technischer Totalschaden?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ein technischer Totalschaden liegt vor, wenn die
                  Beschädigungen an einem Fahrzeug so enorm sind, dass die
                  Wiederherstellung des vorherigen Zustands nicht mehr möglich
                  ist oder mit einem unverhältnismäßigen Aufwand verbunden wäre.
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
                  Was ist ein unechter Totalschaden?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ein unechter Totalschaden liegt vor, wenn der Fahrzeughalter
                  trotz Reparaturwürdigkeit den Schaden nicht reparieren möchte
                  und auf Basis eines Totalschadens abrechnen möchte. Dies
                  funktioniert nur dann, wenn die Reparaturkosten höher als die
                  Differenz zwischen Wiederbeschaffungswert abzüglich Restwerts
                  sind. Hierbei darf die Versicherung die kostengünstigere
                  Variante wählen.
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
                  Was ist ein Bagatellschaden?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Unter einem Bagatellschaden versteht man einen geringfügigen
                  Schaden an einem Fahrzeug, dessen Reparaturkosten relativ
                  niedrig sind, meist unter einer bestimmten Schwelle von etwa
                  750 bis 1.000 Euro. Solche Schäden sind in der Regel
                  oberflächlicher Natur, wie kleine Kratzer, Dellen oder leichte
                  Lackschäden, und beeinträchtigen die Funktionalität oder
                  Sicherheit des Fahrzeugs nicht wesentlich. Versicherungen
                  lehnen bei Bagatellschäden oft ein Haftpflichtgutachten ab, da
                  die Kosten für das Gutachten den Schaden übersteigen könnten.
                  Aus diesem Grund erstellen wir dann einen Kostenvoranschlag,
                  wodurch die Reparaturkosten geltend gemacht werden können. Die
                  Regulierung erfolgt oft ohne umfangreiche Gutachten, um den
                  Prozess zu vereinfachen und Kosten zu sparen. Ein typisches
                  Beispiel für einen Bagatellschaden ist eine kleine Delle an
                  der Tür, verursacht durch das unvorsichtige Öffnen einer
                  anderen Autotür, mit Reparaturkosten von etwa 600 Euro.
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
