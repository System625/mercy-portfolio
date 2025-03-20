import { Playfair_Display, Roboto } from "next/font/google";
import localFont from 'next/font/local';

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const castellar = localFont({
  src: '../public/fonts/Castellar Regular.ttf',
  variable: '--font-castellar',
  display: 'swap',
}); 