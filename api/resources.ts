import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getRuntimeConfig } from "../src/env.js";
import { curatedResourceCatalog } from "../src/resourceCatalog.js";
import { toFocusResourceResponse } from "../src/resourceMapper.js";

export default function handler(request: VercelRequest, response: VercelResponse): void {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const config = getRuntimeConfig();
  const resources = curatedResourceCatalog
    .filter((resource) => resource.isActive)
    .sort((left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name))
    .map((resource) => toFocusResourceResponse(resource, config));

  response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
  response.status(200).json(resources);
}
