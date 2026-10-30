import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Section from './components/Section.jsx';
import ListItem from './components/ListItem.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Contributions from './components/Contributions.jsx';
import Footer from './components/Footer.jsx';
import { education, projects, certifications } from './data.js';

export default function App() {
  return (
    <main className="flex flex-col gap-12 max-w-3xl mx-auto px-4 pt-24 pb-6">
      <Hero />
      <Experience />
      <Section title="education">
        <div className="space-y-4">
          {education.map(e => <ListItem key={e.title} {...e} />)}
        </div>
      </Section>
      <Section title="projects">
        <div className="space-y-4">
          {projects.map(p => <ListItem key={p.title} title={p.title} subtitle={p.description} link={p.url} />)}
        </div>
      </Section>
      <Skills />
      <Section title="certifications">
        <div className="space-y-4">
          {certifications.map(c => <ListItem key={c.title} {...c} />)}
        </div>
      </Section>
      <Contact />
      <Contributions />
      <Footer />
    </main>
  );
}
