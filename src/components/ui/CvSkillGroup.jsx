export function SkillGroup({ label, items }) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold">{label}</h4>
      <div className="flex flex-wrap gap-2 mt-1">
        {items.map((item, i) => (
          <span
            key={i}
            className="bg-white px-3 py-1 rounded-md border text-sm shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
