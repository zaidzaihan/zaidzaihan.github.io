import { motion, AnimatePresence } from "framer-motion";
import { GlitchText } from "../components/ui/GlitchText";
import { useState } from "react";

const entries = [
  {
    id: "#0001",
    type: "HACK",
    status: "LIVE",
    title: "Netflix Mobile on a TV Screen",
    subtitle: "Bypassing Restrictions via Raspberry Pi 4B + Android",
    body: "Netflix mobile plan officially blocks TV and casting. Sidestepped it entirely by turning a Raspberry Pi 4B into an Android device using KostakAng — a non-TV Android build. Flashed Widevine L3 manually, rooted with Magisk, pushed GApps, and Netflix runs clean.",
    details: "The core challenge was the DRM protection. By using a non-TV build of Android, the app recognizes the device as a handheld tablet rather than a TV box. This bypasses the 'No TV' restriction of the cheaper mobile plans. Manual Widevine L3 injection was necessary to ensure the app didn't crash on boot.",
    tags: ["netflix", "raspberry-pi", "android", "drm", "rooting"],
    stack: ["Raspberry Pi 4B", "KostakAng", "Widevine L3", "Magisk", "GApps"],
    link: "https://konstakang.com/devices/rpi4/LineageOS22/",
    date: "MAR // 2025",
    signal: 4,
  },
];

const SignalMeter = ({ strength }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i} 
        className={`w-2 h-2 ${i < strength ? 'bg-spark/40' : 'bg-white/10'}`} 
      />
    ))}
  </div>
);

const TypeBadge = ({ type }) => {
  const styles = {
    HACK: "text-spark/80 border-spark/30",
    TOOL: "text-green-400/80 border-green-400/30",
    PROJECT: "text-blue-400/80 border-blue-400/30",
    WORKFLOW: "text-orange-400/80 border-orange-400/30",
  };
  return (
    <span className={`font-mono text-[8px] border px-2 py-0.5 w-fit ${styles[type]}`}>
      {type}
    </span>
  );
};

const EntryCard = ({ entry, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full border border-white/5 bg-white/2 hover:border-spark/30 hover:bg-white/4 transition-all duration-300 flex flex-col md:flex-row overflow-hidden"
    >
      {/* Active Accent Border */}
      <div className={`absolute left-0 top-0 bottom-0 w-0 ${isExpanded ? 'w-1' : 'group-hover:w-0.5'} bg-spark transition-all duration-300`} />

      {/* Left Column: Metadata */}
      <div className="w-full md:w-32 shrink-0 p-4 border-b md:border-b-0 md:border-r border-white/5 flex flex-row md:flex-col justify-between items-center md:items-start space-y-0 md:space-y-4">
        <div className="flex md:flex-col items-center md:items-start gap-4 space-y-0 md:space-y-4">
          <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">{entry.id}</div>
          <TypeBadge type={entry.type} />
          <div className="font-mono text-[8px] flex items-center gap-1.5">
            <div className={`w-1 h-1 rounded-full ${entry.status === 'LIVE' ? 'bg-green-400 animate-pulse' : entry.status === 'WIP' ? 'bg-yellow-400' : 'bg-white/20'}`} />
            <span className={entry.status === 'LIVE' ? 'text-green-400/60' : entry.status === 'WIP' ? 'text-yellow-400/60' : 'text-white/20'}>
              {entry.status}
            </span>
          </div>
        </div>
        <div className="font-mono text-[8px] text-white/20 uppercase tracking-widest">
          {entry.date}
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 p-4 md:p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="font-display font-black text-lg md:text-xl text-white leading-tight uppercase">
            {entry.title}
          </h3>
          <div className="font-mono text-[10px] text-spark/60 uppercase tracking-wider">
            {entry.subtitle}
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-sans text-sm text-white/50 leading-relaxed max-w-2xl">
            {entry.body}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">// Technical_Deep_Dive</div>
                  <p className="font-sans text-sm text-white/40 leading-relaxed italic">
                    {entry.details}
                  </p>
                  {entry.link && (
                    <a 
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-[10px] text-spark border border-spark/20 px-4 py-2 hover:bg-spark hover:text-abyss transition-all"
                    >
                      OPEN_RESOURCE ›
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex gap-2 flex-wrap">
            {entry.stack.map((s, i) => (
              <span key={i} className="font-mono text-[8px] text-white/30 bg-white/3 border border-white/10 px-2 py-0.5 whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {entry.tags.map((tag, i) => (
              <span key={i} className="font-mono text-[8px] text-spark/40 uppercase tracking-widest"># {tag}</span>
            ))}
          </div>
        </div>

        {/* Bottom action strip */}
        <div className="border-t border-white/5 mt-4 pt-4 flex items-center justify-between">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-mono text-[8px] text-white/40 uppercase tracking-widest hover:text-spark transition-colors"
          >
            {isExpanded ? "// collapse_entry ∧" : "// read_more ›"}
          </button>
          <SignalMeter strength={entry.signal} />
        </div>
      </div>
    </motion.div>
  );
};

export const Chaos = () => {
  const [filter, setFilter] = useState("ALL");
  const filteredEntries = filter === "ALL" 
    ? entries 
    : entries.filter(e => e.type === filter);

  const filterOptions = ["ALL", "HACK", "TOOL", "PROJECT", "WORKFLOW"];

  return (
    <div className="w-full min-h-screen bg-abyss relative overflow-x-hidden px-6 pt-32 pb-24 flex flex-col items-center">
      {/* Background Breathing Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-spark rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-pulse rounded-full"
        />
      </div>

      <div className="max-w-4xl w-full z-10 space-y-16">
        <header className="space-y-6 flex flex-col items-center text-center">
          <div className="space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.8em] text-spark/60">
              Chaos_Feed // Personal_Discoveries
            </div>
            <GlitchText
              text="CHAOS"
              className="font-display font-black text-7xl md:text-9xl text-white tracking-tighter"
            />
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 border border-spark/20 px-4 py-1 rounded-full bg-void/50">
              <div className="w-1.5 h-1.5 rounded-full bg-spark animate-pulse shadow-[0_0_8px_#B794F4]" />
              <span className="font-mono text-[10px] text-spark/60 uppercase tracking-widest">Feed Active</span>
            </div>
            <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">
              // tools · workflows · hacks · rabbit holes
            </div>
          </div>
        </header>

        {/* Filter Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 border-y border-white/5 py-6">
          {filterOptions.map(opt => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`font-mono text-[9px] uppercase border px-3 py-1.5 transition-all duration-300 ${
                filter === opt 
                  ? "border-spark/60 text-spark bg-spark/5" 
                  : "border-white/10 text-white/40 hover:text-white hover:border-spark/50"
              }`}
            >
              [ {opt} ]
            </button>
          ))}
        </div>

        {/* Entry Feed */}
        <div className="space-y-8 w-full">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry, i) => (
              <EntryCard key={entry.id} entry={entry} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* End of Feed Footer */}
        <div className="font-mono text-[9px] text-white/20 text-center py-16 border-t border-white/5 uppercase tracking-[0.4em]">
          // END OF FEED — {filteredEntries.length} ENTR{filteredEntries.length === 1 ? "Y" : "IES"} LOGGED
        </div>
      </div>

      {/* Perspective HUD */}
      <div className="fixed bottom-12 left-12 font-mono text-[8px] uppercase tracking-[0.5em] text-white/20 vertical-rl rotate-180 pointer-events-none select-none">
        Chaos_Feed // v2.025
      </div>
    </div>
  );
};
