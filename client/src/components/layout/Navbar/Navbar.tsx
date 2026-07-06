import Logo from "../Navbar/Logo";
import Navigation from "../Navbar/SearchBar";
import SearchBar from "../Navbar/SearchBar";
import SignInButton from "../Navbar/SignInButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#FCFBF8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-8">
        <Logo />

        <Navigation />

        <div className="flex items-center gap-5">
          <SearchBar />
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
