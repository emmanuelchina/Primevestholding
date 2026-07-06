import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Secure investment opportunities",
  "Transparent financial management",
  "Experienced investment professionals",
  "Long-term wealth creation",
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="text-orange-500 uppercase tracking-[5px] font-semibold">
              WHO WE ARE
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              A Trusted Partner For
              <span className="text-orange-500"> Smart Investments.</span>
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              PrimeVestHoldings is committed to helping individuals and
              businesses build lasting wealth through secure investment
              opportunities. Our experienced team focuses on protecting
              your capital while delivering sustainable financial growth.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle
                    className="text-orange-500"
                    size={24}
                  />

                  <span className="text-gray-700 text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl bg-gray-100 p-10 shadow-xl">

              <h3 className="text-3xl font-bold text-gray-900">
                PrimeVestHoldings
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                We combine professional financial expertise,
                innovative investment strategies and transparent
                management to help our clients achieve their
                long-term financial goals.
              </p>

              {/* Statistics */}

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <h4 className="text-3xl font-bold text-orange-500">
                    12K+
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Investors
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <h4 className="text-3xl font-bold text-orange-500">
                    $50M+
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Assets Managed
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <h4 className="text-3xl font-bold text-orange-500">
                    98%
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Client Satisfaction
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow">
                  <h4 className="text-3xl font-bold text-orange-500">
                    10+
                  </h4>

                  <p className="text-gray-600 mt-2">
                    Years Experience
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}