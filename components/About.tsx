import { site } from "@/config/site";

export default function About() {
  return (
    <section
      id="about"
      className="bg-pine px-6 py-24 text-paper md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex max-w-4xl flex-col items-center gap-12 md:ml-auto md:flex-row md:items-center">
          <div className="flex-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/george-logo.png"
              alt={`${site.brandName} logo`}
              className="h-auto w-64 sm:w-72 md:w-80"
            />
          </div>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-volt">
              About
            </span>
            <p className="font-display mt-4 text-2xl italic leading-relaxed text-paper/90 sm:text-3xl">
              “Hi there! I’m George. I am here to solve the global problem of
              men trying to shop. I am not here to fully elevate your style,
              but help build a strong foundation. I am not a stylist, doctor,
              or a nutritionist. These are just products that I use and
              recommend based on how they make me feel. All of these links
              are affiliate links, meaning I get paid commission when you
              shop with me.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
