export const site = {
  brandName: "George",
  tagline: "Everything I actually wear, use, and recommend. No doomscrolling here.",
  metaDescription:
    "Curated finds and everyday favorites — shop the collections I actually use.",
  heroCta: {
    label: "Shop My Picks",
    href: "#shop",
  },
  nav: [
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
  ],
  shop: {
    id: "shop",
    title: "Shop My Picks",
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
        { id: "shop-apparel-athletic", title: "Athletic Apparel" },
      ],
    },
    {
      id: "sneakers",
      title: "Footwear",
      categories: [
        { id: "shop-sneakers-lifestyle", title: "Lifestyle" },
        { id: "shop-sneakers-training", title: "Training" },
      ],
    },
    {
      id: "grooming",
      title: "Grooming",
      categories: [
        { id: "shop-hair-products", title: "Hair Products" },
        { id: "shop-skincare", title: "Skincare" },
        { id: "shop-deodorant", title: "Deodorant" },
        { id: "shop-sunscreen", title: "Sunscreen" },
      ],
    },
    {
      id: "pantry",
      title: "Pantry",
      categories: [
        { id: "shop-protein-bars", title: "Protein Bars" },
        { id: "shop-daily-essentials", title: "Daily Essentials" },
      ],
    },
    {
      id: "gift-guides",
      title: "Gift Guides",
      categories: [{ id: "shop-gift-guides", title: "For the Athlete" }],
    },
    {
      id: "accessories",
      title: "Accessories",
      categories: [
        { id: "shop-ties", title: "Ties" },
        { id: "shop-belts", title: "Belts" },
        { id: "shop-accessories-bags", title: "Bags" },
        { id: "shop-recovery-gear", title: "Recovery Gear" },
      ],
    },
  ],
  social: [
    { label: "Substack", href: "https://substack.com/@helloitsgeorge" },
  ],
} as const;
