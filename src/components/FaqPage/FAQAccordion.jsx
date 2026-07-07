import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "./data";

export default function FAQAccordion({ search, selected }) {
  const [open, setOpen] = useState(null);

  const filtered = faqData.filter((item) => {
    const matchesCategory =
      selected === "All" || item.category === selected;

    const matchesSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto mt-14">

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-gray-700">
            No results found.
          </h3>

          <p className="text-gray-500 mt-3">
            Try searching with another keyword.
          </p>
        </div>
      )}

      {filtered.map((faq, index) => {
        const active = open === index;

        return (
          <div
            key={index}
            className="mb-5 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <button
              onClick={() =>
                setOpen(active ? null : index)
              }
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-5">
                {faq.question}
              </h3>

              <ChevronDown
                size={28}
                className={`text-orange-500 transition-transform duration-300 ${
                  active ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: .35,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-8">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        );
      })}

    </div>
  );
}