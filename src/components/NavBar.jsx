import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
    { to: "/", label: "Index" },
    { to: "/narrative", label: "Narrative" },
    { to: "/void", label: "The_Void" },
    { to: "/playground", label: "Playground" },
    { to: "/transmission", label: "Transmission" }
];

const SystemClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 px-6 py-3 rounded-2xl border border-white/5 bg-void/20 backdrop-blur-md hidden lg:flex">
            <div className="flex flex-col items-end font-mono text-[10px] tabular-nums tracking-[0.2em] text-white/40">
                <span className="text-white/60">{time.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
                <span className="text-[8px] opacity-50">{time.toLocaleTimeString([], { second: '2-digit' })}</span>
            </div>
        </div>
    );
};

const DesktopSidebar = () => {
    const location = useLocation();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div 
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
                x: 0, 
                opacity: 1,
                width: isFocused ? "80px" : "64px" 
            }}
            className="fixed top-0 left-0 h-full z-[100] hidden lg:flex flex-col items-center py-12 transition-all duration-500 group"
        >
            <motion.div 
                animate={{ 
                    backgroundColor: isFocused ? "rgba(10, 10, 12, 0.8)" : "rgba(10, 10, 12, 0.2)",
                    borderColor: isFocused ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.03)",
                    backdropBlur: isFocused ? "20px" : "4px"
                }}
                className="h-full w-full flex flex-col items-center border-r rounded-r-3xl transition-colors duration-500 overflow-hidden"
            >
                {/* Top: Minimal Entry Point */}
                <div className="mt-8 shrink-0">
                    <motion.div 
                        animate={{ 
                            backgroundColor: isFocused ? "#B794F4" : "#ffffff22"
                        }}
                        className="w-1 h-1 rounded-full animate-pulse shadow-[0_0_10px_rgba(183,148,244,0.5)]" 
                    />
                </div>

                {/* Center: Main Navigation */}
                <nav className="flex-1 flex flex-col items-center justify-center gap-12">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <Link 
                                key={link.to}
                                to={link.to}
                                className="group/link relative flex items-center justify-center"
                            >
                                <motion.span 
                                    animate={{ 
                                        opacity: isFocused ? (isActive ? 1 : 0.4) : (isActive ? 0.8 : 0.1),
                                        scale: isActive ? 1.1 : 1,
                                        color: isActive ? "#B794F4" : "#ffffff"
                                    }}
                                    className="font-display font-bold text-[10px] uppercase tracking-[0.4em] vertical-rl rotate-180 transition-all duration-500 group-hover/link:opacity-100"
                                >
                                    {link.label}
                                </motion.span>
                                
                                {isActive && (
                                    <motion.div 
                                        layoutId="sidebar-active"
                                        className="absolute -left-4 w-1 h-8 bg-spark shadow-[0_0_15px_#B794F4] rounded-r-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom: Empty Spacer */}
                <div className="mb-12 shrink-0 h-4" />
            </motion.div>
        </motion.div>
    );
};

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="lg:hidden">
            <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[150] mix-blend-difference">
                <Link to="/" className="font-display font-black text-lg text-white tracking-widest">
                    ZAID
                </Link>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 relative z-[200]"
                >
                    <div className="w-6 h-4 flex flex-col justify-between">
                        <motion.span 
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                            className="w-full h-0.5 bg-white origin-center"
                        />
                        <motion.span 
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            className="w-full h-0.5 bg-white"
                        />
                        <motion.span 
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                            className="w-full h-0.5 bg-white origin-center"
                        />
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[140] bg-abyss flex flex-col items-center justify-center p-12 overflow-hidden"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[200%] h-full opacity-10 pointer-events-none">
                            <h1 className="font-display font-black text-[30vw] uppercase leading-none text-white/5 whitespace-nowrap">
                                MENU_NAV_DATA
                            </h1>
                        </div>

                        <nav className="flex flex-col items-center gap-10">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link 
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className={`font-display font-black text-4xl uppercase tracking-tighter ${location.pathname === link.to ? 'text-spark' : 'text-white/60 hover:text-white'}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ delay: 0.6 }}
                            className="mt-16"
                        >
                            <Link 
                                to="/transmission"
                                onClick={() => setIsOpen(false)}
                                className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-spark transition-colors"
                            >
                                [ Initiate_Inquiry ]
                            </Link>
                        </motion.div>

                        <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-center font-mono text-[8px] uppercase tracking-widest text-white/20">
                            <div className="flex items-center gap-2">
                                KL // MY
                            </div>
                            <div>© 2025</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export const NavBar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileNav />
            <SystemClock />
        </>
    );
};
