import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4 shrink-0">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0F766E]">
        <div className="h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-[28px] font-extrabold tracking-[-1px] text-slate-900">
          NewsLens
        </h1>

        <p className="mt-0.5 text-[10px] uppercase tracking-[0.38em] text-slate-500 whitespace-nowrap">
          AI POWERED NEWS
        </p>
      </div>
    </Link>
  );
};

export default Logo;
