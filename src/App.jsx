import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/shared/header/Header.jsx";
import Footer from "./components/shared/footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Negozio from "./pages/Negozio.jsx";
import WildRaceTeam from "./pages/WildRaceTeam.jsx";
import Officina from "./pages/Officina.jsx";
import Contatti from "./pages/Contatti.jsx";
import ScrollToTop from "./components/shared/ScrollToTop.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/negozio" element={<Negozio />} />
          <Route path="/officina" element={<Officina />} />
          <Route path="/wildraceteam" element={<WildRaceTeam />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/prodotti/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;