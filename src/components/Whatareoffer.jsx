export default function Stats() {
  const offers = [
    {
      title: "Portfolio Management",
      description:
        "We help manage diversified portfolios with strategies designed to match your financial goals and risk appetite.",
    },
    {
      title: "Wealth Growth",
      description:
        "Our investment solutions are built to support steady capital growth through disciplined market planning.",
    },
    {
      title: "Risk Management",
      description:
        "We focus on protecting your capital with smart risk controls, market analysis, and structured planning.",
    },
    {
      title: "Expert Advisory",
      description:
        "Get access to professional guidance from experienced market analysts and investment specialists.",
    },
  ];

  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
            What We Offer
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Investment Solutions Built for Growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/65 sm:text-lg">
            We provide smart, secure, and performance-driven services designed
            to help individuals and businesses grow their capital.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offers.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(28,18,19,0.95),rgba(11,11,11,0.95))] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-orange-500/15 ring-1 ring-orange-500/30" />
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}