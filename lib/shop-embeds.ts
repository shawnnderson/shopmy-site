import { site } from "@/config/site";

export const embeds: Record<
  string,
  { src: string; cropHeight: number; contentHeight: number }
> = {
  "shop-mens-tops": {
    src: "https://shopmy.us/collections/public/3209268?noHeader=true",
    cropHeight: 1227,
    contentHeight: 1504,
  },
  "shop-mens-bottoms": {
    src: "https://shopmy.us/collections/public/3209516?noHeader=true",
    cropHeight: 852,
    contentHeight: 1129,
  },
  "shop-loungewear": {
    src: "https://shopmy.us/collections/public/3141299?noHeader=true",
    cropHeight: 1187,
    contentHeight: 1464,
  },
  "shop-mens-jackets-coats": {
    src: "https://shopmy.us/collections/public/6349353?noHeader=true",
    cropHeight: 497,
    contentHeight: 774,
  },
  "shop-athletic-apparel": {
    src: "https://shopmy.us/collections/public/3141243?noHeader=true",
    cropHeight: 1582,
    contentHeight: 1859,
  },
  "shop-apparel-athletic": {
    src: "https://shopmy.us/collections/public/3141243?noHeader=true",
    cropHeight: 1582,
    contentHeight: 1859,
  },
  "shop-sneakers-lifestyle": {
    src: "https://shopmy.us/collections/public/3141273?noHeader=true",
    cropHeight: 1227,
    contentHeight: 1504,
  },
  "shop-sneakers-training": {
    src: "https://shopmy.us/collections/public/6442645?noHeader=true",
    cropHeight: 497,
    contentHeight: 774,
  },
  "shop-gym-bags": {
    src: "https://shopmy.us/collections/public/6349581?noHeader=true",
    cropHeight: 516,
    contentHeight: 793,
  },
  "shop-sunscreen": {
    src: "https://shopmy.us/collections/public/6438954?noHeader=true",
    cropHeight: 536,
    contentHeight: 813,
  },
  "shop-skincare": {
    src: "https://shopmy.us/collections/public/6438946?noHeader=true",
    cropHeight: 871,
    contentHeight: 1148,
  },
  "shop-deodorant": {
    src: "https://shopmy.us/collections/public/6438935?noHeader=true",
    cropHeight: 516,
    contentHeight: 793,
  },
  "shop-hair-products": {
    src: "https://shopmy.us/collections/public/6439144?noHeader=true",
    cropHeight: 871,
    contentHeight: 1148,
  },
  "shop-powders-protein": {
    src: "https://shopmy.us/collections/public/3141282?noHeader=true",
    cropHeight: 1917,
    contentHeight: 2194,
  },
  "shop-recovery": {
    src: "https://shopmy.us/collections/public/3209702?noHeader=true",
    cropHeight: 1207,
    contentHeight: 1484,
  },
};

export type CategorySource = {
  id: string;
  title: string;
  src: string;
  collectionId: string;
};

export function getFlatCategories(): CategorySource[] {
  return site.shopGroups.flatMap((group) =>
    group.categories
      .filter((category) => embeds[category.id])
      .map((category) => {
        const src = embeds[category.id].src;
        const collectionId = src.match(/collections\/public\/(\d+)/)?.[1] ?? "";
        return { id: category.id, title: category.title, src, collectionId };
      }),
  );
}
