import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from '@clerk/nextjs'
import { NavBar } from "./_components/navbar";

export const metadata: Metadata = {
  title: "LeGallery",
  description: "An Awesome Gallery App!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${GeistSans.variable} flex flex-col gap-4`}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
