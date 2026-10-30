// A page section with a "$ title" heading; `aside` shows small text on the right of the heading.
export default function Section({ title, aside, children }) {
  const heading = (
    <h2 className="font-pixel text-white text-lg">
      <span className="prompt">$</span> {title}
    </h2>
  );
  return (
    <section className="space-y-4">
      {aside ? (
        <div className="timeline-header">
          {heading}
          <span className="text-neutral-400 text-sm">{aside}</span>
        </div>
      ) : heading}
      {children}
    </section>
  );
}
