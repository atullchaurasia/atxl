// One "> title" row used by education, projects and certifications.
// The right side shows `link` as "View Project →" if given, otherwise `dates`.
export default function ListItem({ title, subtitle, dates, link }) {
  return (
    <div className="flex flex-wrap items-start justify-between space-y-1">
      <div className="flex flex-col space-y-1">
        <div className="font-semibold flex items-center space-x-2">
          <span className="marker">&gt;</span> <span className="font-semibold">{title}</span>
        </div>
        {subtitle && <p className="text-neutral-400 text-sm">{subtitle}</p>}
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm">
          View Project →
        </a>
      ) : dates && (
        <p className="text-neutral-400 text-sm pl-4" style={{ flexShrink: 0 }}>{dates}</p>
      )}
    </div>
  );
}
