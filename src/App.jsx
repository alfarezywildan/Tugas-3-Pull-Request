import { useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router";
import { initialProducts } from "./data/initialProducts";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductFormModal from "./components/ProductFormModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import "./App.css";

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  function handleOpenAddModal() {
    setEditingProduct(null);
    setIsFormModalOpen(true);
  }

  function handleOpenEditModal(product) {
    setEditingProduct(product);
    setIsFormModalOpen(true);
  }

  function handleCloseFormModal() {
    setIsFormModalOpen(false);
    setEditingProduct(null);
  }

  function handleSaveProduct(productData) {
    if (editingProduct) {
      setProducts(
        products.map((item) =>
          item.id === editingProduct.id
            ? { ...item, name: productData.name, price: productData.price }
            : item
        )
      );
    } else {
      const nextId =
        products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

      const newProduct = {
        id: nextId,
        name: productData.name,
        price: productData.price,
      };

      setProducts([...products, newProduct]);
    }

    handleCloseFormModal();
  }

  function handleOpenDeleteModal(product) {
    setDeletingProduct(product);
  }

  function handleCloseDeleteModal() {
    setDeletingProduct(null);
  }

  function handleConfirmDelete(productId) {
    setProducts(products.filter((item) => item.id !== productId));
    setDeletingProduct(null);

    if (location.pathname === `/products/${productId}`) {
      navigate("/products");
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              onAdd={handleOpenAddModal}
              onEdit={handleOpenEditModal}
              onDelete={handleOpenDeleteModal}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetailPage
              products={products}
              onEdit={handleOpenEditModal}
              onDelete={handleOpenDeleteModal}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ProductFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseFormModal}
        onSubmit={handleSaveProduct}
        initialData={editingProduct}
      />

      <DeleteConfirmModal
        isOpen={Boolean(deletingProduct)}
        product={deletingProduct}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default App;
