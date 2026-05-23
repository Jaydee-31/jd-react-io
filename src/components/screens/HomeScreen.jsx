import { motion } from "framer-motion";
import CategoryRow from "../ui/CategoryRow";
import FooterSection from "../ui/FooterSection";
import { CATEGORIES } from "../../constants";

export default function HomeScreen({ onNavigate }) {
	return (
		<div className="-mx-4 -mt-2 bg-zinc-950">
			{/* ── Hero ── */}
			<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="px-5 pt-8 pb-12">
				<div className="flex flex-col md:flex-row items-center justify-between gap-3">
					{/* Left: name + availability */}
					<motion.div initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-1 min-w-4 justify-items-center md:justify-items-end">
						<h1 className="text-5xl font-bold text-white leading-tight tracking-tight">Jaydee Gamo</h1>
						<p className="text-[10px] text-zinc-500 mt-2">Based in Manila, PH</p>
						<div className="flex items-center gap-1.5 mt-1.5">
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
							<span className="text-[10px] text-zinc-400 leading-snug">Available for a full-time position</span>
						</div>
					</motion.div>

					{/* Center: photo */}
					<motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.15 }} className="shrink-0">
						<div className="w-28 h-28 rounded-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-violet-600 flex items-center justify-center border-2 border-zinc-800 overflow-hidden select-none">
							<span className="text-white font-bold text-2xl tracking-tight">JG</span>
						</div>
					</motion.div>

					{/* Right: title */}
					<motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-1 text-center md:text-left min-w-0">
						<p className="text-4xl font-semibold text-white leading-snug">
							Digital Designer
							<br />
							&amp; Web Developer
						</p>
					</motion.div>
				</div>
			</motion.section>

			{/* ── Bio ── */}
			<motion.section initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="px-8 pb-14 text-center">
				<p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto">
					I'm a designer-developer hybrid with 5+ years of experience. At the crossroads of <strong className="text-zinc-200 font-semibold">design, motion</strong> and <strong className="text-zinc-200 font-semibold">web development</strong>, the diversity of my skills allows me to approach creative challenges from multiple perspectives.
				</p>
				<button onClick={() => onNavigate("about")} className="mt-5 flex items-center gap-2 text-xs text-zinc-500 mx-auto hover:text-zinc-200 transition-colors">
					<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
					Learn more
				</button>
			</motion.section>

			{/* ── Categories header ── */}
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center pb-8 px-4">
				<p className="text-sm text-zinc-300 font-light italic">Discover my creative expertise</p>
				<p className="text-[10px] text-zinc-600 mt-1">Check out some of my projects by area of expertise</p>
			</motion.div>

			{/* ── Category rows ── */}
			<div className="border-t border-zinc-800">
				{CATEGORIES.map((cat, i) => (
					<CategoryRow key={cat} label={cat} reverse={i % 2 === 1} onClick={() => onNavigate("work", cat)} />
				))}
			</div>

			<FooterSection />
		</div>
	);
}
