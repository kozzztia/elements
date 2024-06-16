import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "styles/globals.css";
import favicon from "images/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elements",
  description: "crete next elements",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
