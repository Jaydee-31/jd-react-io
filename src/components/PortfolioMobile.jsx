import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import BottomNav from "./BottomNav";
import HomeScreen from "./screens/HomeScreen";
import WorkScreen from "./screens/WorkScreen";
import CaseStudyScreen from "./screens/CaseStudyScreen";
import AboutScreen from "./screens/AboutScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import { CATEGORIES } from "../constants";

const SCREENS = {
	home: HomeScreen,
	work: WorkScreen,
	case: CaseStudyScreen,
	about: AboutScreen,
};

const toSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");
const fromSlug = (slug) => CATEGORIES.find((c) => toSlug(c) === slug) ?? null;

function parseRoute(pathname) {
	if (pathname === "/" || pathname === "") return { screen: "home", category: null };
	if (pathname === "/about" || pathname === "/about/") return { screen: "about", category: null };

	const workMatch = pathname.match(/^\/work(?:\/([^/]+))?\/?$/);
	if (workMatch) {
		const slug = workMatch[1];
		const category = slug ? fromSlug(slug) : null;
		// unknown category slug → 404
		if (slug && !category) return { screen: "404", category: null };
		return { screen: "work", category };
	}

	return { screen: "404", category: null };
}

function buildPath(screen, category) {
	if (screen === "home") return "/";
	if (screen === "about") return "/about/";
	if (screen === "work") return category ? `/work/${toSlug(category)}/` : "/work/";
	if (screen === "case") return "/work/";
	return "/";
}

export default function PortfolioMobile() {
	const initial = parseRoute(window.location.pathname);

	const [activeNav, setActiveNav] = useState(
		initial.screen === "404" ? "home" : initial.screen === "case" ? "work" : initial.screen
	);
	const [activeScreen, setActiveScreen] = useState(initial.screen);
	const [workCategory, setWorkCategory] = useState(initial.category);

	useEffect(() => {
		const onPop = () => {
			const { screen, category } = parseRoute(window.location.pathname);
			setActiveScreen(screen);
			setWorkCategory(category);
			if (screen !== "case" && screen !== "404") setActiveNav(screen);
		};
		window.addEventListener("popstate", onPop);
		return () => window.removeEventListener("popstate", onPop);
	}, []);

	const navigate = (id, category) => {
		const newCategory = id === "work" && category !== undefined ? category : null;

		setActiveScreen(id);
		if (id !== "case") setActiveNav(id);
		if (id === "work") setWorkCategory(newCategory);
		if (id === "home" || id === "about") setWorkCategory(null);

		const path = buildPath(id, newCategory);
		if (window.location.pathname !== path) {
			window.history.pushState({}, "", path);
		}
	};

	const Screen = SCREENS[activeScreen] ?? NotFoundScreen;
	const motionKey = activeScreen === "work" ? `work-${workCategory}` : activeScreen;

	return (
		<div className="min-h-screen flex flex-col bg-zinc-950">
			<Nav active={activeNav} onNav={navigate} dark />

			<main className="flex-1 w-full max-w-4xl mx-auto px-4 pb-24 sm:pb-10 pt-2">
				<AnimatePresence mode="wait">
					<motion.div key={motionKey} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18, ease: "easeInOut" }}>
						<Screen
							onNavigate={navigate}
							{...(activeScreen === "work" && { category: workCategory })}
						/>
					</motion.div>
				</AnimatePresence>
			</main>

			<BottomNav active={activeNav} setActive={navigate} dark />
		</div>
	);
}
