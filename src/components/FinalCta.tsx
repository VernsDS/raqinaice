import { ArrowUpRight } from "lucide-react"
import { contact } from "@/data/site"
import { Reveal } from "@/components/ui/section"

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#F5E5DC_0%,#F2E7DC_50%,#E8F0E9_100%)]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/50 blur-[110px]" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-label text-ink/40">Sudah lapar?</p>
        <h2 className="mt-5 font-display text-[clamp(2.3rem,6.4vw,4.2rem)] leading-[1] text-ink">
          Siap mencoba
          <br />
          <em className="italic text-gradient">Raqina?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
          Pesan sekarang dan rasakan kelembutan ice cream kami. Buka setiap hari 16:15
          sampai 20:30.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-berry px-7 py-4 text-sm font-semibold text-white shadow-candy transition-transform hover:scale-[1.02]"
          >
            Pesan sekarang
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={contact.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/70 px-7 py-4 text-sm font-medium text-ink/80 backdrop-blur transition-colors hover:border-ink/30 hover:text-ink"
          >
            Lihat rute
          </a>
        </div>
      </Reveal>
    </section>
  )
}
