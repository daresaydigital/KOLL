import Head from "next/head";
import Script from "next/script";
import styles from "./NetlifyRegistrationWidget.module.css"

export default function NetlifyRegistrationWidget() {
  return (
    <>
      <Head>
        <title>Content Manager</title>
      </Head>

      {/* Netlify Identity Widget (loads after page is interactive) */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="afterInteractive"
      />

      {/* Content Area */}
      <body>
        <div data-netlify-identity-menu>
            <p className={styles.decapTitle}>Decap CMS Portal</p>
        </div>
      </body>
    </>
  );
}