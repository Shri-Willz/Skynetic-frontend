import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Prefer manual scroll restoration so we can control scroll on refresh/load
if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
	try {
		window.history.scrollRestoration = 'manual';
	} catch (e) {
		// ignore
	}
}

// Ensure page is at the top on initial load/refresh
if (typeof window !== "undefined") {
	window.addEventListener('load', () => {
		window.scrollTo(0, 0);
	}, { once: true });
}

createRoot(document.getElementById("root")!).render(<App />);
