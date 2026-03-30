const stats = [
  { label: "Returns", value: "1492%" },
  { label: "CAGR", value: "21.3%" },
  { label: "Experience", value: "15+ Years" },
];

export default function Stats() {
  return (
    <section className="grid grid-cols-3 gap-6 p-10 bg-gray-50">
      {stats.map((item, i) => (
        <div key={i} className="p-6 shadow rounded-xl text-center bg-white">
          <h2 className="text-3xl font-bold text-accent">{item.value}</h2>
          <p className="mt-1 text-gray-600">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
