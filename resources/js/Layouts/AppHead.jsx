import { Head, usePage } from "@inertiajs/react";

export default function AppHead({ title = '', desc = '', image = '' }) {
  const { ziggy } = usePage().props;

  return (
    <Head>
      <title head-key='title'>{title}</title>
      <meta head-key='description' name='description' content={desc} />
      <meta head-key='ogTitle' property='og:title' content={title} />
      <meta head-key='ogDescription' property='og:description' content={desc} />
      <meta head-key='ogUrl' property='og:url' content={ziggy.location} />
      <meta head-key='ogType' property='og:type' content='article' />
      <meta head-key='ogImage' property='og:image' content={image} />
      <meta head-key='ogSiteName' property='og:site_name' content={import.meta.env.VITE_APP_NAME} />

      {/* Twitter */}
      <meta head-key='twitterSite' name='twitter:site' content={import.meta.env.VITE_OGP_TWITTER_SITE} />
      <meta head-key='twitterCard' name='twitter:card' content='summary_large_image' />
      <meta head-key='twitterDomain' name='twitter:domain' content={import.meta.env.VITE_OGP_TWITTER_DOMAIN} />
      <meta head-key='twitterTitle' name='twitter:title' content={title} />
      <meta head-key='twitterImage' name='twitter:image' content={image} />
      <meta head-key='twitterDescription' name='twitter:description' content={desc} />
    </Head>
  );
}
