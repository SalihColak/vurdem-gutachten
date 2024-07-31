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
            Datenschutz
          </h1>
        </div>
        <div className="container mx-auto p-2 mt-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold mb-1">
              1. Name und Kontaktdaten des Verantwortlichen
            </h2>
            <p className="font-light text-neutral-400 mb-5">
              Diese Datenschutzerklärung informiert über die Verarbeitung
              personenbezogener Daten auf der Firmenwebseite von:
              <br />
              Yahya Demirbuga
              <br />
              Heiligenstock 1 <br /> 51465 Bergisch Gladbach
            </p>
            <h2 className="text-xl font-semibold mb-2">
              2. Umfang und Zweck der Verarbeitung personenbezogener Daten
            </h2>
            <h3 className="text-lg font-normal mb-1">
              2.1 Aufruf der Webseite
            </h3>
            <p className="font-light text-neutral-400 mb-5">
              Beim Aufruf dieser Webseite{" "}
              <a href="https://gutachten-dv.de/" className="underline">
                https://gutachten-dv.de/
              </a>{" "}
              <p className="mb-3">
                werden durch den Internet-Browser, den der Besucher verwendet,
                automatisch Daten an den Server dieser Webseite gesendet und
                zeitlich begrenzt in einer Protokolldatei (Logfile) gespeichert.
                Bis zur automatischen Löschung werden nachstehende Daten ohne
                weitere Eingabe des Besuchers gespeichert:
              </p>
              <ul className="list-disc ml-4 space-y-1">
                <li>IP-Adresse des Endgeräts des Besuchers,</li>
                <li>Datum und Uhrzeit des Zugriffs durch den Besucher,</li>
                <li>Name und URL der vom Besucher aufgerufenen Seite,</li>
                <li>
                  Webseite, von der aus der Besucher auf die Firmenwebseite
                  gelangt (sog. Referrer-URL),
                </li>
                <li>
                  Browser und Betriebssystem des Endgeräts des Besuchers sowie
                  der Name des vom Besucher verwendeten Access-Providers.
                </li>
              </ul>
              <p className="my-3">
                Die Verarbeitung dieser personenbezogenen Daten ist gem. Art. 6
                Abs. 1 Satz 1 Buchst. f DSGVO gerechtfertigt. Die Firma hat ein
                berechtigtes Interesse an der Datenverarbeitung zu dem Zweck,
              </p>
              <ul className="list-disc ml-4 space-y-1 mb-2">
                <li>die Verbindung zur Webseite der Firma zügig aufzubauen,</li>
                <li>
                  eine nutzerfreundliche Anwendung der Webseite zu ermöglichen,
                </li>
                <li>
                  die Sicherheit und Stabilität der Systeme zu erkennen und zu
                  gewährleisten und
                </li>
                <li>
                  die Administration der Webseite zu erleichtern und zu
                  verbessern.
                </li>
              </ul>
              Die Verarbeitung erfolgt ausdrücklich nicht zu dem Zweck,
              Erkenntnisse über die Person des Besuchers der Webseite zu
              gewinnen.
            </p>
            <div className="text-neutral-400">
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                2.2 Kontaktformular
              </h3>
              <p>
                Besucher können über ein Online-Kontaktformular auf der Webseite
                Nachrichten an die Firma übermitteln. Um eine Antwort empfangen
                zu können, ist zumindest die Angabe einer gültigen
                E-Mail-Adresse erforderlich. Alle weiteren Angaben kann die
                anfragende Person freiwillig geben. Mit Absenden der Nachricht
                über das Kontaktformular willigt der Besucher in die
                Verarbeitung der übermittelten personenbezogenen Daten ein. Die
                Datenverarbeitung erfolgt ausschließlich zu dem Zweck der
                Abwicklung und Beantwortung von Anfragen über das
                Kontaktformular. Dies geschieht auf Basis der freiwillig
                erteilten Einwilligung gem. Art. 6 Abs. 1 Satz 1 Buchst. a
                DSGVO. Die für die Benutzung des Kontaktformulars erhobenen
                personenbezogenen Daten werden automatisch gelöscht, sobald die
                Anfrage erledigt ist und keine Gründe für eine weitere
                Aufbewahrung gegeben sind (z. B. anschließende Beauftragung
                unserer Firma).
              </p>
            </div>
            <div className="text-neutral-400 mt-8">
              <h2 className="text-xl font-semibold mb-2 text-white">
                3. Ihre Rechte als betroffene Person
              </h2>
              Soweit Ihre personenbezogenen Daten anlässlich des Besuchs unserer
              Webseite verarbeitet werden, stehen Ihnen als „betroffene Person“
              im Sinne der DSGVO folgende Rechte zu:
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.1 Auskunft
              </h3>
              <p>
                Sie können von uns Auskunft darüber verlangen, ob
                personenbezogene Daten von Ihnen bei uns verarbeitet werden.
                Kein Auskunftsrecht besteht, wenn die Erteilung der begehrten
                Informationen gegen die Verschwiegenheitspflicht gem. § 83
                StBerG verstoßen würde oder die Informationen aus sonstigen
                Gründen, insbesondere wegen eines überwiegenden berechtigten
                Interesses eines Dritten, geheim gehalten werden müssen. Hiervon
                abweichend kann eine Pflicht zur Erteilung der Auskunft
                bestehen, wenn insbesondere unter Berücksichtigung drohender
                Schäden Ihre Interessen gegenüber dem Geheimhaltungsinteresse
                überwiegen. Das Auskunftsrecht ist ferner ausgeschlossen, wenn
                die Daten nur deshalb gespeichert sind, weil sie aufgrund
                gesetzlicher oder satzungsmäßiger Aufbewahrungsfristen nicht
                gelöscht werden dürfen oder ausschließlich Zwecken der
                Datensicherung oder der Datenschutzkontrolle dienen, sofern die
                Auskunftserteilung einen unverhältnismäßig hohen Aufwand
                erfordern würde und die Verarbeitung zu anderen Zwecken durch
                geeignete technische und organisatorische Maßnahmen
                ausgeschlossen ist. Sofern in Ihrem Fall das Auskunftsrecht
                nicht ausgeschlossen ist und Ihre personenbezogenen Daten von
                uns verarbeitet werden, können Sie von uns Auskunft über
                folgende Informationen verlangen:
              </p>
              <ul className="list-disc ml-4 space-y-1 mb-2">
                <li>Zwecke der Verarbeitung,</li>
                <li>
                  Kategorien der von Ihnen verarbeiteten personenbezogenen
                  Daten,
                </li>
                <li>
                  Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre
                  personenbezogenen Daten offen gelegt werden, insbesondere bei
                  Empfängern in Drittländern,
                </li>
                <li>
                  falls möglich die geplante Dauer, für die Ihre
                  personenbezogenen Daten gespeichert werden oder, falls dies
                  nicht möglich ist, die Kriterien für die Festlegung der
                  Speicherdauer,
                </li>
                <li>
                  das Bestehen eines Rechts auf Berichtigung oder Löschung oder
                  Einschränkung der Verarbeitung der Sie betreffenden
                  personenbezogenen Daten oder eines Widerspruchsrechts gegen
                  diese Verarbeitung,
                </li>
                <li>
                  das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
                  für den Datenschutz,
                </li>
                <li>
                  sofern die personenbezogenen Daten nicht bei Ihnen als
                  betroffene Person erhoben worden sind, die verfügbaren
                  Informationen über die Datenherkunft,
                </li>{" "}
                <li>
                  das Bestehen einer automatisierten Entscheidungsfindung
                  einschließlich Profiling und aussagekräftige Informationen
                  über die involvierte Logik sowie die Tragweite und
                  angestrebten Auswirkungen automatisierter
                  Entscheidungsfindungen,
                </li>
                <li>
                  im Fall der Übermittlung an Empfänger in Drittländern, sofern
                  kein Beschluss der EU-Kommission über die Angemessenheit des
                  Schutzniveaus nach Art. 45 Abs. 3 DSGVO vorliegt,
                  Informationen darüber, welche geeigneten Garantien gem. Art.
                  46 Abs. 2 DSGVO zum Schutze der personenbezogenen Daten
                  vorgesehen sind.
                </li>
              </ul>
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.2 Berichtigung und Vervollständigung
              </h3>
              <p>
                Sofern Sie feststellen, dass uns unrichtige personenbezogene
                Daten von Ihnen vorliegen, können Sie von uns die unverzügliche
                Berichtigung dieser unrichtigen Daten verlangen. Bei
                unvollständigen Sie betreffenden personenbezogenen Daten können
                sie die Vervollständigung verlangen.
              </p>
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.3 Löschung
              </h3>
              <p>
                Sie haben ein Recht auf Löschung („Recht auf Vergessenwerden“),
                sofern die Verarbeitung nicht zur Ausübung des Rechts auf freie
                Meinungsäußerung, des Rechts auf Information oder zur Erfüllung
                einer rechtlichen Verpflichtung oder zur Wahrnehmung einer
                Aufgabe, die im öffentlichen Interesse liegt, erforderlich ist
                und einer der nachstehenden Gründe zutrifft:
              </p>
              <ul className="list-disc ml-4 space-y-1 mb-2">
                <li>
                  Die personenbezogenen Daten sind für die Zwecke, für die sie
                  verarbeitet wurden, nicht mehr notwendig.
                </li>
                <li>
                  ie Rechtfertigungsgrundlage für die Verarbeitung war
                  ausschließlich Ihre Einwilligung, welche Sie widerrufen haben.
                </li>
                <li>
                  Sie haben Widerspruch gegen die Verarbeitung Ihrer
                  personenbezogenen Daten eingelegt, die wir öffentlich gemacht
                  haben.
                </li>
                <li>
                  Sie haben Widerspruch gegen die Verarbeitung von uns nicht
                  öffentlich gemachter personenbezogener Daten eingelegt und es
                  liegen keine vorrangigen berechtigten Gründe für die
                  Verarbeitung vor.
                </li>
                <li>
                  Ihre personenbezogenen Daten wurden unrechtmäßig verarbeitet.
                </li>
                <li>
                  Die Löschung der personenbezogenen Daten ist zur Erfüllung
                  einer gesetzlichen Verpflichtung, der wir unterliegen,
                  erforderlich.
                </li>
              </ul>
              Kein Anspruch auf Löschung besteht, wenn die Löschung im Falle
              rechtmäßiger nicht automatisierter Datenverarbeitung wegen der
              besonderen Art der Speicherung nicht oder nur mit
              unverhältnismäßig hohem Aufwand möglich und Ihr Interesse an der
              Löschung gering ist. In diesem Fall tritt an die Stelle einer
              Löschung die Einschränkung der Verarbeitung.
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.4 Einschränkung der Verarbeitung
              </h3>
              <p>
                Sie können von uns die Einschränkung der Verarbeitung verlangen,
                wenn einer der nachstehenden Gründe zutrifft:
              </p>
              <ul className="list-disc ml-4 space-y-1 mb-2">
                <li>
                  Sie bestreiten die Richtigkeit der personenbezogenen Daten.
                  Die Einschränkung kann in diesem Fall für die Dauer verlangt
                  werden, die es uns ermöglicht, die Richtigkeit der Daten zu
                  überprüfen.
                </li>
                <li>
                  Die Verarbeitung ist unrechtmäßig und Sie verlangen statt
                  Löschung die Einschränkung der Nutzung Ihrer personenbezogenen
                  Daten.
                </li>
                <li>
                  Ihre personenbezogenen Daten werden von uns nicht länger für
                  die Zwecke der Verarbeitung benötigt, die Sie jedoch zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen benötigen.
                </li>
                <li>
                  Sie haben Widerspruch gem. Art. 21 Abs. 1 DSGVO eingelegt. Die
                  Einschränkung der Verarbeitung kann solange verlangt werden,
                  wie noch nicht feststeht, ob unsere berechtigten Gründe
                  gegenüber Ihren Gründen überwiegen.
                </li>
              </ul>
              Einschränkung der Verarbeitung bedeutet, dass die
              personenbezogenen Daten nur mit Ihrer Einwilligung oder zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsan­sprüchen
              oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person oder aus Gründen eines wichtigen öffentlichen
              Interesses verarbeitet werden. Bevor wir die Einschränkung
              aufheben, haben wir die Pflicht, Sie darüber zu unterrichten.
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.5 Datenübertragbarkeit
              </h3>
              <p>
                Sie haben ein Recht auf Datenübertragbarkeit, sofern die
                Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 Satz 1
                Buchst. a) oder Art. 9 Abs. 2 Buchst. a) DSGVO) oder auf einem
                Vertrag beruht, dessen Vertragspartei Sie sind und die
                Verarbeitung mithilfe automatisierter Verfahren erfolgt. Das
                Recht auf Datenübertragbarkeit beinhaltet in diesem Fall
                folgende Rechte, sofern hierdurch nicht die Rechte und
                Freiheiten anderer Personen beeinträchtigt werden: Sie können
                von uns verlangen, die personenbezogenen Daten, die Sie uns
                bereit gestellt haben, in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten. Sie haben das Recht, diese
                Daten einem anderen Verantwortlichen ohne Behinderung unserseits
                zu übermitteln. Soweit technisch machbar, können Sie von uns
                verlangen, dass wir Ihre personenbezogenen Daten direkt an einen
                anderen Verantwortlichen übermitteln.
              </p>
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.6 Widerspruch
              </h3>
              <p>
                Sofern die Verarbeitung auf Art. 6 Abs. 1 Satz 1 Buchst. e)
                DSGVO (Wahrnehmung einer Aufgabe im öffentlichen Interesse oder
                in Ausübung öffentlicher Gewalt) oder auf Art. 6 Abs. 1 Satz 1
                Buchst. f) DSGVO (berechtigtes Interesse des Verantwortlichen
                oder eines Dritten) beruht, haben Sie das Recht, aus Gründen,
                die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
                die Verarbeitung der Sie betreffenden personenbezogenen Daten
                Widerspruch einzulegen. Das gilt auch für ein auf Art. 6 Abs. 1
                Satz 1 Buchst. e) oder Buchst. f) DSGVO gestütztes Profiling.
                Nach Ausübung des Widerspruchsrechts verarbeiten wir Ihre
                personenbezogenen Daten nicht mehr, es sei denn, wir können
                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
                die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
                Verarbeitung dient der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen. Sie können jederzeit
                Widerspruch gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten zu Zwecken der Direktwerbung einlegen.
                Das gilt auch für ein Profiling, das mit einer solchen
                Direktwerbung in Verbindung steht. Nach Ausübung dieses
                Widerspruchsrechts werden wir die betreffenden personenbezogenen
                Daten nicht mehr für Zwecke der Direktwerbung verwenden. Sie
                haben die Möglichkeit, den Widerspruch telefonisch, per E-Mail,
                ggf. per Telefax oder an unsere zu Beginn dieser
                Datenschutzerklärung aufgeführte Postadresse unserer Firma
                formlos mitzuteilen.
              </p>
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.7 Widerruf einer Einwilligung
              </h3>
              <p>
                Sie haben das Recht, eine erteilte Einwilligung jederzeit mit
                Wirkung für die Zukunft zu widerrufen. Der Widerruf der
                Einwilligung kann telefonisch, per E-Mail, ggf. per Telefax oder
                an unsere Postadresse formlos mitgeteilt werden. Durch den
                Widerruf wird die Rechtmäßigkeit der Datenverarbeitung, die
                aufgrund der Einwilligung bis zum Eingang des Widerrufs erfolgt
                ist, nicht berührt. Nach Eingang des Widerrufs wird die
                Datenverarbeitung, die ausschließlich auf Ihrer Einwilligung
                beruhte, eingestellt.
              </p>
              <h3 className="text-lg font-normal mt-3 mb-1 text-white">
                3.8 Beschwerde
              </h3>
              <p>
                Wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
                betreffenden personenbezogenen Daten rechtswidrig ist, können
                Sie Beschwerde bei einer Aufsichtsbehörde für den Datenschutz
                einlegen, die für den Ort Ihres Aufenthaltes oder Arbeitsplatzes
                oder für den Ort des mutmaßlichen Verstoßes zuständig ist.
              </p>
            </div>
            <div className="text-neutral-300 mt-8">
              <h2 className="text-xl font-semibold mb-2 text-white">
                4. Stand und Aktualisierung dieser Datenschutzerklärung
              </h2>
              <p>
                Diese Datenschutzerklärung hat den Stand vom 1. August 2024. Wir
                behalten uns vor, die Datenschutzerklärung zu gegebener Zeit zu
                aktualisieren, um den Datenschutz zu verbessern und/oder an
                geänderte Behördenpraxis oder Rechtsprechung anzupassen.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Impressum;
