# Custom fonts

`Rage Italic` and `Proxima Nova` are commercial fonts, so the files aren't
included in this repo. The site works fine without them (it falls back to
Playfair Display Italic and Inter), but to use the real fonts, license and
drop in files with these exact names:

```
public/fonts/RageItalic.woff2
public/fonts/RageItalic.otf
public/fonts/ProximaNova-Regular.woff2
public/fonts/ProximaNova-Regular.otf
public/fonts/ProximaNova-Semibold.woff2
public/fonts/ProximaNova-Semibold.otf
public/fonts/ProximaNova-Bold.woff2
public/fonts/ProximaNova-Bold.otf
```

`.woff2` is preferred for web performance; `.otf` is only used as a
fallback if the browser can't load the `.woff2`. You don't need both —
whichever formats you have will work, the `@font-face` rules in
`app/globals.css` just list every format they'll try.

Proxima Nova is available from [Adobe Fonts](https://fonts.adobe.com) or
[Fontspring](https://www.fontspring.com/fonts/mark-simonson/proxima-nova).
Rage Italic ships with some Adobe/system font bundles or is available from
type foundries like [Fontspring](https://www.fontspring.com) and [MyFonts](https://www.myfonts.com).
