import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function HeroMobile({
  slides,
  current,
  nextSlide,
  prevSlide,
}) {
  const slide = slides[current];

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      className="hero-mobile"
      {...handlers}
    >
      {/* Background Image */}

      <AnimatePresence mode="wait">

        <motion.img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          className="hero-mobile-image"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        />

      </AnimatePresence>

      {/* Dark Overlay */}

      <div className="hero-mobile-overlay"></div>

      {/* Floating White Card */}

      <AnimatePresence mode="wait">

        <motion.div
          key={slide.id}
          className="hero-mobile-card"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -40,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span className="hero-mobile-category">
            {slide.category}
          </span>

          <h2>{slide.title}</h2>

          <p>{slide.description}</p>

          <button>

            {slide.button}

            <ArrowRight size={18} />

          </button>

        </motion.div>

      </AnimatePresence>

      {/* Controls */}

      <div className="hero-mobile-controls">

        <span>

          {String(current + 1).padStart(2, "0")} /{" "}

          {String(slides.length).padStart(2, "0")}

        </span>

        <div>

          <button onClick={prevSlide}>
            <ChevronLeft size={22} />
          </button>

          <button onClick={nextSlide}>
            <ChevronRight size={22} />
          </button>

        </div>

      </div>

    </section>
  );
}

