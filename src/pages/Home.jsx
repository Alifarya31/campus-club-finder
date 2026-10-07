import { Link } from 'react-router'
import { ArrowRightIcon } from '../components/Icons'
import { usePageTitle } from '../hooks/usePageTitle'

const steps = [
  {
    title: 'Browse',
    text: 'See every club in a grid or a list, sorted the way you like.',
  },
  {
    title: 'Learn',
    text: 'Read what each club does and check its upcoming events.',
  },
  {
    title: 'Join',
    text: 'Join with one click. Your choices are saved on this device.',
  },
]

export default function Home() {
  usePageTitle('')

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-4 inline-block rounded-full bg-accent/30 px-4 py-1 text-sm font-bold text-brand-dark">
            Student Affairs presents
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Find your people on campus.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Campus Club Finder helps you discover student clubs, see what they
            are up to, and join the ones that fit you. From robots to
            hiking trails, there is a place for everyone.
          </p>
          <Link
            to="/clubs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-lg font-bold text-ink shadow-sm transition-colors hover:bg-accent-dark"
          >
            Browse Clubs
            <ArrowRightIcon />
          </Link>
        </div>

        <img
          src="/images/hero.svg"
          alt="Illustration of students gathering in front of a campus building, with a gear, a music note, and a mountain badge floating above them"
          width="640"
          height="520"
          className="w-full rounded-[2.75rem] shadow-md"
        />
      </section>

      <section
        aria-labelledby="how-it-works"
        className="border-y border-line bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2
            id="how-it-works"
            className="font-display text-2xl font-bold text-brand-dark sm:text-3xl"
          >
            How it works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
