import { IceCreamBowl, Leaf, Snowflake, Sparkles } from "lucide-react"
import { pillars } from "@/data/site"
import { Reveal, SectionHeading } from "@/components/ui/section"

const icons = [IceCreamBowl, Leaf, Snowflake, Sparkles]

export default function About() {
  return (
    <section id="cerita" className="relative overflow-hidden px-5 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-mintSoft/60 blur-[90px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-blush/50 blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[6px] border-card shadow-soft">
                <img
                  src="/images/cerita.jpg"
                  alt="Ice cream lembut Raqina di atas papan saji"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-2xl border border-ink/12 bg-card px-4 py-3 shadow-soft">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/50">
                  Buka setiap hari
                </p>
                <p className="mt-0.5 font-display text-lg text-ink">16:15 - 20:30</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                index="03"
                label="Cerita"
                title={
                  <>
                    Apa itu <em className="italic text-berry">Raqina Ice?</em>
                  </>
                }
                description="Ice cream lembut yang diputar dalam batch kecil setiap hari. Bahannya sederhana: susu, cokelat, stroberi, dan vanila, tanpa rasa yang disimpan berhari-hari."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/60">
                Raqina Ice mangkal di Jl. Lembah Sari RT 004 RW 009 No 12, tepat di depan
                Warung Cindy. Setiap porsi disiapkan saat kamu pesan, jadi teksturnya masih
                lembut waktu sampai di tanganmu.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, i) => {
                const Icon = icons[i] ?? Sparkles
                return (
                  <Reveal key={pillar.title} delay={0.06 * i}>
                    <div className="h-full rounded-2xl border border-ink/10 bg-card/70 p-5">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-blush/70 text-berry">
                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-4 font-display text-lg text-ink">{pillar.title}</h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/55">
                        {pillar.body}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
