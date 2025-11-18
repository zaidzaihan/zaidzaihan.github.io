import { motion, useScroll, useTransform } from "framer-motion";

export const Bar = () => {
    const { scrollYProgress } = useScroll();

    // Rotate from 0deg to ~12deg as you scroll
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 12]);

    return (
        <motion.div
            // Bounce animation
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute bottom-10 w-full h-30 flex justify-center items-center"
        >
            <motion.div
                style={{ rotate: rotation, transformOrigin: "left center" }}
                className="items-center gap-5 lg:w-2xl hidden lg:flex h-full bg-[#8ECAE6] text-black rounded-full p-5 shadow-md"
            >
                {/* HINGE (doesn't move) */}
                <div className="w-20 h-20 bg-amber-50 rounded-full"></div>

                {/* Moving side */}
                <div className="font-mono text-xl">
                    {"scroll down to know me :)"}
                </div>
            </motion.div>
        </motion.div>
    );
};
