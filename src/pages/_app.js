import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "animate.css";
import NavBar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
