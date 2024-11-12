"use client";
import "./globals.css";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import { Rajdhani } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const queryClient = new QueryClient();
const rajdhani = Rajdhani({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TetraCryptoPlus</title>
        <meta name="description" content="TetraCryptoPlus is a unique trading platform. You can make real-time transactions whenever and wherever you like. The platform can be accessed not only from a PC but also from a full-service mobile."/>
        <meta name="keywords" content="forex,Trading platform,Online Trading,Cryptocurrency,Trading tools,Web-based trading,Real-time market data" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
          integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`w-full relative ${rajdhani.className}`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            signIn: { baseTheme: dark },
            signUp: { baseTheme: dark },
            layout: {
              logoImageUrl: "/images/logo.png",
            },
          }}
          afterSignOutUrl="/"
          signInFallbackRedirectUrl="/user/dashboard"
          signUpFallbackRedirectUrl="/user/user-data"
          signInForceRedirectUrl="/user/dashboard"
          signUpForceRedirectUrl="/user/user-data"
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ClerkProvider>
        <Script src="https://www.cryptoplustrader.com/assets/global/js/jquery-3.6.0.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/global/js/bootstrap.bundle.min.js" />

        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/lightbox.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/raf-scroll.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/rafcounter.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/owl.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/main.js" />

        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/sfx-widget.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/tv.js" />

        <Script src="/js/index.js" />
      </body>
    </html>
  );
}
