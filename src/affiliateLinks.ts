import type { RuntimeConfig } from "./env.js";

const AsinPattern = /^[A-Z0-9]{10}$/i;

export function buildAmazonProductUrl(asin: string, config: RuntimeConfig): string {
  if (!AsinPattern.test(asin)) {
    throw new Error(`Invalid ASIN configured: ${asin}`);
  }

  const url = new URL(`https://${config.marketplaceHost}/dp/${asin.toUpperCase()}`);
  if (config.partnerTag) {
    url.searchParams.set("tag", config.partnerTag);
  }
  return url.toString();
}
