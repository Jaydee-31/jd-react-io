import { motion } from "framer-motion";

export default function CategoryRow({ label, reverse, onClick }) {
	return (
		<motion.div whileHover="hovered" initial="rest" onClick={onClick} className="border-b border-zinc-800 cursor-pointer overflow-hidden">
			<div className="overflow-hidden py-5">
				<div className="flex items-center whitespace-nowrap" style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} 22s linear infinite` }}>
					{[0, 1].map((set) => (
						<span key={set} className="inline-flex items-center shrink-0">
							{Array(6)
								.fill(null)
								.map((_, i) => (
									<span key={i} className="inline-flex items-center">
										<span className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tighter pr-5 sm:pr-8">{label}</span>
										<span className="text-rose-400 text-2xl sm:text-3xl leading-none pr-5 sm:pr-8">●</span>
									</span>
								))}
						</span>
					))}
				</div>
			</div>
			<motion.p variants={{ rest: { opacity: 0.3 }, hovered: { opacity: 0.75 } }} className="text-center text-[10px] text-zinc-500 pb-4 tracking-widest uppercase">
				Click to view projects
			</motion.p>
		</motion.div>
	);
}
