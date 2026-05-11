import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Reduced duration to 0.05 for "attached" feel
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.05, // Ultra-fast
          ease: "none" // No smoothing = zero delay
        });
      }

      const target = e.target as HTMLElement;
      const isClickable = target.closest("button") || target.closest("a");
      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      // REMOVED 'transition-transform' here to stop the lag
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      {/* The Glowing Point */}
      <div
        className={`bg-idex-teal rounded-full shadow-[0_0_15px_#00ffd5,0_0_30px_#00ffd5] transition-all duration-300 ${
          isPointer ? "w-4 h-4 opacity-50" : "w-2 h-2 opacity-100"
        }`}
      ></div>

      {/* Outer ring for interaction */}
      {isPointer && (
        <div className="absolute inset-0 w-8 h-8 border border-idex-teal/30 rounded-full -translate-x-2 -translate-y-2 animate-ping"></div>
      )}
    </div>
  );
};

export default Cursor;
