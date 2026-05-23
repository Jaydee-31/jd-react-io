import { motion } from 'framer-motion'

export default function ProjectCard({ project, onClick, className = "" }) {
  const { title, description, category, tags, accent } = project

  return (
    <motion.div
      className={`rounded-2xl border border-zinc-200 overflow-hidden bg-white cursor-pointer ${className}`}
      whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.07)" }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
    >
      <div className={`h-40 relative overflow-hidden ${accent.bg}`}>
        <div className={`absolute -right-8 -top-8 w-36 h-36 rounded-full ${accent.circle1}`} />
        <div className={`absolute -left-4 -bottom-10 w-28 h-28 rounded-full ${accent.circle2}`} />
        <div className="absolute inset-0 flex items-end p-4">
          <span className={`text-[10px] font-mono uppercase tracking-widest ${accent.label}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{title}</h3>
        <p className="text-xs text-zinc-500 mb-3 leading-relaxed">{description}</p>
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span key={tag.label} className={tag.style}>{tag.label}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
