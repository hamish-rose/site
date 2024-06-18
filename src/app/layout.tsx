
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamish Rose",
  description: "Hamish Rose's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-white')}>
        <div className="bg-white py-24 sm:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hamish Rose</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">Software Developer</p>
              <a className="text-sm" href="mailto:hamishr@protonmail.com">hamishr@protonmail.com</a>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}