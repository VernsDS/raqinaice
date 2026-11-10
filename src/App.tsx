import { useEffect } from "react"
import { MotionConfig } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Ticker from "@/components/Ticker"
import MenuSection from "@/components/MenuSection"
import Flavors from "@/components/Flavors"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import Steps from "@/components/Steps"
import LocationSection from "@/components/LocationSection"
import FinalCta from "@/components/FinalCta"
import Footer from "@/components/Footer"

const MOTION_KEY = "raqina-motion-forced"

/**
 * Kalau pengunjung masuk dengan reduce motion aktif, halaman dimuat ulang sekali
 * supaya mode itu tidak dipakai lagi dan semua animasi tetap tampil.
 */
function useForceMotionOnEntry() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!reduce.matches) return
    try {
      if (sessionStorage.getItem(MOTION_KEY) === "1") return
      sessionStorage.setItem(MOTION_KEY, "1")
      window.location.reload()
    } catch {
      // Kalau storage diblokir, jangan reload supaya tidak berulang terus.
    }
  }, [])
}

export default function App() {
  useForceMotionOnEntry()

  return (
    <MotionConfig reducedMotion="never">
      <div className="grain relative min-h-screen bg-paper">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <MenuSection />
          <Flavors />
          <About />
          <Gallery />
          <Steps />
          <LocationSection />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
