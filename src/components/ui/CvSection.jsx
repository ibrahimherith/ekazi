export function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl text-Blue uppercase font-bold mb-3">{title}</h2>
      {children}
    </section>
  );
}
