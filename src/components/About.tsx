import { motion } from "framer-motion";
import myImage from "../assets/me.jpg";

const About = () => {
  const workHistory = [
    {
      role: "UX Designer & Frontend Developer",
      company: "Rumango",
      period: "SEPT-2025 — Present",
      desc: "Leading design and development for ABC Banking Application. Delivering banking solutions for SBM Bank and international clients in Kenya and Lesotho."
    },
    {
      role: "UX Designer",
      company: "Bharat Electronics Limited (BEL)",
      period: "JAN-2025 — SEPT-2025",
      desc: "Designed secure and intuitive interfaces for defense-sector applications. Built data-driven dashboards using Figma and Adobe XD."
    },
    {
      role: "UX & Graphic Designer",
      company: "Rumango (Earlier Role)",
      period: "FEB-2023 — JAN-2025",
      desc: "Designed the ICUST platform including website and banking interfaces."
    },
    {
      role: "Interactive Designer",
      company: "Krenai Pvt Ltd.",
      period: "FEB-2022 — APR-2022",
      desc: "Designed the E-commerce Maintenance Platform Design with a focus on user experience and visual appeal."
    }
  ];

  const educationHistory = [
    {
      degree: "B.Tech",
      institution: "Silicon Institute of Technology, Bhubaneswar",
      period: "2019 — 2023",
      desc: "Graduated with a specialization in Electronics and Instrumentation Engineering.",
      cgpa: "CGPA: 7.9/10"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Time’s Scholar’s Gurukul, Bhubaneswar",
      period: "2017 — 2019",
      desc: "Completed senior secondary schooling with a focus on Science,  Mathematics and Biology.",
      cgpa: "CGPA: 8.2/10"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-48 px-8 md:px-24 bg-idex-black">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER AREA */}
        <div className="mb-24 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-idex-teal font-mono text-[10px] md:text-xs mb-4 tracking-[0.4em] uppercase">
              / 03 — PERSONAL PROFILE
            </h2>
            <p className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              About <br />{" "}
              <span className="text-transparent stroke-text">Me</span>
            </p>
          </div>

          <motion.a
            href="/Saanvi_Sahoo_Resume.pdf"
            download="Saanvi_Sahoo_Resume.pdf"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group flex items-center gap-4 cursor-pointer pb-2 border-b border-white/10 hover:border-idex-teal transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-idex-teal transition-colors">
              Download Resume
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-idex-teal transition-all">
              <div className="w-1 h-1 bg-idex-teal rounded-full animate-pulse"></div>
            </div>
          </motion.a>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
          {/* LEFT SIDE: STICKY IMAGE */}
          <div className="lg:col-span-4 sticky top-32 self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="aspect-[3/4] overflow-hidden rounded-[12px] border border-white/10 shadow-2xl"
            >
              <img
                src={myImage}
                className="w-full h-full object-cover"
                alt="Saanvi Smakshi Sahoo"
              />
            </motion.div>
            {/* Added a subtle label below sticky image to fill space beautifully */}
            <p className="mt-6 text-white/10 font-mono text-[10px] uppercase tracking-[0.5em]">
              Bhubaneswar, India • 2026
            </p>
          </div>

          {/* RIGHT SIDE: SCROLLING INFO */}
          <div className="lg:col-span-8 space-y-24">
            <div className="space-y-8 max-w-2xl">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                I am a UI/UX Designer with a{" "}
                <span className="text-white font-medium">
                  strong foundation in frontend development
                </span>
                , blending design thinking with technical execution to build
                seamless digital experiences.
              </p>
            </div>

            {/* PROFESSIONAL JOURNEY */}
            <div className="space-y-12">
              <h3 className="text-idex-teal font-mono text-[10px] tracking-[0.5em] uppercase pb-4 border-b border-white/10">
                Professional Journey
              </h3>
              <div className="space-y-16">
                {workHistory.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 group"
                  >
                    <div className="md:col-span-1">
                      <p className="text-white font-medium text-lg leading-tight">
                        {work.company}
                      </p>
                      <p className="text-idex-teal text-[10px] uppercase tracking-widest mt-2 font-bold">
                        {work.period}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                        {work.role}
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                        {work.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ACADEMIC FOUNDATION */}
            <div className="space-y-12 pb-12">
              <h3 className="text-idex-teal font-mono text-[10px] tracking-[0.5em] uppercase pb-4 border-b border-white/10">
                Academic Foundation
              </h3>
              <div className="space-y-16">
                {educationHistory.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 group"
                  >
                    <div className="md:col-span-1">
                      <p className="text-white font-medium text-lg leading-tight">
                        {edu.degree}
                      </p>
                      <p className="text-idex-teal text-[10px] uppercase tracking-widest mt-2 font-bold">
                        {edu.period}
                      </p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                        {edu.desc}
                      </p>
                      {edu.cgpa && (
                        <p className="text-white/40 text-[10px] tracking-widest mt-2">
                          {edu.cgpa}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
