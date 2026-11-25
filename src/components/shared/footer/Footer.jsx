import { Link } from "react-router-dom";
import { contatti, navigazione } from "../../../data/contatti";

const pill =
  "block border border-cream/40 rounded-md px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase hover:bg-cream hover:text-night transition-colors";

const Footer = () => {
  return (
    <footer className="bg-night text-cream px-5 lg:px-10 pt-16 pb-8">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase opacity-55">
            Dove siamo
          </p>
          <address className="not-italic mt-3">
            <a
              href={contatti.mappa}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight hover:text-signal"
            >
              {contatti.indirizzo}
              <span className="block mt-1 text-lg sm:text-xl font-normal opacity-75">
                {contatti.cap} {contatti.citta}
              </span>
            </a>
          </address>
        </div>

        <div className="lg:col-span-5">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase opacity-55">
            Contatti
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li>
              <a href={contatti.telefono.href} className={pill}>
                {contatti.telefono.label}
              </a>
            </li>
            <li>
              <a
                href={contatti.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={pill}
              >
                {contatti.whatsapp.label}
              </a>
            </li>
            <li>
              <a href={contatti.email.href} className={pill}>
                Email
              </a>
            </li>
            {contatti.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={pill}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav aria-label="Navigazione nel footer" className="mt-12">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold tracking-[0.14em] uppercase opacity-80">
          <li>
            <Link to="/" className="hover:text-signal">
              Home
            </Link>
          </li>
          {navigazione.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-signal">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 pt-6 border-t border-cream/20 flex flex-wrap justify-between gap-4 text-sm opacity-60">
        <span>
          © {new Date().getFullYear()} {contatti.ragioneSociale}
        </span>
        <span>P. IVA {contatti.piva}</span>
      </div>
    </footer>
  );
};

export default Footer;
