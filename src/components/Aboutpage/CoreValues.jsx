import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Handshake,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, ensuring honesty, transparency and accountability in every investment decision.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Our focus is on creating sustainable long-term financial growth through carefully selected investment opportunities.",
  },
  {
    icon: Handshake,
    title: "Client First",
    description:
      "Every strategy begins with understanding our clients' goals and delivering solutions that create real value.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace technology and modern investment strategies to keep our clients ahead in a changing financial world.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="text-orange-500 uppercase tracking-[5px] font-semibold">
            OUR VALUES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            The Principles That
            <span className="text-orange-500"> Guide Us</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Every decision we make is built upon strong values that
            protect our clients' investments while creating
            opportunities for long-term financial success.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-3xl p-8 hover:bg-orange-500 hover:-translate-y-3 transition-all duration-500 shadow hover:shadow-2xl"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-white flex items-center justify-center transition">

                  <Icon
                    size={32}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mt-8 transition">

                  {value.title}

                </h3>

                <p className="text-gray-600 group-hover:text-gray-100 leading-8 mt-5 transition">

                  {value.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}