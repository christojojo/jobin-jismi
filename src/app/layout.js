import CommonLayout from "@/layout/commonLayout";
import { Inter, DM_Sans } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "block",
  preload: true,
  variable: '--font-inter',
});

const dmSans = DM_Sans({
  weight: ['400', '500','600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-dm-sans',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
