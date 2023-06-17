import "./globals.css";
import { Lexend } from "next/font/google";

const font = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Testimonail Section",
  description: "Testimonial Section by Untitled Dev.",
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
