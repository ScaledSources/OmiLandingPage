import { contactLinks } from "@/data/directory";

const steps = [
  {
    n: "01",
    title: "Send us the spec",
    body: "Share the exchange's published specification — XML, FIX, PDF, or a link to their docs.",
  },
  {
    n: "02",
    title: "Include pcaps if you have them",
    body: "Packet captures speed up validation but are never required to submit a request.",
  },
  {
    n: "03",
    title: "We handle the rest",
    body: "We normalize, compile, and publish it to the Directory.",
  },
];

export function Contribute() {
  return (
    <section id="contribute" className="bg-surface-muted py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
            Contribute
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Need a protocol added?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-muted">
            Send us the spec and any pcap captures you have (pcaps are
            optional). We&apos;ll add it to the Directory and generate the
            corresponding Wireshark dissector, C structs, C# classes, and Java
            classes.
          </p>
          <a
            href={contactLinks.getInvolved}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark"
          >
            Get Involved
            <Arrow className="h-3 w-3" />
          </a>
        </div>

        <div>
          <ol className="divide-y divide-border rounded-2xl border border-border bg-white">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[56px_1fr] items-start gap-5 px-6 py-6"
              >
                <span className="font-mono text-2xl font-medium text-brand">
                  {s.n}
                </span>
                <div>
                  <p className="font-medium text-ink">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  );
}
