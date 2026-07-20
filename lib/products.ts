import { getFlatCategories, type CategorySource } from "./shop-embeds";

export type Product = {
  id: string;
  title: string;
  image: string;
  href: string;
  price: number | null;
  categoryId: string;
  categoryTitle: string;
};

type ShopMyPin = {
  id: number;
  title: string;
  image: string;
  affiliate_link: string;
  product?: { fallbackPrice?: number | null };
};

// ShopMy's API sometimes returns private S3 URLs that 403 on direct access.
// Their own frontend serves the same objects through this public CDN host instead.
function toPublicImageUrl(image: string): string {
  const match = image.match(
    /^https:\/\/production-shopmyshelf-(\w+)\.s3\.[\w-]+\.amazonaws\.com\/(.+)$/,
  );
  if (!match) return image;
  const [, bucket, key] = match;
  return `https://static.shopmy.us/${bucket}/${key}`;
}

async function fetchCategoryProducts(
  category: CategorySource,
): Promise<(Product & { pinId: number })[]> {
  if (!category.collectionId) return [];

  try {
    const res = await fetch(
      `https://apiv3.shopmy.us/api/Collections/${category.collectionId}?limit=60`,
      { headers: { "User-Agent": "Mozilla/5.0" }, next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];

    const data = (await res.json()) as { pins?: ShopMyPin[] };

    return (data.pins ?? []).map((pin) => ({
      id: `${category.id}-${pin.id}`,
      pinId: pin.id,
      title: pin.title,
      image: toPublicImageUrl(pin.image),
      href: pin.affiliate_link,
      price: pin.product?.fallbackPrice ?? null,
      categoryId: category.id,
      categoryTitle: category.title,
    }));
  } catch {
    return [];
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const results = await Promise.all(
    getFlatCategories().map(fetchCategoryProducts),
  );

  // The same ShopMy collection can be linked under more than one of our
  // category tabs; de-dupe so identical pins don't show twice in search.
  const seenPinIds = new Set<number>();
  const products: Product[] = [];
  for (const { pinId, ...product } of results.flat()) {
    if (seenPinIds.has(pinId)) continue;
    seenPinIds.add(pinId);
    products.push(product);
  }
  return products;
}
