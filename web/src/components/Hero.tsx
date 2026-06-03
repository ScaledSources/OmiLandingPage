import { CANONICAL_PROTOCOL_COUNT, organizations } from "@/data/directory";

const heroStats = [
  {
    value: String(organizations.length),
    title: "Financial organizations",
    description: "Nasdaq, NYSE, CME, CBOE, LSE, HKEX and more",
  },
  {
    value: String(CANONICAL_PROTOCOL_COUNT),
    title: "Wire protocols documented",
    description: "Market data, order entry, encoding formats",
  },
  {
    value: "4",
    title: "Generated output targets",
    description: "Lua · C · C# · Java — all source-generated",
  },
  {
    value: "MIT",
    title: "Open source license",
    description: "Free to use, modify, and distribute",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:pt-28">
        <div>
          <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Democratizing
            <br />
            access to{" "}
            <span className="text-brand">modern electronic markets.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-ink-muted">
            Protocols are normalized as intermediate binary representations,
            then compiled into{" "}
            <InlineCode>Wireshark dissectors</InlineCode>,{" "}
            <InlineCode>C structs</InlineCode>,{" "}
            <InlineCode>C# packed structs</InlineCode>, and{" "}
            <InlineCode>Java classes</InlineCode>. One model, every venue,
            every language.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#directory"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-medium text-ink shadow-sm transition-colors hover:border-ink/30 hover:bg-surface-muted"
            >
              <BracketIcon className="h-3.5 w-3.5 text-brand" />
              Browse the catalogue
            </a>
            <a
              href="https://github.com/Open-Markets-Initiative"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              <GithubMark className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-border bg-white p-2 shadow-[0_30px_80px_-30px_rgba(11,61,145,0.25)]">
            <ul className="divide-y divide-border">
              {heroStats.map((stat) => (
                <li
                  key={stat.title}
                  className="grid grid-cols-[80px_1fr] items-center gap-4 px-5 py-5"
                >
                  <span className="text-3xl font-semibold tracking-tight text-brand">
                    {stat.value}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{stat.title}</p>
                    <p className="text-xs text-ink-muted">{stat.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
      {children}
    </code>
  );
}

function BracketIcon({ className }: { className?: string }) {
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
