import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default NewsList;
