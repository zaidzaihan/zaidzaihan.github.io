import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const FlickerText = ({ text, className = "", colorClass = "text-white" }) => {
    const [status, setStatus] = useState("on"); // "on", "off", "dim"
    const timeoutRef = useRef(null);

    useEffect(() => {
        const triggerFlicker = () => {
            // Broken bulb behavior: usually 2-3 flickers, occasionally a longer burst
            const rand = Math.random();
            let flickerCount;
            
            if (rand > 0.9) {
                flickerCount = Math.floor(Math.random() * 6) + 5; // Long aggressive burst
            } else if (rand > 0.4) {
                flickerCount = 2; // Classic double flicker
            } else {
                flickerCount = 3; // Triple flicker
            }

            let currentFlicker = 0;

            const executeFlicker = () => {
                if (currentFlicker >= flickerCount) {
                    setStatus("on");
                    // Delay until the next potential flicker event
                    const nextEventDelay = Math.random() * 4000 + 2000;
                    timeoutRef.current = setTimeout(triggerFlicker, nextEventDelay);
                    return;
                }

                // Sequence logic: ensure we actually toggle states
                // Most broken bulbs go dark or dim before snapping back
                const states = ["off", "off", "dim"];
                const nextStatus = states[Math.floor(Math.random() * states.length)];
                
                setStatus(nextStatus);
                currentFlicker++;

                // Very sharp, rapid-fire bursts (20ms to 120ms)
                const burstDelay = Math.random() * 100 + 20;
                timeoutRef.current = setTimeout(() => {
                    // Brief "on" pulse within the burst to create the flicker
                    if (currentFlicker < flickerCount) {
                        setStatus("on");
                        const pulseDuration = Math.random() * 40 + 10;
                        timeoutRef.current = setTimeout(executeFlicker, pulseDuration);
                    } else {
                        executeFlicker();
                    }
                }, burstDelay);
            };

            executeFlicker();
        };

        // Initial delay before first flicker
        timeoutRef.current = setTimeout(triggerFlicker, 2000);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const getFilter = () => {
        if (status === "off") return "brightness(0)";
        if (status === "dim") return "brightness(0.4)";
        return "brightness(1)";
    };

    const getShadow = () => {
        if (status === "on") return "0 0 15px rgba(183, 148, 244, 0.4)";
        if (status === "dim") return "0 0 5px rgba(183, 148, 244, 0.2)";
        return "none";
    };

    return (
        <motion.span
            animate={{ 
                filter: getFilter(),
                textShadow: getShadow(),
            }}
            transition={{ duration: 0 }} // Keep it instant for that sharp snap
            className={`${className} ${colorClass} will-change-filter inline-block`}
        >
            {text}
        </motion.span>
    );
};
