const BASE_RATES = { standard: 50, premium: 100, deluxe: 150 };

export function calculateBasePrice(tier) {
  return BASE_RATES[tier] ?? BASE_RATES.standard;
}