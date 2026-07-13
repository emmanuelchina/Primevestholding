const steps = [
  {
    number: "01",
    image: "/images/how/account.svg",
    title: "Create an Account",
    text: "Sign up securely in just a few minutes with your email address.",
  },
  {
    number: "02",
    image: "/images/how/verify.svg",
    title: "Verify Your Identity",
    text: "Complete the verification process to keep your account secure.",
  },
  {
    number: "03",
    image: "/images/how/plan.svg",
    title: "Choose a Plan",
    text: "Select the cryptocurrency investment plan that suits your goals.",
  },
  {
    number: "04",
    image: "/images/how/deposit.svg",
    title: "Fund Your Investment",
    text: "Deposit cryptocurrency securely using your preferred wallet.",
  },
  {
    number: "05",
    image: "/images/how/growth.svg",
    title: "Track Your Portfolio",
    text: "Monitor your investment performance from your dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-[3px] bg-orange-500"></div>

            <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
              How It Works
            </span>

            <div className="w-14 h-[3px] bg-orange-500"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Start Investing in Five Simple Steps
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Opening an investment account with PrimeVestHoldings is simple,
            secure, and designed to get you started quickly.
          </p>

        </div>

        {/* Desktop Timeline */}

        <div className="hidden lg:grid lg:grid-cols-5 gap-8 relative">

          <div className="absolute top-12 left-[10%] right-[10%] h-[3px] bg-orange-200"></div>

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative text-center"
            >

              {/* Number */}

              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Card */}

              <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100">

                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-10 w-10 object-contain"
                  />

                </div>

             <p className="mt-3 font-bold text-gray-900">
  {step.title}
</p>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {step.text}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Mobile Timeline */}

        <div className="lg:hidden space-y-6">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-5"
            >

              <div className="flex flex-col items-center">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  {step.number}
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-[3px] flex-1 bg-orange-300 my-2"></div>
                )}

              </div>

              <div className="flex-1 rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 border border-orange-100">

                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-8 w-8 object-contain"
                  />

                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-7">
                  {step.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}