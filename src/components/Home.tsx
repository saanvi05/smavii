import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-12 md:left-24 z-20"
      >
        <span className="text-white font-black tracking-[0.2em] text-lg md:text-xl uppercase">
          SMA<span className="text-idex-teal">VII</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute top-8 right-8 md:top-12 md:right-12 z-20"
      >
        <a
          href="#contact"
          className="group relative flex items-center gap-3 border border-white/20 bg-white/5 px-6 py-2.5 rounded-full transition-all duration-500 hover:border-white hover:bg-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer"
        >
          {/* Availability Dot (Blinking Teal for Accent) */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-idex-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-idex-teal"></span>
          </span>

          <span className="text-idex-white group-hover:text-black font-bold tracking-[0.3em] text-[10px] uppercase transition-colors duration-500">
            Contact Me
          </span>
        </a>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
          alt="Abstract Tech"
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-idex-black via-idex-black/90 to-idex-black/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative z-10"
      >
        <p className="text-idex-teal font-mono tracking-[0.5em] mb-8 text-[10px] uppercase">
          UI/UX Developer
        </p>

        <h1 className="text-5xl md:text-[7vw] font-black leading-[0.9] tracking-tighter uppercase mb-8">
          Saanvi <br />
          Smakshi <br />
          <span className="text-transparent stroke-text">Sahoo</span>
        </h1>

        <p className="max-w-lg text-white/50 text-sm md:text-base leading-relaxed font-light tracking-wide">
          Crafting user-centered digital experiences that are visually refined
          and production-ready.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <a
            href="#works"
            className="group flex items-center gap-6 cursor-none"
          >
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-idex-teal transition-all duration-500">
              <div className="w-1.5 h-1.5 bg-idex-teal rounded-full shadow-[0_0_10px_#00ffd5]"></div>
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold group-hover:translate-x-2 transition-transform">
              Explore My Works
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
