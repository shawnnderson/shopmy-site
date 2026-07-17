import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ShopMyEmbed from "@/components/ShopMyEmbed";
import ShopSection from "@/components/ShopSection";
import { site } from "@/config/site";

const embeds: Record<
  string,
  { src: string; cropHeight: number; contentHeight: number }
> = {
  "shop": {
    src: "https://shopmy.us/collections/public/6349690?noHeader=true",
    cropHeight: 1246,
    contentHeight: 1523,
  },
  "shop-wellness": {
    src: "https://shopmy.us/collections/public/3141282?noHeader=true",
    cropHeight: 1917,
    contentHeight: 2194,
  },
  "shop-recovery": {
    src: "https://shopmy.us/collections/public/3209702?noHeader=true",
    cropHeight: 1207,
    contentHeight: 1484,
  },
  "shop-athletic-apparel": {
    src: "https://shopmy.us/collections/public/3141243?noHeader=true",
    cropHeight: 1582,
    contentHeight: 1859,
  },
  "shop-gym-bags": {
    src: "https://shopmy.us/collections/public/6349581?noHeader=true",
    cropHeight: 516,
    contentHeight: 793,
  },
  "shop-mens-tops": {
    src: "https://shopmy.us/collections/public/3209268?noHeader=true",
    cropHeight: 1227,
    contentHeight: 1504,
  },
  "shop-mens-bottoms": {
    src: "https://shopmy.us/collections/public/3209516?noHeader=true",
    cropHeight: 1187,
    contentHeight: 1464,
  },
  "shop-loungewear": {
    src: "https://shopmy.us/collections/public/3141299?noHeader=true",
    cropHeight: 1543,
    contentHeight: 1820,
  },
  "shop-sneakers": {
    src: "https://shopmy.us/collections/public/3141273?noHeader=true",
    cropHeight: 1227,
    contentHeight: 1504,
  },
  "shop-mens-jackets-coats": {
    src: "https://shopmy.us/collections/public/6349353?noHeader=true",
    cropHeight: 497,
    contentHeight: 774,
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        {site.shopSections.map((section) => (
          <ShopSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            subtitle={section.subtitle}
          >
            <ShopMyEmbed title={section.title} {...embeds[section.id]} />
          </ShopSection>
        ))}
      </main>
      <Footer />
    </>
  );
}
