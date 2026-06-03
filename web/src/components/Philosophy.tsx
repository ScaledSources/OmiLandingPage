const principles = [
  {
    n: "01",
    tag: "Transparency",
    title: "The record should survive.",
    body: "Public protocol specifications and test data should remain public and discoverable, even after a feed is retired.",
  },
  {
    n: "02",
    tag: "Best practices",
    title: "Code quality is non-negotiable.",
    body: "Source code in the OMI ecosystem follows automated builds, regression testing, clean code, and SOLID principles.",
  },
];

export function Philosophy() {
  return (
    <section id="about" className="bg-surface-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Principles
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Philosophy
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted">
          OMI is market-neutral. We do not take sides between exchanges,
          brokers, trading firms, or technology providers. We do hold
          positions on two things:
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <article
              key={p.n}
              className="rounded-2xl border border-border bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                {p.n} — {p.tag}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
