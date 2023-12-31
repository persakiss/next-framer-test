import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
        <Nav />

        <AnimatePresence
          onExitComplete={onExitComplete}
          initial={false}
          mode="wait"
          
        >
          <Component {...pageProps} />
        </AnimatePresence>
    </>
  );
}
