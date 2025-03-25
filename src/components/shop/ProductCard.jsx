import { Link } from "react-router-dom";
import GetDiscount from "../shared/productcards/GetDiscount";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/prodotti/${product.id}`} className="block">
      <div className="card font-primary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h2 className="card-title">{product.name}</h2>

        
        <div className="flex justify-between items-center py-2">
          {product.fullprice ? (
            <>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 text-sm line-through">€ {product.fullprice}</p>
                <p className="text-black text-base">€ {product.price}</p>
              </div>
              <div className="flex items-center">
                <p className="text-black text-base">Sconto del {GetDiscount(product.fullprice, product.price)}%</p>
              </div>
            </>
          ) : (
            <div className="flex items-center">
              <p className="text-black text-base">€ {product.price}</p>
            </div>
          )}

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
