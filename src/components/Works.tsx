import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { designStudies, type DesignProject } from "../data/projects";

interface WorksProps {
  onProjectClick: (project: DesignProject) => void;
}

const Works = ({ onProjectClick }: WorksProps) => {
  return (
    <section
      id="works"
      className="py-24 md:py-48 px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto"
    >
      {/* SECTION 1: LIVE DEVELOPMENT */}
      <div className="mb-40">
        <div className="mb-20">
          <h2 className="text-idex-teal font-mono text-[10px] mb-4 tracking-[0.4em] uppercase">
            / 01 — DEVELOPMENT
          </h2>
          <p className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
            Live{" "}
            <span className="text-transparent stroke-text not-italic">
              Projects
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <ProjectCard
            index="01"
            title="Previous Portfolio"
            category="Web Development"
            link="https://saanvi-sahoo.netlify.app/"
            image="https://res.cloudinary.com/dyeqpzozb/image/upload/v1778503192/9deb98db-eeb4-4e36-bd5d-71b64b0f24b6.png"
          />
          <ProjectCard
            index="02"
            title="Frames by Rahen"
            category="React Portfolio"
            link="https://framesbyrahen.netlify.app/"
            image="https://res.cloudinary.com/dyeqpzozb/image/upload/v1778503523/50c3975f-8e96-490e-a216-c48e71f985d4.png"      
          />
          <ProjectCard
            index="03"
            title="UI Frontend Adventure"
            category="JavaScript Game"
            link="https://saanvi-frontend-adventure.pages.dev/"
            image="https://res.cloudinary.com/dyeqpzozb/image/upload/v1778503593/2a7a63be-0a1d-4eb4-92ad-e8bcc524fd53.png"
          />
          <ProjectCard
            index="04"
            title="Mahamaya Temple Website"
            category="UI/UX Visuals"
            link="https://mahamayaraipur.in/"
            image="https://res.cloudinary.com/dyeqpzozb/image/upload/v1778418344/328ad96d-dfee-4667-ba6b-09c3f6dcd055.png"
          />
        </div>
      </div>

      {/* SECTION 2: UI/UX DESIGN VAULT */}
      <div>
        <div className="mb-20">
          <h2 className="text-idex-teal font-mono text-[10px] mb-4 tracking-[0.4em] uppercase">
            / 02 — DESIGN VAULT
          </h2>
          <p className="text-5xl md:text-8xl font-black uppercase ">
            UI/UX{" "}
            <span className="text-transparent stroke-text not-italic text-white/20">
              Designs
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {designStudies.map((project, i) => (
            <motion.div
              key={project.id}
              onClick={() => onProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-0 border border-white/5 bg-white/[0.02] hover:border-idex-teal/50 group transition-all duration-500 rounded-[12px] overflow-hidden flex flex-col h-full cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.coverImage}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  alt={project.title}
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] text-idex-teal font-mono tracking-widest block mb-4 uppercase">
                    {project.cat}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black uppercase group-hover:text-idex-teal transition-colors leading-[1.1]">
                    {project.title}
                  </h4>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mt-6">
                  {project.desc}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity text-idex-teal text-[10px] font-bold uppercase tracking-widest">
                  View Design Details +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
