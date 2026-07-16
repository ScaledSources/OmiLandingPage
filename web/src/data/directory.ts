const GITHUB_ORG = "https://github.com/Open-Markets-Initiative";
const GITHUB_REPO = `${GITHUB_ORG}/Directory`;
const TREE_MAIN = `${GITHUB_REPO}/tree/main`;
const BLOB_MAIN = `${GITHUB_REPO}/blob/main`;

export const githubOrgUrl = GITHUB_ORG;
export const repoUrl = GITHUB_REPO;
export const protocolsIndexUrl = `${TREE_MAIN}/Protocols`;
export const organizationsIndexUrl = `${TREE_MAIN}/Organizations`;

export const orgUrl = (org: string) => `${TREE_MAIN}/Organizations/${org}`;
export const protocolUrl = (org: string, protocol: string) =>
  `${TREE_MAIN}/Organizations/${org}/Protocols/${protocol}`;

// Subdirs published in the Directory repo.
export const directoryLinks = {
  organizations: organizationsIndexUrl,
  protocols: protocolsIndexUrl,
  glossary: `${TREE_MAIN}/Glossary`,
  research: `${TREE_MAIN}/Research`,
};

export const aboutLinks = {
  mission: `${TREE_MAIN}/About`,
  philosophy: `${BLOB_MAIN}/About/ReadMe.md`,
  conduct: `${BLOB_MAIN}/About/Conduct.md`,
  license: `${TREE_MAIN}/About/License`,
};

export const contactLinks = {
  getInvolved:
    "https://docs.google.com/forms/d/e/1FAIpQLSfwDeAPZYVrH0HzZsr7Yliy6OI7CuiSVox1f_ygNFf1UwZuqQ/viewform",
  issues: `${GITHUB_REPO}/issues`,
  github: GITHUB_ORG,
};

// Sibling project repos under the OMI account.
export const projectLinks = {
  wiresharkLua: `${GITHUB_ORG}/wireshark-lua`,
  cStructs: `${GITHUB_ORG}/c-structs`,
  dataPackets: `${GITHUB_ORG}/omi-data-packets`,
  latencyLab: `${GITHUB_ORG}/latency-lab`,
};

export type Organization = { name: string };
export type Protocol = { name: string; org: string };

export const organizations: Organization[] = [
  { name: "24X" },
  { name: "A2X" },
  { name: "Aquis" },
  { name: "Asx" },
  { name: "B3" },
  { name: "Bist" },
  { name: "Boats" },
  { name: "Box" },
  { name: "BruceAts" },
  { name: "Cboe" },
  { name: "Cme" },
  { name: "Coinbase" },
  { name: "Currenex" },
  { name: "Eurex" },
  { name: "Euronext" },
  { name: "Finra" },
  { name: "Fix" },
  { name: "Hkex" },
  { name: "Ice" },
  { name: "Iex" },
  { name: "Imperative" },
  { name: "Jnx" },
  { name: "Jpx" },
  { name: "Lse" },
  { name: "Lseg" },
  { name: "Ltse" },
  { name: "Memx" },
  { name: "Miax" },
  { name: "Nasdaq" },
  { name: "NsxAustralia" },
  { name: "Nyse" },
  { name: "Odx" },
  { name: "OtcMarkets" },
  { name: "Siac" },
  { name: "SmallX" },
  { name: "Tmx" },
  { name: "Txse" },
];

// Canonical specs documented at /Protocols/*.md in the Directory repo.
export const CANONICAL_PROTOCOL_COUNT = 55;

// Each protocol entry links to /Organizations/{org}/Protocols/{name}.
export const protocols: Protocol[] = [
  { name: "24XEquities", org: "24X" },
  { name: "A2X", org: "A2X" },
  { name: "Aquis", org: "Aquis" },
  { name: "AsxSecurities", org: "Asx" },
  { name: "B3Derivatives", org: "B3" },
  { name: "Bist", org: "Bist" },
  { name: "BoatsEquities", org: "Boats" },
  { name: "Box", org: "Box" },
  { name: "BruceEquities", org: "BruceAts" },
  { name: "BxeEquities", org: "Cboe" },
  { name: "ByxEquities", org: "Cboe" },
  { name: "BzxEquities", org: "Cboe" },
  { name: "BzxOptions", org: "Cboe" },
  { name: "C1Options", org: "Cboe" },
  { name: "C2Options", org: "Cboe" },
  { name: "CboeEurope", org: "Cboe" },
  { name: "CboeFx", org: "Cboe" },
  { name: "CfeFutures", org: "Cboe" },
  { name: "CxeEquities", org: "Cboe" },
  { name: "DxeDerivatives", org: "Cboe" },
  { name: "EdgaEquities", org: "Cboe" },
  { name: "EdgxEquities", org: "Cboe" },
  { name: "EdgxOptions", org: "Cboe" },
  { name: "Pitch", org: "Cboe" },
  { name: "TitaniumConsolidated", org: "Cboe" },
  { name: "CmeFutures", org: "Cme" },
  { name: "CoinbaseDeribit", org: "Coinbase" },
  { name: "CoinbaseDerivatives", org: "Coinbase" },
  { name: "CurrenexForex", org: "Currenex" },
  { name: "Eurex", org: "Eurex" },
  { name: "Optiq", org: "Euronext" },
  { name: "FinraOrf", org: "Finra" },
  { name: "FinraOtc", org: "Finra" },
  { name: "Hkex", org: "Hkex" },
  { name: "IceFutures", org: "Ice" },
  { name: "IexEquities", org: "Iex" },
  { name: "Imperative", org: "Imperative" },
  { name: "JnxBonds", org: "Jnx" },
  { name: "JnxEquities", org: "Jnx" },
  { name: "Jpx", org: "Jpx" },
  { name: "TseEquities", org: "Jpx" },
  { name: "Turquoise", org: "Lse" },
  { name: "Lseg", org: "Lseg" },
  { name: "TradeEcho", org: "Lseg" },
  { name: "LtseEquities", org: "Ltse" },
  { name: "MemxEquities", org: "Memx" },
  { name: "EmeraldOptions", org: "Miax" },
  { name: "MiaxOptions", org: "Miax" },
  { name: "OnyxFutures", org: "Miax" },
  { name: "PearlEquities", org: "Miax" },
  { name: "PearlOptions", org: "Miax" },
  { name: "SapphireOptions", org: "Miax" },
  { name: "GemxOptions", org: "Nasdaq" },
  { name: "IseOptions", org: "Nasdaq" },
  { name: "MrxOptions", org: "Nasdaq" },
  { name: "Nasdaq", org: "Nasdaq" },
  { name: "NomOptions", org: "Nasdaq" },
  { name: "NsmEquities", org: "Nasdaq" },
  { name: "NtxEquities", org: "Nasdaq" },
  { name: "NtxOptions", org: "Nasdaq" },
  { name: "PhlxOptions", org: "Nasdaq" },
  { name: "PsxEquities", org: "Nasdaq" },
  { name: "NsxAustralia", org: "NsxAustralia" },
  { name: "AmexEquities", org: "Nyse" },
  { name: "AmexOptions", org: "Nyse" },
  { name: "ArcaEquities", org: "Nyse" },
  { name: "ArcaOptions", org: "Nyse" },
  { name: "NationalEquities", org: "Nyse" },
  { name: "NyseEquities", org: "Nyse" },
  { name: "NyseOptions", org: "Nyse" },
  { name: "Options", org: "Nyse" },
  { name: "TexasEquities", org: "Nyse" },
  { name: "OdxEquities", org: "Odx" },
  { name: "OdxSecurityToken", org: "Odx" },
  { name: "LinkAts", org: "OtcMarkets" },
  { name: "LinkNqb", org: "OtcMarkets" },
  { name: "MoonAts", org: "OtcMarkets" },
  { name: "Overnight", org: "OtcMarkets" },
  { name: "Siac", org: "Siac" },
  { name: "SmallX", org: "SmallX" },
  { name: "Tmx", org: "Tmx" },
  { name: "TxseEquities", org: "Txse" },
];
