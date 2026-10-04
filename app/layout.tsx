import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "next-server-devtools demo",
  description: "A fresh Next.js app with next-server-devtools installed.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
        <nav className="flex gap-6 border-b border-zinc-200 px-8 py-4 text-sm dark:border-zinc-800">
          <span className="font-semibold">next-server-devtools demo</span>
          <Link href="/" className="hover:underline">
            Waterfall
          </Link>
          <Link href="/errors" className="hover:underline">
            Errors
          </Link>
          <Link href="/logs" className="hover:underline">
            Logs and redaction
          </Link>
        </nav>
        <main className="mx-auto max-w-2xl px-8 py-10">{children}</main>
        {await devtools()}
      </body>
    </html>
  );
}

async function devtools() {
  if (process.env.NODE_ENV === "development") {
    const { DevtoolsPanel } = await import("next-server-devtools/panel");
    return <DevtoolsPanel />;
  }
  return null;
}
