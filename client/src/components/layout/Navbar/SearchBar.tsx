import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden xl:flex items-center">
      <div className="group flex h-12 w-[340px] items-center gap-3 rounded-full border border-stone-300 bg-white px-5 transition-all duration-300 hover:border-[#0F766E] hover:shadow-lg focus-within:border-[#0F766E] focus-within:shadow-lg">
        <Search
          size={20}
          strokeWidth={2}
          className="text-slate-500 group-focus-within:text-[#0F766E]"
        />

        <input
          type="text"
          placeholder="Search articles..."
          className="flex-1 bg-transparent text-[15px] text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />

        <div className="rounded-md bg-stone-100 px-2 py-1 text-[11px] font-medium text-slate-500">
          Ctrl K
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
