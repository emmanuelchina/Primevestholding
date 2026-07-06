export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold">
          PrimeVest
          <span className="text-orange-500">
            Holdings
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Secure investments. Smarter wealth. Brighter future.
        </p>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} PrimeVestHoldings.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}