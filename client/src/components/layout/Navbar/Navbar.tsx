import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import SignInButton from "./SignInButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FCFBF8]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1450px] items-center justify-between px-10">
        <Logo />

        <Navigation />

        <div className="flex items-center gap-6">
          <SearchBar />
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
