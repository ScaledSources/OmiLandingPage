const SCALED_SOURCES_URL = "https://scaledsources.com";

const targets = [
  { ext: "*.lua", label: "wireshark-lua" },
  { ext: "*.h", label: "c-structs" },
  { ext: "*.cs", label: "CSharp.Packed.Structs" },
  { ext: "*.java", label: "omi.java.protocol.classes" },
];

export function Compiler() {
  return (
    <section id="compiler" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Technology · Scaled Sources
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          The compiler
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted">
          Each venue&apos;s published specification is normalized into a
          universal binary protocol model, then compiled into target-language
          artifacts — one model, every language. The compiler is developed by{" "}
          <a
            href={SCALED_SOURCES_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand hover:text-brand-dark"
          >
            Scaled Sources
          </a>{" "}
          and contributed to OMI as open source.
        </p>

        {/* Diagram */}
        <div className="relative mt-12 rounded-2xl border border-border bg-surface-muted p-6 sm:p-10">
          <a
            href={SCALED_SOURCES_URL}
            target="_blank"
            rel="noreferrer"
            className="absolute left-4 top-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted transition-colors hover:text-brand sm:left-6 sm:top-5"
          >
            Powered by Scaled Sources
            <ExternalArrow className="h-2.5 w-2.5" />
          </a>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <DiagramBox label="spec/" sub="*.xml , *.fix" tone="muted" />
              <Connector label="normalize" />
              <DiagramBox
                label="universal binary"
                sub="protocol model"
                tone="brand"
              />
              <Connector label="compile" />
              <DiagramBox
                label="back-end"
                sub="targets"
                tone="brand"
              />
            </div>

            <ul className="space-y-2 lg:min-w-[220px]">
              {targets.map((t) => (
                <li
                  key={t.ext}
                  className="flex items-center justify-between gap-4 rounded-md border border-border bg-white px-3 py-2 text-xs"
                >
                  <span className="font-mono text-ink">{t.ext}</span>
                  <span className="font-mono text-ink-muted">{t.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-xs text-ink-muted">
            Every output language is a backend on the same model — fix the
            model once, regenerate every downstream artifact.
          </p>
        </div>
      </div>
    </section>
  );
}

function DiagramBox({
  label,
  sub,
  tone,
}: {
  label: string;
  sub: string;
  tone: "muted" | "brand";
}) {
  const isBrand = tone === "brand";
  return (
    <div
      className={
        isBrand
          ? "rounded-lg bg-brand px-4 py-3 text-center text-white shadow-[0_8px_30px_-12px_rgba(11,61,145,0.6)]"
          : "rounded-lg border border-border bg-white px-4 py-3 text-center text-ink"
      }
    >
      <p className="text-sm font-semibold">{label}</p>
      <p
        className={
          isBrand
            ? "mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white/75"
            : "mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted"
        }
      >
        {sub}
      </p>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <ArrowRight className="h-3 w-8 text-ink-muted/60" />
      <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
        {label}
      </span>
    </div>
  );
}

function ExternalArrow({ className }: { className?: string }) {
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

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 4h28M24 1l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
