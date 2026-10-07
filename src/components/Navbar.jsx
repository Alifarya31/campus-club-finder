import { Link, NavLink } from 'react-router'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/clubs', label: 'Clubs', end: false },
  { to: '/about', label: 'About', end: true },
]

function linkClasses({ isActive }) {
  const base =
    'rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:text-base'
  return isActive
    ? `${base} bg-brand text-white`
    : `${base} text-ink hover:bg-brand/10`
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg font-display text-lg font-bold text-brand"
        >
          <img src="/favicon.svg" alt="" width="32" height="32" className="size-8" />
          <span className="sr-only sm:not-sr-only">Campus Club Finder</span>
        </Link>

        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={linkClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
