import { motion } from "framer-motion";
import { GlitchText } from "../components/ui/GlitchText";
import { SystemImage } from "../components/ui/SystemImage";
import { useState, useEffect } from "react";

// Local Assets
import VaundyImg from "../assets/vaundy_yuukai_sink.webp";
import YorushikaImg from "../assets/yorushika_martian.webp";
import FujiiImg from "../assets/fujiikazee_hana.webp";

const tracks = [
  { 
    rank: "01", 
    artist: "VAUNDY", 
    song: "Yuukai Sink", 
    album: "replica", 
    year: "2021", 
    tags: ["J-POP", "ALTERNATIVE"], 
    image: VaundyImg 
  },
  { 
    rank: "02", 
    artist: "YORUSHIKA", 
    song: "Martian", 
    album: "Nininshou", 
    year: "2025", 
    tags: ["J-POP", "ROCK"], 
    image: YorushikaImg 
  },
  { 
    rank: "03", 
    artist: "FUJII KAZE", 
    song: "Hana", 
    album: "Prema", 
    year: "2023", 
    tags: ["J-POP", "R&B"], 
    image: FujiiImg 
  },
];

const WaveformBar = ({ index, isHovered }) => {
  const [height, setHeight] = useState(15);

  useEffect(() => {
    if (!isHovered) {
      setHeight(15);
      return;
    }

    const speed = 50 + (index * 8);
    const interval = setInterval(() => {
      setHeight(Math.floor(Math.random() * 70) + 15);
    }, speed);
    return () => clearInterval(interval);
  }, [isHovered, index]);

  return (
    <motion.div
      animate={{ height }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`w-2px md:w-[3px] bg-linear-to-t from-pulse to-spark rounded-full transition-opacity duration-300 ${
        isHovered ? "opacity-80" : "opacity-30"
      }`}
    />
  );
};

const TrackCard = ({ rank, artist, song, album, year, tags, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered(!isHovered)}
      className="relative bg-white/2 border border-white/5 p-4 md:p-5 space-y-3 hover:border-spark/30 hover:bg-white/4 transition-all duration-300 group cursor-pointer"
    >
      <div className="absolute top-4 right-4 font-mono text-[8px] md:text-[9px] text-white/20">// {rank}</div>

      {/* Album art block */}
      <div className="relative aspect-square w-full overflow-hidden border border-white/5 bg-void/50 transition-all duration-500 flex items-center justify-center">
        <SystemImage 
            src={image} 
            alt={song} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 saturate-50 group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-abyss via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-white/2 mix-blend-overlay blur-[1px] pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="text-4xl text-white/20 select-none">◈</span>
        </div>
      </div>

      {/* Waveform strip */}
      <div
        className="flex items-end gap-0.5 h-8 md:h-10 overflow-hidden transition-all duration-300"
        style={{ filter: isHovered ? "drop-shadow(0 0 6px rgba(255,100,255,0.4))" : "none" }}
      >
        {[...Array(16)].map((_, i) => (
          <WaveformBar key={i} index={i} isHovered={isHovered} />
        ))}
      </div>

      {/* Track metadata */}
      <div className="space-y-1">
        <div className="font-display font-black text-sm md:text-base text-white leading-tight uppercase tracking-tighter">{song}</div>
        <div className="font-mono text-[9px] md:text-[10px] text-spark/70 uppercase tracking-widest">▸ {artist}</div>
        <div className="font-mono text-[8px] md:text-[9px] text-white/20">{album} / {year}</div>
      </div>

      {/* Tag pills */}
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="font-mono text-[7px] md:text-[8px] border border-white/10 px-2 py-0.5 text-white/30">
            [{tag}]
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Rhythm = () => {
  return (
    <div className="w-full min-h-screen bg-abyss relative overflow-x-hidden px-6 pt-32 pb-24 flex flex-col items-center justify-center">
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

      <div className="max-w-5xl w-full z-10 space-y-12 md:space-y-16">
        <header className="space-y-6 text-center flex flex-col items-center">
          <div className="space-y-2">
            <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.8em] text-spark/60">
              Personal_Picks // Top_3_Soundtracks
            </div>
            <GlitchText
              text="NOW PLAYING"
              className="font-display font-black text-6xl sm:text-7xl md:text-9xl text-white tracking-tighter"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 border border-spark/20 px-4 py-1.5 rounded-full bg-void/50">
            <div className="w-1.5 h-1.5 rounded-full bg-spark animate-pulse shadow-[0_0_8px_#B794F4]" />
            <span className="font-mono text-[9px] md:text-[10px] text-spark/60 uppercase tracking-widest">Transmission Active</span>
          </div>
        </header>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {tracks.map((track, i) => (
            <TrackCard key={track.rank} {...track} index={i} />
          ))}
        </div>

        {/* Stats Row */}
        <div className="border-t border-white/5 pt-8 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-left">
            {[
              { value: "03", label: "Total_Tracks" },
              { value: "MELANCHOLIC", label: "Mood_Index" },
              { value: "MAR // 2025", label: "Last_Updated" },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-1.5">
                <div className="font-display font-black text-2xl md:text-3xl text-white tracking-tighter">{value}</div>
                <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-white/20">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perspective HUD */}
      <div className="fixed bottom-12 left-12 font-mono text-[8px] uppercase tracking-[0.5em] text-white/20 vertical-rl rotate-180 pointer-events-none select-none hidden md:block">
        Music_Curation // v2.025
      </div>
    </div>
  );
};
