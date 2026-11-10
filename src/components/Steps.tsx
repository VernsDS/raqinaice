import { steps } from "@/data/site"
import { Reveal, SectionHeading } from "@/components/ui/section"

export default function Steps() {
  return (
    <section id="cara-pesan" className="px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="05"
            label="Cara pesan"
            title={
              <>
                Tiga langkah, <em className="italic text-mango">langsung manis.</em>
              </>
            }
            description="Tidak perlu aplikasi atau antre panjang. Datang, pilih, lalu nikmati di tempat."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-[2rem] border border-ink/10 bg-card p-6 shadow-[0_18px_40px_-32px_rgba(43,26,46,0.5)]">
                <span className="font-mono text-[11px] tracking-label text-berry">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{step.body}</p>
                <span
                  className={`mt-6 block h-1 w-10 rounded-full ${
                    i === 0 ? "bg-berry" : i === 1 ? "bg-mint" : "bg-mango"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
