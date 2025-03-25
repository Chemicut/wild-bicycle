import React, { useRef, useState, useEffect } from "react";
import { Wrench, Handshake, Cpu, SearchCheck, UserRoundCheck, Settings } from "lucide-react";

// Component per gestire il fade in usando Intersection Observer
const FadeInSection = ({ children, className = "" }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

const Officina = () => {
  return (
    <main className="w-full bg-background py-10">
      <div className="container mx-auto px-6 my-8">

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex w-full lg:w-1/3" aria-label="Officina Wild Bicycle">
                <img
                  src="/images/officina-3.webp"
                  alt="Officina Wild Bicycle"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            <div className="flex w-full lg:w-2/3 lg:items-center">
            <p className="text-secondary font-secondary text-base sm:text-lg md:text-xl lg:text-2xl">
              <b className="text-primary">Wild Bicycle</b>{" "}
              non è solo un negozio di bici, ma il punto di riferimento per la cura e l’innovazione sulle due ruote.
              <br />
              La nostra officina, attrezzata con strumenti all’avanguardia, è guidata da un team di esperti appassionati
              che si dedicano con precisione e dedizione ad ogni intervento.
              <br />
              Che si tratti di <b className="text-primary">manutenzioni</b> ordinarie, <b className="text-primary">riparazioni</b> complesse,{" "}
              <b className="text-primary">upgrade</b> personalizzati o <b className="text-primary">preparazioni</b> da gara, 
              offriamo soluzioni su misura per valorizzare ogni dettaglio della tua bicicletta.
            </p>
        </div>
      </div>
        {/* Prima riga di 3 div affiancati con effetto fade in */}
        <FadeInSection className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 p-8">
            <div className="flex justify-center mb-2 text-primary">
              <Wrench size={48} />
            </div>
            <p className="text-secondary text-base sm:text-lg md:text-xl text-center mt-4">
              La nostra officina si distingue per un’impeccabile attenzione alla qualità: ogni intervento è eseguito con precisione artigianale e l’utilizzo di componenti di prima scelta, garantendo prestazioni elevate e una lunga durata per la tua bici.
            </p>
          </div>
          <div className="flex-1 p-8">
            <div className="flex justify-center mb-2 text-primary">
              <Handshake size={48} />
            </div>
            <p className="text-secondary text-base sm:text-lg md:text-xl text-center mt-4">
              Collaboriamo con i marchi leader del settore per offrire soluzioni innovative e affidabili. Le nostre partnership ci permettono di accedere a tecnologie d’eccellenza e prodotti esclusivi, assicurando sempre il meglio per il tuo mezzo.
            </p>
          </div>
          <div className="flex-1 p-8">
            <div className="flex justify-center mb-2 text-primary">
              <Cpu size={48} />
            </div>
            <p className="text-secondary text-base sm:text-lg md:text-xl text-center mt-4">
              Il nostro Centro Assistenza è il punto di riferimento per ogni esigenza ciclistica, dalla manutenzione ordinaria alle riparazioni specialistiche. Offriamo supporto qualificato su motori Bosch, Shimano e Polini, garantendo interventi precisi e veloci per massime prestazioni e affidabilità.
            </p>
          </div>
        </FadeInSection>

        {/* Seconda riga di 3 div affiancati con effetto fade in */}
        <FadeInSection className="flex flex-col lg:flex-row gap-8 mt-4">
          <div className="flex-1 p-8">
            <div className="flex justify-center mb-2 text-primary">
              <SearchCheck size={48} />
            </div>
            <p className="text-secondary text-base sm:text-lg md:text-xl text-center mt-4">
              Il settore ciclistico è in continua evoluzione, e il nostro team si aggiorna costantemente per integrare le più recenti innovazioni. Utilizziamo tecniche e strumenti all’avanguardia per garantire interventi precisi e soluzioni sempre affidabili.
            </p>
          </div>
          <div className="flex-1 p-8">
            <div className="flex justify-center mb-2 text-primary">
              <UserRoundCheck size={48} />
            </div>
            <p className="text-secondary text-base sm:text-lg md:text-xl text-center mt-4">
              Sappiamo che ogni ciclista e ogni bici sono unici. Per questo motivo, ogni intervento viene studiato su misura, per rispecchiare le tue esigenze specifiche e valorizzare il tuo stile di guida, con soluzioni che uniscono funzionalità ed eleganza.
            </p>
          </div>
          <div className="flex-1 p-8">
            <div className="flex justify-center mb-2 text-primary">
              <Settings size={48} />
            </div>
            <p className="text-secondary text-base sm:text-lg md:text-xl text-center mt-4">
              Una bici ben regolata fa la differenza in termini di comfort e prestazioni. Nella nostra officina effettuiamo tarature precise su sospensioni, trasmissione e impianti frenanti, ottimizzando ogni componente in base al tuo stile di guida.
            </p>
          </div>
        </FadeInSection>
        
        <section className="mt-12 bg-primary text-white py-10 px-6 rounded-lg shadow-lg text-center">
          <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl">
            Morale a terra come le tue ruote?
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl">
            Entra in contatto per una consulenza gratuita e scopri come possiamo aiutarti a rinnovare la tua bici (e il tuo stato d'animo).
          </p>
          <button
            className="mt-6 btn btn-secondary cursor-pointer"
            onClick={() => (window.location.href = "/contatti")}
          >
            Contattaci
          </button>
        </section>
      </div>
    </main>
  );
};

export default Officina;