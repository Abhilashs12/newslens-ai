const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="rounded-2xl border p-10">
        <p className="text-sm font-semibold text-blue-600">Breaking News</p>

        <h1 className="mt-4 text-5xl font-bold">
          AI is transforming the future of news.
        </h1>

        <p className="mt-6 max-w-2xl text-slate-600">
          Personalized news, AI summaries and intelligent recommendations in one
          platform.
        </p>

        <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
          Explore News
        </button>
      </div>
    </section>
  );
};

export default Hero;
