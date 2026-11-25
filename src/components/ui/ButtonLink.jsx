import { Link } from "react-router-dom";

const variants = {
  cream: "bg-cream text-night hover:bg-signal",
  signal: "bg-signal text-night hover:bg-cream",
  night: "bg-night text-signal hover:bg-forest",
  outline: "border border-cream/40 hover:bg-cream hover:text-night",
};

// Link interno (to) o esterno (href) con l'aspetto di un pulsante
const ButtonLink = ({ to, href, variant = "cream", className = "", children }) => {
  const classes = `eyebrow inline-block rounded-md px-6 py-4 transition-colors ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
