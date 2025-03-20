import type { Metadata } from "next";
import { playfair, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abani Mercy Portfolio",
  description: "UI/UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
