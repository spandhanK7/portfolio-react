import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { DiJsBadge } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>

      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        <motion.div
          className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
          <DiJsBadge className="text-5xl text-yellow-400" />
        </motion.div>

        <motion.div
           className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-400" />
        </motion.div>

        <motion.div
        className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
          <SiExpress className="text-5xl text-white" />
        </motion.div>

        <motion.div
           className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
          <RiTailwindCssFill className="text-5xl text-sky-400" />
        </motion.div>

        <motion.div
        className="rounded-2xl border-4 ☐ border-neutral-800 p-4">
          <SiMongodb className="text-5xl text-green-500" />
        </motion.div>


        

     

        
      </motion.div>
    </div>
  );
};

export default Technologies;
