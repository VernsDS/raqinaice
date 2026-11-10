import { Marquee } from "@/components/ui/marquee"

const words = ["Lembut", "Dingin", "Manis pas", "Dibuat harian", "4 rasa", "Premium"]

export default function Ticker() {
  return (
    <div className="relative border-y border-ink/10 bg-berry py-3.5">
      <Marquee duration={34}>
        {words.map((word) => (
          <span
            key={word}
            className="flex items-center gap-6 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.24em] text-white"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
