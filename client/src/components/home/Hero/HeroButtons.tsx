import { ArrowRight, Bookmark } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex items-center gap-4">
      <button className="flex h-14 items-center gap-3 rounded-xl bg-[#0F766E] px-8 text-white transition hover:bg-[#115E59]">
        Read Full Story
        <ArrowRight size={18} />
      </button>

      <button
        aria-label="Bookmark article"
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-stone-300 transition hover:bg-stone-100"
      >
        <Bookmark size={20} />
      </button>
    </div>
  );
};

export default HeroButtons;
