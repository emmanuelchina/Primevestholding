import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroVideo from "../assets/video/hero.mp4";
import "../styles/hero.css";

const slides = [
  {
    title: "Investing With Confidence.",
    subtitle: "Building Wealth For Tomorrow.",
    text: "Professional investment solutions designed to help individuals and businesses achieve sustainable financial growth.",
  },
  {
    title: "Secure Investments.",
    subtitle: "Proven Results.",
    text: "Transparency, security and expert wealth management are at the heart of everything we do.",
  },
  {
    title: "Your Future.",
    subtitle: "Our Commitment.",
    text: "Join thousands of investors building long-term wealth with PrimeVestHoldings.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="hero-overlay"></div>

      {/* Content */}

      <div className="hero-container">

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: .7 }}
          >

            <span className="hero-company">
              PRIMEVESTHOLDINGS
            </span>

            <h1 className="hero-title">
              {slides[current].title}
              <br />
              <span>{slides[current].subtitle}</span>
            </h1>

            <p className="hero-text">
              {slides[current].text}
            </p>

            <div className="hero-buttons">

              <button className="hero-primary">
                Start Investing
              </button>

              <button className="hero-secondary">
                Explore Plans
              </button>

            </div>

            <div className="hero-trust">

              <span>✔ Secure Platform</span>

              <span>✔ Trusted Experts</span>

              <span>✔ Global Investments</span>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}