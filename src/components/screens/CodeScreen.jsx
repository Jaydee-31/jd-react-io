import { motion } from 'framer-motion'
import { TAG_DEV } from '../../constants'
import FooterSection from '../ui/FooterSection'

const codeProjects = [
  {
    id: "use-animate",
    title: "use-animate",
    description: "Composable animation hooks for React. Zero-dependency, tree-shakeable, TypeScript-first.",
    stack: ["React", "TypeScript"],
    stars: "312",
    accent: { bg: "bg-gradient-to-br from-zinc-50 to-zinc-100", label: "text-zinc-400" },
  },
  {
    id: "grail",
    title: "Grail",
    description: "Production-ready e-commerce starter. Auth, payments, CMS, and admin out of the box.",
    stack: ["Next.js", "Tailwind", "Prisma"],
    stars: "841",
    accent: { bg: "bg-gradient-to-br from-indigo-50 to-indigo-100", label: "text-indigo-400" },
  },
]

const snippet = [
  { code: "function useDebounce(value, delay = 300) {", highlight: true },
  { code: "  const [debounced, set] = useState(value);", highlight: false },
  { code: "  useEffect(() => {", highlight: true },
  { code: "    const id = setTimeout(() => set(value), delay);", highlight: false },
  { code: "    return () => clearTimeout(id);", highlight: false },
  { code: "  }, [value, delay]);", highlight: false },
  { code: "  return debounced;", highlight: true },
  { code: "}", highlight: false },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function CodeScreen() {
  return (
    <div className="py-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-1">Code</h2>
        <p className="text-sm text-zinc-400">Open source & personal projects</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {codeProjects.map((p) => (
          <motion.div
            key={p.id}
            variants={item}
            className="rounded-2xl border border-zinc-200 overflow-hidden bg-white"
          >
            <div className={`h-36 relative overflow-hidden ${p.accent.bg}`}>
              <div className="absolute inset-0 flex items-end p-4">
                <span className={`text-[10px] font-mono uppercase tracking-widest ${p.accent.label}`}>
                  {p.title}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-zinc-900 text-sm">{p.title}</h3>
                <div className="flex gap-1.5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border border-zinc-200 text-[10px] px-2 py-1 rounded-lg text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    ⎇ Repo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="border border-zinc-200 text-[10px] px-2 py-1 rounded-lg text-zinc-400 hover:border-zinc-400 transition-colors"
                  >
                    ↗ Live
                  </motion.button>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mb-3 leading-relaxed">{p.description}</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 flex-wrap flex-1">
                  {p.stack.map((t) => <span key={t} className={TAG_DEV}>{t}</span>)}
                </div>
                <span className="text-[10px] text-zinc-400 shrink-0">★ {p.stars}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pinned snippet */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-zinc-950 rounded-2xl p-5 overflow-hidden"
      >
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Pinned snippet</p>
        <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
          <code>
            {snippet.map((line, i) => (
              <span key={i} className={`block ${line.highlight ? "text-emerald-400" : "text-zinc-400"}`}>
                {line.code}
              </span>
            ))}
          </code>
        </pre>
      </motion.div>
      <FooterSection />
    </div>
  )
}
