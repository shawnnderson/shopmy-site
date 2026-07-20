import { site } from "@/config/site";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-ink/10 bg-paper px-6 py-24 md:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center">
        <div className="flex-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/george-logo.png"
            alt={`${site.brandName} logo`}
            className="h-auto w-48 sm:w-56 md:w-64"
          />
        </div>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pine">
            About
          </span>
          <p className="font-display mt-4 text-2xl italic leading-relaxed sm:text-3xl">
            “Hi there! I’m George. I am here to solve the global problem of
            men trying to shop. I am not here to fully elevate your style,
            but help build a strong foundation. I am not a stylist, doctor,
            or a nutritionist. These are just products that I use and
            recommend based on how they make me feel. All of these links are
            affiliate links, meaning I get paid commission when you shop
            with me.”
          </p>
        </div>
      </div>
    </section>
  );
}
