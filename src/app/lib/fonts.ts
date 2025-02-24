import localFont from "next/font/local";

export const domLovesMary = localFont({
  src: [{ path: "../../../public/fonts/DomLovesMary Pro.ttf", weight: "500" }],
  variable: "--font-dom-loves-mary",
  display: "swap",
});

export const directorsItalic = localFont({
  src: [
    { path: "../../../public/fonts/TheDirectors-Italic.otf", weight: "500" },
  ],
  variable: "--font-dom-loves-mary",
  display: "swap",
});

export const bigBird = localFont({
  src: [{ path: "../../../public/fonts/TAYBigBird.otf", weight: "500" }],
  variable: "--font-big-bird",
  display: "swap",
});
