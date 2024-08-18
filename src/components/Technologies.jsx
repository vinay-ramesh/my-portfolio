import { BiLogoPostgresql } from "react-icons/bi";
// import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
// import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

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
    <div className="border-b border-neutral-800 pd-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-5"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <SiMongoose className="text-7xl text-orange-800" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <SiExpress className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <BiLogoPostgresql className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <FaAws className="text-7xl text-white-400" />
        </motion.div>

        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div> */}
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-400" />
        </div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
