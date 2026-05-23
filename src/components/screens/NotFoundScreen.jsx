import { motion } from "framer-motion";

const LABEL = "404 Not found";

export default function NotFoundScreen({ onNavigate }) {
	return (
		<div className="-mx-4 -mt-2 bg-zinc-950 min-h-[80vh] flex flex-col justify-center">
			<div className="overflow-hidden py-5">
				<div className="flex items-center whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
					{[0, 1].map((set) => (
						<span key={set} className="inline-flex items-center shrink-0">
							{Array(6)
								.fill(null)
								.map((_, i) => (
									<span key={i} className="inline-flex items-center">
										<span className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tighter pr-5 sm:pr-8">{LABEL}</span>
										<span className="text-rose-400 text-2xl sm:text-3xl leading-none pr-5 sm:pr-8">●</span>
									</span>
								))}
						</span>
					))}
				</div>
			</div>

			<motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-center mt-10">
				<button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors mx-auto">
					<span className="text-base leading-none">←</span>
					Back to home
				</button>
			</motion.div>
		</div>
	);
}
