import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="h-screen bg-primary flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-secondary text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Vitajte na mojom portfóliu
        </motion.h1>
        <motion.p
          className="text-secondary text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Som vývojár s vášňou pre moderné technológie.
        </motion.p>
        <motion.button
          className="mt-8 bg-accent text-primary px-6 py-3 rounded-lg hover:bg-highlight"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Pozrieť projekty
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;