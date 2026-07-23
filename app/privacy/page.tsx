import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.brandName}`,
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-ink md:px-10">
      <a
        href="/"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-mute transition-colors hover:text-pine"
      >
        ← Back to {site.brandName}
      </a>

      <h1 className="font-display mt-6 text-4xl italic sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-mute">Last updated: July 23, 2026</p>

      <div className="mt-10 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold">Overview</h2>
          <p className="mt-2">
            {site.brandName} ({site.metaDescription}) is a personal
            storefront. This page explains what information the site
            collects and how it&apos;s used. This site doesn&apos;t require
            an account, and it doesn&apos;t collect payment information —
            purchases happen on the retailer&apos;s own site after you click
            through.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Information collected</h2>
          <p className="mt-2">
            Like most websites, {site.brandName} may collect standard
            technical information automatically — browser type, device type,
            approximate location, and which pages and links you visit — via
            analytics and hosting providers. This is used in aggregate to
            understand what content is useful, not to identify individual
            visitors.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Affiliate links</h2>
          <p className="mt-2">
            Product links on this site are affiliate links (via ShopMy and
            similar partners), including links that route through{" "}
            <code className="text-sm">shawnnderson.com/go/...</code>. Clicking
            one takes you to the retailer&apos;s own website, where their
            privacy policy and terms apply. {site.brandName} may earn a
            commission on purchases made through these links, at no extra
            cost to you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Cookies</h2>
          <p className="mt-2">
            The site may use minimal cookies or local storage required for
            basic functionality (such as remembering you&apos;ve signed in).
            It does not sell your data to third parties, and doesn&apos;t use
            cookies to build advertising profiles about you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Third-party services</h2>
          <p className="mt-2">
            Images and content on this site are hosted via third-party
            infrastructure (such as Cloudinary), and product data may be
            sourced from affiliate platforms (such as ShopMy). Those
            providers have their own privacy policies governing how they
            handle data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Changes to this policy</h2>
          <p className="mt-2">
            This policy may be updated from time to time as the site changes.
            The &quot;last updated&quot; date above reflects the most recent
            revision.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Reach out via the{" "}
            <a
              href={site.social[0]?.href}
              target="_blank"
              rel="noreferrer"
              className="text-pine underline underline-offset-2 hover:text-pine/80"
            >
              {site.social[0]?.label ?? "contact link"}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
