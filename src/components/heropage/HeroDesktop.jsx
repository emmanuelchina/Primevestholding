import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroDesktop({
  slides,
  current,
  goToSlide,
}) {
  const slide = slides[current];
  const navigate = useNavigate();

  return (
    <section className="hero-desktop">

      {/* Background */}

      <AnimatePresence mode="wait">
<motion.img
  key={slide.id}
  src={slide.image}
  alt={slide.title}
  className="hero-bg"
  initial={{
    opacity: 0,
    scale: 1,
  }}
  animate={{
    opacity: 1,
    scale: 1.08,
  }}
  exit={{
    opacity: 0,
  }}
  transition={{
    duration: 6,
    ease: "linear",
  }}
/>
      </AnimatePresence>

      {/* Overlay */}

      <div className="hero-overlay"></div>

      {/* Hero Content */}

      <div className="hero-content">

        <AnimatePresence mode="wait">

          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: .7 }}
          >

            <span className="hero-label">
              {slide.category}
            </span>

            <h1 className="hero-title">
              {slide.title}
            </h1>

            <p className="hero-description">
              {slide.description}
            </p>

       <button
  className="hero-button"
  onClick={() => navigate(slide.link)}
>

              {slide.button}

              <ArrowRight size={20} />

            </button>

          </motion.div>

        </AnimatePresence>

      </div>
      <div className="hero-trust">
  <div>
    <strong>Since 2015</strong>
    <span>Trusted Experience</span>
  </div>

  <div>
    <strong>Worldwide</strong>
    <span>Global Investment Solutions</span>
  </div>

  <div>
    <strong>Secure</strong>
    <span>Professional Wealth Management</span>
  </div>
</div>

      {/* Bottom Cards */}
<div className="hero-counter">
  {String(current + 1).padStart(2, "0")} /
  {String(slides.length).padStart(2, "0")}
</div>
      <div className="hero-bottom">

      {slides.map((item, index) => (

  <motion.div
    key={item.id}
    whileHover={{ y: -8 }}
    onClick={() => goToSlide(index)}
    className={`hero-card ${
      current === index ? "active" : ""
    }`}
  >

    {/* Progress Bar */}
    <div
      className={`hero-progress ${
        current === index ? "active" : ""
      }`}
    />

    <span className="hero-category">
      {item.category}
    </span>

    <h3>{item.title}</h3>

    {current === index && (
      <motion.div
        layoutId="learn-more"
        className="hero-more"
      >
        Learn More
      </motion.div>
    )}

  </motion.div>

))}

      </div>

    </section>
  );
}