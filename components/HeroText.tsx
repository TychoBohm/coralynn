// app/components/HeroText.tsx

"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 3.6 }}
      className="max-w-xl"
    >
      <h1 className="text-5xl font-bold leading-tight">
        Discover the Secrets of the Sea
      </h1>
      <p className="mt-4 text-lg opacity-80">
        Premium linen swimwear crafted for those who chase waves and wonder.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:opacity-80 transition">
        Explore Collection
      </button>
    </motion.div>
  );
}
