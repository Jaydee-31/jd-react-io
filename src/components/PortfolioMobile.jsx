import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import BottomNav from "./BottomNav";
import HomeScreen from "./screens/HomeScreen";
import WorkScreen from "./screens/WorkScreen";
import CaseStudyScreen from "./screens/CaseStudyScreen";
import AboutScreen from "./screens/AboutScreen";

const SCREENS = {
	home: HomeScreen,
	work: WorkScreen,
	case: CaseStudyScreen,
	about: AboutScreen,
};

export default function PortfolioMobile() {
	const [activeNav, setActiveNav] = useState("home");
	const [activeScreen, setActiveScreen] = useState("home");
	const [workCategory, setWorkCategory] = useState(null);

	const navigate = (id, category) => {
		setActiveScreen(id);
		if (id !== "case") setActiveNav(id);
		if (id === "work" && category !== undefined) setWorkCategory(category);
		if (["home", "about"].includes(id)) setWorkCategory(null);
	};

	const Screen = SCREENS[activeScreen];
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
