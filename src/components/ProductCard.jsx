import { Link } from "react-router";
import { formatPrice } from "../data/initialProducts";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <span className="product-id">ID: {product.id}</span>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{formatPrice(product.price)}</p>

      <div className="mt-auto grid grid-cols-3 gap-2.5 border-t border-slate-100 pt-3.5">
        <Link
          to={`/products/${product.id}`}
          className="btn border border-slate-200 bg-slate-50 text-slate-700 no-underline hover:bg-slate-100"
        >
          Detail
        </Link>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => onEdit && onEdit(product)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => onDelete && onDelete(product)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
