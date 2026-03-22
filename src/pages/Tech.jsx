import { motion } from "framer-motion";
import { GlitchText } from "../components/ui/GlitchText";
import { SystemImage } from "../components/ui/SystemImage";
import { 
    SiPython, SiCplusplus, SiJavascript, SiTypescript, SiRust,
    SiReact, SiNextdotjs, SiFastapi, SiNodedotjs, SiTailwindcss,
    SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn,
    SiArchlinux, SiDocker, SiPostgresql, SiMongodb, SiGit,
    SiNestjs, SiPrisma, SiN8N, SiMysql, SiLinux
} from "react-icons/si";

// screenshots (keep existing ones)
import ArchBtw from "../assets/archbtw.webp";
import ArchBtw2 from "../assets/archbtw2.webp";

const techStack = [
    {
        category: "Core_Languages",
        items: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Rust", icon: SiRust, color: "#000000" },
        ]
    },
    {
        category: "Orchestration_Tools",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "n8n", icon: SiN8N, color: "#FF5E5E" },
        ]
    },
    {
        category: "Intelligence_Systems",
        items: [
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
            { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        ]
    },
    {
        category: "Infrastructure",
        items: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Git", icon: SiGit, color: "#F05032" },
        ]
    }
];

const TechNode = ({ item, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="group relative flex flex-col items-center gap-2 p-3 md:p-4"
    >
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-spark/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon Container */}
        <div className="relative w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-xl md:rounded-2xl border border-white/5 bg-void/50 backdrop-blur-sm group-hover:border-spark/30 group-hover:shadow-[0_0_30px_rgba(183,148,244,0.1)] transition-all duration-500">
            <item.icon className="w-5 h-5 md:w-8 md:h-8 text-white/40 group-hover:text-white transition-colors duration-500" />
            
            {/* Minimalist Mastery Indicator */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-white/10 overflow-hidden rounded-full">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className="h-full bg-spark"
                />
            </div>
        </div>

        {/* Label */}
        <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-white/20 group-hover:text-spark transition-colors duration-300">
            {item.name}
        </span>
    </motion.div>
);

const TechCategory = ({ category, items }) => (
    <div className="mb-10 md:mb-20">
        <h2 className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-white/20 mb-6 md:mb-8 flex items-center gap-4">
            <span className="text-spark font-bold">//</span> {category}
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:flex md:flex-wrap gap-2 md:gap-4">
            {items.map((item, idx) => (
                <TechNode key={item.name} item={item} index={idx} />
            ))}
        </div>
    </div>
);

export const Stack = () => {
    return (
        <div className="w-full min-h-screen bg-abyss pt-24 md:pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-spark/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pulse/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-16 md:mb-32 text-center md:text-left">
                    <div className="flex flex-col">
                        <GlitchText 
                            text="SYSTEM" 
                            className="font-display font-black text-5xl sm:text-7xl md:text-9xl leading-[0.8] tracking-tighter uppercase opacity-10"
                            colorClass="text-white"
                        />
                        <GlitchText 
                            text="ARCH_STACK" 
                            className="font-display font-black text-5xl sm:text-7xl md:text-9xl leading-[0.8] tracking-tighter uppercase"
                            colorClass="text-spark"
                            revealDelay={200}
                        />
                    </div>
                    <p className="mt-6 md:mt-8 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-white/30 animate-pulse">
                        Version_2025.04 // Kernel_v6.12.10
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-24">
                    {/* LEFT: ICON GRID */}
                    <div className="space-y-4 md:space-y-8">
                        {techStack.map((category) => (
                            <TechCategory key={category.category} {...category} />
                        ))}
                    </div>

                    {/* RIGHT: SETUP/OS */}
                    <div className="space-y-12 md:space-y-16">
                        <section className="relative p-6 md:p-8 rounded-3xl border border-white/5 bg-void/30 backdrop-blur-md overflow-hidden group hover:border-spark/20 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-spark/5 blur-3xl" />
                            
                            <h3 className="font-display font-black text-lg md:text-xl text-white mb-8 uppercase tracking-tighter flex items-center gap-3">
                                <SiArchlinux className="text-spark" />
                                Operating_Environment
                            </h3>
                            
                            <div className="space-y-6 md:space-y-4 font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
                                {[
                                    { label: "Kernel", value: "EndeavourOS", sub: "6.12.10-arch1-1" },
                                    { label: "Compositor", value: "Hyprland", sub: "Wayland_V0.47" },
                                    { label: "Shell", value: "ZSH + OMP", sub: "Starship_Prompt" },
                                    { label: "Terminal", value: "Kitty", sub: "GPU_Accelerated" }
                                ].map((stat) => (
                                    <div key={stat.label} className="group/stat">
                                        <div className="flex justify-between items-center mb-1 text-white/40 group-hover/stat:text-white/60 transition-colors">
                                            <span>{stat.label}</span>
                                            <span className="text-white group-hover/stat:text-spark transition-colors text-right">{stat.value}</span>
                                        </div>
                                        <div className="h-px w-full bg-white/5 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-spark/20 -translate-x-full group-hover/stat:translate-x-0 transition-transform duration-700" />
                                        </div>
                                        <div className="text-[8px] text-white/10 mt-1">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[ArchBtw, ArchBtw2].map((img, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
                                    className="relative aspect-video sm:aspect-square rounded-2xl overflow-hidden border border-white/10 group cursor-crosshair"
                                >
                                    <SystemImage 
                                        src={img} 
                                        alt={`Arch setup ${i + 1}`} 
                                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000" 
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-abyss via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-3 left-3 font-mono text-[8px] text-white/20 group-hover:text-spark transition-colors">
                                        IMG_00{i + 1}.WEBP
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Network/Uptime Decor */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-void/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.4em] text-white/20 text-center sm:text-left">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-spark animate-pulse shadow-[0_0_8px_#B794F4]" />
                                System_Online
                            </div>
                            <div>Uptime: 14_Days_02:44:12</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
