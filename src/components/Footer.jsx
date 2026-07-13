import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

// import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            {/* Logo */}

            <div className="mb-8">

              {/* Replace with your logo */}

              {/* <img src={logo} alt="PrimeVestHoldings" className="h-16" /> */}

              <div className="h-16 w-64 rounded-lg border border-dashed border-gray-600 flex items-center justify-center text-gray-500">
                YOUR LOGO
              </div>

            </div>

            <p className="text-gray-400 leading-8">
              PrimeVestHoldings is a global cryptocurrency investment
              platform committed to helping investors build long-term
              wealth through secure and transparent investment solutions.
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <a href="/" className="hover:text-orange-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-orange-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/faq" className="hover:text-orange-500 transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-semibold mb-8">
              Legal
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <a href="/security" className="hover:text-orange-500 transition">
                  Security
                </a>
              </li>

              <li>
                <a href="/privacy-policy" className="hover:text-orange-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="hover:text-orange-500 transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/risk-disclosure" className="hover:text-orange-500 transition">
                  Risk Disclosure
                </a>
              </li>

              <li>
                <a href="/aml-kyc" className="hover:text-orange-500 transition">
                  AML / KYC Policy
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-8">
              Contact
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex items-start gap-4">

                <Mail
                  size={20}
                  className="text-orange-500 mt-1"
                />

                <span>
                  support@primevestholdings.com
                </span>

              </div>

              <div className="flex items-start gap-4">

                <Phone
                  size={20}
                  className="text-orange-500 mt-1"
                />

                <span>
                  +49 XXX XXX XXXX
                </span>

              </div>

              <div className="flex items-start gap-4">

                <MapPin
                  size={20}
                  className="text-orange-500 mt-1"
                />

                <span>
                  Germany
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PrimeVestHoldings. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Your Trusted Cryptocurrency Investment Partner
          </p>

        </div>

      </div>

    </footer>
  );
}