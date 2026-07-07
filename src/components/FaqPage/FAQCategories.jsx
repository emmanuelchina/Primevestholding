const categories = [
  "All",
  "General",
  "Investments",
  "Security",
  "Accounts",
  "Deposits",
  "Support",
];

export default function FAQCategories({
  selected,
  setSelected,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`px-6 py-3 rounded-full font-medium transition

          ${
            selected === category
              ? "bg-orange-500 text-white"
              : "bg-gray-100 hover:bg-orange-100 text-gray-700"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
}