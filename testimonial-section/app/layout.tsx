import "./globals.css";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

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
