import {useEffect, useState} from "react";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";

function Layout() {
    const {pathname} = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("portfolio-theme") === "dark");

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 10);
        updateScrollState();
        window.addEventListener("scroll", updateScrollState, {passive: true});
        return () => window.removeEventListener("scroll", updateScrollState);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("portfolio-theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const isHomeAtTop = pathname === "/" && !isScrolled;
    const usesLightNavbar = !isHomeAtTop && !isDarkMode;
    const navForeground = usesLightNavbar ? "text-[#0c0b0e]" : "text-white";
    const scrollToHomeHeader = () => window.scrollTo({top: 0, behavior: "smooth"});
    const linkClass = ({isActive}) =>
        `border-b-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors sm:px-4 ${isActive ? "border-[#ff6b2c] text-[#ff6b2c]" : `border-transparent ${usesLightNavbar ? "text-[#0c0b0e]/75 hover:text-[#ff6b2c]" : "text-white/80 hover:text-white"}`}`;

    return (
        <>
            <nav className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${isHomeAtTop ? "bg-transparent" : isDarkMode ? "bg-[#0c0b0e]/95 shadow-lg backdrop-blur-md" : "bg-white/95 shadow-lg backdrop-blur-md"}`}>
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-4">
                    <Link to="/" onClick={scrollToHomeHeader} className={`text-lg font-bold tracking-tight transition-colors sm:text-xl ${navForeground}`}>
                        Stefan <span className="text-[#ff6b2c]">Muijs</span>
                    </Link>
                    <div className="flex items-center gap-1 sm:gap-3">
                        <NavLink to="/projecten" className={linkClass}>Projecten</NavLink>
                        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                        <button
                            type="button"
                            onClick={() => setIsDarkMode((currentMode) => !currentMode)}
                            aria-label={isDarkMode ? "Schakel lichte modus in" : "Schakel donkere modus in"}
                            title={isDarkMode ? "Lichte modus" : "Donkere modus"}
                            className={`ml-1 flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${navForeground} ${usesLightNavbar ? "border-gray-300 hover:border-[#ff6b2c] hover:text-[#ff6b2c]" : "border-white/30 hover:border-[#ff6b2c] hover:text-[#ff6b2c]"}`}
                        >
                            {isDarkMode ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                    <circle cx="12" cy="12" r="4" />
                                    <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <main className="bg-white text-[#0c0b0e]">
                <Outlet />
            </main>

            <footer className="border-t border-gray-200 bg-white text-[#0c0b0e]">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-6 py-7 sm:flex-row">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Stefan Muijs
                    </p>
                    <nav aria-label="Footer navigatie" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                        <Link to="/" onClick={scrollToHomeHeader} className="text-sm text-gray-600 transition-colors hover:text-[#ff6b2c]">Home</Link>
                        <Link to="/about" className="text-sm text-gray-600 transition-colors hover:text-[#ff6b2c]">Over mij</Link>
                        <Link to="/projecten" className="text-sm text-gray-600 transition-colors hover:text-[#ff6b2c]">Projecten</Link>
                        <Link to="/contact" className="text-sm text-gray-600 transition-colors hover:text-[#ff6b2c]">Contact</Link>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Layout;
