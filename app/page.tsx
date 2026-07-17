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
          <div
            style={{ position: "relative", width: "100%", height: "1246px", overflow: "hidden" }}
          >
            <iframe
              title="Skincare & Deodorant"
              src="https://shopmy.us/collections/public/6349690?noHeader=true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "1523px",
                border: "none",
              }}
              className="block"
              loading="lazy"
            />
          </div>
        </ShopSection>

        <ShopSection
          id={wellness.id}
          eyebrow={wellness.eyebrow}
          title={wellness.title}
          subtitle={wellness.subtitle}
        >
          <div
            style={{ position: "relative", width: "100%", height: "1917px", overflow: "hidden" }}
          >
            <iframe
              title="Wellness"
              src="https://shopmy.us/collections/public/3141282?noHeader=true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "2194px",
                border: "none",
              }}
              className="block"
              loading="lazy"
            />
          </div>
        </ShopSection>

        <ShopSection
          id={recovery.id}
          eyebrow={recovery.eyebrow}
          title={recovery.title}
          subtitle={recovery.subtitle}
        >
          <div
            style={{ position: "relative", width: "100%", height: "1207px", overflow: "hidden" }}
          >
            <iframe
              title="Recovery"
              src="https://shopmy.us/collections/public/3209702?noHeader=true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "1484px",
                border: "none",
              }}
              className="block"
              loading="lazy"
            />
          </div>
        </ShopSection>
      </main>
      <Footer />
    </>
  );
}
