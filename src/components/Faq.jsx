import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I start investing with PrimeVestHoldings?",
    answer:
      "Create an account, complete the verification process, fund your wallet, choose an investment plan, and start growing your portfolio.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "We use modern security measures, encrypted transactions, and account protection features to safeguard your investments and personal information.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "Our Starter Plan begins at $100, making it easy for new investors to start building their financial future.",
  },
  {
    question: "Can I withdraw my investment anytime?",
    answer:
      "Withdrawals are processed according to the terms of your selected investment plan. You can request withdrawals directly from your dashboard once they become available.",
  },
  {
    question: "How do I track my investments?",
    answer:
      "Your dashboard provides real-time updates on your portfolio, investment performance, transaction history, and earnings.",
  },
  {
    question: "Do I need investment experience?",
    answer:
      "No. Our platform is designed for both beginners and experienced investors, with plans suited to different financial goals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}

        <div className=" mb-16">
          {/* <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            FAQ
          </span> */}

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-6 text-lg">
            Find answers to the most common questions about investing with
            PrimeVestHoldings.
          </p>
        </div>

        {/* FAQ Items */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: open === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-orange-500" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 text-center bg-orange-500 rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-orange-100">
            Our support team is available to help you with any questions about
            investing or your account.
          </p>

          <button className="mt-8 bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}