"use client"

import { useRef, useState } from "react"
import type { MotionValue } from "framer-motion"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type FlavorSlide = {
  name: string
  title: string
  description: string
  price: string
  image: string
  alt: string
  /** Warna latar pastel untuk slide ini. */
  color: string
}

type Props = {
  slides: FlavorSlide[]
  /** Tinggi scroll per slide, sebagai pecahan dari 100svh. */
  scrollPerSlide?: number
}

const RADIUS = 47

function WheelImage({
  pos,
  index,
  src,
  alt,
}: {
  pos: MotionValue<number>
  index: number
  src: string
  alt: string
}) {
  const opacity = useTransform(pos, (p) => Math.max(0, 1 - Math.abs(p - index)))
  const scale = useTransform(pos, (p) => 1 + Math.min(0.06, Math.abs(p - index) * 0.08))

  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ opacity, scale }}
    />
  )
}

export default function RotatingFlavorSlider({ slides, scrollPerSlide = 0.85 }: Props) {
  const n = slides.length
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  })
  const pos = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, n - 1)])

  useMotionValueEvent(pos, "change", (v) => {
    const i = Math.min(n - 1, Math.max(0, Math.round(v)))
    setActive((prev) => (prev === i ? prev : i))
  })

  const inputRange = n > 1 ? slides.map((_, i) => i) : [0, 1]
  const outputRange = n > 1 ? slides.map((s) => s.color) : [slides[0].color, slides[0].color]
  const bg = useTransform(pos, inputRange, outputRange)

  const angles = slides.map((_, i) =>
    n < 2 ? 0 : (i - (n - 1) / 2) * Math.min(38, 150 / (n - 1)),
  )

  const goTo = (i: number) => {
    const el = trackRef.current
    if (!el || n < 2) return
    const target = Math.min(n - 1, Math.max(0, i))
    const rect = el.getBoundingClientRect()
    const start = window.scrollY + rect.top
    const distance = rect.height - window.innerHeight
    window.scrollTo({
      top: start + (distance * target) / (n - 1),
      behavior: "smooth",
    })
  }

  if (!n) return null
  const slide = slides[active]

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${100 + (n - 1) * scrollPerSlide * 100}svh` }}
    >
      <motion.section
        className="sticky top-0 flex h-[100svh] flex-col overflow-hidden"
        style={{ backgroundColor: bg }}
        aria-roledescription="carousel"
        aria-label="Pilihan rasa"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,250,244,0.55),transparent_45%),radial-gradient(circle_at_88%_82%,rgba(255,250,244,0.4),transparent_50%)]" />

        <div className="relative px-5 pt-[max(6.5rem,12svh)] text-center">
          <p className="font-mono text-[10px] uppercase tracking-label text-ink/45">
            Rasa favorit · {active + 1}/{n}
          </p>
          <div className="relative mx-auto mt-3 grid min-h-[168px] max-w-xl place-items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="col-start-1 row-start-1 w-full"
              >
                <h2 className="font-display text-[clamp(1.9rem,4.6vw,3rem)] font-normal leading-[1.05]">
                  {slide.title}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-ink/65 sm:text-[14px]">
                  {slide.description}
                </p>
                <span className="mt-4 inline-flex rounded-full border border-ink/10 bg-card/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/70">
                  {slide.price}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative min-h-0 flex-1">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[min(86vw,50svh,540px)] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-[2%] rounded-full border border-dashed border-ink/15" />

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: angles[active] }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <span className="absolute left-1/2 top-[3%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-berry shadow-sm" />
            </motion.div>

            <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] border-card bg-card shadow-soft">
              {slides.map((s, i) => (
                <WheelImage
                  key={s.name}
                  pos={pos}
                  index={i}
                  src={s.image}
                  alt={i === active ? s.alt : ""}
                />
              ))}
            </div>

            {slides.map((s, i) => {
              const rad = (angles[i] * Math.PI) / 180
              const left = 50 + RADIUS * Math.sin(rad)
              const top = 50 - RADIUS * Math.cos(rad)
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-pressed={i === active}
                  aria-label={`Tampilkan rasa ${s.name}`}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-berry/60 sm:text-[11px]",
                    i === active
                      ? "bg-card/90 text-ink shadow-sm"
                      : "text-ink/50 hover:text-ink",
                  )}
                >
                  {s.name}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-between px-4 pb-6 sm:px-8">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Rasa sebelumnya"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-card/80 text-ink shadow-sm transition hover:bg-card disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <p className="hidden font-mono text-[10px] uppercase tracking-label text-ink/40 sm:block">
            Gulir atau klik nama rasa
          </p>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === n - 1}
            aria-label="Rasa berikutnya"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-card/80 text-ink shadow-sm transition hover:bg-card disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.section>
    </div>
  )
}
