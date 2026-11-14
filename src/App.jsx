import { useState } from "react";
import { initialProducts } from "./data/initialProducts";
import ProductList from "./components/ProductList";
import ProductFormModal from "./components/ProductFormModal";
import "./App.css";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleAddProduct(newProductData) {
    const nextId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    const newProduct = {
      id: nextId,
      name: newProductData.name,
      price: newProductData.price,
    };

    setProducts([...products, newProduct]);
    setIsFormModalOpen(false);
  }

  return (
    <main className="app-container">
      <header className="page-header">
        <div>
          <h1 className="page-title">Manajemen Produk</h1>
          <p className="page-subtitle">
            Kelola daftar produk dan harga dalam satu tempat.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsFormModalOpen(true)}
        >
          + Tambah Produk
        </button>
      </header>

      <div className="toolbar">
        <div className="search-wrapper">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Cari nama produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <span className="product-count">{products.length} produk</span>
      </div>

      <ProductList products={filteredProducts} />

      <p className="footer-summary">
        Menampilkan {filteredProducts.length} dari {products.length} produk
      </p>

      <ProductFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSubmit={handleAddProduct}
      />
    </main>
  );
}

export default App;
