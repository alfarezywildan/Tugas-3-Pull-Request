import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main className="mx-auto max-w-lg px-6 py-16">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900">
          404: Halaman tidak ditemukan
        </h1>
        <div className="mt-6">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-teal-700"
          >
            Kembali ke Produk
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
