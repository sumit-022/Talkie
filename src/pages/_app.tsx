import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initializeSocket } from "@/config/socket.io.config";
import { AuthProvider } from "@/components/auth-context";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
