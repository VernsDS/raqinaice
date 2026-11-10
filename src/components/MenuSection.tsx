import { menuGroups } from "@/data/site"
import { Reveal, SectionHeading } from "@/components/ui/section"

export default function MenuSection() {
  return (
    <section id="menu" className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeading
              index="01"
              label="Menu"
              title={
                <>
                  Pilih rasamu <em className="italic text-berry">hari ini.</em>
                </>
              }
              description="Empat rasa yang paling sering dicari, dengan ukuran dari porsi mini sampai paket hemat. Semua disiapkan di tempat saat kamu pesan, jadi teksturnya masih lembut."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <span className="inline-flex rounded-full border border-berry/25 bg-blush/60 px-4 py-2 font-mono text-[10px] uppercase tracking-label text-berry">
              Rp2.000 - Rp12.000
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {menuGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-ink/10 bg-card p-6 shadow-[0_18px_40px_-32px_rgba(43,26,46,0.5)] sm:p-8">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${
                    gi === 0 ? "bg-blush/70" : "bg-mintSoft/80"
                  }`}
                />
                <div className="relative flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-ink sm:text-[26px]">{group.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-label text-ink/30">
                    0{gi + 1}
                  </span>
                </div>
                <p className="relative mt-1.5 text-sm text-ink/55">{group.subtitle}</p>

                <ul className="relative mt-6">
                  {group.items.map((item, i) => (
                    <li
                      key={item.name}
                      className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-ink/10 py-3 last:border-b-0"
                    >
                      <span className="text-[15px] font-medium text-ink/85 transition-colors group-hover:text-berry">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span
                          className={`rounded-full px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] ${
                            i % 2 === 0 ? "bg-blush text-berry" : "bg-mintSoft text-mint"
                          }`}
                        >
                          {item.tag}
                        </span>
                      )}
                      <span className="ml-auto font-mono text-[11px] text-ink/60">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-label text-ink/35">
            Harga dapat berubah sewaktu-waktu
          </p>
        </Reveal>
      </div>
    </section>
  )
}
