import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye } from "lucide-react";
import aboutImage from "../assets/hero/hero1.jpg";

export default function AboutSection() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-[5px]">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Building Wealth Through
            <span className="text-orange-500"> Trust & Excellence</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8 text-lg">
            PrimeVestHoldings provides secure investment opportunities
            designed to help individuals and businesses achieve
            sustainable financial growth through transparency,
            innovation and expert financial management.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="PrimeVestHoldings"
              className="rounded-3xl shadow-2xl w-full object-cover h-[550px]"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Investment Partner
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              At PrimeVestHoldings, we believe investing should be
              simple, secure and rewarding. Our team works tirelessly
              to identify high-quality investment opportunities that
              generate sustainable returns while protecting the capital
              entrusted to us.
            </p>

            {/* Mission */}

            <div className="flex gap-5 mb-8">

              <div className="bg-orange-100 p-4 rounded-xl">
                <Target className="text-orange-500" size={28}/>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2">
                  Our Mission
                </h4>

                <p className="text-gray-600">
                  Empower individuals and businesses to achieve
                  financial freedom through secure and profitable
                  investment opportunities.
                </p>
              </div>

            </div>

            {/* Vision */}

            <div className="flex gap-5 mb-8">

              <div className="bg-orange-100 p-4 rounded-xl">
                <Eye className="text-orange-500" size={28}/>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2">
                  Our Vision
                </h4>

                <p className="text-gray-600">
                  To become one of Africa's most trusted investment
                  companies recognised for transparency, innovation and
                  sustainable wealth creation.
                </p>
              </div>

            </div>

            {/* Why Choose */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {[
                "Secure Investments",
                "Professional Management",
                "Transparent Operations",
                "Long-Term Growth",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <ShieldCheck
                    size={22}
                    className="text-orange-500"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}