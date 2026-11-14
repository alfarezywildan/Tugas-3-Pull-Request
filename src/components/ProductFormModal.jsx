import { useState, useEffect } from "react";

function ProductFormModal({ isOpen, onClose, onSubmit, initialData = null }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const isEditMode = Boolean(initialData);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setName(initialData.name);
        setPrice(String(initialData.price));
      } else {
        setName("");
        setPrice("");
      }
      setError("");
    }
  }, [isOpen, initialData]);

  if (!isOpen) {
    return null;
  }

  function handleClose() {
    setName("");
    setPrice("");
    setError("");
    onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const numericPrice = Number(price);

    if (!trimmedName) {
      setError("Nama produk wajib diisi.");
      return;
    }

    if (!price || Number.isNaN(numericPrice) || numericPrice <= 0) {
      setError("Harga harus lebih dari 0.");
      return;
    }

    onSubmit({
      name: trimmedName,
      price: numericPrice,
    });

    setName("");
    setPrice("");
    setError("");
  }

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={handleClose}
          aria-label="Tutup"
        >
          &times;
        </button>

        <h2 className="modal-title">
          {isEditMode ? "Edit Produk" : "Tambah Produk"}
        </h2>
        <p className="modal-subtitle">
          {isEditMode
            ? "Perbarui informasi produk yang dipilih."
            : "Masukkan informasi produk baru."}
        </p>

        {isEditMode && (
          <p className="modal-product-id">ID: {initialData.id}</p>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="product-name" className="form-label">
              Nama Produk
            </label>
            <input
              id="product-name"
              type="text"
              className="form-input"
              placeholder="Contoh: Pulpen"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-price" className="form-label">
              Harga (Rp)
            </label>
            <input
              id="product-price"
              type="number"
              className="form-input"
              placeholder="Contoh: 5000"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                if (error) setError("");
              }}
            />
            <span className={`form-helper ${error ? "form-helper-error" : ""}`}>
              {error || "Harga harus lebih dari 0."}
            </span>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleClose}
            >
              Batal
            </button>
            <button type="submit" className="btn btn-primary">
              {isEditMode ? "Simpan Perubahan" : "Simpan Produk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductFormModal;
