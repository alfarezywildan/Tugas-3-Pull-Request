import { formatPrice } from "../data/initialProducts";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <span className="product-id">ID: {product.id}</span>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{formatPrice(product.price)}</p>

      <div className="product-actions">
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
