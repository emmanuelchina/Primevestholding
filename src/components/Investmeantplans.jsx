import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    minimum: "$100",
    duration: "7 Days",
    popular: false,
    features: [
      "Minimum Investment $100",
      "7-Day Investment Cycle",
      "24/7 Customer Support",
      "Secure Crypto Wallet",
      "Real-Time Dashboard",
    ],
  },
  {
    name: "Growth",
    minimum: "$1,000",
    duration: "30 Days",
    popular: true,
    features: [
      "Minimum Investment $1,000",
      "30-Day Investment Cycle",
      "Priority Support",
      "Portfolio Monitoring",
      "Advanced Security",
    ],
  },
  {
    name: "Premium",
    minimum: "$10,000",
    duration: "90 Days",
    popular: false,
    features: [
      "Minimum Investment $10,000",
      "90-Day Investment Cycle",
      "Dedicated Account Manager",
      "VIP Support",
      "Exclusive Opportunities",
    ],
  },
];

export default function InvestmentPlans() {
  return (
    <section className="py-24 bg-white">

      <div className=" mx-auto px-6">

        {/* Heading */}

        <div className=" mx-auto">

      <div className="flex items-center gap-3 mb-5">

          <div className="w-14 h-[3px] bg-orange-500"></div>

              <span className="uppercase tracking-widest text-orange-500 font-semibold text-sm">
                INVESTMENT PLANS
              </span>
              </div>

          <h2 className="mt-4 text-2xl md:text-2xl font-bold text-gray-900">
            Choose Your Investment Plan
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Flexible cryptocurrency investment plans designed for both new and
            experienced investors. Select the plan that best aligns with your
            investment goals.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl border transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-orange-500 shadow-xl"
                  : "border-gray-200"
              }`}
            >

              {/* Popular */}

              {plan.popular && (

                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-bl-xl">
                  MOST POPULAR
                </div>

              )}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>

                <div className="mt-6">

                  <div className="text-gray-500 text-sm">
                    Minimum Investment
                  </div>

                  <div className="text-4xl font-bold text-orange-500 mt-1">
                    {plan.minimum}
                  </div>

                </div>

                <div className="mt-6">

                  <div className="text-gray-500 text-sm">
                    Investment Duration
                  </div>

                  <div className="text-xl font-semibold text-gray-900 mt-1">
                    {plan.duration}
                  </div>

                </div>

                <div className="border-t my-8"></div>

                <div className="space-y-4">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <div className="h-7 w-7 rounded-full bg-orange-100 flex items-center justify-center">

                        <Check
                          size={16}
                          className="text-orange-500"
                        />

                      </div>

                      <span className="text-gray-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <button
                  className={`w-full mt-10 rounded-xl py-4 font-semibold transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  Invest Now
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}