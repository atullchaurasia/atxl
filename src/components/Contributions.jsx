import { useEffect, useRef, useState } from 'react';
import Section from './Section.jsx';
import { profile } from '../data.js';

const CELL = 'h-2 w-2 lg:h-3 lg:w-3';

// Splits days into GitHub-style week columns (Sunday on top), padding the first week.
function toWeeks(days) {
  const weeks = [];
  days.forEach((d, i) => {
    const dow = new Date(d.date + 'T00:00:00').getDay();
    if (!weeks.length || dow === 0) weeks.push(i === 0 ? Array(dow).fill(null) : []);
    weeks[weeks.length - 1].push(d);
  });
  return weeks;
}

function stats(days) {
  const counts = days.map(d => d.count);
  let longest = 0, run = 0;
  counts.forEach(c => { run = c > 0 ? run + 1 : 0; longest = Math.max(longest, run); });
  // today may have no commits yet, so the streak can still be alive from yesterday
  let current = 0;
  const last = counts[counts.length - 1] > 0 ? counts.length - 1 : counts.length - 2;
  for (let i = last; i >= 0 && counts[i] > 0; i--) current++;
  return [
    ['total', counts.reduce((a, b) => a + b, 0)],
    ['active days', counts.filter(c => c > 0).length],
    ['best day', Math.max(...counts)],
    ['current streak', current + 'd'],
    ['longest streak', longest + 'd'],
  ];
}

// Real GitHub contribution graph for the last year, via the public github-contributions-api.
export default function Contributions() {
  const [days, setDays] = useState(null);
  const [failed, setFailed] = useState(false);
  const scroller = useRef(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.github}?y=last`)
      .then(res => { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(data => {
        if (!data.contributions?.length) throw new Error('no data');
        setDays(data.contributions);
      })
      .catch(() => setFailed(true));
  }, []);

  useEffect(() => {
    if (scroller.current) scroller.current.scrollLeft = scroller.current.scrollWidth;
  }, [days]);

  if (failed) return null;

  return (
    <Section title="contributions">
      <div className="flex flex-col items-center justify-center relative">
        <div ref={scroller} className="overflow-x-auto w-full">
          <div className="flex gap-1 min-w-max">
            {days && toWeeks(days).map((week, w) => (
              <div key={w} className="flex flex-col gap-1">
                {week.map((d, i) => d ? (
                  <div key={d.date} className={CELL} title={`${d.date} - ${d.count} contribution${d.count === 1 ? '' : 's'}`}
                    style={{ backgroundColor: `var(--contrib-${d.level})`, borderRadius: '2px' }} />
                ) : <div key={'pad' + i} className={CELL} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
      {days && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-neutral-400">
          <span className="font-pixel text-white">stats:</span>
          {stats(days).map(([label, value]) => (
            <span key={label}>{label}: <span className="text-white">{value}</span></span>
          ))}
          <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-neutral-400">
            view on github →
          </a>
        </div>
      )}
    </Section>
  );
}
