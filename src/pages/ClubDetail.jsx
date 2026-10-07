import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'
import { clubs } from '../data/clubs'
import { useJoinedClubs } from '../hooks/useJoinedClubs'
import { usePageTitle } from '../hooks/usePageTitle'
import NotFound from './NotFound'

const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
})
const dayFormat = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  timeZone: 'UTC',
})
const fullFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

export default function ClubDetail() {
  const { clubId } = useParams()
  const club = clubs.find((item) => item.id === clubId)

  const { isJoined, joinClub } = useJoinedClubs()
  const [justJoined, setJustJoined] = useState(false)

  usePageTitle(club ? club.name : 'Club not found')

  if (!club) {
    return (
      <NotFound
        title="We couldn't find that club"
        message="The club you are looking for does not exist. It may have been renamed or the link may be wrong."
        actionTo="/clubs"
        actionLabel="See all clubs"
      />
    )
  }

  const joined = isJoined(club.id)
  const events = [...club.events].sort((a, b) => a.date.localeCompare(b.date))

  function handleJoin() {
    joinClub(club.id)
    setJustJoined(true)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link
        to="/clubs"
        className="inline-flex items-center gap-2 rounded-lg font-semibold text-brand hover:text-brand-dark"
      >
        <ArrowLeftIcon />
        All clubs
      </Link>

      <h1 className="mt-5 font-display text-3xl font-extrabold text-brand-dark sm:text-5xl">
        {club.name}
      </h1>
      <p className="mt-2 text-lg text-ink-soft">{club.shortDescription}</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_20rem] lg:grid-rows-[auto_1fr]">
        <div className="lg:col-start-1">
          <img
            src={club.image}
            alt={`${club.name} illustration`}
            className="aspect-[8/5] w-full rounded-3xl border border-line object-cover"
          />
          <section aria-labelledby="about-club" className="mt-8">
            <h2
              id="about-club"
              className="font-display text-2xl font-bold text-brand-dark"
            >
              About this club
            </h2>
            <p className="mt-3 max-w-prose text-lg leading-relaxed text-ink">
              {club.description}
            </p>
          </section>
        </div>

        <aside
          aria-labelledby="join-heading"
          className="h-fit rounded-3xl border border-line bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <h2
            id="join-heading"
            className="font-display text-xl font-bold text-brand-dark"
          >
            Interested in {club.name}?
          </h2>
          <p className="mt-2 text-ink-soft">
            Join to keep this club on your list. It is saved in this browser.
          </p>

          <div role="status" aria-live="polite" className="mt-4">
            {joined && (
              <div className="rounded-xl bg-success-soft p-4 text-success">
                <p className="flex items-center gap-2 font-bold">
                  <CheckIcon />
                  You have joined this club!
                </p>
                {justJoined && (
                  <p className="mt-1 text-sm">
                    Welcome aboard. Check the events below and mark your calendar.
                  </p>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleJoin}
            disabled={joined}
            className="mt-4 w-full rounded-full bg-accent px-6 py-3 text-lg font-bold text-ink transition-colors enabled:hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-soft"
          >
            {joined ? 'Joined' : 'Join Club'}
          </button>
        </aside>

        <section aria-labelledby="events-heading" className="lg:col-start-1">
          <h2
            id="events-heading"
            className="font-display text-2xl font-bold text-brand-dark"
          >
            Upcoming events
          </h2>
          <ul role="list" className="mt-4 flex flex-col gap-3">
            {events.map((event) => {
              const date = new Date(event.date)
              return (
                <li
                  key={event.name}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4"
                >
                  <time
                    dateTime={event.date}
                    className="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand text-white"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide">
                      {monthFormat.format(date)}
                    </span>
                    <span className="font-display text-2xl font-bold leading-none">
                      {dayFormat.format(date)}
                    </span>
                    <span className="sr-only">{fullFormat.format(date)}</span>
                  </time>
                  <div>
                    <p className="text-lg font-bold text-ink">{event.name}</p>
                    <p className="text-sm text-ink-soft">
                      {fullFormat.format(date)}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}
