import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden lg:flex items-center">
      <div className="flex h-12 w-[320px] items-center gap-3 rounded-full border border-stone-300 bg-white px-5 transition-all duration-300 hover:border-[#0F766E] focus-within:border-[#0F766E]">
        <Search size={18} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search articles..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
