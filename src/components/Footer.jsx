import { FaGithub, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { motion } from "framer-motion";

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

export const Footer = () => {
  const contacts = [
    {
      name: "Email",
      icon: <FaRegEnvelope className="w-8 h-8" />,
      link: "mailto:zaidzaihan7@gmail.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-8 h-8" />,
      link: "https://github.com/zaidzaihan",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-8 h-8" />,
      link: "https://instagram.com/zaid_zaihan",
    },
    {
      name: "Codewars",
      icon: <SiCodewars className="w-8 h-8" />,
      link: "https://www.codewars.com/users/zaidzaihan",
    },
  ];

  return (
    <div className="w-full min-h-screen px-5 lg:px-32">
      <div className="pt-24 md:pt-32">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item} className="font-sans md:text-4xl lg:text-6xl text-3xl font-bold leading-loose">
          // feel free to reach out
          </motion.h1>
          <motion.p variants={item} className="text-lg font-mono text-black/60 pb-16">
            thanks :)
          </motion.p>
        </motion.div>
        {/* tiles */}
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 gap-8 max-w-3xl">
          {contacts.map((itemMap) => (
            <motion.a
              variants={item}
              key={itemMap.name}
              href={itemMap.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                border rounded-2xl p-6
                flex items-center gap-6
                hover:-translate-y-1
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="text-black">{itemMap.icon}</div>
              <div>
                <p className="font-sans font-semibold text-xl">
                  {itemMap.name}
                </p>
                <p className="font-mono text-sm text-black/50">
                  open link
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
