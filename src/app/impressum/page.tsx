import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function Impressum() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <div className="h-[50svh] w-full relative justify-center items-center flex flex-col">
          <Image
            src={"/vintage.jpg"}
            className="object-cover object z-0"
            alt="Hintergrund"
            fill
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-black/40 to-black z-10" />
          <h1 className="text-5xl font-semibold text-white z-20">Impressum</h1>
        </div>
        <div className="container mx-auto p-2 mt-8">
          <div className="prose prose-lg max-w-none">
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>Max Mustermann</p>
            <p>Musterstraße 1</p>
            <p>12345 Musterstadt</p>
            <h2>Kontakt:</h2>
            <p>Telefon: 01234-56789</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Impressum;
