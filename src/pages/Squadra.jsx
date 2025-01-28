import React, { useState } from "react";

const disciplineData = [
  {
    id: "strada",
    title: "Strada",
    description: "Velocità pura sulle strade più impegnative. Gare su lunghe distanze e sprint adrenalinici.",
  },
  {
    id: "xc",
    title: "Cross Country",
    description: "Potenza e resistenza nei tracciati più tecnici. Gare su circuiti con salite e discese veloci.",
  },
  {
    id: "enduro",
    title: "Enduro",
    description: "Discese mozzafiato e adrenalina pura. Sfide contro il tempo in terreni accidentati.",
  },
];

const Squadra = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="w-full bg-background">
      <div className="text-center container-padding">
        {/* Hero Section */}
        <section
          className="relative text-black px-6 h-[150px] md:h-[250px] lg:h-[350px] opacity-0 animate-fade-in"
          style={{ 
              backgroundImage: "url('/images/hero-squadra.svg')",
              backgroundSize: "95%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
          }}
        >
        </section>
        <p className="section-title text-primary">Uniti dalla passione, guidati dalla velocità.</p>
        <p className="text-lg mt-2 text-secondary">
          <b className="text-primary">Wild Race Team</b> è l'insieme di appassionati che rappresenta la voglia di unirsi e mettersi in gioco. <br className="hidden md:block" />
          Attivi in diverse discipline, uscite di gruppo, <b className="text-primary">corsi per tutti i livelli</b> e manutenzione dei trail. <br className="hidden md:block" />
          <b className="text-primary">WRT</b> rappresenta il punto di riferimento per le persone di tutte le età che vogliono fare della bici molto più di una passione.
        </p>

        {/* Sezione Discipline */}
        <section className="flex flex-wrap justify-center gap-16 py-16">
          {disciplineData.map((disciplina, index) => (
            <div
              key={disciplina.id}
              className={`relative w-96 h-60 lg:w-[30rem] lg:h-[20rem] cursor-pointer rounded-lg shadow-2xl transition-transform duration-500 transform-style-3d perspective-1000 hover:scale-105
              ${index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}`}
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

        {/* Box di invito all’iscrizione */}
        <section className="mt-12 bg-primary text-white py-10 px-6 rounded-lg shadow-lg">
          <h2 className="section-title text-white">Unisciti alla Wild Race Team!</h2>
          <p className="mt-4">Vuoi entrare a far parte della nostra squadra? Contattaci per maggiori informazioni.</p>
          <button
            className="btn-secondary"
            onClick={() => window.location.href = "/contatti"}
          >
            Contattaci
          </button>
        </section>
      </div>
    </main>
  );
};

export default Squadra;
