import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./investment.css";

import heroImage from "../../assets/hero/investment..jpg";

export default function InvestmentHero() {
  return (
    <section className="investment-hero">

      {/* TOP TEXT */}

      <div className="investment-header">

        <motion.h1
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:.7 }}
        >
          Cryptocurrency Investment
          <br />
          Built on Trust
        </motion.h1>

        <motion.p
          initial={{ opacity:0,y:30 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.2 }}
        >
          Whether you're just getting started or managing a
          diversified digital asset portfolio, PrimeVestHoldings
          provides secure cryptocurrency investment solutions
          designed for long-term financial growth.
        </motion.p>

      </div>

      {/* IMAGE */}

      <div className="investment-image">

        <img
          src={heroImage}
          alt="Investment"
        />

      </div>

      {/* FLOATING CARD */}

      <motion.div
        className="investment-card"
        initial={{ opacity:0,y:60 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{ duration:.8 }}
      >

        <span>

          CRYPTO INVESTMENTS

        </span>

        <h2>

          Professional Cryptocurrency
          Portfolio Management

        </h2>

        <p>

          Access professionally managed cryptocurrency
          investment strategies with transparency,
          security and a commitment to long-term growth.

        </p>

        <button>

          Learn More

          <ArrowRight size={18}/>

        </button>

      </motion.div>

    </section>
  );
}