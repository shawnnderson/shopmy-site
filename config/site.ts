export const site = {
  brandName: "George",
  tagline: "A short line about what you curate, and why it's worth trusting.",
  metaDescription:
    "Curated finds and everyday favorites — shop the collections I actually use.",
  heroCta: {
    label: "Shop My Picks",
    href: "#shop",
  },
  nav: [{ label: "Shop", href: "#shop" }],
  shop: {
    id: "shop",
    eyebrow: "Shop the collection",
    title: "Shop My Picks",
    subtitle: "Browse by category — everything I actually wear and use.",
  },
  shopGroups: [
    {
      id: "apparel",
      title: "Apparel",
      categories: [
        { id: "shop-mens-tops", title: "Men's Tops" },
        { id: "shop-mens-bottoms", title: "Men's Bottoms" },
        { id: "shop-loungewear", title: "Loungewear" },
        { id: "shop-mens-jackets-coats", title: "Men's Jackets & Coats" },
      ],
    },
    {
      id: "for-the-athlete",
      title: "For The Athlete",
      categories: [
        { id: "shop-athletic-apparel", title: "Athletic Apparel" },
        { id: "shop-gym-bags", title: "Gym Bags" },
        { id: "shop-powders-protein", title: "Powders & Protein" },
        { id: "shop-recovery", title: "Recovery" },
      ],
    },
    {
      id: "sneakers",
      title: "Sneakers",
      categories: [{ id: "shop-sneakers", title: "Sneakers" }],
    },
    {
      id: "grooming",
      title: "Grooming",
      categories: [{ id: "shop-grooming", title: "Grooming" }],
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/yourhandle" },
    { label: "TikTok", href: "https://tiktok.com/@yourhandle" },
    { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  ],
} as const;
