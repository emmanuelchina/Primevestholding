export default function CTASection() {
  return (
    <section className="bg-[#111827] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="border border-gray-700 rounded-3xl p-10 md:p-16 text-center">

          <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
            Get Started Today
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Build Your Crypto Portfolio With Confidence
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
            Join PrimeVestHoldings and access professionally managed
            cryptocurrency investment opportunities designed for long-term
            financial growth.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-xl text-white font-semibold">
              Get Started
            </button>

            <button className="border border-gray-500 hover:border-orange-500 hover:text-orange-500 transition px-10 py-4 rounded-xl text-white font-semibold">
              Contact Us
            </button>

          </div>



        </div>

      </div>

    </section>
  );
}