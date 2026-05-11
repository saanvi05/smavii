import { motion, type Variants } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ isOpen, onClose }: MenuProps) => {
  const menuVariants: Variants = {
    closed: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    opened: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const links = [
    { name: "Home", href: "#" },
    { name: "Works", href: "#works" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "opened" : "closed"}
      variants={menuVariants}
      style={{ backgroundColor: "#161616" }} // Professional dark grey requested
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center text-white"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 p-4 hover:rotate-90 transition-transform duration-300 text-idex-teal cursor-pointer"
      >
        <IoClose size={40} />
      </button>

      {/* Menu Links */}
      <div className="flex flex-col gap-4 md:gap-6 text-center">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, y: 30 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            // This is the magic part: transition from solid to stroke
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 hover:text-transparent hover:[-webkit-text-stroke:1.5px_#00ffd5] hover:drop-shadow-[0_0_15px_rgba(0,255,213,0.3)]"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Footer Socials in Menu */}
      <div className="absolute bottom-10 flex gap-10 font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold text-white/20">
        <a
          href="https://www.linkedin.com/in/saanvisahoo"
          className="hover:text-idex-teal transition-colors cursor-pointer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/saan.vi_17?igsh=dm11dXpha2lzamY4"
          className="hover:text-idex-teal transition-colors cursor-pointer"
        >
          Instagram
        </a>
        <a
          href="https://github.com/saanvi05"
          className="hover:text-idex-teal transition-colors cursor-pointer"
        >
          Github
        </a>
        <a
          href="https://www.behance.net/saanvisahoo"
          className="hover:text-idex-teal transition-colors cursor-pointer"
        >
         Behance
        </a>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
