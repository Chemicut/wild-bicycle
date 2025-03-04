import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import WildRaceTeam from "./pages/WildRaceTeam.jsx";
import Contatti from "./pages/Contatti.jsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import AdminPanel from "./pages/AdminPanel";


// 🔹 Definiamo la chiave prima di usarla nel JSX
const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

console.log("🔍 reCAPTCHA Site Key:", recaptchaKey);



const App = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prodotti" element={<Products />} />
            <Route path="/wildraceteam" element={<WildRaceTeam />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/admin" element={<AdminPanel />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </GoogleReCaptchaProvider>
  );
};

export default App;
