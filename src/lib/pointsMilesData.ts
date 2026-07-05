export interface PointsMilesProgram {
  program: string;
  category: string;
  centsPerPointLow: number;
  centsPerPointHigh: number;
  sourceNote: string;
}

export const pointsMilesValuations: PointsMilesProgram[] = [
  {
    program: "Chase Ultimate Rewards",
    category: "Credit Card Points (Transferable)",
    centsPerPointLow: 1.5,
    centsPerPointHigh: 2.05,
    sourceNote: "TPG July 2026: 2.05¢; NerdWallet range 1.0–1.8¢ depending on redemption method (portal vs. transfer partners). Award Travel Finder cites 1.5–2.0¢ range. Source: The Points Guy, NerdWallet, Award Travel Finder."
  },
  {
    program: "American Express Membership Rewards",
    category: "Credit Card Points (Transferable)",
    centsPerPointLow: 1.0,
    centsPerPointHigh: 2.0,
    sourceNote: "TPG July 2026: 2.0¢ baseline. Actual redemption value ranges from 0.6¢ (statement credits) to 2.0+¢ (airline transfers). Premium cabin transfers can reach 5–20¢+. Source: The Points Guy, NerdWallet."
  },
  {
    program: "Citi ThankYou Points",
    category: "Credit Card Points (Transferable)",
    centsPerPointLow: 1.0,
    centsPerPointHigh: 1.9,
    sourceNote: "TPG July 2026: 1.9¢. Transfer partner average ~1.8¢; direct travel booking 1.0¢; best case (highest partner) ~1.6¢. Source: The Points Guy, NerdWallet, Award Travel Finder."
  },
  {
    program: "Capital One Miles",
    category: "Credit Card Miles (Transferable)",
    centsPerPointLow: 1.0,
    centsPerPointHigh: 1.85,
    sourceNote: "TPG July 2026: 1.85¢ via transfer partners. Portal redemption ~1.0¢. Transfer partners average ~1.8¢. NerdWallet: 1.6¢ baseline. Source: The Points Guy, NerdWallet."
  },
  {
    program: "Bilt Rewards",
    category: "Credit Card Points (Transferable)",
    centsPerPointLow: 1.8,
    centsPerPointHigh: 2.2,
    sourceNote: "TPG July 2026: 2.2¢ (highest among transferable currencies). Portal ~1.0–1.25¢; transfer partners ~1.8¢ baseline; premium sweet-spot redemptions (World of Hyatt, Qatar, Aeroplan) routinely 3.5–6.0+¢. Source: The Points Guy, Award Travel Finder."
  },
  {
    program: "Marriott Bonvoy",
    category: "Hotel Points",
    centsPerPointLow: 0.7,
    centsPerPointHigh: 0.9,
    sourceNote: "NerdWallet May 2026: 0.8¢; FrequentMiler March 2026: median 0.77¢; WalletHub: 0.79¢. Consensus range 0.7–0.9¢; luxury properties 1.1+¢ possible; airline transfers <0.4¢. Source: NerdWallet, FrequentMiler, WalletHub."
  },
  {
    program: "Hilton Honors",
    category: "Hotel Points",
    centsPerPointLow: 0.4,
    centsPerPointHigh: 0.55,
    sourceNote: "NerdWallet May 2026: 0.4¢; WalletHub: 0.55¢ average for hotel reservations; Award Travel Finder: 0.5¢; Gondola May 2026 median: 0.35¢. Range 0.4–1.0+¢ depending on property. Source: NerdWallet, WalletHub, Award Travel Finder, Gondola."
  },
  {
    program: "World of Hyatt",
    category: "Hotel Points",
    centsPerPointLow: 1.5,
    centsPerPointHigh: 2.0,
    sourceNote: "Post-May 2026 award chart devaluation: Gondola June 2026 median 1.5¢; Award Travel Finder 1.7–2.0¢; NerdWallet May 2026: 1.8¢. Five-tier pricing (eff. May 20, 2026) increased top-tier costs 67%; standard awards increased 17–38%. Sweet-spot range 1.8–2.0¢ still solid. Source: Gondola, Award Travel Finder, NerdWallet, The Points Guy."
  },
  {
    program: "Delta SkyMiles",
    category: "Airline Miles",
    centsPerPointLow: 1.1,
    centsPerPointHigh: 1.2,
    sourceNote: "TPG July 2026: 1.2¢; Gondola/FrequentMiler March 2026: 1.11¢ median. Domestic economy 1.0–1.3¢; first class/intl 1.5–2.0¢; long-haul premium 2.5–4.0+¢. Dynamic pricing significant variance. Source: The Points Guy, NerdWallet, Gondola, FrequentMiler."
  },
  {
    program: "United MileagePlus",
    category: "Airline Miles",
    centsPerPointLow: 1.2,
    centsPerPointHigh: 1.3,
    sourceNote: "TPG July 2026: 1.3¢ (down from 1.35¢); FrequentMiler April 2026: 1.23¢ median, 1.3¢ RRV. Range 0.30–1.59¢ depending on redemption type. WalletHub: 1.21¢ average for United flights. Source: The Points Guy, NerdWallet, FrequentMiler, WalletHub."
  },
  {
    program: "American AAdvantage",
    category: "Airline Miles",
    centsPerPointLow: 1.3,
    centsPerPointHigh: 1.4,
    sourceNote: "TPG July 2026: 1.4¢ (down from April 2026 estimate of 1.6¢); FrequentMiler April 2026: 1.4¢ RRV (median 1.29¢, mean 1.53¢). Premium cabins (Qatar, JAL, Cathay) 5+¢ possible. Source: The Points Guy, NerdWallet, FrequentMiler, WalletHub."
  },
  {
    program: "Southwest Rapid Rewards",
    category: "Airline Points",
    centsPerPointLow: 1.1,
    centsPerPointHigh: 1.4,
    sourceNote: "TPG March 2026: 1.3¢; NerdWallet: 1.4¢; WalletHub: 1.21¢ average. Dynamic pricing (eff. March 2025) creates range 1.1–1.7¢ depending on flight/date. Consensus baseline ~1.3¢. Source: The Points Guy, NerdWallet, Award Travel Finder, WalletHub."
  }
];

export function getProgramByName(name: string): PointsMilesProgram | undefined {
  return pointsMilesValuations.find(p => p.program === name);
}

export function formatCents(value: number): string {
  return value.toFixed(2) + "¢";
}