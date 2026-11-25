import ButtonLink from "../components/ui/ButtonLink";
import imageUrl from "../utils/imageUrl";

const NotFound = () => {
  return (
    <div className="bg-night text-cream min-h-[70vh]">
      <div className="px-5 lg:px-10 pt-10 lg:pt-14 pb-20 lg:pb-28 max-w-5xl mx-auto text-center">
        <p className="eyebrow text-signal">Errore 404</p>
        <h1 className="headline mt-4 text-[clamp(3.5rem,12vw,10rem)] leading-[0.82]">
          Fuori<br />percorso.
        </h1>
        <p className="mt-6 text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
          Questa pagina non esiste e tu non dovresti essere qui. Torna al negozio o in
          home, prima che i poliziotti in bicicletta ti trovino. E sì, il casco dovrebbero
          metterlo anche loro.
        </p>

        <img
          src={imageUrl("/images/bike-police.webp", 900)}
          alt="Due agenti in bicicletta"
          className="mx-auto mt-10 max-w-md w-full rounded-[18px]"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/negozio" variant="signal">
            Vai al negozio
          </ButtonLink>
          <ButtonLink to="/" variant="outline">
            Torna alla home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
