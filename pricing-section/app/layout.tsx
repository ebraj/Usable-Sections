import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Pricing Section | Untitled Dev",
  description: "Pricing Section by Untitled Dev.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
