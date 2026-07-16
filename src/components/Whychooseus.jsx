import trustImage from "../assets/image/trust.jpg";

const features = [
  {
    image: "/images/why/security.svg",
    title: "Bank-Level Security",
    text: "Advanced encryption and institutional-grade security protect your digital assets and personal information.",
  },
  {
    image: "/images/why/growth.svg",
    title: "Consistent Growth",
    text: "Professionally managed cryptocurrency investment strategies focused on long-term performance.",
  },
  {
    image: "/images/why/global.svg",
    title: "Global Access",
    text: "Invest securely from anywhere in the world through our international crypto investment platform.",
  },
  {
    image: "/images/why/management.svg",
    title: "Professional Management",
    text: "Experienced investment professionals monitor every portfolio with discipline and transparency.",
  },
  {
    image: "/images/why/wallet.svg",
    title: "Fast Withdrawals",
    text: "Eligible withdrawals are processed quickly through our secure financial infrastructure.",
  },
  {
    image: "/images/why/transparency.svg",
    title: "Transparent Operations",
    text: "Monitor your investment with clear reporting, real-time updates and straightforward communication.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="max-w-3xl mb-16">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-14 h-[3px] bg-orange-500"></div>

            <span className="uppercase tracking-wider text-orange-500 text-sm font-semibold">
              Why Choose PrimeVestHoldings
            </span>

          </div>

          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 leading-tight">
            A Trusted Cryptocurrency Investment Partner
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-8">
            We combine advanced technology, strong security, professional
            investment management and transparent operations to deliver a
            reliable cryptocurrency investment experience.
          </p>

        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}

          <div>

            <img
              src={trustImage}
              alt="PrimeVestHoldings"
              className="w-full h-[280px] md:h-[450px] lg:h-[650px] rounded-3xl object-cover shadow-xl"
            />

          </div>

          {/* Right Features */}

          <div className="grid gap-5">

            {features.map((feature, index) => (

              <div
                key={index}
                className="group flex items-start gap-5 rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:border-orange-500 hover:shadow-lg"
              >

                {/* SVG Placeholder */}

                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100">

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-9 w-9 object-contain"
                  />

                </div>

                {/* Text */}

                <div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm md:text-base leading-7 text-gray-600">
                    {feature.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}