import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Prime Holdings?",
    answer:
      "Prime Holdings is a global investment company headquartered in Berlin, Germany, providing access to diversified investment opportunities and professional wealth management services.",
  },
  {
    question: "Who can open an account?",
    answer:
      "Individuals and eligible businesses from many countries can create an account by completing the registration process and meeting applicable requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click the Get Started button, create your account, complete the required verification process, and you'll gain access to your investment dashboard.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. We use modern encryption technologies and security practices to help protect your personal information and account data.",
  },
  {
    question: "What investment opportunities are available?",
    answer:
      "Our platform provides access to professionally managed investment opportunities across multiple sectors, including real estate, technology, renewable energy, and global markets.",
  },
  {
    question: "Can I access my account from anywhere?",
    answer:
      "Yes. Our secure online platform allows you to access and manage your account anywhere with an internet connection.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through our Contact page, email, or other official communication channels listed on the website.",
  },
  {
    question: "Are investment returns guaranteed?",
    answer:
      "No. All investments involve risk, and returns cannot be guaranteed. Past performance should not be considered a guarantee of future results.",
  },
  {
    question: "Where is Prime Holdings headquartered?",
    answer:
      "Prime Holdings is headquartered in Berlin, Germany, while serving clients across multiple regions worldwide.",
  },
];

export default function FAQQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#0B0B0B] py-24 px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-semibold">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Everything You Need to Know
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Find answers to common questions about Prime Holdings,
            our services, account registration, security, and investment process.
          </p>
        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-[#111111] border border-[#222] rounded-xl overflow-hidden transition-all duration-300"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >

                <span className="text-white font-medium text-lg">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp
                    className="text-[#D4AF37]"
                    size={22}
                  />
                ) : (
                  <ChevronDown
                    className="text-[#D4AF37]"
                    size={22}
                  />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-8">
                  {faq.answer}
                </div>
              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-16 text-center">

          <p className="text-gray-400 mb-6 text-lg">
            Still have questions?
          </p>

          <button className="bg-[#D4AF37] hover:bg-[#c79c2e] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}