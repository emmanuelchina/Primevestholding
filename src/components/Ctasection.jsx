import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 px-8 py-16 md:px-16 md:py-20"
        >
          {/* Decorative Circles */}
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white font-medium">
                <ShieldCheck size={18} />
                Trusted Investment Platform
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Start Building Your Wealth Today
              </h2>

              <p className="mt-6 text-lg text-orange-100 leading-8">
                Join thousands of investors who trust PrimeVestHoldings to grow
                their wealth through secure, transparent, and professionally
                managed investment opportunities.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-orange-600 transition hover:scale-105">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}