import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-4 transition-opacity duration-300 hover:opacity-90"
    >
      {/* Brand Mark */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0F766E]">
        <div className="h-3 w-3 rounded-full bg-[#0F766E]" />
      </div>

      {/* Brand Name */}
      <div className="leading-none">
        <h1 className="text-[40px] font-black tracking-[-2px] text-[#111827]">
          NewsLens
        </h1>

        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.45em] text-slate-500">
          AI POWERED NEWS
        </p>
      </div>
    </Link>
  );
};

export default Logo;
