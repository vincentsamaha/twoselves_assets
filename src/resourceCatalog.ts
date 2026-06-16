import type { CuratedResource } from "./types.js";

export const curatedResourceCatalog: CuratedResource[] = [
  {
    id: "deep-work",
    name: "Deep Work by Cal Newport",
    description: "A practical framework for protecting attention and doing valuable work without distraction.",
    asin: "1455586692",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&h=600&auto=format&fit=crop",
    category: "Books",
    isActive: true,
    sortOrder: 10
  },
  {
    id: "atomic-habits",
    name: "Atomic Habits by James Clear",
    description: "A clear system for making good habits easier and bad habits harder.",
    asin: "0735211299",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&h=600&auto=format&fit=crop",
    category: "Books",
    isActive: true,
    sortOrder: 20
  }
];
