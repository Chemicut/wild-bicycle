import React from "react";

const FooterSocial = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent">
        🔵 Facebook
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent">
        📸 Instagram
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent">
        🐦 Twitter
      </a>
    </div>
  );
};

export default FooterSocial;
