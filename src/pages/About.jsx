import { motion } from "framer-motion"
import { GlitchText } from "../components/ui/GlitchText"
import { Link } from "react-router-dom"

export const Narrative = () => {
    return (
        <div className="w-full min-h-screen bg-abyss pt-24 md:pt-48 pb-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Clean Header */}
                <header className="mb-16 md:mb-32 border-b border-white/5 pb-12 text-center md:text-left">
                    <GlitchText 
                        text="ABOUT" 
                        className="font-display font-black text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] leading-none tracking-tighter"
                        colorClass="text-white"
                        revealDelay={100}
                    />
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 font-mono text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/30"
                    >
                        ZAID ZAIHAN // KUALA LUMPUR, MALAYSIA
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Direct Bio */}
                    <motion.section 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="space-y-8 md:space-y-12"
                    >
                        <p className="font-sans text-2xl sm:text-3xl md:text-5xl text-white leading-tight font-medium">
                            I build digital products with a focus on <span className="text-spark">clarity</span>, performance, and user-centric design.
                        </p>
                        
                        <div className="space-y-6 md:space-y-8 font-sans text-lg md:text-xl text-white/50 leading-relaxed max-w-xl">
                            <p>
                                I'm a full-stack engineer and automation strategist, exploring the intersection of web architecture and machine perception. I believe the best tools are those that feel invisible and intuitive.
                            </p>
                            <p>
                                My work ranges from crafting robust backend systems with NestJS and Prisma, to building dynamic front-ends with React, and orchestrating complex workflows using n8n.
                            </p>
                        </div>
                    </motion.section>

                    {/* Modular Info */}
                    <motion.section 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12"
                    >
                        <div className="space-y-4">
                            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/20">Focus_Area</h3>
                            <ul className="space-y-2 font-display text-base md:text-lg text-white/80">
                                <li>Backend (NestJS, Prisma)</li>
                                <li>Frontend (React, Tailwind)</li>
                                <li>AI & Automation (n8n)</li>
                                <li>Data Orchestration</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/20">Status</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <p className="font-display text-base md:text-lg text-white/80 leading-snug">
                                    Open for inquiries and collaborations.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/20">Values</h3>
                            <ul className="space-y-2 font-display text-base md:text-lg text-white/80">
                                <li>Performance first</li>
                                <li>Simplicity over noise</li>
                                <li>User-centered logic</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/20">Action</h3>
                            <Link 
                                to="/transmission" 
                                className="group inline-flex items-center gap-4 font-display text-base md:text-lg text-spark hover:text-white transition-colors"
                            >
                                INITIATE_INQUIRY
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.section>
                </div>

                {/* Work With Me Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 md:mt-48 p-8 md:p-16 rounded-3xl border border-spark/20 bg-spark/2 flex flex-col items-center text-center gap-8 md:gap-10"
                >
                    <div className="space-y-4">
                        <h2 className="font-display font-black text-3xl md:text-6xl text-white tracking-tighter">
                            LET'S BUILD THE <span className="text-spark italic">FUTURE</span>.
                        </h2>
                        <p className="font-sans text-lg md:text-2xl text-white/40 max-w-2xl mx-auto">
                            Whether you need robust backend APIs, intuitive front-ends, or intelligent automation workflows, I'm here to help.
                        </p>
                    </div>
                    <Link 
                        to="/transmission"
                        className="w-full sm:w-auto px-12 py-6 rounded-full bg-white text-abyss font-display font-black text-sm uppercase tracking-widest hover:bg-spark transition-colors text-center"
                    >
                        START_CONVERSATION
                    </Link>
                </motion.section>

                {/* Subtle Footer Accent */}
                <footer className="mt-32 md:mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/10">
                        Built with React & Framer Motion
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-white/10">
                        © 2025 Zaid Zaihan
                    </div>
                </footer>
            </div>
        </div>
    )
}
