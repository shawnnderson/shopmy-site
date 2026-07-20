import { site } from "@/config/site";

export default function About() {
  return (
    <section
      id="about"
      className="bg-pine px-6 py-24 text-paper md:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row md:items-start md:justify-between">
        <div className="flex-none md:mt-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/george-logo.png"
            alt={`${site.brandName} logo`}
            className="h-auto w-72 sm:w-96 md:w-[28rem]"
          />
        </div>
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-volt">
            About
          </span>
          <p className="font-display mt-4 text-2xl italic leading-relaxed text-paper/90 sm:text-3xl">
            Hi there! I’m George. I am here to solve the global problem of
            men trying to shop. I am not here to fully elevate your style
            or help you win your next HYROX race, but to provide a strong
            foundation. I am not a stylist, doctor, or a nutritionist.
            These are just products that I use and recommend based on how
            they make me feel. All of these products are affiliate links,
            meaning I get paid a commission when you shop with me.
          </p>
        </div>
      </div>
    </section>
  );
}
