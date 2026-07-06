import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Gem,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    min: "$100",
    max: "$999",
    roi: "8%",
    duration: "30 Days",
    popular: false,
    features: [
      "Secure Investment",
      "Daily Profit Tracking",
      "24/7 Support",
      "Easy Withdrawals",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    min: "$1,000",
    max: "$9,999",
    roi: "12%",
    duration: "60 Days",
    popular: true,
    features: [
      "Priority Support",
      "Portfolio Monitoring",
      "Higher Returns",
      "Investment Insights",
    ],
  },
  {
    name: "Elite",
    icon: Gem,
    min: "$10,000+",
    max: "Unlimited",
    roi: "18%",
    duration: "90 Days",
    popular: false,
    features: [
      "Dedicated Manager",
      "VIP Support",
      "Exclusive Opportunities",
      "Premium Benefits",
    ],
  },
];

export default function InvestmentPlans() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            Investment Plans
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-gray-900">
            Choose the Perfect Investment Plan
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto text-lg">
            Whether you're just starting your investment journey or
            looking to expand your portfolio, PrimeVestHoldings has a
            plan designed to help you achieve your financial goals.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => {

            const Icon = plan.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .2 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-[30px] p-8 shadow-xl transition overflow-hidden
                ${
                  plan.popular
                    ? "bg-orange-500 text-white scale-105"
                    : "bg-white"
                }`}
              >

                {plan.popular && (
                  <div className="absolute top-6 right-6 bg-white text-orange-500 px-3 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center
                  ${
                    plan.popular
                      ? "bg-white text-orange-500"
                      : "bg-orange-100 text-orange-500"
                  }`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {plan.name}
                </h3>

                <p
                  className={`mt-3 ${
                    plan.popular
                      ? "text-orange-100"
                      : "text-gray-500"
                  }`}
                >
                  Investment Range
                </p>

                <h4 className="text-4xl font-bold mt-2">
                  {plan.min}
                </h4>

                <p
                  className={`${
                    plan.popular
                      ? "text-orange-100"
                      : "text-gray-500"
                  }`}
                >
                  to {plan.max}
                </p>

                <div className="flex justify-between mt-10">

                  <div>
                    <p
                      className={`text-sm ${
                        plan.popular
                          ? "text-orange-100"
                          : "text-gray-500"
                      }`}
                    >
                      ROI
                    </p>

                    <h4 className="text-2xl font-bold">
                      {plan.roi}
                    </h4>
                  </div>

                  <div>
                    <p
                      className={`text-sm ${
                        plan.popular
                          ? "text-orange-100"
                          : "text-gray-500"
                      }`}
                    >
                      Duration
                    </p>

                    <h4 className="text-2xl font-bold">
                      {plan.duration}
                    </h4>
                  </div>

                </div>

                <div className="mt-10 space-y-4">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <Check
                        size={18}
                        className={
                          plan.popular
                            ? "text-white"
                            : "text-orange-500"
                        }
                      />

                      <span
                        className={
                          plan.popular
                            ? "text-orange-50"
                            : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  className={`mt-12 w-full py-4 rounded-full font-semibold flex justify-center items-center gap-3 transition
                  ${
                    plan.popular
                      ? "bg-white text-orange-500 hover:bg-orange-100"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  Invest Now

                  <ArrowRight size={20} />
                </button>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}