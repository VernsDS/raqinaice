import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { contact } from "@/data/site"

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Menu", href: "#menu" },
  { label: "Rasa", href: "#rasa" },
  { label: "Galeri", href: "#galeri" },
  { label: "Lokasi", href: "#lokasi" },
]

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-blush">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <circle cx="9.4" cy="8.8" r="3.5" fill="#F09CB8" />
          <circle cx="14.8" cy="8.4" r="3.9" fill="#F7C6D6" />
          <path d="M6.4 11.4h11.2L12 21.2z" fill="#D99C64" />
          <circle cx="12" cy="5.6" r="1" fill="#D81B5F" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[17px] tracking-tight text-ink">Raqina Ice</span>
        <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-ink/40">
          Lembah Sari
        </span>
      </span>
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24))

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          animate={{
            backgroundColor: scrolled ? "rgba(250, 243, 234, 0.93)" : "rgba(250, 243, 234, 0.72)",
            paddingTop: scrolled ? 8 : 12,
            paddingBottom: scrolled ? 8 : 12,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex w-full max-w-5xl items-center justify-between rounded-full border border-ink/10 px-3 pl-4 shadow-[0_10px_30px_-22px_rgba(43,26,46,0.4)] backdrop-blur-xl sm:px-4 sm:pl-5"
        >
          <a href="#beranda" aria-label="Raqina Ice, kembali ke atas">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-[13px] text-ink/60 transition-colors hover:bg-blush/60 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-1.5 rounded-full bg-berry px-4 py-2.5 text-[13px] font-semibold text-white shadow-candy transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              Pesan
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Buka menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card text-ink md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-paper md:hidden"
          >
            <div className="flex items-center justify-between px-4 pt-7">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="mt-12 flex flex-col gap-1 px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.06, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-ink/10 py-4 font-display text-3xl"
                  >
                    {link.label}
                    <span className="font-mono text-[10px] text-ink/35">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 px-6 pb-14">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-berry px-5 py-3.5 text-sm font-semibold text-white shadow-candy"
              >
                Pesan sekarang
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-6 font-mono text-[11px] leading-relaxed text-ink/50">
                {contact.address}
                <br />
                {contact.city}
                <br />
                Buka {contact.hours}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
