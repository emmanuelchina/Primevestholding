import { motion } from "framer-motion";

const timeline = [
  {
    year: "2015",
    title: "PrimeVestHoldings Founded",
    description:
      "PrimeVestHoldings was established with the vision of helping individuals and businesses build long-term wealth through secure and transparent investment solutions.",
  },
  {
    year: "2017",
    title: "500+ Active Investors",
    description:
      "After earning the trust of early investors, the company expanded its client base while maintaining a strong commitment to transparency and financial discipline.",
  },
  {
    year: "2019",
    title: "Expanded Investment Portfolio",
    description:
      "Introduced diversified investment opportunities across multiple sectors, providing clients with greater flexibility and improved long-term growth potential.",
  },
  {
    year: "2021",
    title: "Digital Investment Platform",
    description:
      "Launched modern digital investment services to give investors easier access to portfolio management and account monitoring.",
  },
  {
    year: "2023",
    title: "Regional Expansion",
    description:
      "Expanded operations and partnerships to reach more investors while strengthening our reputation for professionalism and client-focused service.",
  },
  {
    year: "2025",
    title: "$50M+ Assets Managed",
    description:
      "Reached a significant milestone in assets under management, reflecting years of consistent growth and the confidence of thousands of investors.",
  },
  {
    year: "Future",
    title: "Building Global Wealth",
    description:
      "Our journey continues as we invest in innovation, strengthen client relationships, and expand into new markets while helping investors achieve lasting financial success.",
  },
];

export default function Journey() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            OUR JOURNEY
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            A Decade Of
            <span className="text-orange-500"> Growth & Trust</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Since 2015, PrimeVestHoldings has remained committed to helping
            investors build sustainable wealth through professional investment
            management and trusted financial solutions.
          </p>
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-orange-200 transform md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2"></div>

              {/* Card */}
              <div className="ml-16 md:ml-0 md:w-5/12">
                <div className="bg-gray-50 rounded-3xl p-8 shadow hover:shadow-xl transition">

                  <span className="text-orange-500 font-bold text-xl">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-3 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-8">
                    {item.description}
                  </p>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}