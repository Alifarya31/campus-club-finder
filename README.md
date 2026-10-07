# Campus Club Finder

A single-page web app from the Student Affairs department that helps students discover, learn about, and join student clubs. There is no backend and no sign-in. Everything runs in the browser, and the clubs a student joins are remembered in `localStorage`.

For a page-by-page walkthrough with screenshots, see [DOCUMENTATION.md](./DOCUMENTATION.md).

## Features

- Home page with a welcome message, a hero illustration, and a button to the club list
- Club list with five default clubs, shown as cards
  - Sort by name, A to Z or Z to A
  - Toggle between a grid view and a list view
- Club detail page with a large image, the full description, and upcoming events
- "Join Club" button that saves the choice in `localStorage` and shows a confirmation
- About page that explains the app and its tech stack
- Friendly 404 page with a button back to Home
- Navbar on every page that highlights the current page
- Responsive layout for mobile, tablet, and desktop, with an accessible UI (keyboard friendly, visible focus, labelled controls, skip link)

## Tech stack

| Tool | Used for |
| --- | --- |
| [Vite](https://vite.dev) | Project setup, dev server, and bundling |
| [React](https://react.dev) 19 | UI built from functional components and hooks |
| [React Router](https://reactrouter.com) 7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com) 4 | All styling, through the official Vite plugin |
| `localStorage` | Remembering which clubs were joined |

## Getting started

You need Node.js 20.19 or newer (or 22.12 or newer), which is what Vite 8 requires. Check yours with `node -v`.

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with oxlint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/clubs` | Club list |
| `/clubs/:clubId` | Club detail, for example `/clubs/robotics` |
| `/about` | About |
| `*` | 404 Not Found |

## Project structure

```
src/
  data/clubs.js            The 5 default clubs (data is separate from the UI)
  hooks/useJoinedClubs.js  Joined clubs state, saved in localStorage
  hooks/usePageTitle.js    Sets the browser tab title for each page
  components/              Navbar, Footer, ClubCard, ClubControls, Icons, ScrollToTop
  pages/                   Home, ClubList, ClubDetail, About, NotFound
  App.jsx                  Layout and route definitions
  main.jsx                 App entry point (BrowserRouter)
public/images/             Club illustrations and the hero image (SVG)
docs/screenshots/          Screenshots used by DOCUMENTATION.md
```

## How the main pieces work

- **Sorting and view toggle.** `ClubList` keeps `sort` and `view` in `useState`. It passes them, with their setter functions, as props to `ClubControls`, and passes `view` to every `ClubCard`.
- **Joining a club.** The `useJoinedClubs` hook reads the list of joined club ids from `localStorage` when the app loads, and writes it back whenever it changes. The storage key is `campus-club-finder:joined-clubs`. If storage is empty, unavailable, or damaged, the app falls back to an empty list instead of crashing.
- **Data.** Clubs live only in `src/data/clubs.js`. To change a club or add one, edit that file.

## Notes

- The club images are simple SVG illustrations stored in `public/images/`. To use photos instead, add the files to that folder and update the `image` paths in `src/data/clubs.js`.
- When deploying, configure the host to serve `index.html` for every path (single-page app fallback), so that links like `/clubs/robotics` still work after a refresh. Many static hosts need a rewrite rule for this. For example, Netlify uses a `_redirects` file containing `/* /index.html 200`. `npm run preview` already does this.

## Publishing to GitHub

```bash
git init
git add .
git commit -m "Add Campus Club Finder"
git branch -M main
git remote add origin https://github.com/<your-username>/campus-club-finder.git
git push -u origin main
```

Make sure the repository visibility is set to **Public**.
