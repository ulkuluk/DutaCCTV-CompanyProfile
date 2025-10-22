import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-slate-700">
          Tuliskan ketentuan penggunaan website, hak cipta, batas tanggung
          jawab, dan hukum yang berlaku.
        </p>
      </main>
      <Footer />
    </>
  );
}
