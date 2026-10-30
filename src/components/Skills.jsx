import Section from './Section.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <Section title="skills">
      <p className="text-neutral-400 mb-3">tools i've picked up building llm agents, rag pipelines and ml models.</p>
      <div className="flex flex-wrap gap-3">
        {skills.map(([name, icon]) => (
          <span key={name} className="tech-tag group">
            <i className={`${icon} mr-2`}></i> {name}
          </span>
        ))}
      </div>
    </Section>
  );
}
