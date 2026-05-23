import { motion } from "framer-motion";
import FooterSection from "../ui/FooterSection";

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS = [
	{ title: "Graphic Design", items: ["Adobe Photoshop", "Illustrator", "Canva", "CorelDRAW", "InDesign", "Adobe XD", "Figma"] },
	{ title: "Video Editing", items: ["Premiere Pro", "After Effects", "Adobe Audition", "CapCut", "Audacity"] },
	{ title: "Web Development", items: ["HTML5 / CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Laravel / PHP", "MySQL", "Alpine.js"] },
	{ title: "Other Tools", items: ["Git", "Draw.io", "Lucidchart", "Citrix Workspace"] },
];

const TOOLS = ["Figma", "Photoshop", "Illustrator", "Adobe XD", "Canva", "Premiere Pro", "After Effects", "HTML5", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Laravel", "PHP", "MySQL", "Git"];

const EXPERIENCE = [
	{ role: "Multimedia Designer", company: "Digital Feet Corporation", period: "Jul 2024 → Present", desc: "Develops localized marketing assets for ALSO Group — web banners, social media graphics, newsletters, and print materials." },
	{ role: "SRE Intern", company: "Fligno Software Philippines", period: "Feb 2024 → May 2024", desc: "Created Moodle installation environments and developed a custom badge plugin with OSMT API integration." },
	{ role: "Media Designer", company: "BukSU College of Technologies", period: "Aug 2023 → 2024", desc: "Designed organizational graphics and collaborated on social media content production." },
	{ role: "Video Editor & Graphic Designer", company: "BukSU Supreme Student Council", period: "Aug 2021 → 2022", desc: "Produced video content and publication materials for student organization events." },
];

const EDUCATION = [
	{ degree: "BS Information Technology", school: "Bukidnon State University", period: "2019 → 2024", note: "Graduated with honors · TOPCIT Level 2" },
	{ degree: "TVL ICT — Computer Programming", school: "ACLC College of Bukidnon", period: "2017 → 2019", note: "With Honor · Programmer of the Year" },
	{ degree: "Junior High School", school: "Lilingayon National High School", period: "2013 → 2017", note: "With Honor" },
];

const RECOGNITIONS = [
	{ count: "1×", label: "Web Developer of the Year", org: "BukSU" },
	{ count: "1×", label: "Graphic Artist of the Year", org: "BukSU BSIT" },
	{ count: "1×", label: "University Artist 2nd Runner-up", org: "BukSU" },
	{ count: "1×", label: "TOPCIT Level 2", org: "IITP Korea" },
];

// ─── Reusable section wrapper ────────────────────────────────────────────────

function Section({ title, children }) {
	return (
		<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex flex-col md:flex-row gap-5 md:gap-12 px-5 py-8 border-t border-zinc-800">
			<div className="w-48">
				<p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-1.5">About</p>
				<h3 className="text-4xl font-bold text-white leading-tight tracking-tight">{title}</h3>
			</div>
			<div className="flex-1 min-w-0 pt-0.5">{children}</div>
		</motion.section>
	);
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function AboutScreen() {
	return (
		<div className="-mx-4 -mt-2 bg-zinc-950">
			{/* ── Hero ── */}
			<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative overflow-hidden px-5 pt-10 pb-8">
				{/* Orange orb */}
				<div
					className="absolute -top-6 right-0 w-40 h-40 rounded-full pointer-events-none"
					style={{
						background: "radial-gradient(circle at 35% 35%, #fb923c 0%, #f97316 45%, #9a3412 100%)",
						filter: "blur(1px)",
						boxShadow: "inset -8px -8px 24px rgba(0,0,0,0.5), inset 4px 4px 16px rgba(251,146,60,0.4)",
					}}
				/>
				<motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl font-black text-white tracking-tighter leading-[0.9] pr-16">
					Multimedia
					<br />
					Designer
					<br />
					&amp; Web
					<br />
					Developer
				</motion.h1>
			</motion.section>

			{/* ── Bio ── */}
			<motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="px-5 pb-10 flex gap-4 items-start border-b border-zinc-800">
				{/* Avatar */}
				<div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 via-fuchsia-500 to-violet-600 flex items-center justify-center shrink-0 border-2 border-zinc-800 select-none">
					<span className="text-white font-bold text-lg tracking-tight">JG</span>
				</div>

				{/* Text */}
				<div className="flex-1 min-w-0">
					<h2 className="text-base font-bold text-white leading-snug mb-3">
						I craft digital experiences combining <span className="text-zinc-300">design, motion</span> &amp; <span className="text-zinc-300">web development</span>
					</h2>
					<p className="text-sm text-zinc-500 leading-relaxed mb-4">BS Information Technology graduate from Bukidnon State University. I blend graphic design, video production, and front-end development to create compelling visual and digital work — currently building marketing assets at Digital Feet Corporation.</p>
					<button className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
						<span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
						Download CV
					</button>
				</div>
			</motion.section>

			{/* ── Skills ── */}
			<Section title="Skills">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
					{SKILLS.map((s) => (
						<div key={s.title}>
							<p className="text-lg font-semibold text-white mb-2 leading-tight">{s.title}</p>
							<ul className="space-y-1">
								{s.items.map((item) => (
									<li key={item} className="text-[11px] text-zinc-600 leading-snug">
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Section>

			{/* ── Toolbox ── */}
			<Section title="Toolbox">
				<p className="text-sm text-zinc-400 leading-relaxed">
					{TOOLS.map((t, i) => (
						<span key={t}>
							{t}
							{i < TOOLS.length - 1 && <span className="text-zinc-700 mx-1.5">·</span>}
						</span>
					))}
				</p>
			</Section>

			{/* ── Experience ── */}
			<Section title="Experience">
				<div className="space-y-5">
					{EXPERIENCE.map((e) => (
						<div key={e.role}>
							<p className="text-sm text-white font-medium leading-snug">
								{e.role} <span className="font-normal text-zinc-500">@{e.company}</span>
							</p>
							<p className="text-[11px] text-zinc-600 mt-0.5">{e.period}</p>
							<p className="text-[11px] text-zinc-600 mt-1 leading-relaxed">{e.desc}</p>
						</div>
					))}
				</div>
			</Section>

			{/* ── Education ── */}
			<Section title="Education">
				<div className="space-y-5">
					{EDUCATION.map((e) => (
						<div key={e.degree}>
							<p className="text-sm text-white font-medium leading-snug">{e.degree}</p>
							<p className="text-[11px] text-zinc-500 mt-0.5">{e.school}</p>
							<p className="text-[11px] text-zinc-600 mt-0.5">
								{e.period} · {e.note}
							</p>
						</div>
					))}
				</div>
			</Section>

			{/* ── Recognitions ── */}
			<Section title="Recog­nitions">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{RECOGNITIONS.map((r) => (
						<div key={r.label}>
							<p className="text-[10px] text-zinc-600 mb-0.5">
								{r.count} {r.label}
							</p>
							<p className="text-sm font-bold text-white">{r.org}</p>
						</div>
					))}
				</div>
			</Section>

			<FooterSection />
		</div>
	);
}
