import {
  Landmark,
  Wallet,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Investors",
    value: "12,856",
    icon: Users,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Assets Managed",
    value: "$18.4M",
    icon: Landmark,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Total Investments",
    value: "$52.8M",
    icon: Wallet,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Average ROI",
    value: "18.6%",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-500",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 border-2 border-gray-200 rounded-3xl shadow-lg p-10">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Orange top line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="flex items-center gap-5">

                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon size={32} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-2xl font-semibold text-gray-600 mt-2">
                      {item.value}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}