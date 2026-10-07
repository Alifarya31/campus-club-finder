import { GridIcon, ListIcon } from './Icons'

const views = [
  { value: 'grid', label: 'Grid', Icon: GridIcon },
  { value: 'list', label: 'List', Icon: ListIcon },
]

export default function ClubControls({ sort, onSortChange, view, onViewChange }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <label htmlFor="club-sort" className="font-semibold text-ink">
          Sort by
        </label>
        <select
          id="club-sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="min-h-11 flex-1 rounded-lg border border-line bg-white px-3 py-2 text-ink sm:flex-none"
        >
          <option value="name-asc">Name (A to Z)</option>
          <option value="name-desc">Name (Z to A)</option>
        </select>
      </div>

      <div role="group" aria-label="Choose layout" className="flex gap-2">
        {views.map(({ value, label, Icon }) => {
          const active = view === value
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => onViewChange(value)}
              className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-2 font-semibold transition-colors sm:flex-none ${
                active
                  ? 'border-brand bg-brand text-white'
                  : 'border-line bg-white text-ink hover:border-brand'
              }`}
            >
              <Icon />
              {label}
              <span className="sr-only"> view</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
