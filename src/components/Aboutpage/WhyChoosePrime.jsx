import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  BarChart3,
  Users,
  Globe2,
  Headset,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Capital Protection",
    text: "We prioritize protecting your investment through disciplined risk management and diversified strategies.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Returns",
    text: "Our investment opportunities are designed to deliver sustainable long-term value rather than short-term speculation.",
  },
  {
    icon: BarChart3,
    title: "Professional Management",
    text: "Experienced investment professionals monitor portfolios and market opportunities on your behalf.",
  },
  {
    icon: Users,
    title: "Client-Centered Service",
    text: "Every investor receives dedicated support and personalized guidance throughout their investment journey.",
  },
  {
    icon: Globe2,
    title: "Diversified Opportunities",
    text: "We provide access to carefully selected investment sectors to reduce risk and maximize potential growth.",
  },
  {
    icon: Headset,
    title: "Reliable Support",
    text: "Our support team is committed to providing timely assistance whenever you need it.",
  },
];

export default function WhyChoosePrime() {
  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Why Investors Trust
            <span className="text-orange-500">
              {" "}PrimeVestHoldings
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Our commitment to transparency, disciplined investment
            management and exceptional client service makes us a trusted
            partner for building long-term wealth.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .12 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-8 shadow hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-transparent hover:border-orange-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-8 group-hover:bg-orange-500 transition">

                  <Icon
                    size={30}
                    className="text-orange-500 group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">

                  {reason.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {reason.text}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}