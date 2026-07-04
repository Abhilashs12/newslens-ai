const TrendingNews = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Trending Today</h2>

        <button className="text-sm font-semibold">View All →</button>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="rounded-xl border p-5">
            <div className="mb-4 h-40 rounded-lg bg-slate-200"></div>

            <p className="text-sm text-blue-600">Technology</p>

            <h3 className="mt-2 font-semibold">Trending News Headline</h3>

            <p className="mt-2 text-sm text-slate-500">
              Short AI generated summary...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNews;
