'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "InsuranceDAO | MEV-based",
//   description: "An insurance DAO",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className={`relative &{inter.className}`}>{children}</body>
    </html>
    </Provider>
  );
}
