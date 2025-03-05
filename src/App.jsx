import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Negozio from "./pages/Negozio.jsx";
import WildRaceTeam from "./pages/WildRaceTeam.jsx";
import Officina from "./pages/Officina.jsx";
import Contatti from "./pages/Contatti.jsx";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/negozio" element={<Negozio />} />
            <Route path="/officina" element={<Officina />} />
            <Route path="/wildraceteam" element={<WildRaceTeam />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/admin" element={<AdminPanel />} />

          </Routes>
        </main>
        <Footer />
      </Router>
  );
};

export default App;
