import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";

const navLinks = [
  { href: "#directory", label: "Directory" },
  { href: "#compiler", label: "Compiler" },
  { href: "#about", label: "About" },
  { href: "#contribute", label: "Request a protocol" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={asset("/omi-wide-color-light.svg")}
            alt="Open Markets Initiative"
            width={260}
            height={24}
            priority
            className="h-7 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Open-Markets-Initiative"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            <GithubMark className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
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
