import { motion } from "framer-motion"
import { Bar } from "./Bar"

const FloatingCode = () => {
    const codeSnippets = [
        "const create = () => {}",
        "function build() {}",
        "=> npm run dev",
        "console.log('you've good eyes :D')",
        "<Component />",
        "git commit -m 'life'",
    ];

    return (
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none inline">
            {codeSnippets.map((snippet, i) => (
                <motion.div
                    key={i}
                    className="absolute font-mono text-2xl"
                    style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: [-20, 20],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 8,
                        delay: i * 1.5,
                        repeat: Infinity,
                        repeatDelay: 5,
                    }}
                >
                    {snippet}
                </motion.div>
            ))}
        </div>
    );
};

export const Hero = () => {
    return (
        <div className="relative w-full lg:h-screen h-3/4 lg:pt-60 pt-70">
            <FloatingCode/>
            <div className="lg:px-80 px-20 absolute z-10">
                <motion.span
                    className="font-mono lg:text-5xl text-4xl block font-medium pb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Expressing myself <span>{`thru <code>.`}</span>
                </motion.span>

                <motion.span
                    className="font-mono block lg:text-3xl text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Hi, my name is
                </motion.span>

                <motion.h1
                    className="lg:text-[18vh] text-6xl block font-mont font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    ZAID ZAIHAN
                </motion.h1>

                <motion.span
                    className="lg:text-3xl text-2xl font-mont font-semibold text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    A Computer Engineering Graduate.
                </motion.span>

            </div>

            <Bar />
        </div>
    )
}
