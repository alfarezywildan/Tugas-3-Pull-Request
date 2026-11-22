import { Link, useParams } from "react-router";
import { formatPrice } from "../data/initialProducts";

function ProductDetailPage({ products, onEdit, onDelete }) {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
          <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600">
            Produk Tidak Tersedia
          </span>
          <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
            Produk dengan ID &ldquo;{id}&rdquo; tidak ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Data produk mungkin telah dihapus atau ID yang dimasukkan tidak terdaftar.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-teal-700"
          >
            &larr; Kembali ke Produk
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <div className="mb-5">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 no-underline transition hover:text-teal-600"
        >
          &larr; Kembali ke Produk
        </Link>
      </div>

      <section className="rounded-2xl border border-slate-200 border-t-4 border-t-teal-600 bg-white p-7 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold tracking-wide text-slate-600">
              ID: {product.id}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
              {product.name}
            </h1>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-2.5 text-right">
            <p className="text-xs font-semibold text-teal-700">Harga Produk</p>
            <p className="text-2xl font-extrabold text-teal-600">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-slate-500">Kode Produk</p>
            <p className="mt-1 font-bold text-slate-800">
              PRD-{String(product.id).padStart(3, "0")}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">Status</p>
            <p className="mt-1 font-bold text-emerald-600">Tersedia</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            className="cursor-pointer rounded-xl border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
            onClick={() => onEdit && onEdit(product)}
          >
            Edit
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
            onClick={() => onDelete && onDelete(product)}
          >
            Hapus
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
