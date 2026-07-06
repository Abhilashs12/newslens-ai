import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroMeta from "./HeroMeta";

const Hero = () => {
  return (
    <section className="mx-auto mt-14 grid max-w-7xl grid-cols-12 items-center gap-14 px-6 lg:px-8">
      <div className="col-span-5">
        <HeroContent />

        <HeroButtons />

        <HeroMeta />
      </div>

      <div className="col-span-7">
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
