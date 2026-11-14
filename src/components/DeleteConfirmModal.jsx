import { formatPrice } from "../data/initialProducts";

function DeleteConfirmModal({ isOpen, product, onClose, onConfirm }) {
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Tutup"
        >
          &times;
        </button>

        <div className="delete-modal-header">
          <div className="delete-icon-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </div>

          <h2 className="modal-title delete-modal-title">Hapus Produk?</h2>
          <p className="modal-subtitle delete-modal-subtitle">
            Produk yang dihapus tidak dapat dikembalikan.
          </p>
        </div>

        <div className="delete-product-preview">
          <span className="product-id">ID: {product.id}</span>
          <h3 className="delete-preview-name">{product.name}</h3>
          <p className="delete-preview-price">{formatPrice(product.price)}</p>
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onConfirm(product.id)}
          >
            Hapus Produk
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
