import { profile } from '../data.js';

export default function Hero() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-pixel">{profile.name}</h1>
        <p className="text-neutral-400">{profile.role}</p>
      </div>
      <p>
        {profile.bio[0]}
        <br />
        {profile.bio[1]}
      </p>
    </section>
  );
}
