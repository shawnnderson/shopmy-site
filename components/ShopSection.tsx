import type { ReactNode } from "react";

export default function ShopSection({
  id,
  eyebrow,
  title,
  subtitle,
  action,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-ink/10 bg-paper px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pine">
              {eyebrow}
            </span>
            <h2 className="font-display mt-2 text-4xl italic sm:text-5xl">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {subtitle && (
              <p className="max-w-sm text-sm text-mute">{subtitle}</p>
            )}
            {action}
          </div>
        </div>

        {children ? (
          <div className="w-full overflow-hidden border border-ink/10 bg-white">
            {children}
          </div>
        ) : (
          <div className="min-h-[420px] w-full border border-dashed border-ink/20 bg-stone/60 p-2">
            <EmbedPlaceholder />
          </div>
        )}
      </div>
    </section>
  );
}

function EmbedPlaceholder() {
  return (
    <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-3 px-6 text-center text-mute">
      <p className="text-sm font-semibold uppercase tracking-[0.2em]">
        ShopMy embed goes here
      </p>
      <p className="max-w-md text-sm">
        Copy the collection embed code from your ShopMy dashboard and paste
        it as this section&rsquo;s children in{" "}
        <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-xs">
          app/page.tsx
        </code>
        .
      </p>
    </div>
  );
}
