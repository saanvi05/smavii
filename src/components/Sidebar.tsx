import { FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface SidebarProps {
  onMenuClick: () => void;
}

const Sidebar = ({ onMenuClick }: SidebarProps) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-16 md:w-20 border-r border-white/5 flex flex-col justify-between items-center py-8 z-[100] bg-idex-black">
      <button
        onClick={onMenuClick}
        className="text-white hover:text-idex-teal transition-colors cursor-none p-2"
      >
        <HiOutlineMenuAlt4 size={28} />
      </button>

      {/* STATIC STYLISH NAME */}
      <div className="rotate-[-90deg] whitespace-nowrap text-[11px] tracking-[0.8em] font-bold text-white/40 uppercase origin-center w-0">
        SMA<span className="text-idex-teal">VII</span>
      </div>

      <div className="flex flex-col gap-6 text-white/30">
        <a
          href="https://www.instagram.com/saan.vi_17?igsh=dm11dXpha2lzamY4"
          className="hover:text-idex-teal transition-colors cursor-none"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/saanvisahoo"
          className="hover:text-idex-teal transition-colors cursor-none"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://github.com/saanvi05"
          className="hover:text-idex-teal transition-colors cursor-none"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.behance.net/saanvisahoo"
          className="hover:text-idex-teal transition-colors cursor-none"
        >
          <FaBehance size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
