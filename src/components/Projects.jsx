import { useState, useEffect } from "react";
import { motion, AnimatePresence, time } from "framer-motion";
import { Tag } from "./Tags";

const ProjectName = [
    {
        name: "OpenKaraoke",
        tags: [
            "Web Development",
            "Real-time Web",
            "Multimedia",
            "FastAPI",
            "Next.js",
            "WebSockets",
            "Python"
        ],
        content: (
            <div>
                <p className="pb-5">
                    OpenKaraoke is a self-hosted karaoke machine web-app designed to run on any old laptop or smart TV.
                    Users scan a QR code → open the mobile web app → browse songs → queue them → and it automatically plays on the host display.
                </p>
                <p className="pb-2 font-semibold">Integrated Features:</p>
                <ul className="list-decimal pl-10">
                    <li>YouTube-based search using the <a href="https://pypi.org/project/youtube-search/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline transition-colors">youtube-search</a> Python library.</li>
                    <li>Keyword-filtered top 10 results (e.g., karaoke, minus one).</li>
                    <li>Real-time room control: queue, play, pause, skip, rating & comments.</li>
                </ul>
            </div>
        ),
    },

    {
        name: "Drowsiness Detection System",
        tags: [
            "Computer Vision",
            "Machine Learning",
            "Embedded Systems",
            "TensorFlow Lite",
            "OpenCV",
            "Dlib",
            "Raspberry Pi",
            "React Native"
        ],
        content: (
            <div>
                <p className="pb-5">
                    A real-time driver drowsiness detection system using facial landmarks and CNN-based models optimized with TensorFlow Lite.
                    Designed for deployment on Raspberry Pi with a companion mobile app built in React Native (Expo).
                </p>
                <p className="pb-2 font-semibold">Core Features:</p>
                <ul className="list-decimal pl-10">
                    <li>Blink and yawn detection using OpenCV + Dlib (EAR/MAR).</li>
                    <li>CNN-based fatigue classification optimized with TensorFlow Lite.</li>
                    <li>Real-time Pi deployment with alert mechanisms.</li>
                    <li>Mobile app interface for monitoring and logs (React Native).</li>
                </ul>
            </div>
        )
    },

    {
        name: "Plant Disease Detection App",
        tags: [
            "Machine Learning",
            "Computer Vision",
            "TensorFlow",
            "Streamlit",
            "Agriculture"
        ],
        content: (
            <div>
                <p className="pb-5">
                    A deep learning application that identifies plant diseases from images using a CNN classifier.
                    Built with an interactive web interface using Streamlit for easy use by farmers and agriculture students.
                </p>
                <p className="pb-2 font-semibold">Key Features:</p>
                <ul className="list-decimal pl-10">
                    <li>CNN-based classification using TensorFlow.</li>
                    <li>Image preprocessing pipeline using OpenCV.</li>
                    <li>User-friendly Streamlit dashboard for prediction.</li>
                </ul>
            </div>
        )
    },

    {
        name: "Smart Vertical Farming (IoT)",
        tags: [
            "IoT",
            "Embedded Systems",
            "Blynk",
            "Arduino",
            "React Native",
            "Automation"
        ],
        content: (
            <div>
                <p className="pb-5">
                    An IoT system for automating and monitoring plant growth, including water pumps, UV lighting, and a catfish feeding system.
                    Controlled via Blynk and a React Native mobile app.
                </p>
                <p className="pb-2 font-semibold">System Capabilities:</p>
                <ul className="list-decimal pl-10">
                    <li>Real-time monitoring of farming environment.</li>
                    <li>Automated crop care (watering, lighting, feeding).</li>
                    <li>Blynk dashboard + React Native (Expo) companion app.</li>
                </ul>
            </div>
        )
    },

    {
        name: "Visitor Management System (VMS)",
        tags: [
            "Web Development",
            "Backend",
            "Security",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "RBAC",
            "Azure"
        ],
        content: (
            <div>
                <p className="pb-5">
                    A secure Visitor Management System designed for organizations requiring structured visitor workflow and access control.
                    Implements modern backend security patterns such as JWT authentication and role-based access control (RBAC).
                </p>
                <p className="pb-2 font-semibold">Key Features:</p>
                <ul className="list-decimal pl-10">
                    <li>JWT-secured authentication.</li>
                    <li>Role-Based Access Control (Admin, Staff, Visitor).</li>
                    <li>Cloud deployment and scaling on Azure.</li>
                    <li>MongoDB + Express.js backend architecture.</li>
                </ul>
            </div>
        )
    },
];


export const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(false);
        const timeoutId = setTimeout(() => {
            setShow(true);
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [activeProject]);


    return (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full h-full lg:px-5">
            <div className="h-full md:w-full p-5">
                <div className="font-mono sm:text-sm md:text-base pb-5">{"=> cd ~/Projects && ls"}</div>
                {ProjectName.map((project, index) => {
                    return (
                        <div key={index} className="w-full mb-2 font-mono sm:text-sm md:text-base lg:pl-5">
                            <button key={index} onClick={() => { setActiveProject(index) }} className={`text-left cursor-pointer px-2 focus:outline-none w-full focus:ring-0 transitions py-2 ${(activeProject === index) ? " bg-[#219EBC] hover:bg-[#219EBC]" : "hover:bg-[#8ECAE6]"}`}>{project.name}</button>
                        </div>
                    )
                })}
                <div className="font-mono flex gap-1 sm:text-sm md:text-base">
                    <span>{"=>"}</span>
                    {activeProject !== null ? (
                        <span className="px-1 inline-block">
                            cat {ProjectName[activeProject].name}/readme.md
                            <span className="animate-cursor font-mono">{"_"}</span>
                        </span>
                    ) : (
                        <span className="animate-cursor font-mono">{"  _"}</span>
                    )}
                </div>
            </div>
            <AnimatePresence mode="wait">
                {show && (
                    <motion.div
                        key={activeProject}
                        className="bg-transparent text-white border-white/20 shadow-2xl md:my-10 mr-5 rounded-3xl p-2 font-mono md:text-base sm:text-xs w-full min-w-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeProject !== null ? (
                            <div className="p-2">
                                {ProjectName[activeProject].content}
                                <div className="flex-wrap mb-4 mt-4 p-2 md:flex hidden">
                                    {ProjectName[activeProject].tags?.map((tag, i) => (
                                        <Tag key={i} label={tag} />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="p-2">{`Select a Project :)`}</div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
