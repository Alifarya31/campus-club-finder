import { Link } from 'react-router'
import { ArrowRightIcon } from '../components/Icons'
import { usePageTitle } from '../hooks/usePageTitle'

const techStack = [
  { name: 'Vite', role: 'Dev server and bundler' },
  { name: 'React', role: 'Components, state, and hooks' },
  { name: 'React Router', role: 'Page navigation and URLs' },
  { name: 'Tailwind CSS', role: 'All of the styling' },
  { name: 'localStorage', role: 'Remembers the clubs you joined' },
]

export default function About() {
  usePageTitle('About')

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
        About Campus Club Finder
      </h1>

      <section aria-labelledby="what-it-does" className="mt-8">
        <h2
          id="what-it-does"
          className="font-display text-2xl font-bold text-brand-dark"
        >
          What this app does
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink">
          Campus Club Finder is a small web app from the Student Affairs
          department. It helps students discover student clubs, learn what each
          club does, see upcoming events, and join the clubs they like.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-ink">
          <li>Browse all clubs and sort them by name, A to Z or Z to A.</li>
          <li>Switch between a grid and a list layout.</li>
          <li>Open a club to read its full description and events.</li>
          <li>Join a club. The app remembers it the next time you visit.</li>
        </ul>
        <p className="mt-4 text-ink-soft">
          There is no sign-in and no server. Everything happens in your
          browser, so the clubs you join are stored only on this device.
        </p>
      </section>

      <section aria-labelledby="tech-stack" className="mt-10">
        <h2
          id="tech-stack"
          className="font-display text-2xl font-bold text-brand-dark"
        >
          Tech stack
        </h2>
        <ul role="list" className="mt-4 grid gap-3 sm:grid-cols-2">
          {techStack.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl border border-line bg-white p-4"
            >
              <p className="font-display text-lg font-bold text-brand">
                {item.name}
              </p>
              <p className="text-ink-soft">{item.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <Link
        to="/clubs"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-dark"
      >
        Explore the clubs
        <ArrowRightIcon />
      </Link>
    </div>
  )
}
