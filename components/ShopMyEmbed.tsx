// Matches the sidebar's pt-6 spacing above "Apparel" (components/ShopBrowser.tsx).
const TOP_PADDING = 24;

export default function ShopMyEmbed({
  title,
  src,
  cropHeight,
  contentHeight,
}: {
  title: string;
  src: string;
  /** Visible height, ending just above ShopMy's app-download banner. */
  cropHeight: number;
  /** Full iframe height needed to render all of ShopMy's content. */
  contentHeight: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: `${cropHeight + TOP_PADDING}px`,
        overflow: "hidden",
      }}
    >
      <iframe
        title={title}
        src={src}
        style={{
          position: "absolute",
          top: `${TOP_PADDING}px`,
          left: 0,
          width: "100%",
          height: `${contentHeight}px`,
          border: "none",
        }}
        className="block"
        loading="lazy"
      />
    </div>
  );
}
