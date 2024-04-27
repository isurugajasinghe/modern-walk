import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ProductProvider } from "../context/ProductContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}
