export function CTA() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 text-white sm:px-12 sm:py-16">
          {/* decorative bracket shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                OMI is open source,
                <br />
                built with the community.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/85">
                Everything OMI produces is free, MIT-licensed, and
                community-driven. Browse the full catalog, contribute a
                protocol, or just start building.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 lg:items-end">
              <a
                href="https://github.com/Open-Markets-Initiative"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full max-w-sm items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-brand transition-colors hover:bg-white/90 lg:w-auto"
              >
                <GithubMark className="h-4 w-4" />
                Open Markets Initiative on GitHub
              </a>
              <a
                href="#directory"
                className="inline-flex h-11 w-full max-w-sm items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10 lg:w-auto"
              >
                <Bracket className="h-3.5 w-3.5" />
                Browse the catalog
              </a>
              <a
                href="#contribute"
                className="inline-flex h-11 w-full max-w-sm items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10 lg:w-auto"
              >
                Request a protocol
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bracket({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 0v2H2v10h3v2H0V0zM9 0h5v14H9v-2h3V2H9z" />
    </svg>
  );
}

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.08.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}
