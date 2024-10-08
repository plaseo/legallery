import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "./_components/navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata: Metadata = {
  title: "LeGallery",
  description: "An Awesome Gallery App!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <body className={`${GeistSans.variable} dark`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <NavBar />
              <main className="overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster
              toastOptions={{
                classNames: {
                  toast: "bg-blue-900",
                  title: "text-slate-100",
                  description: "text-slate-100",
                  actionButton: "bg-zinc-400",
                  cancelButton: "bg-orange-400",
                  closeButton: "bg-lime-400",
                },
              }}
            />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
