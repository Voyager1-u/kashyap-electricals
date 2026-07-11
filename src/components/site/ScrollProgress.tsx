import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left bg-gradient-to-r from-[#157BFF] via-[#22D3EE] to-[#157BFF]"
    />
  );
}
