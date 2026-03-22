import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SystemImage = ({ src, alt, className = "" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Loading State / Skeleton */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-void flex items-center justify-center z-10"
                    >
                        {/* Thematic Scanning Animation */}
                        <div className="w-full h-full relative overflow-hidden bg-white/[0.02]">
                            <motion.div 
                                animate={{ 
                                    top: ["-100%", "100%"] 
                                }}
                                transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                }}
                                className="absolute left-0 right-0 h-[2px] bg-spark/20 shadow-[0_0_15px_#B794F4] z-20"
                            />
                            {/* Technical Grid Background */}
                            <div className="absolute inset-0 opacity-[0.03]" 
                                style={{ 
                                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }} 
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Actual Image */}
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0, filter: "blur(10px) grayscale(100%)" }}
                animate={{ 
                    opacity: isLoaded ? 1 : 0, 
                    filter: isLoaded ? "blur(0px) grayscale(0%)" : "blur(10px) grayscale(100%)" 
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onLoad={() => setIsLoaded(true)}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
    );
};
