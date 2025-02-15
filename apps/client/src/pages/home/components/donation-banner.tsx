/* eslint-disable lingui/no-unlocalized-strings */

import { Lightbulb } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const ResumeFactBanner = () => (
  <motion.div
    whileHover={{ height: 48 }}
    initial={{ opacity: 0, y: -50, height: 32 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    className="hidden w-screen items-center justify-center gap-x-2 bg-zinc-800 text-xs font-bold leading-relaxed text-zinc-50 lg:flex"
  >
    <Lightbulb weight="bold" size={14} className="shrink-0" />
    <span>
      Recruiters spend an average of just 6-7 seconds reviewing a resume—make those seconds count!
    </span>
  </motion.div>
);
