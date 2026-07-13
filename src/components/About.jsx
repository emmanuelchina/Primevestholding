import { ArrowRight, ShieldCheck, Globe2, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="relative">

            <img
              src="/images/about.jpg"
              alt="PrimeVestHoldings"
              className="rounded-2xl shadow-2xl w-full h-[550px] object-cover"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 w-64">

              <h3 className="text-4xl font-bold text-orange-500">
                10+
              </h3>

              <p className="text-gray-600 mt-2">
                Years of Global Investment Excellence
              </p>

            </div>

          </div>

          {/* TEXT */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-14 h-[3px] bg-orange-500"></div>

              <span className="uppercase tracking-widest text-orange-500 font-semibold text-sm">
                About Us
              </span>

            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

              Building Wealth Through
              <span className="text-orange-500">
                {" "}Global Investment Strategies
              </span>

            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-8">

              PrimeVestHoldings is an international investment company
              dedicated to helping individuals, businesses, and institutions
              build sustainable wealth through carefully managed investment
              opportunities. Combining financial expertise with innovative
              strategies, we provide secure, transparent, and long-term
              solutions tailored to the evolving global market.

            </p>

            <div className="grid gap-6 mt-10">

              <div className="flex items-start gap-4">

                <div className="bg-orange-100 p-3 rounded-lg">

                  <ShieldCheck className="text-orange-500" size={24} />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Secure Investments
                  </h4>

                  <p className="text-gray-600">
                    Capital protection and transparent investment management.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-orange-100 p-3 rounded-lg">

                  <Globe2 className="text-orange-500" size={24} />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Worldwide Opportunities
                  </h4>

                  <p className="text-gray-600">
                    Diversified portfolios across global financial markets.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-orange-100 p-3 rounded-lg">

                  <TrendingUp className="text-orange-500" size={24} />

                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Sustainable Growth
                  </h4>

                  <p className="text-gray-600">
                    Long-term strategies designed to maximize returns while
                    managing risk responsibly.
                  </p>

                </div>

              </div>

            </div>

            <button
              className="mt-10 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-7 py-4 rounded-lg text-white font-semibold"
            >
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}