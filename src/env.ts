export type RuntimeConfig = {
  marketplaceHost: string;
  partnerTag: string;
};

const DefaultMarketplaceHost = "www.amazon.com";

export function getRuntimeConfig(env: NodeJS.ProcessEnv = process.env): RuntimeConfig {
  return {
    marketplaceHost: normalizeMarketplaceHost(env.AMAZON_MARKETPLACE_HOST),
    partnerTag: readRequired(env.AMAZON_PARTNER_TAG, "AMAZON_PARTNER_TAG"),
  };
}

function normalizeMarketplaceHost(value: string | undefined): string {
  const host = value?.trim() || DefaultMarketplaceHost;
  return host.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
}

function readRequired(value: string | undefined, name: string): string {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return trimmed;
}
