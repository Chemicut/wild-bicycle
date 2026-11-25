import { Link } from "react-router-dom";
import { contatti, navigazione } from "../../../data/contatti";

const pill = "block border border-cream/40 rounded-md px-4 py-3 hover:bg-cream hover:text-night transition-colors";

const Footer = () => {
  return (
    <footer className="bg-night text-cream px-5 lg:px-10 pt-20 pb-8">
      <p className="eyebrow opacity-60">Ritrovo</p>
      <address className="not-italic">
        <a href={contatti.mappa} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
          <p className="headline mt-3 text-[clamp(3rem,8vw,8rem)]">{contatti.indirizzo}</p>
        </a>
        <p className="mt-3 text-xl opacity-80">
          {contatti.cap} {contatti.citta}
        </p>
      </address>

      <ul className="eyebrow mt-12 flex flex-wrap gap-3">
        <li><a href={contatti.telefono.href} className={pill}>{contatti.telefono.label}</a></li>
        <li><a href={contatti.whatsapp.href} target="_blank" rel="noopener noreferrer" className={pill}>{contatti.whatsapp.label}</a></li>
        <li><a href={contatti.email.href} className={pill}>Email</a></li>
        {contatti.social.map((s) => (
          <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className={pill}>{s.label}</a></li>
        ))}
      </ul>

      <nav aria-label="Navigazione nel footer" className="mt-12">
        <ul className="eyebrow flex flex-wrap gap-x-8 gap-y-3 opacity-80">
          <li><Link to="/" className="hover:text-signal">Home</Link></li>
          {navigazione.map((item) => (
            <li key={item.to}><Link to={item.to} className="hover:text-signal">{item.label}</Link></li>
          ))}
        </ul>
      </nav>

      <div className="mt-12 pt-6 border-t border-cream/20 flex flex-wrap justify-between gap-4 text-sm opacity-60">
        <span>© {new Date().getFullYear()} {contatti.ragioneSociale}</span>
        <span>P. IVA {contatti.piva}</span>
      </div>
    </footer>
  );
};

export default Footer;
