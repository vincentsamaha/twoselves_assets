export type CuratedResource = {
  id: string;
  name: string;
  description: string;
  asin: string;
  imageUrl: string;
  category: string;
  isActive: boolean;
  sortOrder: number;
};

export type FocusResourceResponse = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  imageUrl: string;
  affiliateLink: string;
  category: string;
  isActive: boolean;
  sortOrder: number;
};
