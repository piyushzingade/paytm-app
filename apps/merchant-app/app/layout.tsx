import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JSX } from "react";
import { AppbarMerchant } from "../components/AppbarMerchant";
import { Providers } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merchant Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-white">
            {/* <AppbarMerchant /> */}
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
