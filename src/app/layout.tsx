import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
