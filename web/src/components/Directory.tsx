"use client";

import { useState } from "react";
import {
  CANONICAL_PROTOCOL_COUNT,
  organizations,
  orgUrl,
  protocols,
  protocolsIndexUrl,
  protocolUrl,
  repoUrl,
} from "@/data/directory";

const tabs = [
  { id: "org", label: "By organization" },
  { id: "protocol", label: "By protocol" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Directory() {
  const [active, setActive] = useState<TabId>("org");

  return (
    <section id="directory" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
          Directory
        </p>
        <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              The catalogue
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-muted">
              A curated index of public protocol specifications, sample data,
              and reference material. These are collected from publicly
              available sources and preserved so the historical record
              survives even when exchanges retire or rename their feeds.
            </p>
          </div>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-full border border-border px-4 text-sm text-ink transition-colors hover:border-ink/30 hover:bg-surface-muted sm:self-end"
          >
            View full directory <Arrow className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-b border-border pb-3">
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "relative pb-3 text-sm font-medium text-ink after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:bg-brand"
                    : "pb-3 text-sm text-ink-muted transition-colors hover:text-ink"
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {active === "org" ? <OrgGrid /> : <ProtocolGrid />}

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark"
          >
            View all {organizations.length} organizations{" "}
            <Arrow className="h-3 w-3" />
          </a>
          <a
            href={protocolsIndexUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark"
          >
            All {CANONICAL_PROTOCOL_COUNT} protocols{" "}
            <Arrow className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

function OrgGrid() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {organizations.map((org) => (
        <li key={org.name}>
          <a
            href={orgUrl(org.name)}
            target="_blank"
            rel="noreferrer"
            className="block rounded-md border border-border bg-white px-3 py-2.5 font-mono text-xs text-ink transition-colors hover:border-brand/40 hover:bg-brand/[0.04] hover:text-brand"
          >
            {org.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProtocolGrid() {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {protocols.map((p) => (
        <li key={`${p.org}/${p.name}`}>
          <a
            href={protocolUrl(p.org, p.name)}
            target="_blank"
            rel="noreferrer"
            title={`${p.org} / ${p.name}`}
            className="block rounded-md border border-border bg-white px-3 py-2.5 font-mono text-xs text-ink transition-colors hover:border-brand/40 hover:bg-brand/[0.04] hover:text-brand"
          >
            <span className="block truncate">{p.name}</span>
            <span className="block truncate text-[10px] text-ink-muted">
              {p.org}
            </span>
          </a>
        </li>
      ))}
    </ul>
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

