import { FaGithub, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { SiCodewars, SiNestjs, SiReact, SiTensorflow, SiN8N, SiPrisma } from "react-icons/si";
import { motion } from "framer-motion";
import { GlitchText } from "../components/ui/GlitchText";

const CommunicationChannel = ({ itemMap, index }) => (
    <motion.a
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        href={itemMap.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-pulse/40 transition-all duration-500"
    >
        <div className="text-white/30 group-hover:text-pulse transition-colors text-xl">
            {itemMap.icon}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
            {itemMap.name}
        </span>
    </motion.a>
);

const OperationalNode = (props) => {
    const Icon = props.icon;
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="text-spark text-xl group-hover:scale-110 transition-transform">
                    <Icon />
                </div>
                <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] text-white/80">{props.title}</h4>
            </div>
            <p className="font-sans text-[11px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">{props.desc}</p>
        </motion.div>
    );
};

export const Transmission = () => {
    const channels = [
        { name: "GitHub", icon: <FaGithub />, link: "https://github.com/zaidzaihan" },
        { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/zaid_zaihan" },
        { name: "Codewars", icon: <SiCodewars />, link: "https://www.codewars.com/users/zaidzaihan" },
    ];

    const operations = [
        { icon: SiNestjs, title: "Neural_Orchestration", desc: "Modular backend architecture built with NestJS & Prisma ORM." },
        { icon: SiReact, title: "Synaptic_Interfaces", desc: "High-performance reactive UI using React & modern UX logic." },
        { icon: SiN8N, title: "Automated_Logic", desc: "Complex workflow optimization and AI orchestration via n8n." },
        { icon: SiTensorflow, title: "Pattern_Recognition", desc: "Neural network deployment and computer vision integration." }
    ]

    return (
        <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden bg-abyss flex items-center justify-center pt-32 lg:pt-0 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl w-full flex flex-col gap-8 lg:gap-16">
                
                {/* Protocol Header */}
                <header className="flex flex-col items-center text-center space-y-4">
                    <div className="font-mono text-[9px] uppercase tracking-[0.6em] text-spark/60">
                        Establishment_Protocol // Phase_Initial
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <GlitchText 
                            text="TRANSMISSION" 
                            className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase"
                            colorClass="text-white/10"
                        />
                        <GlitchText 
                            text="PORTAL_" 
                            className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase"
                            colorClass="text-pulse"
                            revealDelay={300}
                        />
                    </div>
                    <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em]">
                        1. Select_Service <span className="text-white/10 mx-2">→</span> 2. Initiate_Uplink <span className="text-white/10 mx-2">→</span> 3. Sync_Complete
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-20 items-stretch">
                    
                    {/* STEP 01: CORE CAPABILITIES */}
                    <div className="space-y-8 md:col-span-2 lg:col-span-1">
                        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 flex items-center justify-center lg:justify-start gap-4 mb-6">
                            <span className="text-spark font-bold">[01]</span> Select_Objective
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {operations.map((op, i) => (
                                <OperationalNode key={i} {...op} />
                            ))}
                        </div>
                    </div>

                    {/* STEP 02: UPLINK HUB */}
                    <div className="flex flex-col items-center justify-center text-center space-y-10 md:col-span-1 lg:col-span-1">
                        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 mb-2">
                            <span className="text-pulse font-bold">[02]</span> Establish_Uplink
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-8 bg-spark/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <a 
                                href="mailto:zaidzaihan7@gmail.com" 
                                className="relative block p-10 md:p-14 rounded-full border border-spark/30 bg-spark/[0.02] hover:bg-spark text-spark hover:text-abyss transition-all duration-500 shadow-[0_0_30px_rgba(183,148,244,0.1)] group-hover:shadow-[0_0_50px_rgba(183,148,244,0.3)]"
                            >
                                <FaRegEnvelope className="text-5xl md:text-6xl mb-4 mx-auto" />
                                <span className="font-display font-black text-[11px] uppercase tracking-[0.4em]">Initialize_Transmission</span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <div className="font-mono text-[9px] uppercase tracking-[0.6em] text-spark/60 flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                System_Status // Ready_for_Sync
                            </div>
                            <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest break-all">
                                zaidzaihan7@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* STEP 03: NEURAL LINKS */}
                    <div className="space-y-8 flex flex-col justify-center md:col-span-1 lg:col-span-1">
                        <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 flex items-center justify-center lg:justify-end gap-4 mb-6">
                            <span className="text-white/40 font-bold">[03]</span> Connect_Nodes
                        </div>
                        <div className="flex flex-col gap-4">
                            {channels.map((channel, i) => (
                                <CommunicationChannel key={i} itemMap={channel} index={i} />
                            ))}
                        </div>
                        
                        <div className="mt-12 lg:mt-20 pt-8 border-t border-white/5 text-center lg:text-right">
                            <div className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/10 mb-2">
                                Physical_Location // Malaysia
                            </div>
                            <div className="font-mono text-[8px] uppercase tracking-[0.5em] text-white/10">
                                © 2025 ZAID ZAIHAN
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
