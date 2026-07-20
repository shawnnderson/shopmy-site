import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import ShopBrowser, { type ShopGroup } from "@/components/ShopBrowser";
import { ShopSelectionProvider } from "@/components/ShopSelection";
import ShopSection from "@/components/ShopSection";
import { site } from "@/config/site";
import { embeds } from "@/lib/shop-embeds";

export default function Home() {
  const groups: ShopGroup[] = site.shopGroups.map((group) => ({
    id: group.id,
    title: group.title,
    categories: group.categories.map((category) => ({
      id: category.id,
      title: category.title,
      ...embeds[category.id],
    })),
  }));

  return (
    <ShopSelectionProvider initialId={groups[0].categories[0].id}>
      <Nav groups={groups} />
      <main className="flex-1">
        <Hero />

        <ShopSection
          id={site.shop.id}
          eyebrow={site.shop.eyebrow}
          title={site.shop.title}
          action={<SearchBar />}
        >
          <ShopBrowser groups={groups} />
        </ShopSection>

        <About />
      </main>
      <Footer />
    </ShopSelectionProvider>
  );
}
