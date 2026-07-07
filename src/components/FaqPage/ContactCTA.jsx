import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="bg-orange-500 p-12 text-white flex flex-col justify-center">

              <span className="uppercase tracking-[4px] font-semibold">
                SUPPORT
              </span>

              <h2 className="text-4xl font-bold mt-5 leading-tight">
                Still Have Questions?
              </h2>

              <p className="mt-6 text-orange-100 leading-8">
                Our experienced support team is available to assist
                investors around the world. Whether you need help
                choosing an investment plan or have questions about
                your account, we're here to help.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <Mail size={24} />
                  <span>support@primevestholdings.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <Phone size={24} />
                  <span>+49 30 1234 5678</span>
                </div>

                <div className="flex items-center gap-4">
                  <MessageCircle size={24} />
                  <span>24/7 Customer Assistance</span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="p-12 flex flex-col justify-center">

              <h3 className="text-3xl font-bold text-gray-900">
                Let's Help You Invest With Confidence
              </h3>

              <p className="text-gray-600 mt-6 leading-8">
                If you couldn't find the answer you were looking for,
                our specialists are ready to assist you with any
                questions regarding our investment services,
                registration process, or account management.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link to="/contact">
                  <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold">
                    Contact Us
                  </button>
                </Link>

                <Link to="/">
                  <button className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition px-8 py-4 rounded-xl font-semibold">
                    Get Started
                  </button>
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}