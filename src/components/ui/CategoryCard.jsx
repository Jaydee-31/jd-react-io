import { motion } from 'framer-motion'

const accents = {
  "Graphic Design":  "from-violet-950 to-violet-700",
  "Print Design":    "from-amber-950  to-amber-700",
  "Web Design":      "from-emerald-950 to-emerald-700",
  "Web Development": "from-blue-950   to-blue-700",
}

export default function CategoryCard({ label, videoSrc, onClick }) {
  const gradient = accents[label] ?? "from-zinc-950 to-zinc-700"
  const ticker = `${label} · `.repeat(6)

  return (
    <motion.div
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer aspect-square select-none"
      whileHover="hovered"
      initial="rest"
    >
      {/* Scaling background */}
      <motion.div
        variants={{ rest: { scale: 1 }, hovered: { scale: 1.07 } }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        {videoSrc && (
          <video
            autoPlay muted loop playsInline
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        )}
      </motion.div>

      {/* Dim */}
      <div className="absolute inset-0 bg-black/25" />

      {/* "Click to view" badge */}
      <motion.div
        variants={{ rest: { opacity: 0, scale: 0.9 }, hovered: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="bg-white text-zinc-900 text-[11px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg">
          View projects
        </span>
      </motion.div>

      {/* Bottom: marquee + label */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="overflow-hidden py-2 opacity-40">
          <p
            className="flex whitespace-nowrap text-white text-[9px] uppercase tracking-widest font-mono"
            style={{ animation: 'marquee 14s linear infinite' }}
          >
            <span className="shrink-0 pr-0">{ticker}</span>
            <span className="shrink-0 pr-0">{ticker}</span>
          </p>
        </div>
        <div className="px-4 pb-4">
          <span className="text-white font-semibold text-sm drop-shadow">{label}</span>
        </div>
      </div>
    </motion.div>
  )
}
