import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Technology", path: "/technology" },
  { name: "AI", path: "/ai" },
  { name: "Business", path: "/business" },
  { name: "World", path: "/world" },
  { name: "Sports", path: "/sports" },
];

const Navigation = () => {
  return (
    <nav className="hidden xl:flex items-center gap-9">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative py-6 text-[16px] font-medium transition-colors duration-200 ${
              isActive
                ? "text-[#0F766E]"
                : "text-slate-700 hover:text-[#0F766E]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.name}

              {isActive && (
                <span className="absolute bottom-2 left-0 h-[2px] w-full rounded-full bg-[#0F766E]" />
              )}
            </>
          )}
        </NavLink>
      ))}

      <button className="flex items-center gap-1 py-6 text-[16px] text-slate-700 hover:text-[#0F766E]">
        More
        <ChevronDown size={16} />
      </button>
    </nav>
  );
};

export default Navigation;
