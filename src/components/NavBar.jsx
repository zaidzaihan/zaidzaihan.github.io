import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

//tab data
const tabs = [
    { id: "home", label: "home", to: "/" },
    { id: "about", label: "about me", to: "/about-me" },
    { id: "projects", label: "projects", to: "/projects" },
    { id: "space", label: "personal space", to: "/personal-space" },
];

//Desktop nav
const DesktopNav = () => {
    const location = useLocation();
    const [hovered, setHovered] = useState(true);

    const isExpanded =
        hovered ||
        tabs.some((tab) => location.pathname.startsWith(tab.to) && tab.to !== "/");

    return (
        <div className="hidden lg:flex fixed top-0 w-full z-50 justify-center bg-white/80 backdrop-blur-md">
            <motion.div
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                animate={{
                    width: isExpanded ? 520 : 110,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative my-5 h-14 bg-black rounded-full flex items-center justify-center overflow-hidden px-4"
            >
                <motion.div className="absolute"
                    animate={{
                        opacity: isExpanded ? 0 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                >
                    <Link
                        to="/"
                        className="text-2xl font-bold font-sans text-white"
                    >
                        z_
                    </Link>
                </motion.div>
                {/* Tabs */}
                <motion.nav
                    animate={{
                        opacity: isExpanded ? 1 : 0,
                        x: isExpanded ? 0 : 20,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-8"
                >
                    {tabs.map((tab) => {
                        const isActive = location.pathname === tab.to;

                        return (
                            <Link
                                key={tab.id}
                                to={tab.to}
                                className={`relative text-sm font-semibold whitespace-nowrap transition-colors
                  ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                `}
                            >
                                {tab.label}

                                {isActive && (
                                    <motion.div
                                        layoutId="desktop-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </motion.nav>
            </motion.div>
        </div>
    );
};


//mobile nav
const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            {/* Top Bar */}
            <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
                <div className="px-6 py-5 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold font-sans"
                        onClick={() => setIsOpen(false)}
                    >
                        z_
                    </Link>

                    {/* Burger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-10 h-10"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`absolute left-2 top-3 h-0.5 w-6 bg-black transition ${isOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <span
                            className={`absolute left-2 top-5 h-0.5 w-6 bg-black transition ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`absolute left-2 top-7 h-0.5 w-6 bg-black transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Fullscreen Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu */}
                <div
                    className={`relative h-full bg-white flex flex-col justify-center items-center gap-8 text-3xl font-semibold transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {tabs.map((tab) => (
                        <Link
                            key={tab.id}
                            to={tab.to}
                            onClick={() => setIsOpen(false)}
                            className="hover:scale-110 transition"
                        >
                            {tab.label}
                        </Link>
                    ))}

                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-8 bg-black text-white px-12 py-5 rounded-full hover:scale-110 transition"
                    >
                        contact
                    </Link>
                </div>
            </div>
        </div>
    );
};


//main export
export const NavBar = () => {
    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
};
