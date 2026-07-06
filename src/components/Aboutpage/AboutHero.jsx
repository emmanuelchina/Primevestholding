import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import "./about.css";

import aboutHero from "../../assets/hero/hero2.jpg";

export default function AboutHero() {
  return (
    <section className="about-hero">

      {/* Background */}
      <img
        src={aboutHero}
        alt="PrimeVestHoldings"
        className="about-bg"
      />

      <div className="about-overlay"></div>

      <div className="about-container">

        {/* Left Content */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="about-tag">
            ABOUT PRIMEVESTHOLDINGS
          </span>

          <h1>
            Building Wealth.
            <br />
            <span>Creating Financial Freedom.</span>
          </h1>

          <p>
            PrimeVestHoldings helps individuals and businesses
            achieve long-term financial success through secure,
            transparent and professionally managed investment
            opportunities.
          </p>

          <div className="about-buttons">

            <button className="primary-btn">
              Explore Investments
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>

          </div>

        </motion.div>

        {/* Right Floating Card */}

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>Why Investors Trust Us</h3>

          <div className="card-item">
            <ShieldCheck size={26} />
            <div>
              <h4>Secure Investments</h4>
              <p>Your capital is professionally managed.</p>
            </div>
          </div>

          <div className="card-item">
            <TrendingUp size={26} />
            <div>
              <h4>Consistent Growth</h4>
              <p>Focused on long-term sustainable returns.</p>
            </div>
          </div>

          <div className="card-item">
            <Users size={26} />
            <div>
              <h4>Trusted by Investors</h4>
              <p>Growing confidence through transparency.</p>
            </div>
          </div>

          <button className="card-btn">
            Learn More
            <ArrowRight size={18} />
          </button>

        </motion.div>

      </div>

    </section>
  );
}