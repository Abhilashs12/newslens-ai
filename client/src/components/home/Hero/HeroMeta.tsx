import { Clock3 } from "lucide-react";

const HeroMeta = () => {
  return (
    <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
      <span>By NewsLens AI</span>

      <div className="flex items-center gap-2">
        <Clock3 size={16} />
        <span>5 min read</span>
      </div>

      <span>Technology</span>
    </div>
  );
};

export default HeroMeta;
