import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateScaffolding } from '../src/utils/scaffoldingEstimate.ts';

const p = (rent, buy) => ({ rent, buy });
const PRICES = {
  mainFrame: p(7000, 190000),
  crossBrace: p(4500, 50000),
  jointPin: p(1000, 6500),
  catwalk: p(30000, 310000),
  jackBase: p(10000, 95000),
  uHead: p(10000, 98000),
  pipeSupport: p(15000, 285000),
  tangga: p(50000, 440000),
};

test('exact tier multiple does not round up (5.1 m = 3 tiers)', () => {
  const r = estimateScaffolding({ lengthM: 10, heightM: 5.1, workType: 'fasad', durationMonths: 1 }, PRICES);
  assert.equal(r.tiers, 3);
  assert.equal(r.bays, 6);
});

test('fasad 10 m x 5.1 m: shared-frame quantities and rent', () => {
  const r = estimateScaffolding({ lengthM: 10, heightM: 5.1, workType: 'fasad', durationMonths: 2 }, PRICES);
  assert.deepEqual(r.qty, {
    mainFrame: 21, // (6+1) x 3
    crossBrace: 36, // 6 x 3 x 2
    jointPin: 28, // 7 x 2 x 2
    catwalk: 6,
    jackBase: 14,
    uHead: 0,
    pipeSupport: 0,
    tangga: 3,
  });
  const monthly = 21 * 7000 + 36 * 4500 + 28 * 1000 + 6 * 30000 + 14 * 10000 + 3 * 50000;
  assert.equal(r.rentMonthly, monthly);
  assert.equal(r.rentTotal, monthly * 2);
});

test('adjacent bays share frames (2 bays = 3 frames per tier, not 4)', () => {
  const r = estimateScaffolding({ lengthM: 3.66, heightM: 1.7, workType: 'fasad', durationMonths: 1 }, PRICES);
  assert.equal(r.bays, 2);
  assert.equal(r.tiers, 1);
  assert.equal(r.qty.mainFrame, 3);
  assert.equal(r.qty.jackBase, 6);
  assert.equal(r.qty.jointPin, 0);
});

test('exact bay multiple does not round up (5.49 m = 3 bays)', () => {
  const r = estimateScaffolding({ lengthM: 5.49, heightM: 1.7, workType: 'fasad', durationMonths: 1 }, PRICES);
  assert.equal(r.bays, 3);
});

test('shoring adds U-heads, pipe supports and double bracing', () => {
  const r = estimateScaffolding({ lengthM: 5.49, heightM: 3.4, workType: 'cor', durationMonths: 1 }, PRICES);
  assert.equal(r.bays, 3);
  assert.equal(r.tiers, 2);
  assert.equal(r.qty.crossBrace, 3 * 2 * 4);
  assert.equal(r.qty.uHead, 8);
  assert.equal(r.qty.pipeSupport, 6);
});

test('empty / invalid input is clamped, never NaN', () => {
  const r = estimateScaffolding({ lengthM: NaN, heightM: 0, workType: 'fasad', durationMonths: 0 }, PRICES);
  assert.equal(r.lengthM, 2);
  assert.equal(r.heightM, 1.7);
  assert.equal(r.durationMonths, 1);
  assert.ok(Number.isFinite(r.rentTotal));
  const big = estimateScaffolding({ lengthM: 1e6, heightM: 1e6, workType: 'fasad', durationMonths: 1 }, PRICES);
  assert.equal(big.lengthM, 100);
  assert.equal(big.heightM, 50);
});
