import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { button } from "framer-motion/client";
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    let tabs = [
        { id: "about me", label: "about me", ref: "/about-me" },
        { id: "projects", label: "projects", ref: "/projects" },
        { id: "personal space", label: "personal space", ref: "/personal-space" }
    ]

    const [activeTab, setActiveTab] = useState("home");

    return (
        <>
            {/* Main Navbar */}
            <div className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/90">
                <div className="px-6 md:px-16 lg:px-32 py-5 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer z-50">
                        <span className="text-2xl md:text-3xl font-bold">
                            <a href="/" className="font-sans hover:text-gray-600 transition-colors">z_</a>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-x-12 font-sans text-2xl font-semibold tracking-wide">
                        {tabs.map((tab) => (
                            <button onClick={() => setActiveTab(tab.id)} key={tab.id}>
                                <Link className="relative rounded-full px-3 py-2" to={tab.ref}>
                                    {activeTab === tab.id && (
                                        <motion.div layoutId="active-pill" className="absolute inset-0 border-b-2 border-[#FF5C00] shadow-sm"></motion.div>
                                    )}
                                    <span className="relative text-black z-10">
                                        {tab.label}
                                    </span>
                                </Link>
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Burger Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative w-10 h-10 z-50"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col justify-center items-center w-full h-full">
                            <span
                                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                                    }`}
                            ></span>
                            <span
                                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            ></span>
                            <span
                                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Full-Screen Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Background overlay */}
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                    onClick={closeMenu}
                ></div>

                {/* Menu content */}
                <div className={`relative h-full bg-white flex flex-col justify-center items-center transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <nav className="flex flex-col items-center gap-8 font-sans font-semibold text-3xl">
                        <a
                            href="/about-me"
                            onClick={closeMenu}
                            className="hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"
                        >
                            about me
                        </a>
                        <a
                            href="/projects"
                            onClick={closeMenu}
                            className="hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"
                        >
                            projects
                        </a>
                        <a
                            href="/personal-space"
                            onClick={closeMenu}
                            className="hover:text-gray-600 transition-colors transform hover:scale-110 duration-200"
                        >
                            personal space
                        </a>
                        <a
                            href="/contact"
                            onClick={closeMenu}
                            className="mt-8 bg-black text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-all transform hover:scale-110 duration-200"
                        >
                            contact
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
}