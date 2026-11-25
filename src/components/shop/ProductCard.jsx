import { Link } from "react-router-dom";
import GetDiscount from "../shared/productcards/GetDiscount";
import formatPrice from "../../utils/formatPrice";
import imageUrl from "../../utils/imageUrl";

const ProductCard = ({ product }) => (
  <Link
    to={`/prodotti/${product.id}`}
    className="group relative flex flex-col bg-paper text-night rounded-[18px] overflow-hidden"
  >
    <div className="flex justify-end px-5 pt-4">
      <span
        className={`text-xs font-semibold tracking-[0.14em] uppercase ${
          product.condition === "Usato" ? "bg-night text-paper px-2 py-1" : "opacity-60"
        }`}
      >
        {product.condition}
      </span>
    </div>
    <div className="aspect-[4/3] px-6 flex items-center justify-center">
      <img
        src={imageUrl(product.images[0], 800)}
        alt={product.name}
        loading="lazy"
        className="max-h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1"
      />
    </div>
    <div className="mt-auto border-t-2 border-dashed border-night/25 px-5 py-4 flex items-end justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
        {product.fullprice && (
          <p className="text-sm line-through opacity-50 mt-1">{formatPrice(product.fullprice)}</p>
        )}
      </div>
      <p className="headline text-4xl leading-none whitespace-nowrap">{formatPrice(product.price)}</p>
    </div>
    {product.fullprice && (
      <span className="headline absolute right-4 top-12 rotate-6 bg-signal px-3 pt-1.5 pb-1 text-2xl leading-none">
        −{GetDiscount(product.fullprice, product.price)}%
      </span>
    )}
  </Link>
);

export default ProductCard;
