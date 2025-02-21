import Head from "next/head";
import Script from "next/script";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Content Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
      </Head>

      {/* Netlify Identity Widget (loads after page is interactive) */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="afterInteractive"
      />

      {/* Decap CMS script (loads after page is interactive) */}
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />

      {/* Content Area */}
      <div>
        <h1>Decap CMS Admin Panel</h1>
      </div>
    </>
  );
}