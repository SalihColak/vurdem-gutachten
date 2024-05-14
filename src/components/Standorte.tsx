import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Pin from "@/components/Pin";

const Standorte = () => {
  const locationsRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: locationsRef,
  });
  const pin1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.3],
    ["0%", "200%", "0%"]
  );
  const pin2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.5, 0.7],
    ["0%", "200%", "0%"]
  );

  const desc1Opacity = useTransform(
    scrollYProgress,
    [0.05, 0.07, 0.3],
    ["0%", "200%", "0%"]
  );
  const desc1x = useTransform(scrollYProgress, [0.02, 0.1], ["0%", "-5%"]);

  const desc2Opacity = useTransform(
    scrollYProgress,
    [0.06, 0.08, 0.31],
    ["0%", "200%", "0%"]
  );
  const desc2x = useTransform(scrollYProgress, [0.03, 0.11], ["0%", "-5%"]);

  const desc3Opacity = useTransform(
    scrollYProgress,
    [0.07, 0.09, 0.32],
    ["0%", "200%", "0%"]
  );
  const desc3x = useTransform(scrollYProgress, [0.04, 0.12], ["0%", "-5%"]);

  const desc4Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.47, 0.7],
    ["0%", "200%", "0%"]
  );
  const desc4x = useTransform(scrollYProgress, [0.02, 0.1], ["0%", "-5%"]);

  const desc5Opacity = useTransform(
    scrollYProgress,
    [0.41, 0.48, 0.71],
    ["0%", "200%", "0%"]
  );
  const desc5x = useTransform(scrollYProgress, [0.03, 0.11], ["0%", "-5%"]);

  const desc6Opacity = useTransform(
    scrollYProgress,
    [0.42, 0.49, 0.72],
    ["0%", "200%", "0%"]
  );
  const desc6x = useTransform(scrollYProgress, [0.04, 0.12], ["0%", "-5%"]);

  const xMap = useTransform(
    scrollYProgress,
    [0, 0.05, 0.33, 0.4],
    ["0%", "60%", "60%", "-60%"]
  );
  return (
    <section
      ref={locationsRef}
      className="xl:h-[800vh] relative bg-gradient-to-br from-[#80cbd4] to-[#cad401] via-[#55c790] "
    >
      {/* <div className="absolute overflow-y-hidden inset-0 bg-gradient-to-tr from-sky-400 via-pink-400 to-orange-200 opacity-50" /> */}
      <motion.div className="xl:h-screen relative xl:sticky xl:top-0 flex flex-col justify-center items-center xl:pt-28 pt-14 overflow-x-hidden">
        <div className="relative text-white text-center pt-10 mb-20">
          <h2 className="text-4xl font-bold">Unsere Standorte</h2>
          <p className="text-lg font-light">
            Wir bieten Ihnen eine Vielzahl an Dienstleistungen an, die Ihnen
            helfen, den Überblick zu behalten.
          </p>
        </div>

        <motion.div
          style={{
            x: xMap,
          }}
          className="relative "
        >
          {/* Left Side Cards */}
          <div className="absolute -left-[90%] top-0 flex flex-col gap-7">
            <motion.div
              style={{ opacity: desc1Opacity, x: desc1x }}
              className=" w-[400px] h-48 bg-white rounded-2xl shadow-xl text-black flex flex-col p-4"
            >
              <span className="text-3xl font-semibold mb-2">Köln</span>
              <span className="text-base font-light mb-2">
                Köln ist eine Universitätsstadt blabla
              </span>
            </motion.div>
            <motion.div
              style={{ opacity: desc2Opacity, x: desc2x }}
              className="w-[400px] h-48 bg-white rounded-2xl shadow-xl"
            ></motion.div>
            <motion.div
              style={{ opacity: desc3Opacity, x: desc3x }}
              className=" w-[400px] h-48 bg-white rounded-2xl shadow-xl"
            ></motion.div>
          </div>
          {/* Right side cards */}
          <div className="absolute -right-[95%] top-0 flex flex-col gap-7">
            <motion.div
              style={{ opacity: desc4Opacity, x: desc1x }}
              className=" w-[400px] h-48 bg-white rounded-2xl shadow-xl"
            ></motion.div>
            <motion.div
              style={{ opacity: desc5Opacity, x: desc2x }}
              className="w-[400px] h-48 bg-white rounded-2xl shadow-xl"
            ></motion.div>
            <motion.div
              style={{ opacity: desc6Opacity, x: desc3x }}
              className=" w-[400px] h-48 bg-white rounded-2xl shadow-xl"
            ></motion.div>
          </div>
          <Image src={"/map.svg"} width={500} height={500} alt="Map" />
          <motion.div style={{ opacity: pin1Opacity }}>
            {/* <Image
              src={"/pin.svg"}
              width={50}
              height={50}
              alt="Pin"
              className="absolute top-[40%] left-[20%]"
            /> */}
            <Pin
              fill="#333"
              className="w-12 h-12 absolute top-[40%] left-[20%]"
            />
            <Pin
              fill="#333"
              className="w-12 h-12 absolute top-[44%] left-[15%]"
            />
          </motion.div>
          <motion.div style={{ opacity: pin2Opacity }}>
            {/* <Image
              src={"/pin.svg"}
              width={50}
              height={50}
              alt="Pin"
              className="absolute top-[40%] left-[20%]"
            /> */}
            <Pin
              fill="#333"
              className="w-12 h-12 absolute top-[25%] left-[76%]"
            />
            <Pin
              fill="#333"
              className="w-12 h-12 absolute top-[68%] left-[60%]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Standorte;
