import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import reactLogo from '../assets/logos/react-logo.svg';
import nextLogo from '../assets/logos/nextjs.svg';
import TailwindLogo from '../assets/logos/tailwindcss-logo.svg';
import TSLogo from '../assets/logos/typescript-logo.svg';
import PythonLogo from '../assets/logos/python.svg';
import MongoDBLogo from '../assets/logos/mongodb.svg';
import TFLogo from '../assets/logos/tensorflow.svg';

export const TechStack = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [overlayStyle, setOverlayStyle] = useState({});
    const containerRef = useRef(null);
    const tileRefs = useRef([]);

    // Update overlay position
    useEffect(() => {
        if (hoveredIndex !== null && tileRefs.current[hoveredIndex] && containerRef.current) {
            const tile = tileRefs.current[hoveredIndex];
            const container = containerRef.current;
            const tileRect = tile.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            setOverlayStyle({
                left: tileRect.left - containerRect.left,
                top: tileRect.top - containerRect.top,
                width: tileRect.width,
                height: tileRect.height,
                opacity: 1,
            });
        } else {
            setOverlayStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [hoveredIndex]);

    return (
        <div className="w-screen h-auto md:p-20 sm:pt-20 px-5 relative overflow-visible">
            <motion.h2
                className="md:text-[18vh] text-6xl font-mont font-bold mb-5 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
            >
                MODERN TECHSTACK
            </motion.h2>
            <motion.p className='text-2xl mb-4 font-mont font-semibold text-gray-400'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2
                }}>
                // Some that I seriously love.
            </motion.p>

            <div
                ref={containerRef}
                className="w-full h-full rounded-3xl grid grid-cols-12 grid-rows-2 gap-2 relative"
            >
                {/* Overlay */}
                <motion.div
                    className="absolute bg-[#023047] rounded-lg pointer-events-none z-10"
                    animate={overlayStyle}
                    initial={{ opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 1000,
                        damping: 100,
                    }}
                />

                {/* Tiles */}
                <div
                    ref={el => tileRefs.current[0] = el}
                    className="bg-white/90 md:h-80 flex items-center col-span-4 justify-center rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={reactLogo}
                        alt="React"
                        className="w-25 h-25 relative z-20"
                        animate={{ filter: hoveredIndex === 0 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>

                <div
                    ref={el => tileRefs.current[1] = el}
                    className="bg-white/90 flex items-center justify-center col-span-4 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={nextLogo}
                        alt="Next"
                        className="sm:w-50 sm:h-50 h-25 w-25 relative z-20"
                        animate={{ filter: hoveredIndex === 1 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>

                <div
                    ref={el => tileRefs.current[2] = el}
                    className="bg-white/90 flex items-center justify-center col-span-4 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={TailwindLogo}
                        alt="Tailwind"
                        className="w-25 h-25 relative z-20"
                        animate={{ filter: hoveredIndex === 2 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>

                <div
                    ref={el => tileRefs.current[3] = el}
                    className="bg-white/90 flex items-center justify-center col-span-3 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={TSLogo}
                        alt="TypeScript"
                        className="w-20 h-20 relative z-20"
                        animate={{ filter: hoveredIndex === 3 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>

                <div
                    ref={el => tileRefs.current[4] = el}
                    className="bg-white/90 flex items-center justify-center col-span-3 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={MongoDBLogo}
                        alt="MongoDB"
                        className="w-25 h-25 relative z-20"
                        animate={{ filter: hoveredIndex === 4 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>

                <div
                    ref={el => tileRefs.current[5] = el}
                    className="bg-white/90 flex items-center justify-center col-span-3 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(5)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={PythonLogo}
                        alt="Python"
                        className="w-20 h-20 relative z-20"
                        animate={{ filter: hoveredIndex === 5 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>

                <div
                    ref={el => tileRefs.current[6] = el}
                    className="bg-white/90 flex items-center justify-center col-span-3 rounded-lg relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(6)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <motion.img
                        src={TFLogo}
                        alt="TensorFlow"
                        className="w-25 h-25 relative z-20"
                        animate={{ filter: hoveredIndex === 6 ? 'invert(1) brightness(2)' : 'invert(0) brightness(1)' }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                    />
                </div>
            </div>
        </div>
    );
};
