// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import {
//   Globe,
//   Users,
//   Building2,
//   TrendingUp,
// } from "lucide-react";

// const stats = [
//   {
//     icon: Globe,
//     end: 50,
//     suffix: "+",
//     title: "Countries",
//     description: "Global presence",
//   },
//   {
//     icon: Users,
//     end: 120,
//     suffix: "K+",
//     title: "Investors",
//     description: "Worldwide clients",
//   },
//   {
//     icon: Building2,
//     end: 10,
//     suffix: "+",
//     title: "Years",
//     description: "Industry experience",
//   },
//   {
//     icon: TrendingUp,
//     end: 500,
//     prefix: "€",
//     suffix: "M+",
//     title: "Assets",
//     description: "Managed globally",
//   },
// ];

// function Counter({ end, prefix = "", suffix = "", start }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let current = 0;

//     const duration = 1800;
//     const interval = 16;
//     const increment = end / (duration / interval);

//     const timer = setInterval(() => {
//       current += increment;

//       if (current >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, [start, end]);

//   return (
//     <>
//       {prefix}
//       {count}
//       {suffix}
//     </>
//   );
// }

// export default function CompanyStats() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-[#f8f9fb] py-20"
//     >
//       {/* Background */}

//       <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-orange-100 blur-[130px] opacity-30"></div>

//       <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gray-200 blur-[150px] opacity-40"></div>

//       <div className="relative max-w-7xl mx-auto px-5">

//         {/* Heading */}

//         <div className="max-w-2xl mx-auto text-center">

//           <span className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
//             OUR IMPACT
//           </span>

//           <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
//             Trusted Across The World
//           </h2>

//           <p className="mt-5 text-gray-600 text-base md:text-lg leading-7">
//             Delivering secure investment opportunities with a commitment to
//             transparency, innovation, and long-term growth.
//           </p>

//         </div>

//         {/* Stats */}

//         <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

//           {stats.map((stat, index) => {
//             const Icon = stat.icon;

//             return (
//               <div
//                 key={index}
//                 className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl"
//               >
//                 {/* Icon */}

//                 <div className="mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-500">

//                   <Icon
//                     size={22}
//                     className="text-orange-500 group-hover:text-white transition-colors"
//                   />

//                 </div>

//                 {/* Number */}

//                 <h3 className="text-3xl md:text-4xl font-bold text-gray-900">

//                   <Counter
//                     end={stat.end}
//                     prefix={stat.prefix}
//                     suffix={stat.suffix}
//                     start={inView}
//                   />

//                 </h3>

//                 {/* Title */}

//                 <h4 className="mt-2 text-base md:text-lg font-semibold text-gray-900">
//                   {stat.title}
//                 </h4>

//                 {/* Description */}

//                 <p className="hidden md:block mt-2 text-sm text-gray-600 leading-6">
//                   {stat.description}
//                 </p>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    image: "/images/stats/countries.svg",
    end: 50,
    suffix: "+",
    title: "Countries",
    description: "Global presence",
  },
  {
    image: "/images/stats/investors.svg",
    end: 120,
    suffix: "K+",
    title: "Investors",
    description: "Worldwide clients",
  },
  {
    image: "/images/stats/years.svg",
    end: 10,
    suffix: "+",
    title: "Years",
    description: "Industry experience",
  },
  {
    image: "/images/stats/assets.svg",
    end: 500,
    prefix: "€",
    suffix: "M+",
    title: "Assets",
    description: "Managed globally",
  },
];

function Counter({ end, prefix = "", suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const duration = 1800;
    const interval = 16;
    const increment = end / (duration / interval);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export default function CompanyStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Background Decoration */}

      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-orange-100 blur-[130px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gray-200 blur-[150px] opacity-40"></div>

      <div className="relative  mx-auto px-5">

        {/* Heading */}

        <div className=" mx-auto">

          {/* <span className="uppercase tracking-[4px] text-sm font-semibold text-orange-500">
            OUR IMPACT
          </span> */}
            <div className="flex items-center gap-3 mb-5">

          <div className="w-14 h-[3px] bg-orange-500"></div>

              <span className="uppercase tracking-widest text-orange-500 font-semibold text-sm">
                OUR IMPACT
              </span>
              </div>

          <h2 className="mt-3 text-2xl md:text-2xl font-bold text-gray-900">
            Trusted Across The World
          </h2>

          <p className="mt-5 text-base md:text-lg leading-7 text-gray-600">
            Delivering secure investment opportunities with a commitment to
            transparency, innovation, and long-term growth.
          </p>

        </div>

        {/* Stats Grid */}

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl"
            >
              {/* Image */}

              <div className="mb-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-orange-100 bg-orange-50 md:h-14 md:w-14">

                <img
                  src={stat.image}
                  alt={stat.title}
                  className="h-7 w-7 object-contain md:h-8 md:w-8"
                />

              </div>

              {/* Number */}

              <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">

                <Counter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  start={inView}
                />

              </h3>

              {/* Title */}

              <h4 className="mt-2 text-base font-semibold text-gray-900 md:text-lg">
                {stat.title}
              </h4>

              {/* Description */}

              <p className="mt-2 hidden text-sm leading-6 text-gray-600 md:block">
                {stat.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}