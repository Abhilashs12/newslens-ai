import { User } from "lucide-react";

const SignInButton = () => {
  return (
    <button className="flex h-12 items-center gap-2 rounded-full border border-[#0F766E] px-6 text-sm font-semibold text-[#0F766E] transition-all duration-300 hover:bg-[#0F766E] hover:text-white">
      <User size={17} />
      Sign In
    </button>
  );
};

export default SignInButton;
