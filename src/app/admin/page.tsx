import Head from "next/head";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Content Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        {/* Netlify Identity Widget */}
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
    </>
  );
}
