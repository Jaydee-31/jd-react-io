import { motion } from 'framer-motion'
import FooterSection from '../ui/FooterSection'

const steps = [
  { icon: "✦", label: "Research", desc: "User interviews, competitive analysis",  cls: "border-violet-900/50 bg-violet-900/20",  ic: "text-violet-400",  tc: "text-violet-300" },
  { icon: "◈", label: "Design",   desc: "Wireframes → high-fidelity in Figma",    cls: "border-violet-900/50 bg-violet-900/20",  ic: "text-violet-400",  tc: "text-violet-300" },
  { icon: "⌨", label: "Build",    desc: "React, TypeScript, Recharts, Supabase",  cls: "border-emerald-900/50 bg-emerald-900/20", ic: "text-emerald-400", tc: "text-emerald-300" },
  { icon: "⚡", label: "Launch",  desc: "Shipped to 2.4k users in first month",   cls: "border-emerald-900/50 bg-emerald-900/20", ic: "text-emerald-400", tc: "text-emerald-300" },
]

const metrics = [
  { value: "2.4k", label: "Users month 1" },
  { value: "98%",  label: "Satisfaction" },
  { value: "4.8★", label: "App rating" },
]

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp  = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }

export default function CaseStudyScreen({ onNavigate }) {
  return (
    <div className="-mx-4 -mt-2 bg-zinc-950 py-6 px-5 space-y-8">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <button
          onClick={() => onNavigate('work')}
          className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors mb-4 flex items-center gap-1"
        >
          ← Back to work
        </button>
        <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1.5">Case study</p>
        <h2 className="text-2xl font-bold text-white tracking-tight">Lumio</h2>
        <p className="text-sm text-zinc-500 mt-0.5">Analytics dashboard for growth teams · 2024</p>
      </motion.div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="h-52 bg-gradient-to-br from-violet-900/60 to-violet-950 rounded-2xl relative overflow-hidden border border-zinc-800"
      >
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-violet-700/20" />
        <div className="absolute -left-8 -bottom-16 w-40 h-40 rounded-full bg-violet-600/10" />
        <div className="absolute inset-0 flex items-end p-5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400">SaaS · 2024</span>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Overview</p>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Lumio is an analytics platform helping growth teams track and visualize user behavior across their product. I led the design and built the entire React frontend, working closely with a backend engineer over 4 months.
        </p>
      </motion.section>

      {/* Process */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3">Process</p>
        <div className="grid grid-cols-2 gap-2">
          {steps.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className={`border ${s.cls} rounded-2xl p-3.5`}>
              <span className={`${s.ic} text-base block mb-1.5`}>{s.icon}</span>
              <span className={`${s.tc} text-xs font-semibold block mb-1`}>{s.label}</span>
              <span className="text-[10px] text-zinc-500 leading-relaxed">{s.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Metrics */}
      <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3">Outcome</p>
        <div className="grid grid-cols-3 gap-2">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="bg-zinc-900 rounded-2xl p-3.5 text-center border border-zinc-800"
            >
              <div className="text-lg font-bold text-white mb-0.5">{m.value}</div>
              <div className="text-[10px] text-zinc-500 leading-snug">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stack */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-3">Stack</p>
        <div className="rounded-2xl border border-zinc-800 p-4 bg-zinc-900/50">
          <div className="flex gap-1.5 flex-wrap mb-4">
            {["React", "TypeScript", "Recharts", "Supabase"].map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-white text-zinc-900 text-xs py-2.5 rounded-xl font-medium"
            >
              ↗ View live
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 border border-zinc-700 text-zinc-400 text-xs py-2.5 rounded-xl hover:border-zinc-500 transition-colors"
            >
              ⎇ GitHub
            </motion.button>
          </div>
        </div>
      </motion.section>

      <FooterSection />
    </div>
  )
}
