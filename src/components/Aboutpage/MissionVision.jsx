import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">
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
            OUR PURPOSE
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            Driven By Purpose.
            <span className="text-orange-500"> Focused On Growth.</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Everything we do is guided by a commitment to helping our
            clients build long-term wealth through responsible,
            transparent and innovative investment strategies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-orange-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
              <Target className="text-orange-500" size={32} />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-8">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              To empower individuals and businesses by providing secure,
              transparent and professionally managed investment
              opportunities that create sustainable long-term wealth and
              financial independence.
            </p>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-orange-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
              <Eye className="text-orange-500" size={32} />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-8">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8 mt-6">
              To become one of Africa's most trusted investment firms,
              recognized for innovation, transparency, exceptional
              service and sustainable financial growth for every client.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}