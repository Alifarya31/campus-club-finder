import { Link } from 'react-router'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound({
  title = 'Oops, this page took a wrong turn',
  message = "We couldn't find the page you were looking for. Let's get you back to somewhere familiar.",
  actionTo = '/',
  actionLabel = 'Back to Home',
}) {
  usePageTitle('Page not found')

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <p
        aria-hidden="true"
        className="font-display text-8xl font-extrabold text-brand sm:text-9xl"
      >
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-lg text-ink-soft">{message}</p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to={actionTo}
          className="rounded-full bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-dark"
        >
          {actionLabel}
        </Link>
        {actionTo !== '/' && (
          <Link
            to="/"
            className="rounded-full border border-brand px-6 py-3 font-bold text-brand transition-colors hover:bg-brand/10"
          >
            Back to Home
          </Link>
        )}
      </div>
    </div>
  )
}
