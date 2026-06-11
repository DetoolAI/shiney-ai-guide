import { Helmet } from "react-helmet-async";

const SITE = "https://detool.ai";
const DEFAULT_IMAGE = `${SITE}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  jsonLd?: object | object[];
}

export default function SEO({ title, description, path, ogType = "website", jsonLd }: SEOProps) {
  const url = `${SITE}${path}`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      {jsonLdArray.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
}
