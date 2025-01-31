import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b □ border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:mx-25 lg:px-20">
          <div className="flex flex-col items-center lg:items-start lg:w-60%">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16
    lg:text-6xl"
            >
              Spandhan Kotangle
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-3xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.div variants={container(1.3)}
              initial="hidden"
              animate="visible"
              > <a href="https://drive.google.com/file/d/1-qILka6Wp76-iNntRKKrzJ_FHkli1-RZ/view?usp=sharing" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 lg:mx-43 lg:px-10 lg:mt-6 hover:bg-gray-600">my resume <LuDownload/></a>  </motion.div>
        
      
      </div>
    </div>
  );
};

export default Hero;
