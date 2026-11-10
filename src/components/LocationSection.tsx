import { Clock, MapPin, Navigation } from "lucide-react"
import { contact } from "@/data/site"
import { LocationMap } from "@/components/ui/expand-map"
import { Reveal, SectionHeading } from "@/components/ui/section"

export default function LocationSection() {
  return (
    <section id="lokasi" className="relative overflow-hidden border-t border-ink/10 bg-card/40 px-5 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-blush/40 blur-[90px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            index="06"
            label="Lokasi"
            title={
              <>
                Mampir sore ini, <em className="italic text-mint">kami buka.</em>
              </>
            }
            description="Gerobak kami ada di pinggir Jl. Lembah Sari, nomor 12. Kalau mau memastikan rasa favoritmu masih ada, kirim pesan dulu sebelum berangkat."
          />

          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-4 rounded-2xl border border-ink/12 bg-card p-5">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mintSoft text-mint">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[15px] font-medium text-ink">{contact.address}</p>
                <p className="mt-1 text-[13px] text-ink/60">
                  {contact.city} · {contact.addressNote}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-ink/12 bg-card p-5">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-butter text-mango">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[15px] font-medium text-ink">Buka {contact.hours}</p>
                <p className="mt-1 text-[13px] text-ink/60">Setiap hari, termasuk akhir pekan</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={contact.maps}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[13px] font-semibold text-paper transition-transform hover:scale-[1.02]"
              >
                <Navigation className="h-3.5 w-3.5" />
                Buka Google Maps
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-berry/30 bg-card px-5 py-3 text-[13px] font-semibold text-berry transition-colors hover:bg-blush/50"
              >
                Pesan lewat WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[380px] rounded-[2rem] border border-ink/15 bg-mintSoft p-5 pb-9 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink/60">
                <MapPin className="h-3.5 w-3.5 text-mint" />
                Peta lokasi
              </span>
              <span className="rounded-full border border-ink/10 bg-card px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink/55">
                Klik untuk buka
              </span>
            </div>

            <div className="mt-5 flex justify-center">
              <LocationMap
                location="Jl. Lembah Sari No 12"
                coordinates="RT 004 / RW 009 · Depan Warung Cindy"
                hint="Klik peta untuk memperluas"
              />
            </div>

            <p className="mt-5 text-center text-[11px] leading-relaxed text-ink/55">
              Peta ilustrasi. Gunakan tombol Google Maps untuk rute sebenarnya.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
