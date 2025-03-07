import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const disciplineData = [
  {
    id: "strada",
    title: "Strada",
    description:
      "Velocità pura sulle strade più impegnative. Gare su lunghe distanze e sprint adrenalinici.",
  },
  {
    id: "xc",
    title: "Cross Country",
    description:
      "Potenza e resistenza nei tracciati più tecnici. Gare su circuiti con salite e discese veloci.",
  },
  {
    id: "enduro",
    title: "Enduro",
    description:
      "Discese mozzafiato e adrenalina pura. Sfide contro il tempo in terreni accidentati.",
  },
];

const WildRaceTeam = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="w-full bg-background relative">
      <div className="container mx-auto px-6 pb-10">
        {/* Hero Section */}
        <section
          className="relative text-black px-6 h-[150px] md:h-[250px] lg:h-[350px] animate-fade-in"
          style={{
            backgroundImage: "url('/images/hero-squadra.svg')",
            backgroundSize: "95%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></section>

        {/* Titolo */}
        <p className="text-primary font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-10 text-center">
          Uniti dalla passione, guidati dalla velocità.
        </p>
        {/* Descrizione */}
        <p className="text-secondary text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6">
          <b className="text-primary">Wild Race Team</b> è l'insieme di appassionati che
          rappresenta la voglia di unirsi e mettersi in gioco. <br className="hidden md:block" />
          Attivi in diverse discipline, uscite di gruppo,{" "}
          <b className="text-primary">corsi per tutti i livelli</b> e manutenzione dei trail.{" "}
          <br className="hidden md:block" />
          <b className="text-primary">WRT</b> rappresenta il punto di riferimento per le persone
          di tutte le età che vogliono fare della bici molto più di una passione.
        </p>

        {/* Sezione Discipline */}
        <section className="flex flex-wrap justify-center gap-16 py-16">
          {disciplineData.map((disciplina, index) => (
            <div
              key={disciplina.id}
              className={`relative w-96 h-60 lg:w-[30rem] lg:h-[20rem] rounded-lg shadow-2xl transition-transform duration-500 transform-style-3d perspective-1000
              ${index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"}`}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 transform-style-3d"
              >
                {/* Lato frontale */}
                <div className="absolute w-full h-full flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transition-opacity duration-300">
                  <img
                    src={`/images/${disciplina.id}.webp`}
                    alt={disciplina.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                  <h2 className="relative z-10 text-white text-2xl lg:text-4xl font-bold">
                    {disciplina.title}
                  </h2>

                </div>

              </div>
            </div>
          ))}
        </section>

        {/* Sezione Corso di Enduro aggiornata */}
        <section id="corso-enduro" className="relative mt-10 lg:my-30">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
            {/* Testo a sinistra (occupazione 2/3 su desktop) */}
            <div className="w-full lg:w-2/3">
              <h3 className="text-primary font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">
                Corso di Enduro
              </h3>
              <p className="text-secondary text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Partecipa al nostro corso di Enduro per approfondire tecniche di guida e migliorare
                le tue abilità sui percorsi off-road. Impara da istruttori esperti in un ambiente sicuro
                e stimolante, e scopri come affrontare anche le discese più impegnative.<br />
                Il corso è aperto a <b className="text-primary">ragazzi e ragazze a partire dai 12 anni</b>, qualsiasi sia il tuo livello di esperienza.
                Organizziamo sessioni di gruppo di diverse tipologie in base alla stagione e alle condizioni meteo.<br />
                <b className="text-primary">Contattaci</b> per maggiori informazioni e prenotazioni.
              </p>
            </div>
            {/* Immagine a destra (occupazione 1/3 su desktop) */}
            <div className="w-full mt-4 lg:mt-0 lg:ml-6 lg:w-1/3">
              <div className="relative mx-auto">
                <img
                  src="/images/corsoenduro.webp"
                  alt="Corso di Enduro"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Box di invito all’iscrizione */}
        <section className="mt-12 bg-primary text-white py-10 px-6 rounded-lg shadow-lg text-center">
          <h2 className="section-title text-white text-2xl sm:text-3xl md:text-4xl">
            Unisciti alla Wild Race Team!
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl">
            Vuoi entrare a far parte della nostra squadra? Contattaci per maggiori informazioni.
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

export default WildRaceTeam;