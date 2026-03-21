import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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

export const Hero = () => {
    return (
        <motion.div
            className="w-full min-h-dvh flex flex-col justify-center items-center relative px-5"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="-translate-y-10 sm:-translate-y-12 md:-translate-y-6">
                {/* heading */}
                <motion.h1 variants={item} className="pb-5">
                    <span className="block font-sans font-bold text-3xl md:text-6xl">
                        expressing <span className="text-[#FF5C00]">myself,</span>
                    </span>
                    <span className="block text-right text-lg md:text-2xl pr-5">
                        with code.
                    </span>
                </motion.h1>

                {/* description */}
                <motion.p
                    variants={item}
                    className="font-mono text-sm md:text-lg text-black/60 pb-10"
                >
                    A software engineer based in <br className="md:hidden" /> Perak, Malaysia
                    <br />
                    Hi, let's connect!
                </motion.p>

                {/* buttons */}
                <motion.div variants={item} className="flex gap-5">
                    <Link to="/about-me">
                        <div className="shadow-md w-36 h-12 rounded-full flex items-center justify-center font-sans font-semibold hover:-translate-y-0.5 transition-transform">
                            About Me
                        </div>
                    </Link>

                    <Link to="/projects">
                        <div className="shadow-md w-36 h-12 rounded-full flex items-center justify-center font-semibold hover:-translate-y-0.5 transition-transform">
                            Projects
                        </div>
                    </Link>
                </motion.div>
            </div>
            <div className="absolute bottom-[env(safe-area-inset-bottom)] pb-3 text-sm text-black/60">© 2025 Zaid Zaihan</div>
        </motion.div>
    )
}
