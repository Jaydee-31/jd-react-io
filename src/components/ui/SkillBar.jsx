import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SkillBar({ label, pct, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="mb-3" ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-[11px] font-medium" style={{ color }}>{label}</span>
        <span className="text-[11px] text-zinc-400">{pct}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-zinc-100">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        />
      </div>
    </div>
  )
}
