import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-pine px-6 py-16 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <a href="#top" className="font-brand text-4xl leading-none">
          {site.brandName}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:text-volt"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {site.social.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:text-volt"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-paper/60">
          &copy; {new Date().getFullYear()} {site.brandName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
