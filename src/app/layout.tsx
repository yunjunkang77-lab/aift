import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "수험생 대나무숲",
  description: "익명 수험생 커뮤니티",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen`}>
        <nav className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-xl text-blue-600">수험생 대나무숲</a>
          </div>
        </nav>
        <main className="max-w-2xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
