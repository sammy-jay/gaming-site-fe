"use client";
import "./globals.css";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import { Rajdhani } from "next/font/google";

const queryClient = new QueryClient();
const rajdhani = Rajdhani({
   weight: ['400','500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mizuk | Online Multiplayer Gaming App</title>
        <meta
          name="description"
          content="It is an online multi-player gaming app. Have fun here!"
        />
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
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>

        <Script src="https://www.cryptoplustrader.com/assets/global/js/jquery-3.6.0.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/global/js/bootstrap.bundle.min.js" />

        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/lightbox.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/raf-scroll.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/rafcounter.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/owl.min.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/main.js" />

        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/sfx-widget.js" />
        <Script src="https://www.cryptoplustrader.com/assets/templates/basic/js/tv.js" />



        <Script src="/js/index.js"/>
      </body>
    </html>
  );
}
