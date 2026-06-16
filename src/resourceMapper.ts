import { buildAmazonProductUrl } from "./affiliateLinks.js";
import type { RuntimeConfig } from "./env.js";
import type { CuratedResource, FocusResourceResponse } from "./types.js";

export function toFocusResourceResponse(
  resource: CuratedResource,
  config: RuntimeConfig,
): FocusResourceResponse {
  return {
    id: resource.id,
    name: resource.name,
    description: resource.description,
    priceLabel: "",
    imageUrl: resource.imageUrl,
    affiliateLink: buildAmazonProductUrl(resource.asin, config),
    category: resource.category,
    isActive: resource.isActive,
    sortOrder: resource.sortOrder,
  };
}
