export const site = {
  brandName: "George",
  tagline: "Everything I actually wear, use, and recommend. No doomscrolling here.",
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
        { id: "shop-mens-tops", title: "Tops" },
        { id: "shop-mens-bottoms", title: "Bottoms" },
        { id: "shop-loungewear", title: "Loungewear" },
        { id: "shop-mens-jackets-coats", title: "Outerwear" },
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
      categories: [
        { id: "shop-sunscreen", title: "Sunscreen" },
        { id: "shop-skincare", title: "Skincare" },
        { id: "shop-deodorant", title: "Deodorant" },
        { id: "shop-hair-products", title: "Hair Products" },
      ],
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/shawnnderson" },
    { label: "TikTok", href: "https://tiktok.com/@yourhandle" },
    { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  ],
} as const;
