// Pure estimator for the /kalkulator page. Kept free of path aliases and runtime imports so
// `node --test tests/` can import it directly (Node type stripping).

export type WorkType = 'fasad' | 'cor';

export interface UnitPrice {
  rent: number; // IDR per unit per month
  buy: number; // IDR per new unit
}

export interface EstimatePrices {
  mainFrame: UnitPrice;
  crossBrace: UnitPrice;
  jointPin: UnitPrice;
  catwalk: UnitPrice;
  jackBase: UnitPrice;
  uHead: UnitPrice;
  pipeSupport: UnitPrice;
  tangga: UnitPrice;
}

export interface EstimateInput {
  lengthM: number;
  heightM: number;
  workType: WorkType;
  durationMonths: number;
}

export const BAY_LENGTH_M = 1.83; // cross brace 220 span
export const TIER_HEIGHT_M = 1.7; // main frame T170
export const MAX_LENGTH_M = 100;
export const MAX_HEIGHT_M = 50;

/**
 * Single-row frame scaffold where adjacent bays SHARE frames:
 *   n bays need n+1 frames per tier, 2 cross braces per bay per tier,
 *   2 joint pins per stacked frame, and 2 jack bases per ground frame.
 * Shoring ("cor") doubles bracing, adds U-heads on every top leg and 2 pipe supports per bay.
 */
export function estimateScaffolding(input: EstimateInput, prices: EstimatePrices) {
  const lengthM = Math.min(MAX_LENGTH_M, Math.max(2, input.lengthM || 0));
  const heightM = Math.min(MAX_HEIGHT_M, Math.max(TIER_HEIGHT_M, input.heightM || 0));
  const durationMonths = Math.max(1, Math.round(input.durationMonths || 1));
  const isCor = input.workType === 'cor';

  // Small epsilon so exact multiples (e.g. 5.49 m = 3 bays) don't round up from float error.
  const bays = Math.ceil(lengthM / BAY_LENGTH_M - 1e-9);
  const tiers = Math.ceil(heightM / TIER_HEIGHT_M - 1e-9);
  const framesPerTier = bays + 1;

  const qty = {
    mainFrame: framesPerTier * tiers,
    crossBrace: bays * tiers * (isCor ? 4 : 2),
    jointPin: framesPerTier * (tiers - 1) * 2,
    catwalk: isCor ? bays * tiers : bays,
    jackBase: framesPerTier * 2,
    uHead: isCor ? framesPerTier * 2 : 0,
    pipeSupport: isCor ? bays * 2 : 0,
    tangga: tiers,
  };

  let rentMonthly = 0;
  let buyNew = 0;
  for (const key of Object.keys(qty) as (keyof typeof qty)[]) {
    rentMonthly += qty[key] * prices[key].rent;
    buyNew += qty[key] * prices[key].buy;
  }

  return {
    lengthM,
    heightM,
    durationMonths,
    bays,
    tiers,
    /** Bay x tier modules, for "setara N set" display only. */
    modules: bays * tiers,
    qty,
    rentMonthly,
    rentTotal: rentMonthly * durationMonths,
    buyNew,
  };
}

export type ScaffoldingEstimate = ReturnType<typeof estimateScaffolding>;
