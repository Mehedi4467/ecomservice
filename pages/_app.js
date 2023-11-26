import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import "../styles/globals.css";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbars/Navbar";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className=" trn sticky top-0 z-50 ">
        <Navbar scrollPosition={scrollPosition}></Navbar>
      </div>
      <UserContext>
        <Component {...pageProps} />
      </UserContext>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}
