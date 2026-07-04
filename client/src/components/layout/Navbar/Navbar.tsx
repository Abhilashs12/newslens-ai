const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight">NewsLens AI</h1>

        <nav className="flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Trending</a>
          <a href="#">Bookmarks</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
