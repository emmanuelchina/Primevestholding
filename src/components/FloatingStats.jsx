import {
  Users,
  Wallet,
  TrendingUp,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "18K+",
    label: "Investors",
  },
  {
    icon: Wallet,
    number: "$250M",
    label: "Assets Managed",
  },
  {
    icon: Globe,
    number: "35+",
    label: "Countries",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Client Satisfaction",
  },
];

export default function FloatingStats() {
  return (
    <div className="relative z-20 -mt-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="text-center group"
                >

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-4 transition duration-300 group-hover:bg-orange-500">

                    <Icon
                      size={30}
                      className="text-orange-500 group-hover:text-white transition"
                    />

                  </div>

                  <h2 className="text-3xl font-bold text-gray-900">
                    {item.number}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}