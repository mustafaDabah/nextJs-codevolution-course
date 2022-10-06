import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "../styles/globals.css";
import Navbar from "@/layout/Navbar";
import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
