import React from "react";
import Head from "next/head";

import ThankYou from "../../components/pages/thank-you";

function FacebookPixel() {
  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '5734609083216885');
            fbq('track', 'Lead');`,
          }}
        ></script>
      </Head>
      <noscript>
        <img
          height="1"
          width="1"
          style={{
            display: "none",
          }}
          src="https://www.facebook.com/tr?id=5734609083216885&ev=PageView&noscript=1"
        />
      </noscript>
    </div>
  );
}

const LifeKeLeadSubmission = () => {
  return (
    <>
      <FacebookPixel />
      <ThankYou />;
    </>
  );
};

export default LifeKeLeadSubmission;
