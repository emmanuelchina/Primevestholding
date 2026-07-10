import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Globe2,
  BriefcaseBusiness,
  Wallet,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Level Security",
    text: "Advanced encryption and secure financial practices keep your investments protected.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Growth",
    text: "Our investment strategies focus on sustainable long-term returns.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    text: "Access diversified investment opportunities across different industries.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Management",
    text: "Experienced investment professionals manage your portfolio responsibly.",
  },
  {
    icon: Wallet,
    title: "Fast Withdrawals",
    text: "Enjoy secure and efficient withdrawal processing whenever eligible.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Operations",
    text: "Clear reporting, real-time updates, and no hidden charges.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
      
        >
          {/* <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            WHY CHOOSE US
          </span> */}

          <h2 className="text-2xl lg:text-3xl font-bold mt-6 text-gray-900">
            Why Investors Trust PrimeVestHoldings
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl ">
            We combine technology, transparency, and professional investment
            management to help individuals and businesses build long-term wealth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition">
                  <Icon
                    size={32}
                    className="text-orange-500 group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-6">
                  {feature.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}