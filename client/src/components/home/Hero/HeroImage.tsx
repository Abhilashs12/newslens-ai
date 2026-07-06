import heroImage from "@/assets/images/hero.jpg";
import { ArrowUpRight } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-xl">
      <img
        src={heroImage}
        alt="Featured Story"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
          FEATURED STORY
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-tight">
          OpenAI unveils the next generation of AI assistants
        </h2>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-white/80">Updated 2 hours ago</p>
          </div>

          <button
            aria-label="Read featured story"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 transition hover:scale-110"
          >
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
