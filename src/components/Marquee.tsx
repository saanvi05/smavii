import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="py-20 overflow-hidden whitespace-nowrap border-y border-white/5 bg-white/[0.02]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex"
      >
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-black uppercase text-transparent stroke-text px-10 opacity-20"
          >
            UI/UX DESIGN • FRONTEND DEVELOPMENT • PRODUCT THINKING •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
