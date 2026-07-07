import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/faq-bg.jpg"
        alt="FAQ Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-orange-500 p-5 rounded-full">
            <HelpCircle className="text-white" size={40} />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Frequently Asked
          <span className="text-orange-500"> Questions</span>
        </h1>

        <p className="text-gray-200 text-lg leading-8 mt-8 max-w-3xl mx-auto">
          Find answers to the most common questions about
          PrimeVestHoldings. We're committed to providing
          transparent information and professional support to
          investors around the world.
        </p>
      </motion.div>

    </section>
  );
}