import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Books. Wisdom. Growth.
      </motion.h1>

      <p className="text-muted text-lg leading-relaxed max-w-2xl">
        A space for readers, writers, and seekers of truth to grow through
        books, reflection, and faith-driven learning.
      </p>
    </div>
  );
}
