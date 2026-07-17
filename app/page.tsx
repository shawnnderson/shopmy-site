import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ShopSection from "@/components/ShopSection";
import { site } from "@/config/site";

export default function Home() {
  const [skincare, wellness, recovery] = site.shopSections;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <ShopSection
          id={skincare.id}
          eyebrow={skincare.eyebrow}
          title={skincare.title}
          subtitle={skincare.subtitle}
        >
          <iframe
            title="Skincare & Deodorant"
            src="https://shopmy.us/collections/public/6349690?noHeader=true"
            style={{ width: "100%", minHeight: "1200px", border: "none" }}
            className="block"
            loading="lazy"
          />
        </ShopSection>

        <ShopSection
          id={wellness.id}
          eyebrow={wellness.eyebrow}
          title={wellness.title}
          subtitle={wellness.subtitle}
        >
          <iframe
            title="Wellness"
            src="https://shopmy.us/collections/public/3141282?noHeader=true"
            style={{ width: "100%", minHeight: "2400px", border: "none" }}
            className="block"
            loading="lazy"
          />
        </ShopSection>

        <ShopSection
          id={recovery.id}
          eyebrow={recovery.eyebrow}
          title={recovery.title}
          subtitle={recovery.subtitle}
        >
          <iframe
            title="Recovery"
            src="https://shopmy.us/collections/public/3209702?noHeader=true"
            style={{ width: "100%", minHeight: "1200px", border: "none" }}
            className="block"
            loading="lazy"
          />
        </ShopSection>
      </main>
      <Footer />
    </>
  );
}
