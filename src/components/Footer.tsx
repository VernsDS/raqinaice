import { contact } from "@/data/site"

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Menu", href: "#menu" },
  { label: "Rasa", href: "#rasa" },
  { label: "Cerita", href: "#cerita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Lokasi", href: "#lokasi" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 px-5 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 font-display text-xl text-ink">
              <span className="h-2 w-2 rounded-full bg-berry" />
              Raqina Ice
            </p>
            <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-ink/55">
              Ice cream lembut di Lembah Sari. Mulai Rp2.000 sampai Rp12.000.
            </p>
          </div>

          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/35">
              Navigasi
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13.5px] text-ink/60 transition-colors hover:text-berry"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink/35">Kunjungi</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-ink/60">
              {contact.address}
              <br />
              {contact.city}
              <br />
              {contact.addressNote}
            </p>
            <p className="mt-3 font-mono text-[10.5px] text-ink/45">Buka {contact.hours}</p>
            <p className="mt-1 font-mono text-[10.5px] text-ink/45">Pesanan: {contact.orderName}</p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[13.5px] font-semibold text-berry transition-opacity hover:opacity-75"
            >
              Pesan lewat WhatsApp
            </a>
          </div>
        </div>

        <div className="relative select-none border-t border-ink/10 pt-8">
          <p className="font-display text-[clamp(3.2rem,14vw,9.5rem)] leading-[0.8] tracking-[-0.03em] text-ink/10">
            Raqina Ice
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-ink/10 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/35">
            © 2026 Raqina Ice · Lembah Sari
          </p>
          <a
            href="#beranda"
            className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink/35 transition-colors hover:text-berry"
          >
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  )
}
