const stats = [
  { label: "Returns", value: "1,492%" },
  { label: "CAGR", value: "21.3%" },
  { label: "Experience", value: "15+ Years" },
];

export default function Stats() {
  return (
    <section className="w-full bg-surface py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-8 text-center">
            <h2 className="text-3xl font-bold text-black">{item.value}</h2>
            <p className="mt-2 text-muted text-sm tracking-wide uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
