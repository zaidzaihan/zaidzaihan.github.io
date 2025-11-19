import { motion } from "framer-motion";
import { useState } from "react";
import { Projects } from "./Projects";

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tab = [
        {
            name: "About Me",
            content: (
                <div className="max-w-3xl mx-auto font-mono leading-relaxed lg:text-xl text-md overflow-y-auto h-full px-8">
                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Hi, I'm <motion.span
                            className="font-bold text-cyan-300"
                            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(103 232 249)" }}
                        >Zaid</motion.span> — a computer engineering graduate who expresses himself through <motion.span
                            className="italic text-purple-300"
                            whileHover={{ scale: 1.05 }}
                        >code</motion.span>.
                    </motion.p>

                    <motion.p
                        className="mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        I like building things that feel <motion.span
                            className="font-semibold text-green-300"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >alive</motion.span> — from interactive UIs to embedded systems and computer vision projects.
                        I enjoy mixing engineering logic with creativity, animations, and visual experiences.
                    </motion.p>

                    <motion.div
                        className="mb-6 p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ borderColor: "rgba(251, 191, 36, 0.8)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                        <p>
                            I grew up curious, always making little science projects and breaking things just to understand how they worked.
                            That curiosity still drives me today.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Right now, I'm exploring{" "}
                        {["creative coding", "frontend animations", "machine learning", "fun experiments"].map((item, i) => (
                            <motion.span
                                key={i}
                                className="inline-block mx-1 px-2 py-1 bg-white/10 rounded text-sm"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    y: -2
                                }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                        {" "}— anything that lets me express ideas through technology.
                    </motion.p>
                </div>
            )
        },
        {
            name: "Projects",
            content: (<Projects />)
        }

    ]


    return (
        <div className="w-full sm:h-screen mt-60 pt-40 sm:p-20 p-5 pb-20 relative" id="about-me">
            <motion.h2
                className="lg:text-9xl text-6xl font-mont font-bold mb-5 leading-tight tracking-tight absolute left-1/2 -translate-x-1/2 top-1/2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                viewport={{once: true}}
            >
                // {tab[activeTab].name.toUpperCase()}
            </motion.h2>
            <motion.div
                className="relative w-full h-full lg:px-60"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Tab - top left */}
                <div className="w-full left-0 flex gap-1 overflow-hidden">
                    {tab.map((btn, index) => {
                        return (
                            <button className={`md:w-48 w-40 h-15 font-mont font-bold text-xl rounded-t-3xl focus:outline-none focus: ring-0 cursor-pointer transition ease-in-out ${activeTab === index ? "bg-white/20 translate-y-0" : "bg-white/10 translate-y-4"}`} onClick={() => setActiveTab(index)} key={index}>
                                {btn.name}
                            </button>
                        )
                    })}
                </div>

                {/* Folder body */}
                <div className="w-full h-full bg-white/20 backdrop-blur-sm border-white/20 rounded-3xl rounded-tl-none flex justify-center items-center relative p-3">
                    <div className="absolute right-10 md:top-10 top-8 flex gap-1">
                        <div className="w-5 h-5 rounded-full bg-black/40"></div>
                        <div className="w-5 h-5 rounded-full bg-black/40"></div>
                        <div className="w-5 h-5 rounded-full bg-black/40"></div>
                    </div>
                    <div className="w-full h-full bg-[#023047]/80 pt-10 rounded-2xl">
                        {tab[activeTab].content}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
