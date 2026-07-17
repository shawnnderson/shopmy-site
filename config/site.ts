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
  shopSections: [
    {
      id: "shop",
      eyebrow: "Shop the collection",
      title: "Skincare & Deodorant",
      subtitle: "",
    },
    {
      id: "shop-wellness",
      eyebrow: "Shop the collection",
      title: "Wellness",
      subtitle: "",
    },
    {
      id: "shop-recovery",
      eyebrow: "Shop the collection",
      title: "Recovery",
      subtitle: "",
    },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/yourhandle" },
    { label: "TikTok", href: "https://tiktok.com/@yourhandle" },
    { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  ],
} as const;
