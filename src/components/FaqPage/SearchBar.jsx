import { Search } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative max-w-2xl mx-auto">

      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        size={22}
      />

      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-14 pr-5 py-4 rounded-full border border-gray-300 focus:border-orange-500 focus:outline-none shadow-sm"
      />

    </div>
  );
}