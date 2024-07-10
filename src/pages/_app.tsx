import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux'
import { store,persistor } from "@/store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from "next-auth/react";
import session from "redux-persist/lib/storage/session";

export default function App({ Component, pageProps:{session}, ...pageProps }: AppProps) {
  return(
  

      <Provider store = {store}>
        <PersistGate persistor ={persistor} loading = {null}>
          <SessionProvider session={session} >
        <div className="bg-gray-300"> <RootLayout>
        <Component {...pageProps}/>
        </RootLayout></div>
        </SessionProvider>
        </PersistGate>
      </Provider>

  );
}
