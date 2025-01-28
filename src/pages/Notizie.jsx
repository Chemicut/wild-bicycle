import { useEffect, useState } from "react";
import NewsList from "../components/news/NewsList";

const Notizie = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNotizie = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/notizie");
        if (!response.ok) throw new Error("Errore nel recupero delle notizie");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotizie();
  }, []);

  return (
    <div className="container mx-auto container-padding">
      <h1 className="section-title">Ultime Notizie</h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default Notizie;
