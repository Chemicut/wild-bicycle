import React, { useState } from "react";

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

const Squadra = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        <p className="section-title text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 text-center">
          Uniti dalla passione, guidati dalla velocità.
        </p>
        {/* Descrizione */}
        <p className="mt-2 text-secondary text-center text-base sm:text-lg md:text-xl lg:text-2xl">
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
              className={`relative w-96 h-60 lg:w-[30rem] lg:h-[20rem] cursor-pointer rounded-lg shadow-2xl transition-transform duration-500 transform-style-3d perspective-1000
              ${index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"}`}
              onClick={() => handleFlip(disciplina.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flipped[disciplina.id] ? "rotate-y-180" : ""
                }`}
              >
                {/* Lato frontale */}
                <div className="absolute w-full h-full flex flex-col justify-center items-center rounded-lg shadow-lg backface-hidden transition-opacity duration-300">
                  <img
                    src={`/images/${disciplina.id}.jpg`}
                    alt={disciplina.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                  <h2 className="relative z-10 text-white text-2xl lg:text-4xl font-bold">
                    {disciplina.title}
                  </h2>
                  <div className="relative z-10 text-white text-sm lg:text-xl">
                    Clicca per informazioni
                  </div>
                </div>

                {/* Lato posteriore */}
                <div className="absolute w-full h-full flex items-center justify-center bg-primary text-white text-lg lg:text-xl p-4 rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
                  <p>{disciplina.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sezione Corso di Enduro */}
        <section className="relative mt-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl mb-4">
                Corso di Enduro
              </h3>
              <p className="text-secondary text-base sm:text-lg md:text-xl">
                Partecipa al nostro corso di Enduro per approfondire tecniche di guida e migliorare
                le tue abilità sui percorsi off-road. Impara da istruttori esperti in un ambiente sicuro
                e stimolante, e scopri come affrontare anche le discese più impegnative.
              </p>
            </div>
            <div className="flex-shrink-0 mt-4 lg:mt-0 lg:ml-6">
              <div className="w-32 h-32 relative">
                <img
                  src="/images/enduro-course.jpg"
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
            className="mt-6 bg-secondary text-white py-2 px-4 rounded-lg shadow-md"
            onClick={() => (window.location.href = "/contatti")}
          >
            Contattaci
          </button>
        </section>
      </div>
    </main>
  );
};

export default Squadra;