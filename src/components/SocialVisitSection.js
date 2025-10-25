import { FaTiktok, FaInstagram } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import Container from "./Container";

const ICONS = {
  TikTok: FaTiktok,
  Instagram: FaInstagram,
  Shopee: SiShopee,
};
const PRIMARY = "#ff5151ff"; // merah lebih muda dari navbar
const PRIMARY_DARK = "#c7000dff";

export default function SocialVisitSection({ socials = [] }) {
  return (
    <section
      className="relative text-white"
      style={{
        background: `linear-gradient(to right, ${PRIMARY_DARK}, ${PRIMARY})`,
      }}
    >
      {/* Background subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png')] opacity-10"></div>

      <Container className="relative z-10 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Visit Us on Social Media & Marketplace
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center transition-transform hover:-translate-y-1"
              aria-label={s.label}
            >
              <div
                className="flex h-20 w-20 items-center justify-center rounded-2xl 
             bg-white/80 shadow-md ring-1 ring-slate-200
             transition-all group-hover:scale-105 group-hover:shadow-lg"
              >
                {s.logo ? (
                  <img
                    src={s.logo}
                    alt={s.label}
                    className="h-10 w-10 object-contain drop-shadow-md"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="text-lg font-semibold">{s.label[0]}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
