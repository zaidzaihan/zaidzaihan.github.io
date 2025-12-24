import techImg from "../assets/tech.jpg";
import vaundy from "../assets/vaundy.jpg";
import random from "../assets/random.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export const Personal = () => {
    return (
        <div className="w-full min-h-screen px-5 lg:px-32">
            <motion.div variants={container} initial="hidden" animate="show" className="pt-24 lg:pt-32">
                <motion.h1 variants={item} className="font-sans text-3xl md:text-4xl lg:text-6xl font-bold leading-loose">// personal space</motion.h1>
                <motion.p variants={item} className="text-lg font-mono text-black/60 pb-10">Wait, you weren't supposed to be here!</motion.p>
            </motion.div>
            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-rows-3 lg:grid-cols-3 gap-5">
                <motion.div variants={item} className="h-[60vh] w-auto relative group overflow-hidden">
                    <Link to="/tech">
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-120"
                            src={techImg}
                            alt="tech"
                        />
                        <div className="absolute inset-0 bg-black/20 md:backdrop-blur-md md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center will-change-transform">
                            <span
                                className="text-3xl font-bold text-white mix-blend-screen"
                            >
                                tech
                            </span>
                        </div>
                    </Link>
                </motion.div>
                <motion.div variants={item} className="h-[60vh] w-auto relative group overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-120"
                        src={vaundy}
                        alt="music"
                    />
                    <div className="absolute inset-0 bg-black/20 md:backdrop-blur-md md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center will-change-transform">
                        <span
                            className="text-3xl font-bold text-white mix-blend-screen"
                        >
                            music
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={item} className="h-[60vh] w-auto relative group overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-120"
                        src={random}
                        alt="random"
                    />
                    <div className="absolute inset-0 bg-black/20 md:backdrop-blur-md md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center will-change-transform">
                        <span
                            className="text-3xl font-bold text-white mix-blend-screen"
                        >
                            random
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}