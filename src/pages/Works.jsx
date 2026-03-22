import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projects } from "../data/projects";
import { GlitchText } from "../components/ui/GlitchText";
import { FlickerText } from "../components/ui/FlickerText";
import { SystemImage } from "../components/ui/SystemImage";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { VscTerminal, VscDatabase, VscSearch } from "react-icons/vsc";

const IntroCard = () => (
    <div className="w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 shrink-0 relative overflow-hidden bg-void/40">
        <div className="max-w-4xl w-full space-y-12">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 text-spark/60 font-mono text-[10px] uppercase tracking-[0.5em]">
                    <VscTerminal className="animate-pulse" />
                    System_Initialization_Protocol
                </div>
                <div className="h-px w-32 bg-spark/20" />
            </div>

            <div className="space-y-6">
                <GlitchText 
                    text="ENTERING"
                    className="font-display font-black text-6xl md:text-9xl text-white/10 leading-none tracking-tighter"
                />
                <GlitchText 
                    text="THE_VOID"
                    className="font-display font-black text-6xl md:text-9xl text-spark leading-none tracking-tighter"
                    revealDelay={300}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
                {[
                    { icon: VscDatabase, label: "Archive_Status", value: "DECRYPTED" },
                    { icon: VscSearch, label: "Artifacts_Found", value: `0${projects.length}` },
                    { icon: VscTerminal, label: "Neural_Link", value: "STABLE" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="space-y-2"
                    >
                        <div className="flex items-center gap-2 text-white/20 font-mono text-[8px] uppercase tracking-widest">
                            <stat.icon /> {stat.label}
                        </div>
                        <div className="text-white/60 font-display font-black text-lg tracking-tighter uppercase">
                            {stat.value}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-mono text-[9px] text-white/20 uppercase tracking-[0.8em] pt-12"
            >
                Scroll_to_traverse_memory_stream
            </motion.div>
        </div>
    </div>
)

const ProjectCard = ({ project, index }) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 shrink-0 relative overflow-hidden">
            {/* Background Index Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none">
                <span className="font-display font-black text-[30vw] md:text-[40vw] text-white/[0.03] leading-none">
                    0{index + 1}
                </span>
            </div>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-center pt-20 lg:pt-0">
                
                {/* Visual Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute -top-6 md:-top-8 left-0 z-20 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-spark/60">
                        Object_Type // Artifact_0{index + 1}
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-void/50 backdrop-blur-sm shadow-2xl transition-all duration-700 group-hover:border-spark/40 group-hover:shadow-[0_0_60px_rgba(183,148,244,0.15)]">
                        <SystemImage 
                            src={project.photo} 
                            alt={project.name}
                            className="w-full h-full object-cover saturate-50 contrast-125 group-hover:saturate-100 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-abyss/60 via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>

                {/* Info Side */}
                <div className="flex flex-col gap-6 md:gap-10">
                    <header className="relative">
                        <div className="flex gap-4 mb-3 md:mb-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-pulse/60">
                            <span>{project.year}</span>
                            <span className="opacity-20">//</span>
                            <span className="text-white/40 text-[8px] md:text-[10px]">ID: PRJ-00{index + 1}</span>
                        </div>
                        
                        <div className="flex flex-col">
                            {project.name.split(/[\s-]/).map((word, wordIdx) => (
                                <GlitchText 
                                    key={wordIdx}
                                    text={word}
                                    className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter"
                                    colorClass="text-white group-hover:text-spark transition-colors duration-500"
                                    skipReveal={true}
                                />
                            ))}
                        </div>
                    </header>

                    <div className="relative">
                        <p className="font-sans text-base md:text-xl text-white/50 leading-relaxed max-w-lg border-l border-white/10 pl-6 md:pl-8 group-hover:border-spark/30 transition-colors duration-500">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-6 md:gap-8">
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative px-6 md:px-8 py-3 md:py-4 overflow-hidden rounded-full border border-white/10 hover:border-spark/50 transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center gap-3 font-display font-bold text-[9px] md:text-[10px] uppercase tracking-widest text-white/80 group-hover/btn:text-white">
                                EXPLORE_REPO
                                <svg className="w-3 h-3 transition-transform duration-500 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-spark opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                        </a>
                        
                        <div className="h-px flex-1 bg-white/5 hidden sm:block" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const FinalCTA = () => (
    <div className="w-screen h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 shrink-0 relative">
        <div className="text-center space-y-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-spark/40">
                Connection_Endpoint // Ready_to_Sync
            </div>
            <div className="flex flex-col items-center">
                <h2 className="font-display font-black text-5xl md:text-8xl text-white leading-[0.8] tracking-tighter text-glow uppercase">
                    READY TO
                </h2>
                <GlitchText 
                    text="COLLABORATE?"
                    className="font-display font-black text-5xl md:text-8xl tracking-tighter uppercase"
                    colorClass="text-spark"
                    skipReveal={true}
                />
            </div>
            <Link 
                to="/transmission"
                className="inline-block px-12 py-6 rounded-full bg-spark text-abyss font-display font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(183,148,244,0.4)] transition-all scale-105 hover:scale-110 active:scale-95"
            >
                INITIATE_INQUIRY
            </Link>
        </div>
    </div>
)

// Mobile Vertical Layout
const MobileProjects = () => {
    return (
        <div className="w-full flex flex-col gap-16 py-20 px-6">
            {/* Mobile Story Header */}
            <div className="space-y-2 mb-4">
                <div className="font-mono text-[8px] uppercase tracking-[0.5em] text-spark">Archive_Initialization...</div>
                <h1 className="font-display font-black text-5xl text-white tracking-tighter">THE_VOID</h1>
                <p className="font-sans text-xs text-white/30 uppercase tracking-widest">Neural_Artifact_Count: 0{projects.length}</p>
            </div>

            {projects.map((project, idx) => (
                <div key={idx} className="flex flex-col gap-8">
                    {/* Visual */}
                    <div className="relative group">
                        <div className="absolute -top-6 left-0 z-20 font-mono text-[8px] uppercase tracking-[0.4em] text-spark/60">
                            0{idx + 1} // Artifact
                        </div>
                        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                            <SystemImage src={project.photo} alt={project.name} className="w-full h-full object-cover saturate-50 contrast-125" />
                            <div className="absolute inset-0 bg-linear-to-t from-abyss/60 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-6">
                        <header>
                            <div className="flex gap-4 mb-2 font-mono text-[8px] uppercase tracking-[0.3em] text-pulse/60">
                                <span>{project.year}</span>
                                <span className="opacity-20">//</span>
                                <span className="text-white/40">ID: PRJ-00{idx + 1}</span>
                            </div>
                            <div className="flex flex-col">
                                {project.name.split(/[\s-]/).map((word, wordIdx) => (
                                    <GlitchText 
                                        key={wordIdx}
                                        text={word}
                                        className="font-display font-black text-4xl leading-[0.85] tracking-tighter"
                                        colorClass="text-white"
                                        skipReveal={true}
                                    />
                                ))}
                            </div>
                        </header>
                        <p className="font-sans text-base text-white/50 leading-relaxed border-l border-white/10 pl-6">
                            {project.description}
                        </p>
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center py-4 rounded-full border border-white/10 font-display font-bold text-[9px] uppercase tracking-widest text-white/80"
                        >
                            EXPLORE_REPO
                        </a>
                    </div>
                </div>
            ))}

            {/* Mobile Concluding CTA */}
            <div className="pt-12 pb-24 text-center border-t border-white/5">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="font-display font-black text-3xl text-white tracking-tighter uppercase">
                        READY TO
                    </h2>
                    <GlitchText 
                        text="COLLABORATE?"
                        className="font-display font-black text-3xl tracking-tighter uppercase"
                        colorClass="text-spark"
                        skipReveal={true}
                    />
                </div>
                <Link 
                    to="/transmission"
                    className="inline-block px-10 py-4 rounded-full bg-spark text-abyss font-display font-bold text-[10px] uppercase tracking-widest"
                >
                    INITIATE_INQUIRY
                </Link>
            </div>
        </div>
    )
}

export const Void = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Horizontal mapping for desktop - including Intro + Projects + Final CTA
    const totalPanels = projects.length + 2; // Intro + N Projects + CTA
    const x = useTransform(smoothProgress, [0, 1], ["0vw", `-${(totalPanels - 1) * 100}vw`]);

    return (
        <div 
            ref={containerRef} 
            className="relative bg-abyss" 
            style={{ height: `auto` }}
        >
            {/* Desktop Horizontal Scroll */}
            <div className="hidden lg:block" style={{ height: `${totalPanels * 100}vh` }}>
                <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center bg-[radial-gradient(circle_at_50%_50%,rgba(183,148,244,0.03),transparent_70%)]">
                    <motion.div 
                        style={{ x }}
                        className="flex h-full items-center will-change-transform"
                    >
                        <IntroCard />
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} index={idx} />
                        ))}
                        <FinalCTA />
                    </motion.div>
                </div>

                {/* Depth Progress Marker - Desktop Only */}
                <div className="fixed left-6 md:left-12 bottom-12 z-50 flex flex-col items-center gap-6">
                    <div className="h-32 w-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div 
                            style={{ 
                                height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                                backgroundColor: "#B794F4",
                                boxShadow: "0 0 15px #B794F4"
                            }}
                            className="w-full origin-top"
                        />
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/30 vertical-rl">
                        Neural_Memory_Stream
                    </div>
                </div>
            </div>

            {/* Mobile Vertical Layout */}
            <div className="lg:hidden">
                <MobileProjects />
            </div>

            {/* Navigation Hint - Desktop Only */}
            <motion.div 
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                className="fixed bottom-12 right-12 z-50 hidden lg:flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-widest"
            >
                <span>Initialize_Traverse</span>
                <div className="w-8 h-[1px] bg-white/20 animate-pulse" />
            </motion.div>
        </div>
    )
}
