export const NAV_ITEMS = [
  { id: "home",  label: "Home",  icon: "⌂" },
  { id: "work",  label: "Work",  icon: "⊞" },
  { id: "about", label: "About", icon: "◎" },
]

export const CATEGORIES = [
  "Graphic Design",
  "Print Design",
  "Web Design",
  "Web Development",
]

export const TAG_DESIGN  = "bg-violet-50 text-violet-700 border border-violet-200 text-[10px] px-2 py-0.5 rounded-full"
export const TAG_DEV     = "bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded-full"
export const TAG_NEUTRAL = "bg-zinc-100 text-zinc-500 border border-zinc-200 text-[10px] px-2 py-0.5 rounded-full"

export const PROJECTS = [
  {
    id: "lumio",
    title: "Lumio",
    description: "Analytics dashboard for growth teams. Led design and built the React frontend.",
    category: "SaaS · 2024",
    type: "Hybrid",
    categories: ["Web Design", "Web Development"],
    stack: ["React", "TypeScript", "Figma", "Supabase"],
    tags: [
      { label: "UI / UX", style: TAG_DESIGN },
      { label: "React",   style: TAG_DEV },
    ],
    accent: {
      bg:      "bg-gradient-to-br from-violet-50 to-violet-100",
      darkBg:  "bg-gradient-to-br from-violet-900/60 to-violet-950",
      circle1: "bg-violet-200/50",
      circle2: "bg-violet-300/30",
      label:   "text-violet-400",
    },
  },
  {
    id: "koto",
    title: "Koto",
    description: "Brand identity for a specialty Japanese tea house. Full visual system.",
    category: "Branding · 2023",
    type: "Design",
    categories: ["Graphic Design", "Print Design"],
    stack: ["Figma", "Illustrator", "Brand Strategy"],
    tags: [
      { label: "Branding", style: TAG_DESIGN },
    ],
    accent: {
      bg:      "bg-gradient-to-br from-amber-50 to-amber-100",
      darkBg:  "bg-gradient-to-br from-amber-900/60 to-amber-950",
      circle1: "bg-amber-200/50",
      circle2: "bg-amber-300/30",
      label:   "text-amber-400",
    },
  },
  {
    id: "slate",
    title: "Slate",
    description: "Headless CMS with a visual editor built for developer workflows.",
    category: "Full-stack · 2023",
    type: "Dev",
    categories: ["Web Development"],
    stack: ["Node.js", "React", "PostgreSQL", "REST API"],
    tags: [
      { label: "Full-stack", style: TAG_DEV },
    ],
    accent: {
      bg:      "bg-gradient-to-br from-emerald-50 to-emerald-100",
      darkBg:  "bg-gradient-to-br from-emerald-900/60 to-emerald-950",
      circle1: "bg-emerald-200/50",
      circle2: "bg-emerald-300/30",
      label:   "text-emerald-400",
    },
  },
  {
    id: "prism",
    title: "Prism",
    description: "Design system for a fintech startup. Component library and docs site.",
    category: "Design System · 2022",
    type: "Hybrid",
    categories: ["Web Design", "Graphic Design"],
    stack: ["Next.js", "Storybook", "Tailwind", "Figma"],
    tags: [
      { label: "Design System", style: TAG_DESIGN },
      { label: "Next.js",       style: TAG_DEV },
    ],
    accent: {
      bg:      "bg-gradient-to-br from-blue-50 to-blue-100",
      darkBg:  "bg-gradient-to-br from-blue-900/60 to-blue-950",
      circle1: "bg-blue-200/50",
      circle2: "bg-blue-300/30",
      label:   "text-blue-400",
    },
  },
]
