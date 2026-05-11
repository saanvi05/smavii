import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  category: string;
  link: string;
  index: string;
  image: string;
}

const ProjectCard = ({ title, category, link, index, image }: ProjectProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      viewport={{ once: true }}
      className="group relative block w-full mb-16 md:mb-24 cursor-none"
    >
      {/* CARD HEADER - Fixed height ensures alignment across the grid */}
      <div className="flex flex-col justify-between min-h-[140px] md:min-h-[160px] mb-6">
        {/* Number at the very top */}
        <span className="text-idex-teal font-mono text-[10px] md:text-xs tracking-[0.2em]">
          {index}
        </span>

        {/* Title and Category aligned to the bottom of the header */}
        <div className="flex justify-between items-end border-b border-white/10 pb-6">
          <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter group-hover:text-idex-teal transition-colors duration-500 max-w-[70%]">
            {title}
          </h3>
          <p className="text-white/30 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-medium text-right pb-1">
            {category}
          </p>
        </div>
      </div>

      {/* IMAGE CONTAINER - Precise aspect ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03] border border-white/5 rounded-[12px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-idex-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* This is where your actual <img> will go eventually */}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
