import "./globals.css";
import type { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/header";
import Footer from "./components/footer/Index";

export const metadata: Metadata = {
  title: "Appsumo-clone",
  description: "Browse software at very cheap price",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Roboto, sans-serif" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
