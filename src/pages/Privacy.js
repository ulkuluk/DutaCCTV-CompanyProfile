import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-700">
          Jelaskan jenis data yang dikumpulkan (form, cookies, analytics),
          tujuan, penyimpanan, dan hak pengguna.
        </p>
      </main>
      <Footer />
    </>
  );
}
