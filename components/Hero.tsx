import { site } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[60vh] flex-col items-center justify-center bg-pine px-6 text-center text-paper"
    >
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-volt">
          Personal Storefront
        </span>
        <h1 className="font-brand text-6xl leading-none text-volt sm:text-7xl md:text-8xl">
          {site.brandName}
        </h1>
        <p className="font-display max-w-xl text-2xl italic text-paper/90 sm:text-3xl">
          {site.tagline}
        </p>
        <a
          href={site.heroCta.href}
          className="mt-4 inline-flex items-center gap-2 bg-volt px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-transform hover:-translate-y-0.5"
        >
          {site.heroCta.label}
        </a>
      </div>

      <a
        href="#shop"
        aria-label="Scroll to shop"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/60 transition-colors hover:text-volt"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
