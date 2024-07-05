import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "The Literary Society - BIT Mesra",
  description: "Welcome to the official website of The Literary Society at BIT Mesra, showcasing our activities and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>

      <body className="bg-background text-foreground ">
        <main className="min-h-screen flex flex-col items-center antialiased scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
