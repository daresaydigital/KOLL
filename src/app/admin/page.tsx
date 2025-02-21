import Head from "next/head";
import Script from "next/script";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Content Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </Head>

      {/* Netlify Identity Widget (loads after page is interactive) */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="afterInteractive"
      />

      <Script src="/cms-previews/cms.mjs" strategy="afterInteractive" type="module" crossOrigin="anonymous"/>

      <p>Heey</p>
      <div id="cms"></div>
    </>
  );
}