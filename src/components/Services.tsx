"use client";
import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { MOBILE_BREAKPONT_IN_PX } from "@/constants";

const Services = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const servicesRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
  });
  const x = useTransform(scrollYProgress, [0, 0.3], ["0%", "-38%"]);
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 1.1]);
  return (
    <section
      id="dienstleistungen"
      ref={servicesRef}
      className="relative xl:h-[200vh] mb-12"
    >
      <motion.div className="xl:h-screen relative xl:sticky xl:top-0 flex flex-col justify-center xl:pt-28 pt-14 overflow-x-hidden">
        <motion.div
          style={{ scale: width > MOBILE_BREAKPONT_IN_PX ? scale : 1 }}
        >
          <div className="text-center flex flex-col items-center w-full mb-10 gap-5">
            <div className="w-40 h-1 bg-orange-500" />
            <h2 className="xl:text-4xl text-2xl font-semibold uppercase">
              Unsere Dienstleistungen
            </h2>
          </div>

          {/* Cards Komponenten */}
          <motion.div
            style={{ x: width > MOBILE_BREAKPONT_IN_PX ? x : "-38%" }}
            className="flex flex-wrap xl:flex-row flex-col w-full justify-center gap-10 ml-[38%] items-center overflow-x-hidden"
          >
            <Card
              className="xl:w-[27%] w-[90%] max-w-[700px]"
              imgAlt="Unfall"
              imgSrc="/haftpflicht.jpg"
            >
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Haftpflichtschaden
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor ex vitae turpis consectetur, eu cursus libero
                  rutrum. Pellentesque euismod, nulla sit amet consequat mattis,
                  ipsum magna vehicula ex, vel consectetur nisi justo nec metus.
                  Quisque ullamcorper justo at
                </p>
              </div>
            </Card>

            <Card
              className="xl:w-[27%] w-[90%] max-w-[700px]"
              imgAlt="Unfall"
              imgSrc="/kasko.jpg"
            >
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kaskoschaden
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor ex vitae turpis consectetur, eu cursus libero
                  rutrum. Pellentesque euismod, nulla sit amet consequat mattis,
                  ipsum magna vehicula ex, vel consectetur nisi justo nec metus.
                  Quisque ullamcorper justo at
                </p>
              </div>
            </Card>

            <Card
              className="xl:w-[27%] w-[90%] max-w-[700px]"
              imgAlt="Unfall"
              imgSrc="/Kostenvoranschlag.jpg"
            >
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kostenvoranschlag
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 leading-7">
                  Ein Kostenvoranschlag ist eine detaillierte Schätzung der
                  voraussichtlichen Reparaturkosten für ein beschädigtes
                  Fahrzeug nach einem Unfall. Dieser Bericht wird von erfahrenen
                  Gutachtern erstellt und umfasst Arbeitskosten,
                  Ersatzteilkosten und andere relevante Ausgaben.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
