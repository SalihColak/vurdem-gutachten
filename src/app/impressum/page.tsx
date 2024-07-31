import Footer from "@/components/Footer";
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
          <h1 className="text-5xl font-semibold text-white z-20 uppercase">
            Impressum
          </h1>
        </div>
        <div className="container mx-auto p-2 mt-8">
          <div className="prose prose-lg max-w-none text-gray-400 mb-8">
            <h2 className="mb-2 font-semibold text-2xl text-gray-200">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mb-1">Inhaber: Yahya Demirbuga</p>
            <p>Heiligenstock 1 </p>{" "}
            <p className="mb-1">51465 Bergisch Gladbach</p>
            <p> Telefon: 017641983003</p>
            <p> Mail: info@gutachter-dv.de</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">HAFTUNGSAUSSCHLUSS</h2>{" "}
            <h3 className="text-lg font-semibold mb-1 text-gray-300">
              URHEBERRECHT
            </h3>{" "}
            <p className="font-light text-gray-400 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
            <h3 className="text-lg font-semibold mb-1 text-gray-300">
              HAFTUNG FÜR INHALTE
            </h3>
            <p className="font-light text-gray-400 mb-4 ">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
            <h3 className="text-lg font-semibold mb-1 text-gray-300">
              HAFTUNG FÜR LINKS
            </h3>
            <p className="font-light text-gray-400 mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Impressum;
