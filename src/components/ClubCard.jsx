import { Link } from 'react-router'
import { ArrowRightIcon, CheckIcon } from './Icons'

export default function ClubCard({ club, view, joined }) {
  const isList = view === 'list'

  return (
    <article
      className={`group relative flex overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-brand ${
        isList ? 'flex-col sm:flex-row' : 'h-full flex-col'
      }`}
    >
      <div
        className={`relative shrink-0 bg-cream ${isList ? 'sm:w-72' : ''}`}
      >
        <img
          src={club.image}
          alt={`${club.name} illustration`}
          loading="lazy"
          className="aspect-[8/5] size-full object-cover"
        />
        {joined && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-success px-3 py-1 text-xs font-bold text-white shadow">
            <CheckIcon />
            Joined
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="font-display text-xl font-bold text-brand-dark">
          {club.name}
        </h2>
        <p className="flex-1 text-ink-soft">{club.shortDescription}</p>
        <Link
          to={`/clubs/${club.id}`}
          className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors after:absolute after:inset-0 group-hover:bg-brand-dark focus-visible:outline-offset-4"
        >
          View Details
          <span className="sr-only"> for {club.name}</span>
          <ArrowRightIcon />
        </Link>
      </div>
    </article>
  )
}
