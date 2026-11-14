import { useState } from "react";
import { initialProducts } from "./data/initialProducts";
import "./App.css";

function App() {
  const [products] = useState(initialProducts);

  return (
    <main className="app-container">
      <header className="page-header">
        <div>
          <h1 className="page-title">Manajemen Produk</h1>
          <p className="page-subtitle">
            Kelola daftar produk dan harga dalam satu tempat.
          </p>
        </div>
        <button type="button" className="btn btn-primary">
          + Tambah Produk
        </button>
      </header>

      <p>Total data awal: {products.length} produk</p>
    </main>
  );
}

export default App;
