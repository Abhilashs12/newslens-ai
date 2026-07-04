import Navbar from "@/components/layout/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
