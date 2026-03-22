import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { GlitchText } from "../components/ui/GlitchText"
import { FlickerText } from "../components/ui/FlickerText"
import { 
    SiNestjs, SiPrisma, SiMysql, SiPostgresql, 
    SiFastapi, SiReact, SiTypescript, SiN8N,
    SiPython, SiDocker, SiOpenai, SiTailwindcss
} from "react-icons/si";

const techIcons = [
    { icon: SiNestjs, label: "NestJS" },
    { icon: SiPrisma, label: "Prisma" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiFastapi, label: "FastAPI" },
    { icon: SiReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiN8N, label: "n8n" },
    { icon: SiPython, label: "Python" },
    { icon: SiDocker, label: "Docker" },
    { icon: SiOpenai, label: "AI" },
    { icon: SiTailwindcss, label: "Tailwind" }
];

export const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="w-full min-h-dvh flex flex-col justify-center items-center relative px-6 overflow-hidden">
            {/* Availability Status - HUD Redesign */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-8 md:top-20 flex flex-col items-center gap-2 pointer-events-none select-none z-20"
            >
                <div className="font-mono text-[7px] md:text-[8px] uppercase tracking-[0.8em] text-white/20">
                    Neural_Link_Status
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-px w-6 md:w-12 bg-linear-to-r from-transparent to-spark/30" />
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-spark animate-pulse shadow-[0_0_8px_#B794F4]" />
                        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-spark/80">
                            Open_for_Collaboration
                        </span>
                    </div>
                    <div className="h-px w-6 md:w-12 bg-linear-to-l from-transparent to-spark/30" />
                </div>
            </motion.div>

            {/* Surreal Background Elements */}
            <motion.div 
                className="absolute w-64 h-64 md:w-120 md:h-120 border-2 rounded-full opacity-10 md:opacity-20 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.05, 1],
                    borderColor: ["#CCFF00", "#B794F4", "#CCFF00"],
                    x: (mousePos.x - window.innerWidth / 2) * 0.05,
                    y: (mousePos.y - window.innerHeight / 2) * 0.05,
                }}
                transition={{ 
                    opacity: { duration: 4, repeat: Infinity },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    borderColor: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    x: { type: "spring", stiffness: 50, damping: 20 },
                    y: { type: "spring", stiffness: 50, damping: 20 }
                }}
                style={{ borderStyle: 'solid' }}
            />

            {/* Main Content Container */}
            <div className="z-10 text-center w-full max-w-7xl flex flex-col items-center pt-16 md:pt-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <GlitchText 
                        text="ZAID" 
                        className="font-display font-black text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] leading-[0.8] tracking-tighter"
                        colorClass="text-white"
                        revealDelay={100}
                    />
                    <GlitchText 
                        text="ZAIHAN" 
                        className="font-display font-black text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] leading-[0.8] tracking-tighter"
                        colorClass="text-white"
                        revealDelay={300}
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 md:mt-12 space-y-3"
                >
                    <p className="font-mono text-[9px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-60 animate-spark-text">
                        A Digital Organism // v2.025.0
                    </p>
                    <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
                        Full-Stack Engineer & Automation Strategist. <br className="hidden sm:block" />
                        Crafting digital systems with modern techstack.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-10 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center"
                >
                    <Link to="/void" className="group relative">
                        <FlickerText 
                            text="THE_VOID"
                            className="font-display font-bold text-lg md:text-3xl lg:text-4xl group-hover:animate-spark-text transition-colors duration-500"
                            colorClass="text-white"
                        />
                        <div className="absolute -bottom-2 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full animate-spark-bg shadow-[0_0_20px_rgba(183,148,244,0.5)]" />
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        <Link to="/transmission" className="font-mono text-[9px] md:text-xs uppercase tracking-widest text-white/40 hover:text-spark transition-colors">
                            [ Initiate_Inquiry ]
                        </Link>

                        <Link to="/narrative" className="font-mono text-[9px] md:text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                            [ Read_Logs ]
                        </Link>
                    </div>
                </motion.div>

                {/* Tech Stack Icon Tape */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="mt-16 md:mt-24 w-full max-w-2xl overflow-hidden pointer-events-none select-none"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="font-mono text-[7px] uppercase tracking-[0.4em] text-white/10">
                            Core_System_Components
                        </div>
                        <div className="w-full relative">
                            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-linear-to-r from-abyss to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-linear-to-l from-abyss to-transparent z-10" />
                            
                            <motion.div 
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="flex whitespace-nowrap gap-8 md:gap-16 px-4"
                            >
                                {[...techIcons, ...techIcons].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 opacity-20">
                                        <item.icon className="text-lg md:text-2xl text-white" />
                                        <span className="font-mono text-[6px] md:text-[7px] uppercase tracking-tighter text-white/50">{item.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Kinetic Trail Decoration */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 font-mono text-[8px] opacity-10 md:opacity-20 vertical-rl rotate-180">
                NEVER_GENERIC // ALWAYS_EVOLVING // BOLD_OR_NOTHING
            </div>
        </div>
    )
}
