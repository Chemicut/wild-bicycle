import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import ThankYou from "./pages/ThankYou.jsx";
import BozzaA from "./pages/bozze/BozzaA.jsx";
import BozzaB from "./pages/bozze/BozzaB.jsx";

// Le bozze del restyling hanno header e footer propri
const SiteChrome = ({ children }) => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/bozza")) return children;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <SiteChrome>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/negozio" element={<Negozio />} />
            <Route path="/officina" element={<Officina />} />
            <Route path="/wildraceteam" element={<WildRaceTeam />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/prodotti/:id" element={<ProductPage />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/bozza-a" element={<BozzaA />} />
            <Route path="/bozza-b" element={<BozzaB />} />
            {/* Rotta per la pagina 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </SiteChrome>
    </Router>
  );
};

export default App;
