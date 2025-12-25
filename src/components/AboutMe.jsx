import { FaInstagram, FaGithub, FaRegEnvelope } from "react-icons/fa"
import { SiCodewars } from "react-icons/si"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const AboutMe = () => {

    const IconTag = ({ href, label, children }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-black/10 px-5 py-3
               hover:bg-black hover:text-white transition-colors duration-300"
        >
            {children}
            <span className="font-mono text-sm opacity-70 group-hover:opacity-100">
                {label}
            </span>
        </a>
    );

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

    return (
        <div className="w-full h-screen relative flex items-center justify-center">
            <div className="gap-5 px-5">
                <div>
                    <motion.div variants={container} initial="hidden" animate="show" className="pb-5">
                        <motion.div variants={item} className="font-sans text-3xl md:text-6xl font-bold pb-5">Hi, It's <span className="text-[#FF5C00]">Zaid.</span></motion.div>
                        <motion.p variants={item} className="font-mono text-sm md:text-lg text-black/80">A 23 years old Computer Engineering graduate from Universiti Teknikal Malaysia, Melaka.</motion.p>
                        <motion.p variants={item} className="font-mono text-sm md:text-lg text-black/80">I'm someone who's always curious about how everyday things works and the design philosophy behind them. </motion.p>
                        <motion.p variants={item} className="font-mono text-sm md:text-lg text-black/80">I love trying new things, novelty is always a thing when you see me.</motion.p>
                        <motion.p variants={item} className="font-mono text-sm md:text-lg text-black/80">Feel free to reach out to me, maybe we can create things together!</motion.p>
                    </motion.div>
                    <div className="flex gap-5">
                        <div className="flex flex-wrap gap-4">
                            <IconTag href="mailto:zaidzaihan7@gmail.com" label="email">
                                <FaRegEnvelope className="w-6 h-6" />
                            </IconTag>

                            <IconTag href="https://github.com/zaidzaihan" label="github">
                                <FaGithub className="w-6 h-6" />
                            </IconTag>

                            <IconTag href="https://instagram.com/zaid_zaihan" label="instagram">
                                <FaInstagram className="w-6 h-6" />
                            </IconTag>

                            <IconTag href="https://www.codewars.com/users/zaidzaihan" label="codewars">
                                <SiCodewars className="w-6 h-6" />
                            </IconTag>
                            <Link to="/tech">
                                <div className="group flex items-center gap-3 rounded-full border border-black/10 px-5 py-3 hover:bg-black hover:text-white transition-colors duration-300">
                                    <span className="font-mono text-sm opacity-70 group-hover:opacity-100">
                                        my techstack
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}