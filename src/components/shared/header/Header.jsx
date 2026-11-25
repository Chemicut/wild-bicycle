import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { contatti, navigazione } from "../../../data/contatti";

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  // In home l'header sta sopra la foto di apertura
  const overlay = pathname === "/";

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = navigazione.filter((item) => item.to !== "/contatti");

  return (
    <header
      className={`${overlay ? "absolute inset-x-0 top-0" : "relative bg-night"} z-40 text-cream`}
    >
      {overlay && (
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night/80 to-transparent pointer-events-none" />
      )}
      <div className="relative px-5 lg:px-10 py-6 flex items-center justify-between">
        <Logo className="text-cream" svgClassName="fill-current w-44 lg:w-56 h-auto" />

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="eyebrow flex items-center gap-8">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "text-signal" : "hover:text-signal")}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contatti" className="bg-signal text-night rounded-md px-4 py-2.5 hover:bg-cream transition-colors">
                Contatti
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="eyebrow lg:hidden bg-signal text-night rounded-md px-4 py-2.5 cursor-pointer"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <div id="menu-mobile" className="fixed inset-0 z-50 bg-night flex flex-col lg:hidden">
          <div className="px-5 py-6 flex items-center justify-between">
            <Logo className="text-cream" svgClassName="fill-current w-44 h-auto" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="eyebrow border border-cream/40 rounded-md px-4 py-2.5 cursor-pointer"
            >
              Chiudi
            </button>
          </div>
          <nav aria-label="Menu" className="px-5 mt-6">
            <ul>
              {[{ label: "Home", to: "/" }, ...navigazione].map((item, i) => (
                <li key={item.to} className="border-t border-cream/20">
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-5 py-3 ${isActive ? "text-signal" : ""}`
                    }
                  >
                    <span className="eyebrow w-6 opacity-60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="headline text-6xl">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto px-5 pb-8 flex flex-wrap gap-3 eyebrow">
            <a href={contatti.telefono.href} className="border border-cream/40 rounded-md px-4 py-3">
              {contatti.telefono.label}
            </a>
            <a href={contatti.whatsapp.href} target="_blank" rel="noopener noreferrer" className="border border-cream/40 rounded-md px-4 py-3">
              {contatti.whatsapp.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
