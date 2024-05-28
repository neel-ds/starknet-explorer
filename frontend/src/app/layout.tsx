import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transactions | Voyager",
  description: "Starknet Blockchain Explorer",
  icons: "/voyager.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121313]">{children}</body>
    </html>
  );
}
