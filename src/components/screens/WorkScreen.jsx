import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS, CATEGORIES } from "../../constants";
import CategoryRow from "../ui/CategoryRow";
import FooterSection from "../ui/FooterSection";

const zeroPad = (n) => String(n + 1).padStart(2, "0");

// ─── Browser-window mockup ───────────────────────────────────────────────────
function BrowserMockup({ project, onNavigate }) {
	return (
		<motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} onClick={() => onNavigate("case")} className="rounded-xl overflow-hidden border border-zinc-800 cursor-pointer">
			<div className="bg-zinc-800 px-3 py-2 flex items-center gap-2">
				<span className="w-2.5 h-2.5 rounded-full bg-red-500/70 shrink-0" />
				<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 shrink-0" />
				<span className="w-2.5 h-2.5 rounded-full bg-green-500/70 shrink-0" />
				<div className="flex-1 mx-2 bg-zinc-700 rounded-md px-3 py-1 text-[10px] text-zinc-500 font-mono truncate">{project.id}.design</div>
			</div>
			<div className={`h-44 relative overflow-hidden ${project.accent.darkBg}`}>
				<div className={`absolute -right-8 -top-8 w-36 h-36 rounded-full ${project.accent.circle1} opacity-20`} />
				<div className={`absolute -left-4 -bottom-10 w-28 h-28 rounded-full ${project.accent.circle2} opacity-20`} />
				<div className="absolute inset-0 flex items-end p-4">
					<span className={`text-[10px] font-mono uppercase tracking-widest ${project.accent.label}`}>{project.category}</span>
				</div>
			</div>
		</motion.div>
	);
}

// ─── Category detail view ────────────────────────────────────────────────────
function CategoryView({ category, projects, onNavigate }) {
	const [activeId, setActiveId] = useState(projects[0]?.id ?? null);
	const active = projects.find((p) => p.id === activeId) ?? projects[0];
	const activeIdx = projects.findIndex((p) => p.id === active?.id);
	const stackTags = [...new Set(projects.flatMap((p) => p.stack))];
	const otherCategories = CATEGORIES.filter((c) => c !== category);

	if (!active) return null;

	return (
		<>
			{/* Back */}
			<div className="px-5 pt-5 pb-3">
				<button onClick={() => onNavigate("work", null)} className="text-[11px] text-zinc-600 hover:text-zinc-300 transition-colors flex items-center gap-1">
					← All categories
				</button>
			</div>

			{/* Category marquee */}
			<div className="overflow-hidden py-6 border-y border-zinc-800">
				<div className="flex items-center whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
					{[0, 1].map((set) => (
						<span key={set} className="inline-flex items-center shrink-0">
							{Array(5)
								.fill(null)
								.map((_, i) => (
									<span key={i} className="inline-flex items-center">
										<span className="text-5xl sm:text-6xl font-bold text-white tracking-tighter pr-5 sm:pr-8">{category}</span>
										<span className="text-rose-400 text-2xl sm:text-3xl leading-none pr-5 sm:pr-8">●</span>
									</span>
								))}
						</span>
					))}
				</div>
			</div>

			{/* Stack tags */}
			<div className="px-5 py-4 flex gap-1.5 flex-wrap border-b border-zinc-800">
				{stackTags.map((tag) => (
					<span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
						{tag}
					</span>
				))}
			</div>

			{/* ── Two-column layout ── */}
			<div className="flex">
				{/* Left: sticky project nav */}
				<div className="w-24 shrink-0 sticky top-14 self-start pt-6 pb-10 pl-5 pr-3">
					<p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-3">Projects</p>
					<div className="h-px bg-zinc-800 mb-4" />
					<nav className="space-y-3">
						{projects.map((p) => (
							<button key={p.id} onClick={() => setActiveId(p.id)} className="flex items-start gap-1.5 w-full text-left group">
								<span className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${p.id === activeId ? "bg-rose-400" : "bg-zinc-700 group-hover:bg-zinc-500"}`} />
								<span className={`text-xs leading-tight transition-colors ${p.id === activeId ? "text-white font-medium" : "text-zinc-500 group-hover:text-zinc-300"}`}>{p.title}</span>
							</button>
						))}
					</nav>
				</div>

				{/* Vertical divider */}
				<div className="w-px bg-zinc-800 self-stretch" />

				{/* Right: project details */}
				<AnimatePresence mode="wait">
					<motion.div key={activeId} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }} className="flex-1 px-5 pt-5 pb-10 min-w-0">
						{/* Header row */}
						<div className="flex justify-between items-center mb-4">
							<span className={`text-[10px] uppercase tracking-widest ${active.accent.label}`}>{category}</span>
							<span className="text-[10px] text-zinc-600 font-mono">{zeroPad(activeIdx)}</span>
						</div>
						<div className="h-px bg-zinc-800 mb-5" />

						{/* Title */}
						<h3 className="text-4xl font-bold text-white tracking-tight mb-4 leading-tight">{active.title}</h3>

						{/* Description */}
						<p className="text-sm text-zinc-400 leading-relaxed mb-6">{active.description}</p>

						{/* Stack pills */}
						<div className="flex gap-1.5 flex-wrap mb-6">
							{active.stack.map((t) => (
								<span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
									{t}
								</span>
							))}
						</div>

						{/* Mockup */}
						<BrowserMockup project={active} onNavigate={onNavigate} />
					</motion.div>
				</AnimatePresence>
			</div>

			{/* ── Discover more ── */}
			<div className="border-t border-zinc-800 pt-12 pb-4 text-center">
				<p className="text-sm text-zinc-300 font-light italic">Discover more</p>
				<p className="text-[10px] text-zinc-600 mt-1">Browse projects by area of expertise</p>
			</div>
			<div className="border-t border-zinc-800">
				{otherCategories.map((cat, i) => (
					<CategoryRow key={cat} label={cat} reverse={i % 2 === 1} onClick={() => onNavigate("work", cat)} />
				))}
			</div>

			<FooterSection />
		</>
	);
}

// ─── All-categories view (no category selected) ──────────────────────────────
function AllCategoriesView({ onNavigate }) {
	return (
		<>
			<div className="px-5 pt-8 pb-2 text-center">
				<p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Work</p>
				<p className="text-xs text-zinc-500 italic">Choose a category to explore</p>
			</div>
			<div className="border-t border-zinc-800 mt-6">
				{CATEGORIES.map((cat, i) => (
					<CategoryRow key={cat} label={cat} reverse={i % 2 === 1} onClick={() => onNavigate("work", cat)} />
				))}
			</div>

			<FooterSection />
		</>
	);
}

// ─── Root export ─────────────────────────────────────────────────────────────
export default function WorkScreen({ onNavigate, category }) {
	const projects = category ? PROJECTS.filter((p) => p.categories?.includes(category)) : [];

	const showCategory = category && projects.length > 0;

	return <div className="-mx-4 -mt-2 bg-zinc-950">{showCategory ? <CategoryView category={category} projects={projects} onNavigate={onNavigate} /> : <AllCategoriesView onNavigate={onNavigate} />}</div>;
}
