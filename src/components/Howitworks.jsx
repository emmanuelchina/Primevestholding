import { motion } from "framer-motion";
import {
  UserPlus,
  ShieldCheck,
  Wallet,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: UserPlus,
    title: "Create an Account",
    description:
      "Register in minutes using your email address and create your secure PrimeVestHoldings account.",
  },
  {
    id: "02",
    icon: ShieldCheck,
    title: "Verify Your Identity",
    description:
      "Complete our simple verification process to secure your account and comply with financial regulations.",
  },
  {
    id: "03",
    icon: Wallet,
    title: "Fund Your Wallet",
    description:
      "Deposit funds securely using one of our supported payment methods and prepare to invest.",
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Choose an Investment Plan",
    description:
      "Select the investment plan that best matches your financial goals and budget.",
  },
  {
    id: "05",
    icon: CreditCard,
    title: "Track & Withdraw Profits",
    description:
      "Monitor your investment performance in real time and withdraw your earnings when eligible.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
      
        >
          {/* <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            HOW IT WORKS
          </span> */}

          <h2 className="text-2xl lg:text-3xl font-bold mt-6 text-gray-900">
            Start Investing in
            
              {" "}5 Simple Steps
            
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl ">
            Joining PrimeVestHoldings is quick and straightforward. Follow these
            simple steps to begin building your investment portfolio.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Center Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-orange-100 -translate-x-1/2"></div>

          <div className="space-y-14">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .15 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >

                  {/* Card */}

                  <div className="lg:w-1/2">
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-orange-400 hover:shadow-xl transition duration-300">

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                          <Icon className="text-orange-500" size={28} />
                        </div>

                        <div>
                          <span className="text-orange-500 font-semibold">
                            STEP {step.id}
                          </span>

                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>

                      </div>

                      <p className="text-gray-600 leading-8 mt-6">
                        {step.description}
                      </p>

                    </div>
                  </div>

                  {/* Timeline Circle */}

                  <div className="hidden lg:flex w-16 h-16 rounded-full bg-orange-500 text-white font-bold text-xl items-center justify-center shadow-lg z-10">
                    {step.id}
                  </div>

                  {/* Empty Space */}

                  <div className="hidden lg:block lg:w-1/2"></div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 text-center"
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition duration-300 shadow-lg">
            Start Investing Today
          </button>
        </motion.div>

      </div>
    </section>
  );
}