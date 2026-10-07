import { useMemo, useState } from 'react'
import ClubCard from '../components/ClubCard'
import ClubControls from '../components/ClubControls'
import { clubs } from '../data/clubs'
import { useJoinedClubs } from '../hooks/useJoinedClubs'
import { usePageTitle } from '../hooks/usePageTitle'

function sortClubs(list, sort) {
  const sorted = [...list].sort((a, b) => a.name.localeCompare(b.name))
  return sort === 'name-desc' ? sorted.reverse() : sorted
}

export default function ClubList() {
  usePageTitle('Clubs')

  const [sort, setSort] = useState('name-asc')
  const [view, setView] = useState('grid')
  const { isJoined } = useJoinedClubs()

  const sortedClubs = useMemo(() => sortClubs(clubs, sort), [sort])

  const layoutClasses =
    view === 'grid'
      ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
      : 'flex flex-col gap-5'

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
        Student Clubs
      </h1>
      <p className="mt-2 max-w-2xl text-lg text-ink-soft">
        Pick a club to see what it is about and which events are coming up.
      </p>

      <div className="mt-6">
        <ClubControls
          sort={sort}
          onSortChange={setSort}
          view={view}
          onViewChange={setView}
        />
      </div>

      <p role="status" className="sr-only">
        Showing {sortedClubs.length} clubs,{' '}
        {sort === 'name-asc' ? 'sorted A to Z' : 'sorted Z to A'}, in {view} view.
      </p>

      <ul role="list" className={`mt-6 ${layoutClasses}`}>
        {sortedClubs.map((club) => (
          <li key={club.id} className={view === 'grid' ? 'h-full' : ''}>
            <ClubCard club={club} view={view} joined={isJoined(club.id)} />
          </li>
        ))}
      </ul>
    </div>
  )
}
