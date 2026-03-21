import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowLogo from "../assets/arrow_right.svg?react";
import { projects } from "../data/projects";

/* animation variants */
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const item = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

export const Projects = () => {
    return (
        <div className="w-full min-h-screen pt-24 md:pt-32 px-5 lg:px-32 flex flex-col">
            {/* top section */}
            <motion.div variants={container} initial="hidden" animate="show" className="pb-14">
                <motion.h1 variants={item} className="font-sans text-3xl md:text-4xl lg:text-6xl font-bold leading-loose ">
                    // welcome to my lab
                </motion.h1>
                <motion.p variants={item} className="text-black/60 font-mono text-sm md:text-lg">
                    This is the place where I share my side project that I've been working on.
                </motion.p>
            </motion.div>
            
            {/* projects container with stagger effect */}
            <motion.div variants={container} initial="hidden" animate="show">
                {projects.map((project, idx) => (
                    <div key={idx} className="grid grid-cols-[2fr_4fr] gap-2 pb-[10vh]">
                        <motion.div variants={item} className="pt-5">
                            <div className="font-bold text-lg md:text-2xl leading-loose font-sans">
                                {project.name}
                            </div>
                            <p className="font-mono text-sm md:text-lg text-black/60">{project.year}</p>
                        </motion.div>
                        
                        <motion.div variants={item} className="w-full h-full">
                            <div className="h-full w-full relative pb-10 md:pr-20">
                                {/* Foreground card */}
                                <div className="shadow-md rounded-3xl p-5 backdrop-blur-md w-full h-full grid grid-rows-[2fr_1fr] relative">
                                    <a 
                                        className="w-8 h-8 md:w-16 md:h-16 absolute right-2 top-2 hover:scale-110 transition-transform" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        href={project.link}
                                        aria-label={`View ${project.name} project`}
                                    >
                                        <ArrowLogo className="w-8 h-8 md:w-16 md:h-16" />
                                    </a>
                                    <div className="h-[32vh]"></div>
                                    <div className="text-sm md:text-xl text-black/60 font-mono">
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        </motion.div>                        
                    </div>
                ))}
            </motion.div>
        </div>
    )
};