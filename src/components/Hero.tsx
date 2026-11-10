import type { MouseEvent } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import { contact } from "@/data/site"

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const stats = [
  { value: "Rp2.000", label: "Harga mulai" },
  { value: "4 rasa", label: "Rasa tersedia" },
  { value: "16:15", label: "Buka tiap hari" },
]

const sprinkles = [
  { className: "hidden lg:block left-[4%] top-[26%] bg-berry/70 rotate-45", delay: 0 },
  { className: "hidden lg:block left-[6%] top-[64%] bg-mint/60 -rotate-12", delay: 0.6 },
  { className: "hidden lg:block right-[5%] top-[20%] bg-mango/60 rotate-12", delay: 1.1 },
  { className: "hidden lg:block right-[7%] bottom-[16%] bg-berry/60 rotate-6", delay: 0.9 },
]

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 90, damping: 18 })
  const y = useSpring(my, { stiffness: 90, damping: 18 })

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 22)
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 22)
  }

  return (
    <section
      id="beranda"
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 sm:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(158deg,#F6E7DE_0%,#F2E7DC_46%,#E8EFE8_100%)]" />
        <div className="absolute -left-24 top-2 h-[24rem] w-[24rem] rounded-full bg-blush/70 blur-[90px]" />
        <div className="absolute -right-20 top-24 h-[20rem] w-[20rem] rounded-full bg-mintSoft/70 blur-[80px]" />
        <div className="absolute bottom-0 left-1/3 h-[16rem] w-[16rem] rounded-full bg-ice/50 blur-[70px]" />
        {sprinkles.map((s) => (
          <motion.span
            key={s.className}
            className={`absolute h-3 w-8 rounded-full ${s.className}`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card/80 px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mango" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/65">
              Ice Cream · Premium
            </span>
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(2.7rem,6.6vw,5.1rem)] font-normal leading-[0.98] tracking-[-0.02em] text-ink">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              >
                Lembut, premium,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
              >
                bikin <em className="italic text-berry">ketagihan.</em>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/65 sm:text-base"
          >
            Ice cream lembut yang dibuat hari itu juga. Dingin, manis yang pas, dan bikin
            kangen. Datang ke gerobak kami di Lembah Sari atau pesan dulu lewat WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-berry px-6 py-3.5 text-sm font-semibold text-white shadow-candy transition-transform hover:scale-[1.02]"
            >
              Pesan sekarang
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/60 px-6 py-3.5 text-sm font-medium text-ink/80 transition-colors hover:border-ink/30 hover:text-ink"
            >
              Lihat menu
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-xl text-ink">{stat.value}</dt>
                <dd className="mt-1 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-ink/45">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          style={{ x, y }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
          className="relative mx-auto w-full max-w-[400px]"
        >
          <div className="absolute inset-x-8 top-6 bottom-4 rounded-[999px] bg-blush/80 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[6px] border-card bg-blush shadow-soft">
            <img
              src="/images/hero-sandwich.jpg"
              alt="Ice cream Raqina"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-2 top-8 rounded-2xl border border-ink/12 bg-card px-4 py-3 shadow-soft sm:top-12"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/50">Mulai dari</p>
            <p className="mt-0.5 font-display text-2xl text-ink">Rp2.000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -right-2 bottom-24 flex items-center gap-2 rounded-full border border-ink/12 bg-card px-4 py-2.5 shadow-soft"
          >
            <Clock className="h-3.5 w-3.5 text-berry" />
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/70">
              {contact.hours}
            </span>
          </motion.div>

          <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-ink/12 bg-card px-4 py-2 shadow-soft">
            <MapPin className="h-3.5 w-3.5 text-mint" />
            <span className="whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink/60">
              Depan Warung Cindy
            </span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink/30">Gulir</span>
          <motion.span
            className="h-9 w-px bg-gradient-to-b from-ink/30 to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  )
}
