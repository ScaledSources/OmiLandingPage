import Image from "next/image";
import { asset } from "@/lib/asset";
import {
  aboutLinks,
  contactLinks,
  directoryLinks,
  projectLinks,
} from "@/data/directory";

const columns = [
  {
    heading: "Directory",
    links: [
      { label: "Organizations", href: directoryLinks.organizations },
      { label: "Protocols", href: directoryLinks.protocols },
      { label: "Glossary", href: directoryLinks.glossary },
      { label: "Research", href: directoryLinks.research },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "Wireshark Lua", href: projectLinks.wiresharkLua },
      { label: "C-Structs", href: projectLinks.cStructs },
      { label: "OMI Data Packets", href: projectLinks.dataPackets },
      { label: "Latency Lab", href: projectLinks.latencyLab },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Mission", href: aboutLinks.mission },
      { label: "Philosophy", href: aboutLinks.philosophy },
      { label: "Code of Conduct", href: aboutLinks.conduct },
      { label: "License · MIT", href: aboutLinks.license },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Get Involved", href: contactLinks.getInvolved },
      { label: "Issues", href: contactLinks.issues },
      { label: "GitHub", href: contactLinks.github },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <Image
              src={asset("/omi-wide-white.svg")}
              alt="Open Markets Initiative"
              width={220}
              height={20}
              className="h-6 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              A market-neutral effort for the stability of electronic
              financial markets through transparency, modern tooling, and open
              documentation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/45">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel={
                          link.href.startsWith("mailto:")
                            ? undefined
                            : "noreferrer"
                        }
                        className="text-sm text-white/85 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border-dark pt-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© 2026 Open Markets Initiative</p>
          <a
            href={aboutLinks.license}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
}
