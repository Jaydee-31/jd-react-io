import { motion } from "framer-motion";

export default function FooterSection() {
	return (
		<>
			<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="px-5 pt-16 pb-6 text-center border-t border-zinc-800">
				<p className="text-[10px] text-zinc-600 mb-4 tracking-widest uppercase">Looking for a new talent?</p>
				<a href="mailto:johndextergamo@gmail.com" className="text-2xl sm:text-3xl font-bold text-white block mb-8 leading-tight hover:text-zinc-300 transition-colors break-all">
					johndextergamo@gmail.com
				</a>
				<div className="flex justify-center items-center gap-8">
					<a href="https://linkedin.com/in/jaydee-gamo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
						<span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
						LinkedIn
					</a>
					<button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
						<span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
						Download CV
					</button>
				</div>
			</motion.section>
			<div className="border-t border-zinc-800 px-5 py-4 mb-0 flex justify-between items-center">
				<span className="text-[10px] text-zinc-600">©{new Date().getFullYear()} Jaydee Gamo</span>
				<span className="flex items-center gap-1.5 text-[10px] text-zinc-600">
					<span className="w-1 h-1 rounded-full bg-emerald-400" />
					Available for a full-time position
				</span>
				<span className="text-[10px] text-zinc-600">Made by Jaydee</span>
			</div>
		</>
	);
}
