import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coco and Grant",
  description: "Celebrating the wedding of Coco and Grant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
