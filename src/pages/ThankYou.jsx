import { Link } from "react-router-dom";

const ThankYou = () => (
  <div className="p-6 flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold mb-4">Prodotto Inviato con Successo!</h1>
    <p className="mb-4">Il tuo prodotto è stato registrato correttamente.</p>
    <Link to="/remoteadmin" className="text-blue-500 underline">
      Invia un altro prodotto
    </Link>
  </div>
);

export default ThankYou;