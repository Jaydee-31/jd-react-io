# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview production build locally
```

There is no test runner and no linter configured in this project.

## Architecture

This is a static personal portfolio site — React + Vite, no routing library, no backend, no TypeScript.

**Screen routing** is handled entirely with `useState` in `PortfolioMobile.jsx`. The active screen is one of: `home`, `work`, `about`, or `case-study`. There is no URL-based routing.

```
App.jsx
  └── PortfolioMobile.jsx          ← manages activeScreen state + AnimatePresence transitions
        ├── Nav.jsx                 ← sticky top nav (desktop)
        ├── BottomNav.jsx           ← bottom nav with animated dot (mobile)
        └── screens/
              ├── HomeScreen.jsx
              ├── WorkScreen.jsx    ← has internal view state (all categories vs. single category)
              ├── AboutScreen.jsx
              └── CaseStudyScreen.jsx
```

**Shared UI components** live in `src/components/ui/`: `CategoryRow`, `CategoryCard`, `FooterSection`, `ProjectCard`, `SkillBar`.

**All static data** (projects, categories, nav items, tag styles) is defined in `src/constants.js`. Add or edit projects there.

## Styling

- Tailwind CSS — utility-first, no custom theme colors or utilities beyond `fontFamily: Inter`
- Custom keyframes for marquee animations are in `src/index.css` (`marquee`, `marquee-reverse`, 18–22 s linear)
- Dark-first palette: zinc-950/900/800 backgrounds; per-project accent colors defined in `constants.js` as gradient strings

## Animation

Framer Motion is used throughout. Key patterns:
- Page transitions: `AnimatePresence` + `motion.div` with `y` offset and `opacity` (0.18 s)
- Entrance animations: `whileInView` with staggered children
- Nav pill: spring transition (`stiffness: 400, damping: 30`)
- Scroll-triggered skill bars in `SkillBar.jsx` via `useInView`
