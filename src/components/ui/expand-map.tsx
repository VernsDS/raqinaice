"use client"

import type React from "react"
import { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronDown, MapPin } from "lucide-react"

interface LocationMapProps {
  location?: string
  coordinates?: string
  hint?: string
  className?: string
}

const ROADS = [
  { x1: "0%", y1: "44%", x2: "100%", y2: "44%", width: 7, opacity: 0.5 },
  { x1: "0%", y1: "74%", x2: "100%", y2: "74%", width: 4, opacity: 0.34 },
  { x1: "36%", y1: "0%", x2: "36%", y2: "100%", width: 6, opacity: 0.42 },
  { x1: "72%", y1: "0%", x2: "72%", y2: "100%", width: 4, opacity: 0.32 },
  { x1: "10%", y1: "0%", x2: "90%", y2: "100%", width: 3, opacity: 0.22 },
]

const BLOCKS = [
  { top: "48%", left: "8%", width: "18%", height: "20%" },
  { top: "12%", left: "42%", width: "15%", height: "20%" },
  { top: "76%", left: "76%", width: "18%", height: "16%" },
  { top: "6%", left: "78%", width: "14%", height: "14%" },
  { top: "60%", left: "42%", width: "12%", height: "12%" },
]

export function LocationMap({
  location = "Jl. Lembah Sari No 12",
  coordinates = "RT 004 / RW 009",
  hint = "Klik untuk perluas",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [7, -7])
  const rotateY = useTransform(mouseX, [-50, 50], [-7, 7])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const toggle = () => setIsExpanded((v) => !v)

  return (
    <motion.div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label="Peta lokasi Raqina Ice"
      className={`relative cursor-pointer select-none outline-none ${className ?? ""}`}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsHovered(true)}
      onBlur={handleMouseLeave}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggle()
        }
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border-2 border-ink/25 bg-ice"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 292 : 244,
          height: isExpanded ? 252 : 168,
          boxShadow: isHovered
            ? "0 24px 45px -22px rgba(51, 32, 47, 0.55)"
            : "0 16px 32px -24px rgba(51, 32, 47, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,#EAF4FA_0%,#D5E6F0_70%,#C9DDE9_100%)]" />

        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          {ROADS.map((road, i) => (
            <line
              key={`base-${i}`}
              x1={road.x1}
              y1={road.y1}
              x2={road.x2}
              y2={road.y2}
              className="stroke-ink"
              strokeOpacity={road.opacity * 0.55}
              strokeWidth={road.width}
              strokeLinecap="round"
            />
          ))}
        </svg>

        {BLOCKS.map((block, i) => (
          <div
            key={`block-${i}`}
            className="absolute rounded-[3px] border border-ink/10 bg-ink/10"
            style={{ top: block.top, left: block.left, width: block.width, height: block.height }}
          />
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute -inset-2.5 animate-pulse rounded-full bg-mint/25" />
          <span className="relative grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-mint shadow-[0_6px_14px_-4px_rgba(51,32,47,0.5)]">
            <MapPin className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
          </span>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
                <motion.line
                  x1="0%"
                  y1="26%"
                  x2="100%"
                  y2="26%"
                  className="stroke-ink/30"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                />
                <motion.line
                  x1="0%"
                  y1="88%"
                  x2="100%"
                  y2="88%"
                  className="stroke-ink/20"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                />
                <motion.line
                  x1="56%"
                  y1="0%"
                  x2="56%"
                  y2="100%"
                  className="stroke-ink/25"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.line
                  x1="18%"
                  y1="0%"
                  x2="18%"
                  y2="100%"
                  className="stroke-ink/15"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </svg>

              <motion.div
                className="absolute left-[60%] top-[52%] h-[20%] w-[14%] rounded-[3px] border border-ink/20 bg-ink/15"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.35 }}
              />
              <motion.div
                className="absolute left-[22%] top-[60%] h-[16%] w-[12%] rounded-[3px] border border-ink/15 bg-ink/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.42 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 flex items-start justify-between p-3">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-ink/15 bg-card/90 text-mint">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-card/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/65">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {isExpanded ? "Terbuka" : "Buka"}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#D9E9F2] via-[#D9E9F2]/95 to-transparent px-3 pb-3 pt-8">
          <p className="text-[12.5px] font-semibold leading-tight text-ink">{location}</p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/60">
              {isExpanded ? coordinates : "RT 004 / RW 009"}
            </p>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-ink/50"
            >
              <ChevronDown className="h-3 w-3" />
            </motion.span>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="pointer-events-none absolute -bottom-6 left-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45"
        style={{ x: "-50%" }}
        animate={{ opacity: isHovered && !isExpanded ? 1 : 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {hint}
      </motion.p>
    </motion.div>
  )
}
