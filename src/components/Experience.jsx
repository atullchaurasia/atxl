import Section from './Section.jsx';
import { experience } from '../data.js';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const parse = ym => ym.split('-').map(Number);
const label = ym => { const [y, m] = parse(ym); return `${MONTHS[m - 1]} ${y}`; };

// Whole months, inclusive, like LinkedIn; the current role keeps growing.
function duration(start, end) {
  const now = new Date();
  const [sy, sm] = parse(start);
  const [ey, em] = end ? parse(end) : [now.getFullYear(), now.getMonth() + 1];
  const total = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(total / 12), m = total % 12;
  const parts = [];
  if (y) parts.push(y + (y === 1 ? ' year' : ' years'));
  if (m) parts.push(m + (m === 1 ? ' month' : ' months'));
  return parts.join(', ');
}

export default function Experience() {
  const firstYear = Math.min(...experience.map(e => parse(e.start)[0]));
  return (
    <Section title="experience" aside={`${experience.length} roles · since ${firstYear}`}>
      <ol className="timeline">
        {experience.map(e => (
          <li key={e.role + e.company} className={'timeline-item' + (e.end ? '' : ' timeline-current')}>
            <div className="timeline-row">
              <span className="font-semibold text-white">{e.role}</span>
              <span className="timeline-dates text-neutral-400 text-sm">
                {label(e.start)} – {e.end ? label(e.end) : 'now'}
              </span>
            </div>
            <p className="timeline-company text-neutral-400">{e.company}</p>
            <p className="timeline-duration text-neutral-500 text-sm">{duration(e.start, e.end)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
