import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/Navbar";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto+Slab&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=League+Spartan&family=Playfair+Display:wght@500&family=Roboto+Slab&display=swap"
            rel="stylesheet"
          ></link>
        </>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
