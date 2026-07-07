import { useState, useEffect } from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";
import heroSlides from "./HeroData";
import "./hero.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload all hero images
  useEffect(() => {
    Promise.all(
      heroSlides.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
        });
      })
    ).then(() => {
      setLoaded(true);
    });
  }, []);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  // Jump to a slide
  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      }

      if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Loading screen while images preload
  if (!loaded) {
    return (
      <section className="hero-loading">
        <div className="hero-spinner"></div>
      </section>
    );
  }

  return (
    <>
      {/* Desktop Hero */}
      <div className="hidden lg:block">
        <HeroDesktop
          slides={heroSlides}
          current={current}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
        />
      </div>

      {/* Mobile Hero */}
      <div className="block lg:hidden">
        <HeroMobile
          slides={heroSlides}
          current={current}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    </>
  );
}