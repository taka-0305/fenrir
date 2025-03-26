import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/layouts/footer/footer";
import { ShopProvider } from "@/context/shopContext";
import ClientWrapper from "@/components/common/clientWrapper";
import "../styles/destyle.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RestaurantSearcher｜現在地からお店検索",
  description: "現在地とキーワードで周辺のお店を検索できます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientWrapper>
          <ShopProvider>{children}</ShopProvider>
        </ClientWrapper>

        <Footer />
      </body>
    </html>
  );
}
