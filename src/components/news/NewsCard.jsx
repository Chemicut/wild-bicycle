import { Link } from "react-router-dom";

const NewsCard = ({ id, titolo, descrizione, immagine }) => {
  return (
    <div className="card overflow-hidden">
      <img src={immagine} alt={titolo} className="w-full h-40 object-cover rounded-md" />
      <div className="p-4">
        <h2 className="card-title">{titolo}</h2>
        <p className="card-text mt-2">{descrizione}</p>
        <Link to={`/notizie/${id}`} className="text-accent hover:underline mt-2 block">
          Leggi di più
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
