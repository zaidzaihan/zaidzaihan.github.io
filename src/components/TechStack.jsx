import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

//language
import Python from "../assets/logos/python.svg";
import CPP from "../assets/logos/cplusplus.svg";
import C from "../assets/logos/c.svg";
import Javascript from "../assets/logos/javascript.svg";
import Typescript from "../assets/logos/typescript-logo.svg";

//framework
import React from "../assets/logos/react-logo.svg";
import Next from "../assets/logos/next.svg";
import FastAPI from "../assets/logos/fastapi.svg";
import Flask from "../assets/logos/flask.svg";
import NodeJS from "../assets/logos/nodedotjs.svg";

//computer vision/ ML
import OPENCV from "../assets/logos/opencv.svg";
import Tensorflow from "../assets/logos/tensorflow.svg";
import Dlib from "../assets/logos/dlib.svg";

//gifs and arch screenshots
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
    { name: "React", logo: React },
    { name: "NextJS", logo: Next },
    { name: "FastAPI", logo: FastAPI },
    { name: "Flask", logo: Flask },
    { name: "NodeJS", logo: NodeJS },
]

const ML = [
    { name: "OPENCV", logo: OPENCV },
    { name: "Tensorflow", logo: Tensorflow },
    { name: "Dlib", logo: Dlib }
]


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
            if (el) {
                observer.observe(el);
            }
        });
        return () => observer.disconnect();

    }, []);
    return (
        <div className='w-full min-h-screen px-5 lg:px-32'>
            <div className='grid grid-cols-[1fr_3fr] gap-10'>
                <div className='flex flex-col justify-center gap-10 pt-[10vh] sticky top-32 h-fit'>
                    {["techstack", "setup", "recent"].map((section) => (
                        <div key={section.key} className={`font-sans font-bold text-3xl md:text-6xl ${activeSection === section ? "text-[#FF5C00]" : "text-black/30"} transition-colors duration-500`}>
                            {section}
                        </div>
                    ))}
                </div>
                <div className='pt-32'>
                    <section id="techstack" ref={(el) => (sectionRefs.current.techstack = el)} className='h-[80vh]'>
                        <div className='pb-5'>
                            <h2 className='font-mono text-lg text-black/60 pb-5'>// languages</h2>
                            <div className='flex flex-row gap-5'>
                                {languages.map((language, key) => (
                                    <img key={language.name} src={language.logo} className='w-14 h-14'></img>
                                ))}
                            </div>
                        </div>
                        <div className='pb-5'>
                            <h2 className='font-mono text-lg text-black/60 pb-5'>// frameworks</h2>
                            <div className='flex flex-row gap-5'>
                                {frameworks.map((framework, key) => (
                                    <img key={framework.name} src={framework.logo} className='w-14 h-14'></img>
                                ))}
                            </div>
                        </div>
                        <div className='pb-5'>
                            <h2 className='font-mono text-lg text-black/60 pb-5'>// Computer Vision/ ML</h2>
                            <div className='flex flex-row gap-5'>
                                {ML.map((ML, key) => (
                                    <img key={ML.name} src={ML.logo} className='w-14 h-14'></img>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section id="setup" ref={(el) => (sectionRefs.current.setup = el)} className='h-[80vh]'>
                        <div className="font-mono text-lg leading-relaxed">
                            <p className="text-black/60">// environment</p>

                            <ul className="mt-6 space-y-2">
                                <li><strong>OS</strong> — EndeavourOS (Arch)</li>
                                <li><strong>WM</strong> — Hyprland (Wayland)</li>
                                <li><strong>Workflow</strong> — Keyboard-first</li>
                                <li><strong>Philosophy</strong> — Minimal, explicit control</li>
                            </ul>

                            <p className="mt-6 text-black/50">
                                Built for low latency interaction and
                                distraction-free development.
                            </p>
                            <div className='flex gap-5'>
                                <img src={ArchBtw} alt="Arch btw" className='h-[30vh]' />
                                <img src={ArchBtw2} alt="Arch btw 2" className='h-[30vh]' />
                            </div>
                        </div>

                    </section>
                    <section id="recent" ref={(el) => (sectionRefs.current.recent = el)} className='h-[80vh]'>
                        <h2 className='font-mono text-lg text-black/60 pb-5'>You came to early, there's no prize for earlybird!</h2>
                    </section>
                </div>
            </div>
        </div>
    )
}
