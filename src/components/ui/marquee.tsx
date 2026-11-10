"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type MarqueeProps = {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}

export function Marquee({ children, duration = 30, reverse = false, className }: MarqueeProps) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 items-center"
          animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}
