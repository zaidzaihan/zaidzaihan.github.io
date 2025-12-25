import { useState, useRef, useEffect } from "react";

// language
import Python from "../assets/logos/python.svg";
import CPP from "../assets/logos/cplusplus.svg";
import C from "../assets/logos/c.svg";
import Javascript from "../assets/logos/javascript.svg";
import Typescript from "../assets/logos/typescript-logo.svg";

// framework
import ReactLogo from "../assets/logos/react-logo.svg";
import Next from "../assets/logos/next.svg";
import FastAPI from "../assets/logos/fastapi.svg";
import Flask from "../assets/logos/flask.svg";
import NodeJS from "../assets/logos/nodedotjs.svg";

// computer vision / ML
import OPENCV from "../assets/logos/opencv.svg";
import Tensorflow from "../assets/logos/tensorflow.svg";
import Dlib from "../assets/logos/dlib.svg";

// screenshots
import ArchBtw from "../assets/archbtw.png";
import ArchBtw2 from "../assets/archbtw2.png";

const languages = [
    { name: "Python", logo: Python },
    { name: "C", logo: C },
    { name: "CPP", logo: CPP },
    { name: "JavaScript", logo: Javascript },
    { name: "TypeScript", logo: Typescript },
];

const frameworks = [
    { name: "React", logo: ReactLogo },
    { name: "NextJS", logo: Next },
    { name: "FastAPI", logo: FastAPI },
    { name: "Flask", logo: Flask },
    { name: "NodeJS", logo: NodeJS },
];

const ML = [
    { name: "OpenCV", logo: OPENCV },
    { name: "Tensorflow", logo: Tensorflow },
    { name: "Dlib", logo: Dlib },
];

export const TechStack = () => {
    const [activeSection, setActiveSection] = useState("techstack");
    const sectionRefs = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full min-h-screen px-5 lg:px-32 pb-5">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">

                {/* DESKTOP STICKY SIDEBAR */}
                <div className="hidden lg:flex flex-col gap-10 pt-[10vh] sticky top-32 h-fit">
                    {["techstack", "setup", "recent"].map((section, id) => (
                        <div
                            key={id}
                            className={`font-sans font-bold text-6xl transition-colors duration-500 ${activeSection === section
                                ? "text-[#FF5C00]"
                                : "text-black/30"
                                }`}
                        >
                            {section}
                        </div>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="pt-10 lg:pt-32">

                    {/* TECHSTACK */}
                    <section
                        id="techstack"
                        ref={(el) => (sectionRefs.current.techstack = el)}
                        className="min-h-[40vh] border-b-2 border-black/30 pt-12 lg:pt-0 lg:border-0 lg:min-h-[80vh]"
                    >
                        {/* Mobile section title */}
                        <h1 className="lg:hidden font-sans font-bold text-3xl mb-8">
                            techstack
                        </h1>

                        <div className="pb-8">
                            <h2 className="font-mono text-lg text-black/60 pb-5">
                // languages
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {languages.map((lang) => (
                                    <img
                                        key={lang.name}
                                        src={lang.logo}
                                        alt={lang.name}
                                        className="w-10 h-10 md:w-14 md:h-14"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="pb-8">
                            <h2 className="font-mono text-lg text-black/60 pb-5">
                // frameworks
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {frameworks.map((fw) => (
                                    <img
                                        key={fw.name}
                                        src={fw.logo}
                                        alt={fw.name}
                                        className="w-10 h-10 md:w-14 md:h-14"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="pb-8">
                            <h2 className="font-mono text-lg text-black/60 pb-5">
                // computer vision / ML
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {ML.map((tool) => (
                                    <img
                                        key={tool.name}
                                        src={tool.logo}
                                        alt={tool.name}
                                        className="w-10 h-10 md:w-14 md:h-14"
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SETUP */}
                    <section
                        id="setup"
                        ref={(el) => (sectionRefs.current.setup = el)}
                        className="min-h-[40vh] border-b-2 border-black/30 pt-12 lg:pt-0 lg:border-0 lg:min-h-[80vh]"
                    >
                        <h1 className="lg:hidden font-sans font-bold text-3xl mb-8">
                            setup
                        </h1>

                        <div className="font-mono text-lg leading-relaxed">
                            <p className="text-black/60">// environment</p>

                            <ul className="mt-6 space-y-2">
                                <li><strong>OS</strong> — EndeavourOS (Arch)</li>
                                <li><strong>WM</strong> — Hyprland (Wayland)</li>
                                <li><strong>Workflow</strong> — Keyboard-first</li>
                                <li><strong>Philosophy</strong> — Minimal, explicit control</li>
                            </ul>

                            <p className="mt-6 text-black/50">
                                Built for low latency interaction and distraction-free development.
                            </p>
                            <div className="flex flex-col md:flex-row mt-6 items-start gap-4">
                                <img
                                    src={ArchBtw}
                                    alt="Arch btw"
                                    className="w-full md:w-auto md:h-[30vh] object-contain"
                                />
                                <img
                                    src={ArchBtw2}
                                    alt="Arch btw 2"
                                    className="w-full md:w-auto md:h-[30vh] object-contain"
                                />
                            </div>

                        </div>
                    </section>

                    {/* RECENT */}
                    <section
                        id="recent"
                        ref={(el) => (sectionRefs.current.recent = el)}
                        className="min-h-[40vh] border-b-2 border-black/30 pt-12 lg:pt-0 lg:border-0 lg:min-h-[80vh] hidden md:block"
                    >
                        <h1 className="lg:hidden font-sans font-bold text-3xl mb-8">
                            recent
                        </h1>

                        <h2 className="font-mono text-lg text-black/60">
                            You came too early, there's no prize for early birds!
                        </h2>
                    </section>

                </div>
            </div>
        </div>
    );
};
