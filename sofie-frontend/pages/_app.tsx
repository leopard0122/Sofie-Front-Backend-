import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Container from "../layouts/container";

import { wrapper } from "../redux/store";
import "../styles/globals.css";

function GoogleTagManager() {
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSGR88K');`,
          }}
        ></script>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WSGR88K"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </div>
  );
}

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <GoogleTagManager />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default App;
