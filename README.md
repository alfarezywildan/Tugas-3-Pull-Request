# Manajemen Produk (React Router & Tailwind CSS)

Aplikasi Manajemen Produk menggunakan **React Router v7** dan **Tailwind CSS v4** dengan mempertahankan tampilan serta fitur CRUD sebelumnya.

## Daftar Route

| Path | Halaman | Keterangan |
|---|---|---|
| `/` | Redirect ke `/products` | Mengarahkan halaman utama ke daftar produk |
| `/products` | `ProductsPage` | Daftar produk, pencarian, tambah, edit, hapus, dan tombol `Detail` |
| `/products/:id` | `ProductDetailPage` | Detail produk sesuai parameter `:id` beserta tautan kembali ke `/products` |
| `*` | `NotFoundPage` | Halaman 404 untuk URL yang tidak dikenal beserta tautan kembali |

## Cara Menjalankan

```bash
npm install
npm run dev
```

## Lokasi State Bersama

State `products` dan handler modal CRUD disimpan di `src/App.jsx` di atas `<Routes>` sehingga data tetap konsisten antara `ProductsPage` (`/products`) dan `ProductDetailPage` (`/products/:id`).

## Pembagian Komponen

- **Pages (`src/pages/`)**: `ProductsPage.jsx`, `ProductDetailPage.jsx`, `NotFoundPage.jsx`.
- **Components (`src/components/`)**: `ProductList.jsx`, `ProductCard.jsx`, `ProductFormModal.jsx`, `DeleteConfirmModal.jsx`.
- **Data (`src/data/`)**: `initialProducts.js` berisi data awal produk dan `formatPrice`.