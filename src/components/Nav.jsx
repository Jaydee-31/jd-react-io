import { motion } from "framer-motion";
import { NAV_ITEMS } from "../constants";

export default function Nav({ active, onNav, dark }) {
	return (
		<header className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${dark ? "bg-zinc-950/90 border-zinc-800" : "bg-white/80 border-zinc-100"}`}>
			<div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
				<span className={`font-semibold tracking-tight text-sm transition-colors ${dark ? "text-white" : "text-zinc-900"}`}>Jaydee</span>

				<nav className="hidden sm:flex items-center gap-0.5">
					{NAV_ITEMS.map((item) => (
						<button key={item.id} onClick={() => onNav(item.id)} className="relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
							{active === item.id && <motion.span layoutId="nav-pill" className={`absolute inset-0 rounded-lg ${dark ? "bg-zinc-800" : "bg-zinc-100"}`} transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
							<span className={`relative transition-colors ${active === item.id ? (dark ? "text-white" : "text-zinc-900") : dark ? "text-zinc-500 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-700"}`}>{item.label}</span>
						</button>
					))}
				</nav>

				<motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className={`hidden sm:block text-xs border px-3 py-1.5 rounded-lg font-medium transition-colors ${dark ? "border-zinc-600 text-zinc-300 hover:bg-white hover:text-zinc-900 hover:border-white" : "border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"}`}>
					Hire me
				</motion.button>

				<span className={`sm:hidden text-xs font-medium transition-colors ${dark ? "text-zinc-500" : "text-zinc-400"}`}>{NAV_ITEMS.find((n) => n.id === active)?.label ?? "Work"}</span>
			</div>
		</header>
	);
}
