import { User } from "lucide-react";

const SignInButton = () => {
  return (
    <button className="group flex h-12 items-center gap-3 rounded-full border border-[#0F766E] bg-white px-5 text-sm font-semibold text-[#0F766E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F766E] hover:text-white hover:shadow-lg">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F766E]/10 transition-colors duration-300 group-hover:bg-white/20">
        <User size={16} strokeWidth={2.2} />
      </div>

      <span>Sign In</span>
    </button>
  );
};

export default SignInButton;
