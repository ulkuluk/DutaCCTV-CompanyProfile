// src/sections/ContactSection.jsx
import site from "../content/site";
import Section from "../components/Section";
import Button from "../components/Button";

export default function ContactSection() {
  return (
    <Section id="contact" className="pt-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Kontak & Alamat
          </h2>

          <div className="mt-4 rounded-2xl bg-[#0E4A7E] text-white p-6 md:p-8 shadow-xl ring-1 ring-black/10">
            <div className="space-y-6 text-[15px] leading-7">
              <div>
                <p className="font-semibold italic opacity-90">
                  Head Office &amp; Workshop :
                </p>
                <p className="mt-2 whitespace-pre-line">
                  {site.contact.address}
                </p>
              </div>

              <div>
                <p className="font-semibold italic opacity-90">Telepon :</p>
                <p className="mt-2">
                  <a
                    href={`tel:${site.contact.phone}`}
                    className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
                  >
                    {site.contact.phone}
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold italic opacity-90">Email :</p>
                <p className="mt-2">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
                  >
                    {site.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* CTA opsional */}
            <div className="mt-6">
              <Button href={site.contact.whatsapp} variant="secondary" className="bg-white text-slate-900">
                Chat WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* ==== Kolom kanan: Maps ==== */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Maps
          </h2>

          <div className="mt-4 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200">
            <div className="overflow-hidden rounded-xl">
              <iframe
                title="Lokasi BOSS CCTV"
                src={site.contact.mapEmbedSrc}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
