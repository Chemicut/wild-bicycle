import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="card font-primary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">€{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
