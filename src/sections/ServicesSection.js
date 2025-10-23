import site from "../content/site";


export default function ServicesSection() {
  return (
    
    <section id="services" className="relative">
      {/* ==== Bagian header biru ==== */}
      
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 py-16 text-center text-white">
        
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Layanan 
          </h2>
          <p className="mt-4 mb-10 text-base md:text-lg leading-relaxed text-blue-50 mt-3 max-w-2xl text-white text-justify">
            DUTA CCTV adalah penyedia terkemuka dalam solusi keamanan
            terintegrasi, khususnya dalam sistem keamanan dan CCTV. Dengan
            pengalaman puluhan tahun di industri ini, kami telah membuktikan
            diri sebagai mitra yang dapat diandalkan untuk memenuhi kebutuhan
            keamanan pelanggan kami. Kami siap membantu Anda dalam semua kebutuhan instalasi, perbaikan,
            dan pemeliharaan sistem keamanan CCTV. Kami menjamin kualitas
            layanan yang profesional, cepat, dan efisien. Berikut adalah detail
            layanan yang kami tawarkan:
          </p>
        </div>
      </div>

      {/* ==== Grid layanan putih di bawah ==== */}
      <div className="bg-white mt-8 md:mt-12 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {site.services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-blue-700">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                {/* <ul className="mt-4 space-y-1 text-sm text-slate-700"> {s.bullets.map((b) => ( <li key={b}>• {b}</li> ))} </ul> */}{" "}
                {/* <div className="mt-5"> <a href="#contact" className="text-sm font-medium text-blue-700 hover:underline" > Consult now → </a> </div> */}
              </article>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
