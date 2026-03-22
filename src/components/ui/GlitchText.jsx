import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion"
import { useEffect, useState, useCallback, useRef } from "react"

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________"

const InteractiveLetter = ({ char, index, colorClass, revealDelay, isInView, skipReveal }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [displayChar, setDisplayChar] = useState(skipReveal ? char : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
    const [isGlitching, setIsGlitching] = useState(false)
    const isGlitchingRef = useRef(false)
    const hasRevealedRef = useRef(skipReveal)
    
    const springX = useSpring(x, { stiffness: 300, damping: 15 })
    const springY = useSpring(y, { stiffness: 300, damping: 15 })

    const rotate = useTransform(springX, [-100, 100], [-30, 30])

    const startGlitch = useCallback((duration = 3, finalChar = char) => {
        if (char === " ") {
            setDisplayChar(" ")
            return
        }
        setIsGlitching(true)
        isGlitchingRef.current = true
        let iterations = 0
        const interval = setInterval(() => {
            setDisplayChar(GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
            iterations++
            if (iterations > duration) {
                clearInterval(interval)
                setDisplayChar(finalChar)
                setIsGlitching(false)
                isGlitchingRef.current = false
            }
        }, 70)
    }, [char])

    // Load Decryption Animation
    useEffect(() => {
        if (isInView && !hasRevealedRef.current && !skipReveal) {
            const timeout = setTimeout(() => {
                startGlitch(10 + index)
                hasRevealedRef.current = true
            }, revealDelay + (index * 40))
            return () => clearTimeout(timeout)
        }
    }, [index, startGlitch, revealDelay, isInView, skipReveal])

    // Random Background Glitch Effect - Frequency Increased
    useEffect(() => {
        if (char === " " || !isInView) return;
        const interval = setInterval(() => {
            if (!isGlitchingRef.current && Math.random() > 0.90) {
                startGlitch(Math.floor(Math.random() * 3) + 2);
            }
        }, 1000 + Math.random() * 3000);
        return () => clearInterval(interval);
    }, [char, startGlitch, isInView]);

    return (
        <span className="relative inline-block">
            {/* Ghost character to reserve space and prevent layout shifts */}
            <span className="invisible select-none" aria-hidden="true">
                {char === " " ? "\u00A0" : char}
            </span>
            <motion.span
                style={{ x: springX, y: springY, rotate }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const centerX = rect.left + rect.width / 2
                    const centerY = rect.top + rect.height / 2
                    x.set((e.clientX - centerX) * 0.5)
                    y.set((e.clientY - centerY) * 0.5)
                    if (!isGlitching && Math.random() > 0.9) startGlitch(4)
                }}
                onMouseLeave={() => {
                    x.set(0)
                    y.set(0)
                    setDisplayChar(char)
                }}
                className={`absolute inset-0 flex items-center justify-center cursor-default transition-colors duration-100 ${isGlitching ? 'text-pulse scale-110' : colorClass}`}
            >
                {displayChar === " " ? "\u00A0" : displayChar}
            </motion.span>
        </span>
    )
}

export const GlitchText = ({ text, className = "", colorClass = "text-white", revealDelay = 100, skipReveal = false }) => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { 
        amount: 0.2,
        once: false
    })

    // Pre-calculate word offsets to avoid reassignments during render mapping
    const words = text.split(" ");
    const { result: wordsWithOffsets } = words.reduce((acc, word) => {
        acc.result.push({ word, offset: acc.offset });
        acc.offset += word.length + 1; // +1 for the space
        return acc;
    }, { result: [], offset: 0 });

    return (
        <div ref={containerRef} className={`flex flex-wrap ${className}`}>
            {wordsWithOffsets.map(({ word, offset }, wordIdx) => (
                <div key={wordIdx} className="flex whitespace-nowrap">
                    {word.split("").map((char, i) => (
                        <InteractiveLetter 
                            key={offset + i} 
                            char={char} 
                            index={offset + i} 
                            colorClass={colorClass} 
                            revealDelay={revealDelay}
                            isInView={isInView}
                            skipReveal={skipReveal}
                        />
                    ))}
                    {/* Add space after word if it's not the last one */}
                    {wordIdx < words.length - 1 && (
                        <InteractiveLetter 
                            char=" " 
                            index={offset + word.length} 
                            colorClass={colorClass} 
                            revealDelay={revealDelay}
                            isInView={isInView}
                            skipReveal={skipReveal}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
