import { ArrowRight } from "lucide-react";

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

            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Building Wealth Through Global Investment Strategies
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-8">
              PrimeVestHoldings is an international investment company
              dedicated to helping individuals, businesses, and institutions
              build sustainable wealth through carefully managed investment
              opportunities. Combining financial expertise with innovative
              strategies, we provide secure, transparent, and long-term
              solutions tailored to the evolving global market.
            </p>

            {/* FEATURES */}
            <div className="grid gap-8 mt-10">

              {/* Secure Investments */}
              <div className="flex items-start gap-4">

                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/icons/shield.svg"
                    alt="Secure Investments"
                    className="w-7 h-7"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Secure Investments
                  </h4>

                  <p className="text-gray-600 mt-1">
                    Capital protection and transparent investment management.
                  </p>
                </div>

              </div>

              {/* Worldwide Opportunities */}
              <div className="flex items-start gap-4">

                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/icons/globe.svg"
                    alt="Worldwide Opportunities"
                    className="w-7 h-7"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Worldwide Opportunities
                  </h4>

                  <p className="text-gray-600 mt-1">
                    Diversified portfolios across global financial markets.
                  </p>
                </div>

              </div>

              {/* Sustainable Growth */}
              <div className="flex items-start gap-4">

                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src="/icons/growth.svg"
                    alt="Sustainable Growth"
                    className="w-12 h-12"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Sustainable Growth
                  </h4>

                  <p className="text-gray-600 mt-1">
                    Long-term strategies designed to maximize returns while
                    managing risk responsibly.
                  </p>
                </div>

              </div>

            </div>

            {/* BUTTON */}
            <button className="mt-10 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-7 py-4 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl">
              Learn More
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}