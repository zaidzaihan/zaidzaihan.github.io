import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GlitchText } from "../components/ui/GlitchText";
import { SystemImage } from "../components/ui/SystemImage";

const Monolith = ({ log, index, activeIndex, setActiveIndex }) => {
    const isActive = activeIndex === index;
    const isAnyActive = activeIndex !== null;

    return (
        <motion.div
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(isActive ? null : index)}
            animate={{
                flex: isActive ? 3 : isAnyActive ? 0.5 : 1,
                height: isActive ? "100%" : "100%"
            }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className={`relative h-full overflow-hidden border-r border-white/5 last:border-none group flex items-center justify-center cursor-crosshair`}
        >
            {/* Background Image with Reveal */}
            <motion.div 
                className="absolute inset-0 z-0"
                animate={{
                    scale: isActive ? 1.05 : 1.2,
                    opacity: isActive ? 0.4 : 0.1,
                    filter: isActive ? "grayscale(0%)" : "grayscale(100%)"
                }}
                transition={{ duration: 1 }}
            >
                <SystemImage src={log.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-abyss/60" />
            </motion.div>

            {/* Neon Border Leak */}
            <div className={`glow-leak ${index === 0 ? 'via-spark/20' : index === 1 ? 'via-pulse/20' : 'via-white/20'} relative`}>
                <div className="absolute inset-0 holographic-noise opacity-30 mix-blend-screen" />
            </div>

            {/* Kinetic Label */}
            <motion.div 
                className={`relative z-10 select-none flex flex-col items-center gap-4 md:gap-8`}
                animate={{
                    y: isActive ? -50 : 0
                }}
            >
                <GlitchText 
                    text={log.title}
                    className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-[5rem] xl:text-[6rem] vertical-rl rotate-180 tracking-tighter"
                    colorClass={isActive ? (index === 0 ? 'text-spark' : index === 1 ? 'text-pulse' : 'text-white') : 'text-white/20'}
                    skipReveal={true}
                />
                
                <motion.div
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                    className="font-mono text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/40 whitespace-nowrap px-4 text-center"
                >
                    {log.desc}
                </motion.div>
            </motion.div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 z-20 w-full px-6 flex justify-center"
                    >
                        {log.link ? (
                            <Link 
                                to={log.link}
                                className={`relative px-8 md:px-12 py-3 md:py-4 rounded-full font-display font-black text-xs md:text-sm uppercase tracking-widest border-2 transition-all duration-300 hover:scale-105 active:scale-95 ${index === 0 ? 'animate-spark-bg text-abyss border-transparent' : index === 1 ? 'bg-pulse text-abyss border-pulse' : 'bg-white text-abyss border-white'}`}
                            >
                                <div className="absolute inset-0 rounded-full holographic-noise opacity-0 group-hover:opacity-20 pointer-events-none" />
                                <span className="relative z-10">Open_Stream</span>
                            </Link>
                        ) : (
                            <div className="font-mono text-[8px] md:text-[10px] text-white/20 uppercase tracking-[0.3em] animate-pulse">
                                Archive_Encrypted
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Interactive Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-linear-to-tr from-transparent via-${index === 0 ? 'spark' : index === 1 ? 'pulse' : 'white'}/5 to-transparent`} />
        </motion.div>
    );
};

export const Playground = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const logs = [
        {
            title: "INFLUENCE",
            image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
            link: "/stack",
            desc: "SYSTEM ARCHITECTURE & DIGITAL PHILOSOPHY"
        },
        {
            title: "RHYTHM",
            image: "https://images.unsplash.com/photo-1514525253344-f20387431e62?q=80&w=2070&auto=format&fit=crop",
            link: "/rhythm",
            desc: "SOUND PATTERNS & SONIC GEOMETRY"
        },
        {
            title: "CHAOS",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
            link: "/chaos",
            desc: "UNFORMATTED RAW CREATIVE DATA"
        }
    ];

    return (
        <div className="w-full h-screen bg-abyss flex flex-row overflow-hidden pt-0 selection:bg-pulse selection:text-white">
            {/* Background Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 holographic-noise opacity-20" />

            {logs.map((log, idx) => (
                <Monolith 
                    key={idx} 
                    log={log} 
                    index={idx} 
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex} 
                />
            ))}

            {/* Global Perspective Text */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                <h1 className="font-display font-black text-[20vw] md:text-[25vw] opacity-[0.03] uppercase select-none leading-none relative text-center">
                    <span className="relative z-10">CORE</span>
                    <div className="absolute inset-0 holographic-noise opacity-40 mix-blend-overlay z-20" />
                </h1>
            </div>
        </div>
    );
};
