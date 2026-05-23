import { motion } from 'framer-motion'
import { NAV_ITEMS } from '../constants'

export default function BottomNav({ active, setActive, dark }) {
  return (
    <nav className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-sm border-t transition-colors duration-300 ${
      dark
        ? "bg-zinc-950/90 border-zinc-800"
        : "bg-white/90 border-zinc-100"
    }`}>
      <div className="flex max-w-xl mx-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex-1 flex flex-col items-center py-3 gap-0.5 transition-colors ${
              active === item.id
                ? dark ? "text-white" : "text-zinc-900"
                : dark ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            <span className="text-base leading-none font-mono">{item.icon}</span>
            <span className="text-[9px] font-medium tracking-wide">{item.label}</span>
            {active === item.id && (
              <motion.span
                layoutId="bottom-nav-dot"
                className={`w-1 h-1 rounded-full ${dark ? "bg-white" : "bg-zinc-800"}`}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
