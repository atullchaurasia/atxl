import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="flex gap-2 flex-wrap items-center justify-between border-t border-neutral-700 pt-4 pb-12 mt-6">
      <p className="text-sm text-neutral-400">© {new Date().getFullYear()} {profile.name}</p>    </footer>
  );
}
