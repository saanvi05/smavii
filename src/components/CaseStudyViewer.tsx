import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoArrowForward } from "react-icons/io5";
import { type DesignProject } from "../data/projects";

interface ViewerProps {
  project: DesignProject | null;
  onClose: () => void;
}

const CaseStudyViewer = ({ project, onClose }: ViewerProps) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex justify-end"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-10 right-10 z-[210] p-4 bg-idex-teal text-black rounded-full hover:rotate-90 transition-transform duration-500 cursor-pointer shadow-xl"
          >
            <IoClose size={30} />
          </button>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            data-lenis-prevent
            className="w-full lg:w-[85%] h-full bg-[#161616] overflow-y-auto custom-scrollbar relative"
          >
            {/* Header Section */}
            <div className="px-8 md:px-24 pt-32 pb-20">
              <div className="flex justify-between items-start mb-8">
                <span className="text-idex-teal font-mono text-xs tracking-[0.5em] uppercase block">
                  / UI/UX Designs
                </span>

                {/* LIVE LINK BUTTON - Only shows if link exists */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase font-bold tracking-widest cursor-pointer"
                  >
                    Visit Live Site <IoArrowForward />
                  </a>
                )}
              </div>

              <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-12 border-t border-white/10 pt-12">
                <div className="max-w-xl">
                  <p className="text-white/20 text-[10px] uppercase tracking-widest mb-4">
                    Background
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {project.details}
                  </p>
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase tracking-widest mb-4">
                    Stack
                  </p>
                  <p className="text-white text-sm uppercase font-bold tracking-widest leading-loose">
                    {project.tools.join(" • ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Stack */}
            <div className="w-full space-y-0">
              {project.contentImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="w-full h-auto block"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Footer Area */}
            <div className="py-40 text-center">
              <button
                onClick={onClose}
                className="text-idex-teal border border-idex-teal/30 px-12 py-5 rounded-full hover:bg-idex-teal hover:text-black transition-all duration-500 uppercase text-xs font-bold tracking-widest cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyViewer;
