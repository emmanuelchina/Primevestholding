import "../styles/CryptoTicker.css";
const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    image: "/images/crypto/bitcoin.svg",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: "/images/crypto/ethereum.svg",
  },
  {
    name: "Tether",
    symbol: "USDT",
    image: "/images/crypto/usdt.svg",
  },
  {
    name: "BNB",
    symbol: "BNB",
    image: "/images/crypto/bnb.svg",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    image: "/images/crypto/dogecoin.svg",
  },
  {
    name: "Solana",
    symbol: "SOL",
    image: "/images/crypto/solana.svg",
  },
  {
    name: "XRP",
    symbol: "XRP",
    image: "/images/crypto/xrp.svg",
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    image: "/images/crypto/litecoin.svg",
  },
];

export default function CryptoTicker() {
  return (
    <section className="bg-white py-16">

      <div className="text-center mb-10">

        <span className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
          Supported Cryptocurrencies
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
          Invest Using Leading Digital Assets
        </h2>

      </div>

      <div className="crypto-slider">

        <div className="crypto-track">

          {[...coins, ...coins].map((coin, index) => (

            <div
              key={index}
              className="crypto-item"
            >

              <img
                src={coin.image}
                alt={coin.name}
              />

              <div>

                <div className="crypto-name">
                  {coin.name}
                </div>

                <div className="crypto-symbol">
                  {coin.symbol}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}